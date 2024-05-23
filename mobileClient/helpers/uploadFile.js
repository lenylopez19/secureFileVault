//CORE
import { Alert } from "react-native";
//CONSTANT
import { BASE_URL } from "../constant/API";
//3RD PARTY
import axios from "axios";


/**
 * Uploads a file to the server.
 * 
 * @async
 * @function
 * @param {Object} file - The file to upload.
 * @param {string} userToken - The user's authorization token.
 * @param {boolean} isIos - Indicates whether the upload is being performed on iOS (optional).
 * @returns {Promise<Object>} The response from the server after the upload.
 * @throws {Error} Throws an error if the user token is not provided or if the upload fails.
 */
export async function uploadFile(file, userToken, isIos) {
    //check if on android is working fine, if so remove the isIos state
    if (!userToken) throw error = new Error("Internal Error")

    const formData = new FormData();
    formData.append('file', {
        uri: file.uri,
        name: file.name,
        type: file.mimeType
    })

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`
    }

    try {
        const response = await axios.post(`${BASE_URL}/file`, formData, { headers })
        return response
    } catch (error) {
        Alert.alert('Error', `there was a problem uploading the file, try again later. ${error}}`)
    }

}

