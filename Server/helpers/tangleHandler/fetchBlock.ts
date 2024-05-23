//3rd party
import { hexToUtf8, TaggedDataPayload, Client } from '@iota/sdk';

/**
 * Fetches a block from the IOTA network and converts its tag and data from hexadecimal format to UTF-8.
 * @param {any} block - The ID of the block to fetch.
 * @returns {Promise<{ tag: string, data: string }>} - A promise that resolves to an object containing the tag and data of the fetched block in UTF-8 format.
 * @throws {Error} - Throws an error if there is an issue during the block fetching process.
 */
export async function fetchBlock(block: any): Promise<{ tag: string; data: string; } | undefined> {
    const client = new Client({
        nodes: [process.env.NODE_URL as string],
    });

    try {
        const fetchedBlock = await client.getBlock(block);
        if (fetchedBlock.payload instanceof TaggedDataPayload) {
            const payload = fetchedBlock.payload as TaggedDataPayload;
            const block = {
                tag: hexToUtf8(payload.tag),
                data: hexToUtf8(payload.data)
            }
            return block
        }
    } catch (error) {
        console.log("fetchingBlockError:", error)
        throw error
    }

    return undefined;
}