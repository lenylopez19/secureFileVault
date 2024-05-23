/**
 * Regular expressions used for input validation throughout the application.
 * @namespace REGEX
 */
const REGEX = {
    /** Regular expression for validating names (excluding numbers and special characters). */
    NAME: /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    /** Regular expression for validating last names (excluding numbers and special characters). */
    LAST_NAME: /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    /** Regular expression for validating email addresses. */
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    /** Regular expression for validating phone numbers (exactly 10 digits). */
    PHONE: /^[0-9]{10}$/,
    /** Regular expression for validating usernames (alphanumeric with optional periods and underscores, 6-20 characters long, no consecutive periods or underscores). */
    USERNAME: /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
    /** Regular expression for validating passwords (at least 8 characters long, containing at least one lowercase letter). */
    PASSWORD: /^(?=.*[a-z])[a-zA-Z\d!@#$%^&*().,]{8,}$/,
    /** Regular expression for detecting presence of a number in a string. */
    HAS_NUMBER: /\d/,
    /** Regular expression for detecting presence of an uppercase letter in a string. */
    HAS_UPPERCASE: /[A-Z]/,
    /** Regular expression for detecting presence of a lowercase letter in a string. */
    HAS_LOWERCASE: /[a-z]/,
    /** Regular expression for detecting presence of a special character in a string. */
    HAS_SPECIAL_CHARACTER: /[^a-zA-Z0-9 ]/
};

export default REGEX