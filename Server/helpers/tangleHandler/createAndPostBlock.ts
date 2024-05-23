//3rd party
import { Client, utf8ToHex, Utils } from '@iota/sdk';

/**
 * Creates a new block with the provided tag and data, then posts it to the IOTA network.
 * @param {string} tag - The tag for the block.
 * @param {string} data - The data to be included in the block.
 * @returns {Promise<string>} - A promise that resolves to the ID of the created block.
 * @throws {Error} - Throws an error if there is an issue during the block creation and posting process.
 */
export async function createAndPostBlock(tag: string, data: string): Promise<string> {
    const client = new Client({
        nodes: [process.env.NODE_URL as string],
    });
    try {
        const blockIdAndBlock = await client.buildAndPostBlock(
            {
                mnemonic: Utils.generateMnemonic() //perhaps use our own mnemonic instead of generating a random one for each block 
            },
            {
                tag: utf8ToHex(tag),
                data: utf8ToHex(data),
            }
        );
        console.log("BLOCK:", blockIdAndBlock[0])
        return blockIdAndBlock[0]

    } catch (error) {
        console.log('error:', error)
        throw error
    }
}
