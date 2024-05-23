//CORE
import fs from 'fs'

/**
 * Saves a file locally with the provided content.
 * @param {string} destinationAndName - The destination path and filename where the file will be saved.
 * @param {string} content - The content of the file to be saved, provided as a base64 encoded string.
 * @returns {Promise<boolean>} - A promise that resolves to true if the file is saved successfully, otherwise rejects with an error.
 */
export async function saveFilelocal(destinationAndName, content) {
    const buffer = Buffer.from(content, 'base64')
    fs.writeFile(destinationAndName, content, (error) => {
        if (error) throw error
        return true
    })
}