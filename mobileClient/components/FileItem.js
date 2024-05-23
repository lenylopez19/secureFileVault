//CORE
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
//CONSTANT
import { COLORS } from '../constant/COLORS'
import { ICON } from '../constant/ICON'
//HELPERS
import { formatFileSize } from '../helpers/fileSizeFormater'
import { formatDateAndTime } from '../helpers/dateFormater'
//3RD PARTY
import { mvs } from 'react-native-size-matters'

/**
 * Renders a file item component. tipically part of a list, used in the homescreen
 * @param {object} props - The component props.
 * @param {Function} props.setSelectedFile - Function to set the selected file.
 * @param {object} props.item - The file item object.
 * @param {string} props.item.id - The unique identifier of the file.
 * @param {string} props.item.filename - The name of the file.
 * @param {number} props.item.size - The size of the file.
 * @param {string} props.item.uploaded_at - The timestamp when the file was uploaded.
 * @param {boolean} props.isGridView - Flag indicating whether the item is displayed in grid view.
 * @returns {JSX.Element} A React component representing the file item.
 */
export default function FileItem({ setSelectedFile, item, isGridView }) {
    const { id, filename, size, uploaded_at, } = item

    const formatedSize = formatFileSize(size)
    const formatedDate = formatDateAndTime(uploaded_at).split(',')[0]

    return (
        <Pressable style={[styles.fileItemContainer, { padding: isGridView ? mvs(15) : mvs(18) }]} onPress={() => { setSelectedFile(filename) }}>
            <View style={styles.fileInfoContainer}>
                <View style={styles.fileInfoContainer}>
                    <Text ellipsizeMode='middle' numberOfLines={2} style={[styles.fileNameText, { fontSize: isGridView ? mvs(13) : mvs(15) }]}>{filename}</Text>
                    <View style={[styles.badgeContainer, { flexDirection: isGridView ? 'column' : 'row' }]}>
                        <Text style={styles.badge}>{formatedDate}</Text>
                        <Text style={styles.badge}>{formatedSize}</Text>
                        <Image resizeMode='contain' style={styles.downloadIcon} source={ICON.CLOUD_DOWNLOAD} />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    fileItemContainer: {
        backgroundColor: COLORS.BASE,
        padding: mvs(15),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        flexGrow: 1
    },
    fileInfoContainer: {
        flexGrow: 1,
        gap: 10,
    },
    badgeContainer: {
        gap: 10,
        flexWrap: 'wrap',
        flexGrow: 1,
        position: 'relative'

    },
    badge: {
        backgroundColor: COLORS.AUX,
        alignSelf: 'flex-start',
        fontSize: 12,
        fontWeight: '600',
        padding: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    fileNameText: {
        fontSize: mvs(16),
        fontWeight: '600',
    },
    downloadIcon: {
        position: 'absolute',
        marginStart: 'auto',
        width: 30,
        height: 30,
        bottom: 0,
        right: 0
    }
})
