//CORE
import mysql from 'mysql2/promise'
import fs from 'fs'
import path from 'path'
//CONFIG
import dbConfig from '../../config/dbConfig.js'
//HELPERS
import handleDataBaseError from '../../helpers/errorHandlers/dbErrorHandler.js'
import { fileToBase64, base64ToFile } from "../../helpers/files/fileToBase64.js"
import { createError } from '../../helpers/errorHandlers/createError.js'
import { encryptionService } from '../../helpers/encryption/encryptionService.js'
import { saveFilelocal } from "../../helpers/files/saveFileLocal.js"
import { createAndPostBlock } from '../../helpers/tangleHandler/createAndPostBlock.cjs'
import { fetchBlock } from '../../helpers/tangleHandler/fetchBlock.cjs'

const connection = await mysql.createConnection(dbConfig)

/**
 * model class for managing file-related database operations.
 */
export class fileModel {
    /**
     * Generates a UUID.
     * @returns {Promise<string>} - A promise that resolves to the generated UUID.
     */
    static async genUUID() {
        try {
            const [uuidResult] = await connection.query('SELECT UUID() uuid;')
            const [{ uuid }] = uuidResult
            return uuid
        } catch (error) {
            throw handleDataBaseError(error)
        }
    }

    /**
     * Retrieves file metadata by UUID.
     * @param {string} uuid - The UUID of the file.
     * @returns {Promise<object>} - A promise that resolves to the file metadata.
     */
    static async getById(fileId, userId) {
        try {
            const queryResult = await connection.query(`SELECT BIN_TO_UUID(user_id) AS user_id, BIN_TO_UUID(id) AS id, url, block_id,filename,mimetype,size,uploaded_at FROM fileMetadata WHERE ID = UUID_TO_BIN('${fileId}') AND user_id = UUID_TO_BIN('${userId}') AND isActive = 1`)
            return queryResult[0]
        } catch (error) {
            throw handleDataBaseError(error)
        }
    }


    /**
     * Retrieves files by name and user ID.
     * @param {string} name - The name of the file.
     * @param {string} userId - The ID of the user.
     * @returns {Promise<Array<object>>} - A promise that resolves to an array of file metadata.
     */
    static async getByName(name, userId) {
        try {
            const queryResult = await connection.query(`SELECT BIN_TO_UUID(id) as id,filename,mimetype,size,uploaded_at FROM fileMetadata WHERE user_id = UUID_TO_BIN('${userId}') AND filename = '${name}' ORDER BY uploaded_at DESC ;`)
            return queryResult[0]
        } catch (error) {
            throw handleDataBaseError(error)
        }
    }



    /**
    * Retrieves all files by user ID.
    * @param {string} userId - The ID of the user.
    * @returns {Promise<Array<object>>} - A promise that resolves to an array of file metadata.
    */
    static async getAll(userId) {
        try {
            const queryResult = await connection.query(`SELECT filename,mimetype,size, uploaded_at, BIN_TO_UUID(id) as id FROM fileMetadata WHERE user_id = UUID_TO_BIN('${userId}');`)
            return queryResult[0]
        } catch (error) {
            throw handleDataBaseError(error)
        }
    }


    /**
    * Downloads a file.
    * @param {string} fileId - The ID of the file to download.
    * @returns {Promise<string>} - A promise that resolves to the file path after downloading.
    * @throws {Error} - Throws an error if the file is altered or if there is an error during the download process.
    */
    static async download(fileId, userId) {
        const [file] = await this.getById(fileId, userId)
        if (!file || !fs.existsSync(file.url)) throw createError(404, 'Some parts of the file are missing and cannot be assembled back. This could be due to network issues or problems with the file server.')

        const block = await fetchBlock(file.block_id)
        if (!block) return createError('500', 'error fetching block')

        const payload = JSON.parse(block.data)
        const incompleteBase64 = fs.readFileSync(file.url, 'utf8')
        const reconstructedBase64 = payload.key64 + incompleteBase64

        const outputPath = path.join(`storage/`, file.user_id, file.filename)

        base64ToFile(reconstructedBase64, outputPath)
        encryptionService.decryptFile(outputPath, outputPath, payload.key)

        const isOriginal = encryptionService.verifyHash(outputPath, payload.hash)
        if (!isOriginal) throw createError(422, 'altered file')
        return outputPath

    }


    /**
    * Uploads a file.
    * @param {Express.Multer.File} file - The uploaded file object.
    * @param {string} userId - The ID of the user uploading the file.
    * @returns {Promise<Array<object>>} - A promise that resolves to an array of file metadata after upload.
    */
    static async upload(file, userId) {

        //TODO: CREATE A DECONSTRUCT-FILE HELPER FUNCTION
        const uuid = await this.genUUID()
        const filePath = file.path

        const fileHash = await encryptionService.hashFile(filePath)
        const ivKey = encryptionService.encryptFile(filePath, filePath)

        const base64 = fileToBase64(filePath) // add this function to the encryptionService file
        const base64Key = base64.substring(0, 10)
        const rest64 = base64.substring(10)
        const rest64FilePath = path.join(file.destination, `${uuid}.txt`)

        await saveFilelocal(rest64FilePath, rest64)

        const blockData = {
            key: ivKey,
            hash: fileHash,
            key64: base64Key
        }
        const blockId = await createAndPostBlock(process.env.TAG, JSON.stringify(blockData))
        if (!blockId) {
            fs.unlinkSync(rest64FilePath)
            throw createError(500, 'Error posting to tangle network')
        }

        try {
            await connection.query(
                `INSERT INTO fileMetadata(id, user_id, block_id, filename, mimetype, size, url) VALUES(UUID_TO_BIN("${uuid}"),UUID_TO_BIN("${userId}"),?,?,?,?,?)`,
                [blockId, file.originalname, file.mimetype, file.size, rest64FilePath]
            )
        } catch (error) {
            throw handleDataBaseError(error)
        }

        fs.unlink(filePath, (error) => {
            if (error) throw createError(500, 'server Storage Error')
        })

        return await this.getByName(file.originalname, userId)

    }
}