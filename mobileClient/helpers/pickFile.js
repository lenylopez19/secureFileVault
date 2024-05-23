//3RD PARTY
import * as DocumentPicker from 'expo-document-picker'


/**
 * Opens a document picker for the user to select a file.
 * 
 * @async
 * @function
 * @returns {Promise<Object>} The selected file data.
 * @throws {Error} Throws an error if the document picking process fails.
 */
export async function pickFile() {
    try {
        const docRes = await DocumentPicker.getDocumentAsync({
            type: '*/*'
        })
        return docRes
    } catch (error) { throw error }
}