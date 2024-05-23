//CORE
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
//CONSTANT
import { COLORS } from '../constant/COLORS'
import { ICON } from '../constant/ICON'
import { VIEW_TYPE } from '../constant/VIEW_TYPE'
//3RD PARTY
import { vs } from 'react-native-size-matters'


/**
 * Header component for the list of files.
 * used in the Home Screen by the fileExplorer component.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.state - State object containing viewType and setViewType functions.
 * @returns {JSX.Element} ListHeader component.
 */
export default function ListHeader({ state }) {

    const { viewType, setViewType } = state

    return (
        <View style={styles.listHeaderWrapper}>
            <View style={styles.titleContainer}>
                <Image style={styles.titleIcon} source={ICON.CLOUD_LOCK} />
                <Text numberOfLines={1} style={styles.titleText}>Files</Text>
                <View style={styles.optionContainer}>
                    <Pressable onPress={() => { setViewType(VIEW_TYPE.GRID) }} style={{ opacity: viewType === VIEW_TYPE.GRID ? 1 : 0.5 }} >
                        <Image resizeMode='contain' style={styles.viewOptionIcon} source={ICON.GROUP_VIEW} />
                    </Pressable>
                    <Pressable onPress={() => { setViewType(VIEW_TYPE.LIST) }} style={{ opacity: viewType === VIEW_TYPE.LIST ? 1 : 0.5 }} >
                        <Image resizeMode='contain' style={styles.viewOptionIcon} source={ICON.LIST_VIEW} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listHeaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        flex: 1
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginEnd: 'auto',
        flex: 1,
        flexBasis: '100%',
    },
    optionContainer: {
        flexDirection: 'row',
        gap: 20
    },
    titleIcon: {
        aspectRatio: 1,
        resizeMode: 'contain',
        width: vs(50)
    },
    titleText: {
        fontSize: vs(42),
        fontWeight: '700',
        color: COLORS.BASE,
        flex: 1,
    },
    viewOptionIcon: {
        width: 34,
        height: 28
    }
})