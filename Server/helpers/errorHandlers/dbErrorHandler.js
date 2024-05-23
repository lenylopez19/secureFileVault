
/**
 * Handles specific database errors and returns a custom error object with appropriate status and message.
 * @param {object} error - The database error object.
 * @param {string} error.code - The error code.
 * @param {string} error.sqlMessage - The SQL error message.
 * @returns {Error} - The custom error object with a status and message.
 */
export default function handleDataBaseError(error) {

    const handledError = new Error()
    switch (error.code) {
        case 'ER_DUP_ENTRY':
            const isEmailError = error.sqlMessage.includes('email')
            const isUsernameError = error.sqlMessage.includes('username')
            handledError.status = 409
            handledError.message = isEmailError ? 'Email already exists' : isUsernameError ? 'Username already exist' : 'Duplicated Entry'
            break

        case 'ER_WRONG_VALUE_FOR_TYPE':
            if (error.sqlMessage.includes('uuid')) {
                handledError.status = 400
                handledError.message = "bad request invalid uuid format"
            }
            break

        case 'ER_ACCESS_DENIED_ERROR':
        case 'ER_BAD_DB_ERROR':
        case 'ER_CON_COUNT_ERROR':
            handledError.status = 500
            handledError.message = 'Connection error. please try again later.'
            break

        default:
            handledError.status = 500
            handledError.message = 'Internal server error'
            break
    }

    return handledError
}