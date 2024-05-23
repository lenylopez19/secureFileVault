

/**
 * Fetches the `Content-Disposition` header from the response of a HEAD request to the specified URL.
 * @async
 * @function
 * @param {string} url - The URL to send the HEAD request to.
 * @param {Object} [headers={}] - Optional headers to include in the request.
 * @returns {Promise<string|null>} The `Content-Disposition` header value, or null if an error occurs.
 * @throws {Error} Throws an error if the request fails.
 */

export async function getFileHeader(url, headers = {}) {
    try {
        const headResponse = await fetch(url, { method: 'HEAD', headers });
        return headResponse.headers.get('Content-Disposition');
    } catch (error) { throw error }
}