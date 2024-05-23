//3RD PARTY
import z from 'zod'

const userSchema = z.object({
    name: z.string({
        invalid_type_error: 'Name must be a string',
        required_error: 'Name is required '
    }),
    lastName: z.string({
        invalid_type_error: 'lastName must be a string',
        required_error: 'lastName is required '
    }),
    email: z.string({
        invalid_type_error: 'email must be a string',
        required_error: 'email is required '
    }).email(),
    phoneNumber: z.string({
        invalid_type_error: 'phone number must be a string',
        required_error: 'phone number is required '
    }),
    username: z.string({
        invalid_type_error: 'username must be a string',
        required_error: 'username is required'
    }),
    password: z.string({
        invalid_type_error: 'password must be a string',
        required_error: 'password is required'
    }).min(8, "pasword must be 8 characters or more.")
        .regex(/[a-z]/, "password must have atleast 1 lowercase letter")
        .regex(/[A-Z]/, "password must have atleast 1 uppercar letter")
        .regex(/[0-9]/, "password must have atleast 1 number")
})

/**
 * Validates user input data against the user schema.
 * @param {object} object - The user input data object to validate.
 * @returns {Promise<{ success: boolean}>} - A promise that resolves to an object indicating validation success or failure.
 */
async function validateUser(object) {
    return await userSchema.safeParseAsync(object)
}

export default validateUser