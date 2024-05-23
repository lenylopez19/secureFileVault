//3rd party
import jwt from 'jsonwebtoken';

/**
 * Signs a JWT token with the provided payload using the JWT_SECRET.
 * @param {object} tokenPayload - The payload to be included in the token.
 * @returns {string} - The signed JWT token.
 */
export function signTokenWith(tokenPayload) {
    return jwt.sign(tokenPayload, process.env.JWT_SECRET)
}