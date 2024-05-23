//CORE
import React, { useContext } from 'react'
import { StatusBar } from 'react-native';
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
//SCREENS
import Home from '../screens/Home';
//CUSTOM
import FullscreenLoading from '../components/FullscreenLoading';
//CONTEXT
import { AuthContext } from '../context/AuthContext'


/**
 * Main application navigation component.
 * 
 * @function
 * @returns {JSX.Element} The main navigation container for the application, displaying either the home screen or authentication stack based on the user's authentication status(if an authorization token exist or not).
 */
export default function MainAppNav() {
  const { isLoading, userToken } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {
        isLoading && <FullscreenLoading />
      }
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      {
        userToken
          ? <Home />
          : <AuthStack />
      }
    </NavigationContainer>
  )
}