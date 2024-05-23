//CORE
import { View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import React from 'react'
import { useContext } from 'react'
//CONSTANT
import { PLACEHOLDERS } from '../constant/PLACEHOLDERS'
import { COLORS } from '../constant/COLORS'
//CONTEXT
import { AuthContext } from '../context/AuthContext'
//CUTOM
import SearchBar from './SearchBar'


/**
 * Header component for the application.
 * 
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The children components to render within the header.
 * @param {boolean} props.existData - Indicates whether data exists used to conditionally render the children of the header component.
 * @returns {JSX.Element} Header component.
 */
export default function Header({ children, existData }) {

    const { signOut, userData } = useContext(AuthContext)
    const { name } = userData

    return (
        <View style={styles.container}>
            <View style={styles.userDetailsContainer}>
                <Image style={styles.userImage} />
                <Text style={styles.userText}>{name}</Text>
                <Pressable onPress={signOut} style={{ marginStart: 'auto' }}>
                    <View style={styles.signOutWrapper}>
                        <Text style={[styles.userText, styles.signOutText]}>Sign Out</Text>
                    </View>
                </Pressable>
            </View>
            <SearchBar placeholder={PLACEHOLDERS.SEARCH_BY_NAME} style={{ display: !existData ? 'none' : 'flex' }} />
            {existData && children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        backgroundColor: COLORS.BACKGROUND,
        paddingBottom: 5,
    },
    userDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    searchBarContainer: {
        borderWidth: 1,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.AUX
    },
    userText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    signOutWrapper: {
        marginStart: 'auto',
        paddingBottom: 4,
        borderBottomWidth: 5,
        borderBottomColor: COLORS.ERROR
    },
    signOutText: {

    }
})