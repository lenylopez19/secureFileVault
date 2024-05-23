//DBENGINES
import mysql from 'mysql2/promise'
//DBCONFIG
import dbConfig from '../../config/dbConfig.js'
//HELPERS
import { encryptionService } from '../../helpers/encryption/encryptionService.js'
import handleDataBaseError from '../../helpers/errorHandlers/dbErrorHandler.js'

const connection = await mysql.createConnection(dbConfig)

/**
 * Model class for managing user-related database operations.
 */
export class userModel {

    /**
    * Compares a plain password with a hashed password.
    * @param {string} plainPassword - The plain password to compare.
    * @param {string} hashedPassword - The hashed password for comparison.
    * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the passwords match.
    */
    static async comparePasswords(plainPassword, hashedPassword) {
        return await encryptionService.comparePasswords(plainPassword, hashedPassword)
    }

    /**
     * Retrieves a user by email.
     * @param {string} email - The email of the user to retrieve.
     * @returns {Promise<Array<object>>} - A promise that resolves to an array of user data.
     */
    static async getByEmail(email) {
        const queryResult = await connection.query(
            'SELECT users.*, BIN_TO_UUID(id) as id FROM users WHERE email = ?', [email]
        )
        return queryResult[0]
    }


    /**
    * Retrieves a user by username.
    * @param {string} username - The username of the user to retrieve.
    * @returns {Promise<Array<object>>} - A promise that resolves to an array of user data.
    */
    static async getByUsername(username) {
        const queryResult = await connection.query(
            'SELECT users.*, BIN_TO_UUID(id) as id FROM users WHERE username = ?', [username]
        )
        return queryResult[0]
    }

    /**
   * Retrieves a user by UUID.
   * @param {string} uuid - The UUID of the user to retrieve.
   * @returns {Promise<Array<object>>} - A promise that resolves to an array of user data.
   */
    static async getByUuid(uuid) {
        const queryResult = await connection.query(
            'SELECT users.*, BIN_TO_UUID(id) as id FROM users WHERE id = UUID_TO_BIN(?)', [uuid]
        )
        return queryResult[0]
    }



    /**
    * Creates a new user.
    * @param {object} input - The user input data.
    * @returns {Promise<Array<object>>} - A promise that resolves to an array of user data for the created user.
    * @throws {Error} - Throws an error if there is an issue during user creation.
    */
    static async create({ input }) {

        try {
            const [uuidResult] = await connection.query('SELECT UUID() uuid;')
            const [{ uuid }] = uuidResult

            const {
                name,
                lastName,
                phoneNumber,
                email,
                username,
                password,
            } = input
            const hashedPassword = await encryptionService.createHash(password, 10)

            await connection.query(
                `INSERT INTO users(id,name, lastName, phoneNumber, email, username, passwordHash) VALUES(UUID_TO_BIN("${uuid}"),?,?,?,?,?,?)`,
                [name, lastName, phoneNumber, email.toLowerCase(), username, hashedPassword]
            )

            return await userModel.getByUuid(uuid)

        } catch (error) {
            throw handleDataBaseError(error)
        }
    }
}