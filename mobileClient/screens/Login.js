//CORE
import { useState, useContext } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
//CONSTANT
import { ICON } from '../constant/ICON';
import { COLORS } from '../constant/COLORS'
import { ERROR_MSG } from '../constant/ERROR_MSG';
import { LABELS } from '../constant/LABELS';
import { PLACEHOLDERS } from '../constant/PLACEHOLDERS';
import { APP_TEXT } from '../constant/APP_TEXT';
//CUSTOM
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput';
import FullscreenLoading from '../components/FullscreenLoading';
//CONTEXT
import { AuthContext } from '../context/AuthContext';
//HELPERS
import loginUser from '../helpers/loginUser';
import { validateEmail } from '../helpers/validation';
import { loginErrorHandler } from '../helpers/errorHandlers/loginErrorHandler';
//3RD PARTY
import { mvs, verticalScale } from 'react-native-size-matters';
import { SCREENS } from '../constant/SCREENS';
import { UI_IMAGES } from '../constant/UI_IMAGES';

//consider refactor this.

/**
 * LoginScreen component for handling user login.
 *
 * @component
 * @param {object} props - Component props
 * @param {object} props.navigation - Navigation object for screen navigation
 * @returns {JSX.Element} The rendered component
 */
export default function LoginScreen({ navigation }) {

   const { isLoading, setIsLoading, saveToken, saveUserData } = useContext(AuthContext)

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [errors, setError] = useState({})


   /**
    * Validates the login form.
    * @function
    * @returns {boolean} Indicates whether the form is valid
   */
   const isValidForm = () => {
      let errors = {}
      const validationError = validateEmail(email)
      if (validationError) errors.email = validationError
      if (!password) errors.password = ERROR_MSG.GENERIC.EMPTY
      setError(errors)
      return Object.keys(errors).length === 0
   }

   /**
    * Handles the submission of the login form.
    * @function
    * @returns {void}
    */
   async function handleSubmit() {
      setIsLoading(true)
      if (isValidForm()) {
         try {
            const { accessToken, user } = await loginUser({ email, password })
            await saveUserData(user)
            await saveToken(accessToken)
         } catch (error) {
            loginErrorHandler(error, () => { setIsLoading(false) })
         }
         setError({})
      }
      setIsLoading(false)
   }

   /**
    * Resets the screen state by clearing email, password, and error fields.
    * @function
    * @returns {void}
   */
   function resetScreen() {
      setEmail("")
      setPassword("")
      setError({})
   }

   return (
      <View style={styles.screenWrapper}>
         {
            isLoading && <FullscreenLoading />
         }
         <KeyboardAvoidingView behavior="position">
            <Image style={styles.heroImage} source={UI_IMAGES.HERO_IMAGE} />
            <View style={styles.formContainer}>
               <View style={styles.titleContainer}>
                  <Image style={styles.loginIcon} source={ICON.TOUCH_ID} />
                  <Text style={styles.loginText}>{APP_TEXT.LOGIN.TITLE}</Text>

               </View>

               <FormInput
                  value={email}
                  onChangeText={setEmail}
                  autoCorrect={false}
                  autoCapitalize='none'
                  keyboardType='email-address'
                  label={LABELS.EMAIL}
                  icon={ICON.USER_FILL}
                  placeholder={PLACEHOLDERS.EMAIL}
                  isError={errors.email}
               />
               <FormInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  label={LABELS.PASSWORD}
                  icon={ICON.LOCK_FILL}
                  placeholder={PLACEHOLDERS.PASSWORD}
                  isError={errors.password}
               />
               <View style={styles.signupContainer}>
                  <Text style={styles.text}> {APP_TEXT.SIGNUP.MESSAGE} </Text>
                  <TouchableOpacity style={styles.signupButton} onPress={() => { navigation.navigate(SCREENS.SIGN_UP); resetScreen() }}><Text style={styles.accent}> {APP_TEXT.SIGNUP.BUTTON} </Text></TouchableOpacity>
               </View>

               <FormButton onPress={handleSubmit} tittle={APP_TEXT.LOGIN.TITLE} />
            </View>

         </KeyboardAvoidingView>
      </View>
   )
}

const styles = StyleSheet.create({
   screenWrapper: {
      flexGrow: 1,
   },
   text: {
      color: 'white',
      fontSize: mvs(16),
      fontWeight: '700',
      marginTop: mvs(5),
   },

   accent: {
      color: COLORS.ACCENT,
      fontWeight: '900',
      fontSize: mvs(18)
   },
   signupContainer: {
      alignItems: 'center',
      flexDirection: 'row'
   },
   signupButton: {
      borderColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
   },
   heroImage: {
      width: '100%',
      height: verticalScale(300),
   },
   formContainer: {
      paddingHorizontal: verticalScale(10),
      paddingBottom: verticalScale(10),
      gap: mvs(18)
   }
   ,
   titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: mvs(10),
      marginVertical: mvs(5),
   },
   loginIcon: {
      width: 35,
      height: 35
   },
   loginText: {
      color: 'white',
      fontSize: 32,
      fontWeight: '800'
   }

})