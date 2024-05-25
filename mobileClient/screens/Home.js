//CORE
import { View, Text, StyleSheet, Image, SafeAreaView, Platform, Modal, Pressable, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
//CONSTANT
import { COLORS } from '../constant/COLORS'
import { PLATFORM } from '../constant/PLATFORM'
import { UI_IMAGES } from '../constant/UI_IMAGES'
import { APP_TEXT } from '../constant/APP_TEXT'
//CUSTOM
import FormButton from '../components/FormButton'
import FileExplorer from '../components/FileExplorer';
import FileDetails from './FileDetails';
import FullscreenLoading from '../components/FullscreenLoading'
import { pickFile } from '../helpers/pickFile'
//CONTEXT
import { AuthContext } from "../context/AuthContext";
import { FilesContext } from '../context/FilesContext'
//HELPERS
import { uploadFile } from '../helpers/uploadFile';
//3RD PARTY
import { mvs, vs } from 'react-native-size-matters';

const isIos = Platform.OS === PLATFORM.IOS

/**
 * Home screen component, main view of the app.
 *
 * @function
 * @returns {JSX.Element} The home screen component.
 */
export default function Home() {

    const { userToken, isLoading, setIsLoading } = useContext(AuthContext)
    const { addFiles } = useContext(FilesContext)

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedFile, setSelectedFile] = useState('')

    /**
     * Handles file selection in the home screen view. opens the modal view when a file is selected
     *
     * @function
     * @param {string} fileId - The ID of the selected file.
     */
    function handleFileSelect(fileId) {
        setSelectedFile(fileId)
        setModalVisible(true)
    }

    /**
     * Handles file upload by picking a file, uploading it, and updating the state.
     *
     * @async
     * @function
     * @returns {Promise<void>}
     */
    async function handleUploadFile() {
        const selection = await pickFile()
        if (selection.canceled || !selection.assets) return
        setIsLoading(true)
        const file = selection.assets[0]
        try {
            const result = await uploadFile(file, userToken, isIos)
            const newFile = result.data.file
            newFile ? addFiles(newFile) : ''
        } catch (error) { Alert.alert(error) }
        finally { setIsLoading(false) }
    }

    return (
        <View style={[styles.container, { paddingTop: !isIos ? vs(30) : 0 }]}>
            {
                isLoading && <FullscreenLoading />
            }
            <Image style={styles.bakgroundImage} source={UI_IMAGES.BG_BLUE} />
            <SafeAreaView style={styles.SafeAreaView} >
                <View style={styles.userFileContainer} >
                    <FileExplorer setSelectedFile={handleFileSelect} />
                </View>
                <FormButton onPress={handleUploadFile} style={styles.uploadButton} tittle={APP_TEXT.HOME.UPLOAD_BUTTON_TITLE} />
            </SafeAreaView>

            <Modal hardwareAccelerated={true} onRequestClose={() => { setModalVisible(false) }} visible={modalVisible} animationType='slide' presentationStyle='pageSheet' >
                <View style={styles.modalContent}>
                    <FileDetails setModalVisible={setModalVisible} filename={selectedFile} />
                    <Pressable onPress={() => { setModalVisible(false) }} style={styles.closeBtn}>
                        <Text style={styles.closeBtnText}>x</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND,
        height: '100%'
    },
    SafeAreaView: {
        flex: 1
    },
    uploadButton: {
        margin: vs(16),
        width: '90%'
    },
    userFileContainer: {
        flex: 1,
        gap: 20,
        paddingHorizontal: 20
    },
    bakgroundImage: {
        position: 'absolute',
        bottom: -50,
        height: vs(300),
        width: '100%'
    },
    modalContent: {
        flex: 1,
        paddingBottom: 30
    },
    closeBtn: {
        width: vs(30),
        height: vs(30),
        borderRadius: vs(30),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 25,
        top: 25,
        backgroundColor: COLORS.ERROR,
    },
    closeBtnText: {
        color: COLORS.NEUTRAL,
        fontWeight: '600',
        fontSize: mvs(16)
    }

})