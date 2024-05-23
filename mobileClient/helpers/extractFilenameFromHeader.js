/**
 * Extracts filename from a given header string.
 * @function
 * @param {string} header - The header string containing filename information.
 * @returns {string|null} The extracted filename, or null if not found.
 */
export function extractFilenameFromHeader(header) {
    if (!header) return null;

    const fileNameMatch = header.match(/filename="(.+)"/);
    if (fileNameMatch) {
        return fileNameMatch[1];
    }

    return null;
}