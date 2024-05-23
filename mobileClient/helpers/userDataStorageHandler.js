//CORE
import { Alert } from 'react-native'
//3RD PARTY
import * as SecureStore from 'expo-secure-store'


/**
 * Stores the user data securely in local storage.
 * 
 * @async
 * @function
 * @param {string} userData - The user data to store.
 * @returns {Promise<void>} A promise that resolves when the user data is successfully stored.
 */
export async function setUserDataInStorage(userData) {
    try {
        await SecureStore.setItemAsync('userData', userData)
    }
    catch (e) {
        Alert.alert('Error setting user data', 'Couldn\'t access the local storage ' + e)
    }
}


/**
 * Retrieves the user data from local storage.
 * 
 * @async
 * @function
 * @returns {Promise<string|null>} A promise that resolves with the user data, or null if not found.
 */
export async function getUserDataFromStorage() {
    try {
        return await SecureStore.getItemAsync('userData')
    } catch (e) {
        Alert.alert('Error getting user data', 'Couldn\'t access the local storage ' + e)
    }
}


/**
 * Removes the user data from local storage.
 * 
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the user data is successfully removed.
 */
export async function removeUserDataFromStorage() {
    try {
        return await SecureStore.deleteItemAsync('userData')
    } catch (e) {
        Alert.alert('Error deleting user data', 'Couldn\'t access the local storage ' + e)
    }
}