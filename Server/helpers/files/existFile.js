/**
 * Checks if files exist in the request object.
 * @param {object} req - The request object.
 * @returns {boolean} - Returns true if files exist in the request, otherwise returns false.
 */
export function existfile(req) {
    return req.files || Object.keys(req.files).length === 0
}