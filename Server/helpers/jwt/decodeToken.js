//3RD PARTY
import jwt from 'jsonwebtoken'

/**
 * Decode a JWT token and return its payload.
 * @param {string} token - The JWT token to decode.
 * @returns {object} - The payload of the decoded token.
 * @throws {Error} - Throws an error if the token is invalid or if the decoding process fails.
 */
export function decodeToken(token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] })
    return decodedToken
}