/**
 * Creates a custom error object with a specified status code and message.
 * @param {number} errorCode - The HTTP status code for the error.
 * @param {string} errorMsj - The error message.
 * @returns {Error} - The custom error object.
 */
export function createError(errorCode, errorMsj) {
    const newError = new Error()
    newError.status = errorCode
    newError.message = errorMsj
    return newError
}