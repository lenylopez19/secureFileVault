//CORE
import React from 'react'
//SCREEN
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/SignupScreen';
import SignupScreen2 from '../screens/SignupScreen2';
//CONSTANT
import { COLORS } from '../constant/COLORS';
import { SCREENS } from '../constant/SCREENS';
//NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


/**
 * Authentication stack navigator component. tipically contain the screens related to login and signup process.
 * 
 * @function
 * @returns {JSX.Element} The stack navigator for authentication-related screens.
 */
export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={options} >
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            <Stack.Screen name={SCREENS.SIGN_UP} component={SignupScreen} />
            <Stack.Screen name={SCREENS.SIGN_UP_CREDENTIALS} component={SignupScreen2} />
        </Stack.Navigator>
    )
}

const options = {
    headerShown: false,
    contentStyle: {
        backgroundColor: COLORS.FOREGROUND
    }
}