//HELPERS
import { decodeToken } from '../helpers/jwt/decodeToken.js'
import { createError } from '../helpers/errorHandlers/createError.js'

/**
 * Middleware for authenticating user tokens.
 * Extracts and decodes a JWT token from the authorization header.
 * If the token is missing or invalid, throws a 401 Unauthorized error.
 */
export default function authMiddleware(req, res, next) {
    const rawToken = req.headers.authorization?.split(' ')[1]
    if (!rawToken) throw createError(401, 'Unauthorized')
    try {
        const decodedToken = decodeToken(rawToken)
        req.user = decodedToken
        next()
    } catch (error) { throw createError(401, 'Unauthorized') }
}