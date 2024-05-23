//core
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { useEffect, useState } from 'react'
//constant
import { ICON } from '../constant/ICON'
import { COLORS } from '../constant/COLORS'
import { PLATFORM } from '../constant/PLATFORM'
import { LABELS } from '../constant/LABELS'
import { PLACEHOLDERS } from '../constant/PLACEHOLDERS'
import { APP_TEXT } from '../constant/APP_TEXT'
import { UI_IMAGES } from '../constant/UI_IMAGES'
import { SCREENS } from '../constant/SCREENS'
//custom
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { useDebounce } from '../customHooks/useDebounce'
//helpers
import { validateName, validateLastName, validatePhone } from '../helpers/validation'
//3rd party
import { ms, verticalScale } from 'react-native-size-matters';

//consider refactoring this

/**
 * Signup screen component.
 * @param {object} props - Component props.
 * @param {object} props.navigation - Navigation prop for navigating between screens.
 * @returns {JSX.Element} - Signup screen UI.
 */
export default function SignupScreen({ navigation }) {

    const isIos = Platform.OS === PLATFORM.IOS

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [errors, setErrors] = useState(
        {
            "name": '',
            "lastName": '',
            "phoneNumber": ''
        }
    )
    const debouncedName = useDebounce(name)
    const debouncedLastName = useDebounce(lastName)
    const debouncedPhoneNumber = useDebounce(phoneNumber)

    useEffect(() => {
        if (debouncedName === '') return
        setErrors(errors => ({ ...errors, name: validateName(debouncedName) }));
    }, [debouncedName])

    useEffect(() => {
        if (debouncedLastName === '') return
        setErrors(errors => ({ ...errors, lastName: validateLastName(debouncedLastName) }));

    }, [debouncedLastName])

    useEffect(() => {
        if (debouncedPhoneNumber === '') return
        setErrors(errors => ({ ...errors, phoneNumber: validatePhone(debouncedPhoneNumber) }));
    }, [debouncedPhoneNumber])


    /**
     * Checks if the form data is valid.
     * @function
     * @returns {boolean} - Returns true if the form data is valid, otherwise false.
     */
    function isValidForm() {
        if (!debouncedName || !debouncedLastName || !debouncedPhoneNumber) {
            if (!errors.name) setErrors(errors => ({ ...errors, name: validateName(debouncedName) }));
            if (!errors.lastName) setErrors(errors => ({ ...errors, lastName: validateLastName(debouncedLastName) }));
            if (!errors.phoneNumber) setErrors(errors => ({ ...errors, phoneNumber: validatePhone(debouncedLastName) }));
            return false
        }
        return true
    }

    /**
     * Handles form submission.
     * @function
     * @returns {void}
    */
    function handleSubmit() {
        if (!isValidForm()) return
        navigation.navigate(SCREENS.SIGN_UP_CREDENTIALS, { name, lastName, phoneNumber })
    }

    return (
        <View style={{ paddingTop: !isIos ? verticalScale(30) : 0 }}>
            <Image resizeMode='stretch' style={styles.bgDifumination} source={UI_IMAGES.BG_PURPLE} />
            <SafeAreaView style={styles.safeAreaView} >
                <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='padding'>
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled" >

                        <View style={styles.contentWrapper} >
                            <View style={styles.signUpTitleContainer}>
                                <Text style={styles.signUpTitle}>{APP_TEXT.SIGNUP.SCREEN_TITLE}</Text>
                            </View>
                            <Text style={styles.signUpSubTitle}>{APP_TEXT.SIGNUP.SCREEN_SUBTITLE}</Text>
                            <FormInput
                                label={LABELS.NAME}
                                placeholder={PLACEHOLDERS.NAME}
                                icon={ICON.USER_FILL}
                                autoCorrect={false}
                                autoCapitalize='words'
                                maxLength={25}
                                onChangeText={setName}
                                value={name}
                                isError={errors.name}
                            />

                            <FormInput
                                label={LABELS.LAST_NAME}
                                placeholder={PLACEHOLDERS.LAST_NAME}
                                icon={ICON.USER_FILL}
                                autoCapitalize='words'
                                maxLength={30}
                                onChangeText={setLastName}
                                value={lastName}
                                isError={errors.lastName}
                            />
                            <FormInput
                                label={LABELS.PHONE_NUMBER}
                                placeholder={PLACEHOLDERS.PHONE_NUMBER}
                                icon={ICON.FLIP_PHONE}
                                keyboardType='numeric'
                                maxLength={10}
                                onChangeText={setPhoneNumber}
                                value={phoneNumber}
                                isError={errors.phoneNumber}
                            />
                        </View>

                    </ScrollView>
                    <FormButton onPress={handleSubmit} style={styles.nextButton} tittle={APP_TEXT.SIGNUP.NEXT} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        gap: 20,
        paddingHorizontal: 20
    },
    hero: {
        width: '100%',
        height: verticalScale(100)
    },
    bgDifumination: {
        position: 'absolute',
        height: verticalScale(300),
        width: '100%'
    },
    nextButton: {
        margin: ms(16),
        width: '90%'
    },
    signUpTitleContainer: {
        borderBottomWidth: 6,
        borderColor: COLORS.AUX,
        alignSelf: 'flex-start',
        marginTop: ms(20)
    },
    signUpTitle: {
        fontSize: ms(44),
        fontWeight: '800',
        color: COLORS.NEUTRAL,
        opacity: 1
    },
    signUpSubTitle: {
        fontSize: ms(24),
        fontWeight: '600',
        color: COLORS.NEUTRAL,
        opacity: 0.6,
        marginBottom: verticalScale(10)
    },
    safeAreaView: {
        height: '100%'
    },
    keyboardAvoidingView: {
        flex: 1
    },
    scrollViewContent:
    {
        flexGrow: 1
    },
    scrollView: {
        flex: 1
    },
})