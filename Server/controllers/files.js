import fs from "fs"
//MODELS
import { fileModel } from "../model/mysql/file.js"

export class fileController {

    /**
     * Upload a file.
     * @param {object} req - The request object.
     * @param {object} req.file - The uploaded file.
     * @param {object} req.user - The authenticated user.
     * @param {number} req.user.userId - The ID of the authenticated user.
     * @param {object} res - The response object.
     */
    static async uploadFile(req, res, next) {
        try {
            const [file] = await fileModel.upload(req.file, req.user.userId)
            res.status(201).json({ file })
        } catch (error) { next(error) }
    }

    /**
    * Send a file to the user as a download, then deletes the file
    * @param {object} req - The request object.
    * @param {object} req.params - The request parameters.
    * @param {string} req.params.fileId - The ID of the file to download.
    * @param {object} res - The response object.
    */
    static async download(req, res, next) {
        try {
            const file = await fileModel.download(req.params.fileId, req.user.userId)
            res.status(200).download(file, () => {
                fs.unlinkSync(file)
            })
        } catch (error) { next(error) }
    }

    /**
    * Get all files for the authenticated user.
    * @param {object} req - The request object.
    * @param {object} req.user - The authenticated user.
    * @param {number} req.user.userId - The ID of the authenticated user.
    * @param {object} res - The response object.
    */
    static async getAll(req, res, next) {
        try {
            const files = await fileModel.getAll(req.user.userId)
            res.status(200).json({ files })
        } catch (error) { next(error) }
    }

    /**
     * Get files by name for the authenticated user.
     * @param {object} req - The request object.
     * @param {object} req.params - The request parameters.
     * @param {string} req.params.name - The name of the files to retrieve.
     * @param {object} req.user - The authenticated user.
     * @param {number} req.user.userId - The ID of the authenticated user.
     * @param {object} res - The response object.
     */
    static async getByName(req, res, next) {
        try {
            const { name } = req.params
            const files = await fileModel.getByName(name, req.user.userId)
            if (!files.length) return res.status(404).json({ message: 'file not found' })
            res.status(200).json(files)
        } catch (error) { next(error) }
    }
}