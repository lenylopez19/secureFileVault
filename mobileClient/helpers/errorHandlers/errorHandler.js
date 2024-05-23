//CORE
import { Alert } from "react-native";


/**
 * Function to handle errors and display appropriate alerts or set error messages.
 * 
 * @param {Object} error - The error object received from the API or other sources.
 * @param {Object} error.data - The data part of the error object, which contains detailed error information.
 * @param {number} error.status - The HTTP status code of the error response.
 */
export function errorHandler(error) {
    const response = error.data
    if (!response) {
        Alert.alert(error, null, [{ text: 'OK', onPress: () => { setIsLoading(false) } }]);
        return
    }
    const errorMsj = response.error.message
    if (error.status == 409) {
        if (errorMsj.toLowerCase().includes('email')) {
            setErrors(errors => ({ ...errors, email: errorMsj }))
        } else {
            setErrors(errors => ({ ...errors, username: errorMsj }))
        }
    }

}