//CORE
import fs from 'fs'

/**
 * Ensures that the specified destination directory exists. If it does not exist, it will be created recursively.
 * @param {string} destination - The path to the destination directory.
 */
export function ensureDestination(destination) {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true })
    }
}