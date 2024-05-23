//CORE
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
//CONSTANT
import { ICON } from '../constant/ICON'
//HELPERS
import { formatFileSize } from '../helpers/fileSizeFormater'
import { formatDateAndTime } from '../helpers/dateFormater'
import { downloadFile } from '../helpers/downloadFile'
//CONTEXT
import { AuthContext } from '../context/AuthContext'
//3RD PARTY
import { mvs, vs } from 'react-native-size-matters'


/**
 * Represents an item in the file detail view.
 * @param {object} props - The component props.
 * @param {object} props.item - Information about the file.
 * @param {string} props.item.id - The ID of the file.
 * @param {number} props.item.size - The size of the file in bytes.
 * @param {string} props.item.uploaded_at - The timestamp when the file was uploaded.
 * @param {Function} props.setModalVisible - Function to control the visibility of the modal.
 * @returns {JSX.Element} A React component representing the file detail item.
 */
export default function FileDetailItem({ item, setModalVisible }) {

    const { id, size, uploaded_at, } = item
    const { userToken, setIsLoading } = useContext(AuthContext)

    const formatedSize = formatFileSize(size)
    const formatedDate = formatDateAndTime(uploaded_at)

    async function handleDownload() {
        setModalVisible(false)
        setIsLoading(true)
        await downloadFile(id, userToken)
        setIsLoading(false)
    }

    return (
        <Pressable style={[styles.fileItemContainer]}>
            <View style={styles.fileInfoContainer}>
                <View style={styles.fileInfoContainer}>
                    <View style={[styles.badgeContainer]}>
                        <Text style={[styles.badge, styles.dateText]}>{formatedDate}</Text>
                        <Text style={[styles.badge, styles.sizeText]}>Size: {formatedSize}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={handleDownload}>
                <Image resizeMode='contain' style={styles.downloadIcon} source={ICON.CLOUD_DOWNLOAD} />
            </TouchableOpacity>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    fileItemContainer: {
        padding: mvs(15),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fileInfoContainer: {
        flexGrow: 1,
        gap: 10
    },
    badgeContainer: {
        gap: 10
    },
    badge: {
        opacity: 0.5,
        fontSize: 18,
        fontWeight: '600',
        overflow: 'hidden'
    },
    downloadIcon: {
        marginStart: 'auto',
        width: mvs(30),
        height: mvs(30),
    },
    dateText: {
        fontSize: vs(12)
    },
    sizeText: {
        fontSize: vs(12)
    }
})