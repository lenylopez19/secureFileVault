//CONSTANT
import { BASE_URL } from '../constant/API'
//3RD PARTY
import axios from 'axios'


/**
 * Fetches the user's files from the server using the provided user token for authorization.
 * @async
 * @function
 * @param {string} userToken - The user's authorization token.
 * @returns {Promise<Array>} The array of user files.
 * @throws {Error} Throws an error if the user token is not provided or if the request fails.
 */
export default async function getUserFiles(userToken) {

    if (!userToken) throw error = new Error("Internal Error")

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`
    }

    try {
        const response = await axios.get(`${BASE_URL}/file`, { headers })
        return response.data.files
    } catch (error) {
        if (error.response) throw error.response
        else if (error.request) throw error.request._response
        throw error.message
    }
}