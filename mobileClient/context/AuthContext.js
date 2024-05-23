//CORE
import React, { createContext, useState, useEffect } from "react";
//HELPERS
import { setTokenInStorage, getTokenFromStorage, removeTokenFromStorage } from "../helpers/tokenStorageHandler";
import { setUserDataInStorage, getUserDataFromStorage, removeUserDataFromStorage } from "../helpers/userDataStorageHandler";

/**
 * Context for authentication.
 * @namespace AuthContext
 */
export const AuthContext = createContext()



/**
 * Provider component that supplies authentication state and actions to its children.
 * @function
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components that will receive the context.
 * @returns {JSX.Element} The provider component with authentication context.
 */
export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const [userToken, setUserToken] = useState(null)

  /**
   * Saves the authentication token in the state and storage.
   * @async
   * @param {string} token - The authentication token.
   */
  async function saveToken(token) {
    setUserToken(token)
    await setTokenInStorage(token)
    setIsLoading(false)
  }


  /**
  * Deletes the authentication token from the state and storage.
  * @async
  */
  async function deleteToken() {
    setUserToken(null)
    await removeTokenFromStorage()
    setIsLoading(false)
  }

  /**
 * Saves the user data in the state and storage.
 * @async
 * @param {Object} userData - The user data.
 */
  async function saveUserData(userData) {
    setUserData(userData)
    await setUserDataInStorage(JSON.stringify(userData))
    setIsLoading(false)
  }

  /**
 * Deletes the user data from the state and storage.
 * @async
 */
  async function deleteUserData() {
    setUserData({})
    await removeUserDataFromStorage()
    setIsLoading(false)
  }

  /**
   * Signs out the user by deleting the token and user data.
   * @async
   */
  async function signOut() {
    await deleteToken()
    await deleteUserData()
    setIsLoading(false)
  }

  /**
 * Checks if the user is logged in by retrieving the token and user data from storage.
 * @async
 */
  async function isLoggedIn() {
    let token = await getTokenFromStorage()
    let userData = await getUserDataFromStorage()
    setUserToken(token)
    setUserData(JSON.parse(userData))
    setIsLoading(false)
  }

  useEffect(() => {
    // signOut()
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ saveUserData, userToken, saveToken, deleteToken, isLoading, setIsLoading, userData, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}