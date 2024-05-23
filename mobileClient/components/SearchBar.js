//CORE
import { TextInput, View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import React from 'react'
//CONSTANT
import { COLORS } from '../constant/COLORS'
import { ICON } from '../constant/ICON'

//PROGRAM THE SEARCH FUNCTION

/**
 * Search bar component to allow users to input search queries.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.style - Custom styles for the search bar container.
 * @param {string} props.placeholder - Placeholder text for the search input.
 * @returns {JSX.Element} SearchBar component.
 */
export default function SearchBar({ style, placeholder }) {
    return (
        <View style={[styles.searchBarContainer, style]}>
            <Image style={styles.searchIcon} source={ICON.SEARCH} />
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={COLORS.AUX_STRONG}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.BASE,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
        gap: 10
    },
    searchIcon: {
        width: 40,
        height: 40,
    },
    textInput: {
        fontSize: 20,
        fontWeight: '500'
    }
})