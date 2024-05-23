//CORE
import { Alert } from 'react-native'
//3RD PARTY
import * as SecureStore from 'expo-secure-store'

/**
 * Stores the access token securely in local storage.
 * 
 * @async
 * @function
 * @param {string} token - The access token to store.
 * @returns {Promise<void>} A promise that resolves when the token is successfully stored.
 */
export async function setTokenInStorage(token) {
    try {
        await SecureStore.setItemAsync('accessToken', token)
    }
    catch (e) {
        Alert.alert('Error setting token', 'Couldn\'t access the local storage ' + e)
    }
}


/**
 * Retrieves the access token from local storage.
 * 
 * @async
 * @function
 * @returns {Promise<string|null>} A promise that resolves with the access token, or null if not found.
 */
export async function getTokenFromStorage() {
    try {
        return await SecureStore.getItemAsync('accessToken')
    } catch (e) {
        Alert.alert('Error getting token', 'Couldn\'t access the local storage ' + e)
    }
}


/**
 * Removes the access token from local storage.
 * 
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the token is successfully removed.
 */
export async function removeTokenFromStorage() {
    try {
        return await SecureStore.deleteItemAsync('accessToken')
    } catch (e) {
        Alert.alert('Error deleting token', 'Couldn\'t access the local storage ' + e)
    }
}