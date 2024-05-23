//HELPERS
import { decodeToken } from "./decodeToken.js";

/**
 * Extracts the user ID from a JWT token.
 * @param {string} authHeader - The authorization header containing the JWT token.
 * @returns {string} - The user ID extracted from the JWT token.
 * @throws {Error} - Throws an error if the token is invalid or if the decoding process fails.
 */
export default function getUserIdFromToken(authHeader) {
    const rawToken = authHeader.split(" ")[1]
    const decodedToken = decodeToken(rawToken)
    return decodedToken.userId
}