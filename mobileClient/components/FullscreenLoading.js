//CORE
import { Text, ActivityIndicator, StyleSheet } from "react-native";
//3RD PARTY
import { verticalScale } from 'react-native-size-matters';
import { BlurView } from "expo-blur";


/**
 * Renders a fullscreen loading indicator with an optional spinner title.
 * @param {object} props - The component props.
 * @param {string} [props.spinnerTitle='Loading...'] - The title text to display next to the spinner.
 * @returns {JSX.Element} A React component representing the fullscreen loading indicator.
 */
export default function FullscreenLoading({ spinnerTitle = 'Loading...' }) {
    return (
        <BlurView tint='dark' style={styles.loadingContainer} intensity={70} >
            <ActivityIndicator color='white' size="large" />
            <Text style={styles.loadingText}>{spinnerTitle}</Text>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        gap: 10,
    },
    loadingText: {
        color: 'white',
        fontWeight: '700',
        fontSize: verticalScale(20)
    },
})
