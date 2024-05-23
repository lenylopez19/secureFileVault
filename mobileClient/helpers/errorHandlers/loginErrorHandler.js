//CORE
import { Alert } from "react-native";


/**
 * Function to handle login errors and display appropriate alerts.
 * 
 * @param {Object} error - The error object received from the API or other sources.
 * @param {Object} error.data - The data part of the error object, which contains detailed error information.
 * @param {number} error.status - The HTTP status code of the error response.
 * @param {Function} action - The callback function to execute after the alert is dismissed.
 */
export function loginErrorHandler(error, action) {
    if (!error.data) return Alert.alert(error, null, [{ text: 'Ok', onPress: action }])

    if (error.status == 401) {
        Alert.alert(error.data.error.message, null, [{ text: 'Ok', onPress: () => action }])
    }
    else {
        Alert.alert(error, null, [{ text: 'OK', onPress: () => { action } }])
        action
    }

}