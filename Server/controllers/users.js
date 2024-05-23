//HELPERS
import { createError } from "../helpers/errorHandlers/createError.js";
import validateUser from "../schemas/usersSchema.js";
import { signTokenWith } from "../helpers/jwt/signToken.js";
//MODELS
import { userModel } from "../model/mysql/user.js";

/**
 * Controller for handling user-related operations.
 */
export class UserController {

    /**
     * Login user.
     * @param {object} req - The request object.
     * @param {object} req.body - The request body.
     * @param {string} req.body.username - The username of the user.
     * @param {string} req.body.email - The email of the user.
     * @param {string} req.body.password - The password of the user.
     * @param {object} res - The response object.
     * @param {function} next - The next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the response is sent.
     */
    static async login(req, res, next) {

        const error = createError(401, 'Wrong username or password')

        const { username, email, password } = req.body //consider: MAKE ZOD PARTIAL VALIDATION
        if ((!username || !email) && !password) return next(error)

        let user
        if (username) [user] = await userModel.getByUsername(username)
        if (email) [user] = await userModel.getByEmail(email)
        if (!user) return next(error)

        const isPasswordCorrect = await userModel.comparePasswords(password, user.passwordHash)
        if (!isPasswordCorrect) return next(error)

        const accessToken = signTokenWith({ userId: user.id, email: user.email })
        return res.status(200).json({ accessToken, user })
    }


    /**
     * Get user by email.
     * @param {object} req - The request object.
     * @param {object} req.query - The query parameters.
     * @param {string} req.query.email - The email of the user to retrieve.
     * @param {object} res - The response object.
     * @returns {Promise<void>} - A promise that resolves when the response is sent.
     */
    static async getByEmail(req, res) {
        //consider:
        //make the partial validation with zod
        //adapt to new error handling
        const { email } = req.query
        const user = await userModel.getByEmail(email)
        if (!user.length) {
            return res.status(404).json({ message: 'user not found' })
        }
        res.status(200).json(user)

    }


    /**
    * Create a new user.
    * @param {object} req - The request object.
    * @param {object} req.body - The request body.
    * @param {object} res - The response object.
    * @param {function} next - The next middleware function.
    * @returns {Promise<void>} - A promise that resolves when the response is sent.
    */
    static async create(req, res, next) {

        const result = await validateUser(req.body)
        if (!result.success) {
            const validationError = createError(400, result.error.issues)
            return next(validationError)
        }
        try {
            const [newUser] = await userModel.create({ input: result.data })
            res.status(201).json({ ...newUser, passwordHash: null })
        } catch (error) {
            return next(error)
        }
    }
}