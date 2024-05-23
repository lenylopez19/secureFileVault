//CONSTANT
import { BASE_URL } from '../constant/API'
//3RD PARTY
import axios from 'axios'


/**
 * Fetches files by filename from the server using the provided user token for authorization.
 * @async
 * @function
 * @param {string} filename - The name of the file to fetch.
 * @param {string} userToken - The user's authorization token.
 * @returns {Promise<Object>} The data of the fetched files.
 * @throws {Error} Throws an error if the user token is not provided or if the request fails.
 */
export default async function getFilesByName(filename, userToken) {

    if (!userToken) throw error = new Error("Internal Error")

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`
    }

    try {
        const response = await axios.get(`${BASE_URL}/file/${filename}`, { headers })
        return response.data
    } catch (error) {
        if (error.response) throw error.response
        else if (error.request) throw error.request._response
        throw error.message
    }
}