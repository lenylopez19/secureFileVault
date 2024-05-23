/**
 * Error messages used throughout the application.
 * @namespace ERROR_MSG
 */
export const ERROR_MSG = {
    /**
     * Generic error messages.
     * @namespace GENERIC
     */
    GENERIC: {
        EMPTY: 'can\'t be empty',
        NO_NUMBERS: 'Can\'t contain numbers',
        NO_SPECIAL_CHARACTER: 'Cant\'t contain special characters',
        NO_SPACES: 'Can\'t contain spaces',
        INVALID: 'is invalid'
    },
    /**
     * Error messages related to name fields.
     * @namespace NAME
     */
    NAME: {
        // Placeholder for potential special name error handling messages
    },
    /**
     * Error messages related to last name fields.
     * @namespace LAST_NAME
     */
    LAST_NAME: {
        // Placeholder for potential special last name error handling messages
    },
    /**
     * Error messages related to phone number fields.
     * @namespace PHONE
     */
    PHONE: {
        // Placeholder for potential special phone number error handling messages
    },
    /**
     * Error messages related to email fields.
     * @namespace EMAIL
     */
    EMAIL: {
        EMPTY: 'Must provide an email',
        VALID: 'Must be valid'
    },
    /**
     * Error messages related to username fields.
     * @namespace USERNAME
     */
    USERNAME: {
        TOO_SHORT: 'Must be at least 6 characters long',
        TOO_LONG: 'can\'t contain more than 20 characters',
    },
    /**
     * Error messages related to password fields.
     * @namespace PASSWORD
     */
    PASSWORD: {
        TOO_SHORT: 'Must be at least 8 characters long',
        NEED_UPPERCASE: 'Must have uppercase letters',
        NEED_LOWERCASE: 'Must have lowercase letters',
        NEED_NUMBER: 'Must have at least 1 number',
        EMPTY: 'Must provide a password'
    },
    /**
     * Error messages related to confirm password fields.
     * @namespace CONFIRM_PASSWORD
     */
    CONFIRM_PASSWORD: {
        DIFFERENT: 'doesn\'t match'
    }
};
