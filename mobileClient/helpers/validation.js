//CONSTANT
import REGEX from '../constant/REGEX';
import { ERROR_MSG } from '../constant/ERROR_MSG';

/**
 * @function
 * @param {String} email - The email address to validate
 * @returns {String} - An error message or and empty string if theres no error.
 */
export function validateEmail(email) {
    if (email.includes(" ")) return ERROR_MSG.GENERIC.NO_SPACES
    if (email === '') return ERROR_MSG.GENERIC.EMPTY
    return !REGEX.EMAIL.test(email)
        ? ERROR_MSG.GENERIC.INVALID
        : ''
}

/**
 * @function
 * @param {String} username - The username to validate
 * @returns {String} - An error message or and empty string if theres no error.
 */
export function validateUsername(username) {
    if (username.length < 6) return ERROR_MSG.USERNAME.TOO_SHORT
    if (username.length > 20) return ERROR_MSG.USERNAME.TOO_LONG
    if (username.includes(" ")) return ERROR_MSG.GENERIC.NO_SPACES
    return !REGEX.USERNAME.test(username)
        ? ERROR_MSG.GENERIC.INVALID
        : ''
}

/**
 * Validates a password.
 * 
 * @function
 * @param {string} password - The password to validate.
 * @returns {string} An error message if the password is invalid, or an empty string if the password is valid.
 */
export function validatePassword(password) {
    if (password.length < 8) return ERROR_MSG.PASSWORD.TOO_SHORT
    if (!REGEX.HAS_NUMBER.test(password)) return ERROR_MSG.PASSWORD.NEED_NUMBER
    if (!REGEX.HAS_UPPERCASE.test(password)) return ERROR_MSG.PASSWORD.NEED_UPPERCASE
    if (!REGEX.HAS_LOWERCASE.test(password)) return ERROR_MSG.PASSWORD.NEED_LOWERCASE
    return ''
}

/**
 * Validates that the confirmation password matches the original password.
 * 
 * @function
 * @param {string} password - The original password.
 * @param {string} confirmPassword - The confirmation password to validate.
 * @returns {string} An error message if the passwords do not match, or an empty string if they do.
 */
export function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword === '') return ERROR_MSG.GENERIC.EMPTY
    return password !== confirmPassword
        ? ERROR_MSG.CONFIRM_PASSWORD.DIFFERENT
        : ''
}

/**
 * Validates a name.
 * 
 * @function
 * @param {string} name - The name to validate.
 * @returns {string} An error message if the name is invalid, or an empty string if the name is valid.
 */
export function validateName(name) {
    if (name === "") return ERROR_MSG.GENERIC.EMPTY
    if (REGEX.HAS_NUMBER.test(name)) return ERROR_MSG.GENERIC.NO_NUMBERS
    if (REGEX.HAS_SPECIAL_CHARACTER.test(name)) return ERROR_MSG.GENERIC.NO_SPECIAL_CHARACTER

    return !REGEX.NAME.test(name)
        ? ERROR_MSG.GENERIC.INVALID
        : ''

}

/**
 * Validates a last name.
 * 
 * @function
 * @param {string} lastName - The last name to validate.
 * @returns {string} An error message if the last name is invalid, or an empty string if the last name is valid.
 */
export function validateLastName(lastName) {
    if (lastName === "") return ERROR_MSG.GENERIC.EMPTY
    if (REGEX.HAS_NUMBER.test(lastName)) return ERROR_MSG.GENERIC.NO_NUMBERS
    if (REGEX.HAS_SPECIAL_CHARACTER.test(lastName)) return ERROR_MSG.GENERIC.NO_SPECIAL_CHARACTER
    return !REGEX.LAST_NAME.test(lastName)
        ? ERROR_MSG.GENERIC.INVALID
        : ''
}

/**
 * Validates a phone number.
 * 
 * @function
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {string} An error message if the phone number is invalid, or an empty string if the phone number is valid.
 */
export function validatePhone(phoneNumber) {
    if (phoneNumber === '') return ERROR_MSG.GENERIC.EMPTY
    return !REGEX.PHONE.test(phoneNumber)
        ? ERROR_MSG.GENERIC.INVALID
        : ''

}