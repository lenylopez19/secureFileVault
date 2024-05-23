//CORE
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
//CONSTANT
import { COLORS } from '../constant/COLORS'
import { ICON } from '../constant/ICON'
import { PLATFORM } from '../constant/PLATFORM.js';
import { SCREENS } from '../constant/SCREENS.js';
import { UI_IMAGES } from '../constant/UI_IMAGES.js';
import { PLACEHOLDERS } from '../constant/PLACEHOLDERS.js';
import { LABELS } from '../constant/LABELS.js';
import { APP_TEXT } from '../constant/APP_TEXT.js';
//CUSTOM
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import FullscreenLoading from '../components/FullscreenLoading';
import { useDebounce } from '../customHooks/useDebounce.js';
//CONTEXT
import { AuthContext } from '../context/AuthContext';
//HELPERS
import registerUser from '../helpers/registerUser'
import { validateEmail, validateUsername, validateConfirmPassword, validatePassword } from '../helpers/validation';
//3RD PARTY
import { verticalScale } from 'react-native-size-matters';

// consider refactor

/**
 * Signup screen component for defining login credentials.
 * @param {object} props - Component props.
 * @param {object} props.navigation - Navigation prop for navigating between screens.
 * @returns {JSX.Element} - Signup screen UI for defining login credentials.
 */
export default function SignupScreen2({ navigation }) {

    const isIos = Platform.OS === PLATFORM.IOS

    const route = useRoute();
    const { name, lastName, phoneNumber } = route.params

    const { isLoading, setIsLoading } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const debouncedUsername = useDebounce(username)
    const debouncedPassword = useDebounce(password)
    const debouncedConfirmPassword = useDebounce(confirmPassword)
    const debouncedEmail = useDebounce(email)

    useEffect(() => {
        if (debouncedUsername === '') return
        setErrors(errors => ({ ...errors, username: validateUsername(debouncedUsername) }))
    }, [debouncedUsername])

    useEffect(() => {
        if (debouncedPassword === '') return
        setErrors(errors => ({ ...errors, password: validatePassword(debouncedPassword) }))
        setErrors(errors => ({ ...errors, confirmPassword: validateConfirmPassword(debouncedPassword, debouncedConfirmPassword) }))
    }, [debouncedPassword])

    useEffect(() => {
        if (debouncedConfirmPassword === '') return
        setErrors(errors => ({ ...errors, confirmPassword: validateConfirmPassword(debouncedPassword, debouncedConfirmPassword) }))
    }, [debouncedConfirmPassword])

    useEffect(() => {
        if (debouncedEmail === '') return
        setErrors(errors => ({ ...errors, email: validateEmail(debouncedEmail) }))

    }, [debouncedEmail])

    /**
    * Validates the form fields.
    * @function
    * @returns {boolean} - Indicates whether the form is valid.
    */
    function isValidForm() {

        if (!debouncedEmail || !debouncedUsername || !debouncedPassword || !debouncedConfirmPassword) {
            if (!errors.username) setErrors(errors => ({ ...errors, username: validateUsername(debouncedUsername) }))
            if (!errors.password) setErrors(errors => ({ ...errors, password: validatePassword(debouncedPassword) }))
            if (!errors.confirmPassword) setErrors(errors => ({ ...errors, confirmPassword: validateConfirmPassword(debouncedPassword, debouncedConfirmPassword) }))
            if (!errors.email) setErrors(errors => ({ ...errors, email: validateEmail(debouncedEmail) }))
            return false
        }
        return true

    }

    /**
     * Handles the form submission.
     * If the form is valid, registers the user.
     * If registration is successful, navigates to the login screen.
     * If there's an error during registration, displays an error message.
     * @async
     * @function
     * @returns {void} 
    */
    async function handleSubmit() {

        if (!isValidForm()) return

        setIsLoading(true)
        try {
            const response = await registerUser({ name, lastName, phoneNumber, email, username, password })
            if (response.status == 201) {
                navigation.navigate(SCREENS.LOGIN)
                // setIsLoading(false)
            }
        }
        //make this simpler
        catch (error) {
            const response = error.data
            if (!response) {
                Alert.alert(error, null, [{ text: 'OK', onPress: () => { setIsLoading(false) } }]);
                return
            }
            const errorMsj = response.error.message
            if (error.status === 409) {
                if (errorMsj.toLowerCase().includes('email')) setErrors(errors => ({ ...errors, email: errorMsj }))
                else setErrors(errors => ({ ...errors, username: errorMsj }))
            } else {
                Alert.alert(error, null, [{ text: 'OK', onPress: () => { setIsLoading(false) } }]);
            }
        }
        setIsLoading(false)

    }

    return (
        <View style={[styles.container, { paddingTop: !isIos ? verticalScale(30) : 0 }]}>
            {
                isLoading && <FullscreenLoading />
            }
            <Image style={styles.bgimage} source={UI_IMAGES.BG_PURPLE} />
            <SafeAreaView style={styles.flexOne} >
                <KeyboardAvoidingView style={styles.flexOne} behavior='padding'>
                    <ScrollView keyboardShouldPersistTaps="handled" style={styles.flexOne} >
                        <View style={styles.viewContentContainer} >

                            <View style={styles.signUpTitleContainer}>
                                <Text style={styles.signUpTitle}>One Last Step</Text>
                                <View style={styles.highlight}>
                                    <Text style={styles.signUpTitle}>{name}</Text>
                                </View>
                            </View>
                            <Text style={styles.signUpSubTitle}>Let's Define Your Login Credentials</Text>

                            <FormInput
                                label={LABELS.EMAIL}
                                placeholder={PLACEHOLDERS.EMAIL}
                                icon={ICON.ENVELOPE_FILL}
                                keyboardType='email-address'
                                autoCorrect={false}
                                autoCapitalize='none'
                                maxLength={50}
                                onChangeText={setEmail}
                                value={email}
                                isError={errors.email}
                            />

                            <FormInput
                                label={LABELS.USERNAME}
                                placeholder={PLACEHOLDERS.USERNAME}
                                icon={ICON.USER_FILL}
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={username}
                                onChangeText={setUsername}
                                isError={errors.username}
                            />

                            <FormInput
                                label={LABELS.PASSWORD}
                                icon={ICON.LOCK_FILL}
                                placeholder={PLACEHOLDERS.PASSWORD}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={password}
                                onChangeText={setPassword}
                                isError={errors.password}
                            />
                            <FormInput
                                label={LABELS.CONFIRM_PASSWORD}
                                icon={ICON.LOCK_FILL}
                                placeholder={PLACEHOLDERS.CONFIRM_PASSWORD}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                isError={errors.confirmPassword}
                            />
                        </View>
                    </ScrollView>
                    <FormButton onPress={handleSubmit} style={styles.signUpButton} tittle={APP_TEXT.SIGNUP.BUTTON_TEXT} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    container: {
        height: '100%',
    },
    viewContentContainer: {
        gap: 20,
        paddingHorizontal: 20
    },
    bgimage: {
        position: 'absolute',
        height: verticalScale(300),
        width: '100%'
    },
    hero: {
        width: '100%',
        height: verticalScale(100),
    },
    contentWrapper: {
        padding: 20,
        flex: 1,
        gap: verticalScale(25)
    },
    signUpTitleContainer: {
        alignSelf: 'flex-start',
        marginTop: verticalScale(20)
    },
    highlight: {
        alignSelf: 'flex-start',
        borderBottomWidth: 6,
        borderColor: COLORS.AUX,
    },
    signUpTitle: {
        fontSize: verticalScale(36),
        fontWeight: '800',
        color: COLORS.NEUTRAL,
    },
    signUpSubTitle: {
        fontSize: verticalScale(16),
        fontWeight: '600',
        color: COLORS.NEUTRAL,
        opacity: 0.6,
        marginBottom: verticalScale(20)
    },
    signUpButton: {
        margin: verticalScale(16),
        width: '90%'
    }
})