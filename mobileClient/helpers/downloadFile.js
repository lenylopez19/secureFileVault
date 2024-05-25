//core
import { Alert } from "react-native"
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing';
//Constant
import { BASE_URL } from "../constant/API"
//CUSTOM
import { getFileHeader } from "./getFileHeader"
import { extractFilenameFromHeader } from "./extractFilenameFromHeader"


/**
 * Function to download a file from the server and share it.
 * 
 * @param {string} fileId - The ID of the file to be downloaded.
 * @param {string} userToken - The user's authentication token.
 * @throws Will throw an error if userToken is not provided or if there is an error during download.
 */
export async function downloadFile(fileId, userToken) {
    //check if on android is working fine, if so remove the isIos state
    if (!userToken) throw error = new Error("Internal Error")

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`
    }
    const url = `${BASE_URL}/file/download/${fileId}`

    try {
        const fileHeader = await getFileHeader(url, headers)

        const fileName = extractFilenameFromHeader(fileHeader)
        const fileUri = FileSystem.documentDirectory + fileName

        const donwloadObject = FileSystem.createDownloadResumable(url, fileUri, { headers })

        try {
            const { uri, status, headers } = await donwloadObject.downloadAsync()
            if (status != 200) return Alert.alert('Error', 'Parts of the file are missing and cannot be assembled back. This could be due to network issues or problems with the server.')
            Sharing.shareAsync(uri)
        } catch (error) { throw error }

    } catch (error) {
        console.log(error)
        Alert.alert('Error', `error downloading the file ${error}`)
    }

}

