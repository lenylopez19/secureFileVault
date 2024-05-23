/**
 * @module encryptionService
 * @description Provides encryption and hashing functionalities, including password comparison, file encryption/decryption, and file hashing.
 */
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import fs from 'fs';

/**
 * Provides encryption and hashing functionalities.
 */
export class encryptionService {

    /**
     * Compares a plain password with a hashed password.
     * @param {string} plainPassword - The plain text password.
     * @param {string} hashedPassword - The hashed password.
     * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the passwords match.
     */
    static async comparePasswords(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    /**
     * Creates a hash of a plain text string with a specified strength.
     * @param {string} plainText - The plain text to hash.
     * @param {number} strength - The cost factor (strength) for the hashing algorithm.
     * @returns {Promise<string>} - A promise that resolves to the hashed string.
     */
    static async createHash(plainText, strength) {
        return await bcrypt.hash(plainText, strength);
    }

    /**
     * Encrypts a file and saves the encrypted data to a destination path.
     * @param {string} filepath - The path to the file to encrypt.
     * @param {string} destinationPath - The path to save the encrypted file.
     * @returns {string} - The initialization vector (IV) used for encryption, encoded in hex format.
     */
    static encryptFile(filepath, destinationPath) {
        const fileData = fs.readFileSync(filepath);
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.KEY, 'hex'), iv);
        const encryptedData = Buffer.concat([cipher.update(fileData), cipher.final()]);
        fs.writeFileSync(destinationPath, encryptedData);
        return iv.toString('hex');
    }

    /**
     * Decrypts an encrypted file and saves the decrypted data to a destination path.
     * @param {string} filePath - The path to the encrypted file.
     * @param {string} destinationPath - The path to save the decrypted file.
     * @param {string} iv - The initialization vector (IV) used for decryption, encoded in hex format.
     */
    static decryptFile(filePath, destinationPath, iv) {
        const encryptedData = fs.readFileSync(filePath);
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(process.env.KEY, 'hex'), Buffer.from(iv, 'hex'));
        const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
        fs.writeFileSync(destinationPath, decryptedData);
    }

    /**
     * Verifies if the hash of the data matches a given hash.
     * @param {string} data - The data to hash and verify.
     * @param {string} hashToVerify - The hash to verify against.
     * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the hash matches.
     */
    static async verifyHash(data, hashToVerify) {
        const calculatedHash = await this.hashFile(data);
        return calculatedHash === hashToVerify;
    }

    /**
     * Computes the SHA-256 hash of a file.
     * @param {string} filePath - The path to the file to hash.
     * @returns {Promise<string>} - A promise that resolves to the hash of the file, encoded in hex format.
     */
    static async hashFile(filePath) {
        return new Promise((resolve, reject) => {
            const hash = crypto.createHash('sha256');
            const stream = fs.createReadStream(filePath);

            stream.on('error', reject);
            stream.on('data', chunk => {
                hash.update(chunk);
            });
            stream.on('end', () => {
                const fileHash = hash.digest('hex');
                resolve(fileHash);
            });
        });
    }

}
