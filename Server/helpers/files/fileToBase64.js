//CORE
import fs from 'fs'

/**
 * Reads a file from the specified filepath and converts it to a base64 encoded string.
 * @param {string} filepath - The path to the file.
 * @returns {string} - The base64 encoded string representing the file.
 */
export function fileToBase64(filepath) {
    const fileData = fs.readFileSync(filepath)
    return Buffer.from(fileData, 'binary').toString('base64')
}

/**
 * Converts a base64 encoded string to a file and writes it to the specified output path.
 * @param {string} base64Data - The base64 encoded string representing the file.
 * @param {string} outputPath - The path where the file will be written.
 */
export function base64ToFile(base64Data, outputPath) {
    const fileData = Buffer.from(base64Data, 'base64')
    fs.writeFileSync(outputPath, fileData, 'binary')
}