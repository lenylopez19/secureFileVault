//CONSTANT
import { BASE_URL } from '../constant/API'
//3RD PARTY
import axios from 'axios'

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

/**
 * Logs in a user by sending user data to the server.
 * 
 * @async
 * @function
 * @param {Object} userData - The user's login data, typically containing username and password.
 * @returns {Promise<Object>} The response data from the server, usually including user information and a authentication token.
 * @throws {Error} Throws an error if the request fails, with details about the failure.
 */
export default async function loginUser(userData) {
    try {
        const response = await apiClient.post('/users/login', userData)
        return response.data
    } catch (error) {
        if (error.response) throw error.response
        else if (error.request) throw error.request._response
        throw error.message
    }
}