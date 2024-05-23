//CORE
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
//CONSTANT
import { COLORS } from '../constant/COLORS';
//3RD PARTY
import { scale, moderateScale } from 'react-native-size-matters';


/**
 * Renders a form button component.
 * @param {object} props - The component props.
 * @param {object} props.style - The style object to customize the button's appearance.
 * @param {Function} props.onPress - Function to handle the button press event.
 * @param {Function} props.onPressOut - Function to handle the button press out event.
 * @param {string} props.title - The text displayed on the button.
 * @returns {JSX.Element} A React component representing the form button.
 */
export default function FormButton({ style, onPress, onPressOut, tittle }) {
    return (
        <TouchableOpacity onPressOut={onPressOut} onPress={onPress} style={[styles.button, style,]}>
            <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        borderRadius: 10,
        padding: moderateScale(15),
        width: '100%',
        alignSelf: 'center',
        backgroundColor: COLORS.ACCENT
    },
    text: {
        fontSize: scale(20),
        fontWeight: '800',
        textAlign: 'center'
    }
})