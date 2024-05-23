//CORE
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
//CONSTANT
import { ICON } from '../constant/ICON';
import { COLORS } from '../constant/COLORS';
//3RD PARTY
import { mvs } from 'react-native-size-matters';


/**
 * Renders a form input component.
 * @param {object} props - The component props.
 * @param {string} props.id - The id of the input.
 * @param {string} props.value - The value of the input.
 * @param {string} [props.autoCapitalize] - Specifies whether the input should automatically capitalize the entered text.
 * @param {boolean} [props.autoCorrect] - Specifies whether the input should automatically correct the entered text.
 * @param {boolean} [props.secureTextEntry] - Specifies whether the input should be a secure text entry (e.g., password).
 * @param {string} props.label - The label text for the input.
 * @param {string} props.icon - The icon for the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} [props.keyboardType='default'] - The keyboard type for the input.
 * @param {Function} props.onChangeText - Function to handle the text change event.
 * @param {Function} [props.onFocus] - Function to handle the focus event.
 * @param {Function} [props.onBlur] - Function to handle the blur event.
 * @param {number} [props.labelFontSize=16] - The font size of the label.
 * @param {object} [props.style] - The style object to customize the input's appearance.
 * @param {number} [props.maxLength] - The maximum length of the input value.
 * @param {string|boolean} [props.isError=false] - The error message or boolean value indicating whether there is an error.
 * @returns {JSX.Element} A React component representing the form input.
 */
export default function FormInput({
    id,
    value,
    autoCapitalize,
    autoCorrect,
    secureTextEntry,
    label,
    icon,
    placeholder,
    keyboardType = 'default',
    onChangeText,
    onFocus,
    onBlur,
    labelFontSize = 16,
    style,
    maxLength,
    isError = false
}) {

    const [hiddenPassword, setHiddenPassword] = useState(true)
    let errorStyle = {}

    if (isError) errorStyle.backgroundColor = COLORS.ERROR

    return (
        <View style={style}>
            <View style={styles.labelContainer}>
                {
                    isError && <View style={styles.errorCircle}></View>
                }
                <Text style={[styles.label, { fontSize: mvs(labelFontSize) }]}>{label}</Text>
                {
                    isError &&
                    <View style={styles.errorField}>
                        <Text style={[styles.errorMsj, { fontSize: mvs(labelFontSize) }]}>{isError}</Text>
                    </View>
                }
            </View>

            <View style={[styles.inputContainer, style, errorStyle]}>
                <Image style={styles.inputIcon} source={icon} />
                <TextInput
                    style={styles.input}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={secureTextEntry && hiddenPassword}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChangeText={onChangeText}
                    key={id}
                    maxLength={maxLength}
                />
                {
                    secureTextEntry &&
                    <Pressable onPressOut={() => { setHiddenPassword(true) }} onPressIn={() => { setHiddenPassword(false) }} style={styles.showHidePass}>
                        <Image style={[styles.inputIcon, styles.showHidePasswordIcon]} source={hiddenPassword ? ICON.EYE_FILL : ICON.EYE_SLASH_FILL} />
                    </Pressable>
                }
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap'
    },
    label: {
        color: COLORS.NEUTRAL,
        fontWeight: '700',
    },
    inputContainer: {
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: COLORS.BASE,
        flexDirection: 'row',
        // overflow: 'hidden',
        paddingHorizontal: 10
    },
    inputIcon: {
        width: 30,
        height: 30,
    },

    input: {
        flex: 1,
        flexBasis: '75%',
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: mvs(13, 0.9),
        // backgroundColor: 'red',
    },
    errorField: {
        flexDirection: 'row',
        marginStart: 5,
        alignItems: 'center',
        gap: 10,
    },
    errorMsj: {
        color: COLORS.ERROR_LIGHT,
        fontWeight: '600',
    },
    errorCircle: {
        width: 10,
        height: 10,
        backgroundColor: COLORS.ERROR,
        borderRadius: 10,
        marginHorizontal: 5
    }
})
