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
* Resgister a user, sends the userData to the server 
* @async
* @function 
* @param {object} userData - and object wiht the users details to register, tipically name,lastname,phone number, email, password, username
* @returns {Promise<Object>} The response data from the server, usually containing user information.
* @throws {Error} an error with the error message if the register fails.
*/
export default async function registerUser(userData) {
    try {
        const response = await apiClient.post('/users', userData)
        return response

    } catch (error) {
        if (error.response) throw error.response
        else if (error.request) throw error.request._response
        throw error.message
    }

}