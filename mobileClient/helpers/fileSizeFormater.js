
const KB = 1024
const MB = KB * 1024
const GB = MB * 1024

/**
 * Formats a file size in bytes into a human-readable string with appropriate units (bytes, KB, MB, GB).
 * @function
 * @param {number} sizeInBytes - The size of the file in bytes.
 * @returns {string} The formatted file size as a string with appropriate units.
 */
export function formatFileSize(sizeInBytes) {

    if (sizeInBytes >= GB) {
        return (sizeInBytes / GB).toFixed(2) + " GB"
    }
    if (sizeInBytes >= MB) {
        return (sizeInBytes / MB).toFixed(2) + " MB"
    }
    if (sizeInBytes >= KB) {
        return (sizeInBytes / KB).toFixed(2) + " KB"
    }
    if (sizeInBytes < KB) {
        return sizeInBytes + " bytes"
    }

}