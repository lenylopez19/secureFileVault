//CORE
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
//CONSTANT
import { ICON } from '../constant/ICON'
import { COLORS } from '../constant/COLORS'
import { APP_TEXT } from '../constant/APP_TEXT'
//CONTEXT
import { AuthContext } from '../context/AuthContext'
//CUSTOM
import getFilesByName from '../helpers/getFilesByName'
import FileDetailItem from '../components/FileDetailItem'
//3RD PARTY
import { vs } from 'react-native-size-matters'


/**
 * File details component, A screen for the detail/history of a particual file, in where you can find the different version of said file.
 *
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.filename - The name of the file to display details and history for.
 * @param {Function} props.setModalVisible - Function to control the visibility of the modal.
 * @returns {JSX.Element} The file details component.
 */

export default function FileDetails({ filename, setModalVisible }) {

  const { userToken } = useContext(AuthContext)
  const [files, SetFiles] = useState([])

  useEffect(() => {
    (async () => {
      SetFiles(await getFilesByName(filename, userToken))
    })()
  }, [])

  return (
    <View style={styles.container} >
      <View style={styles.titleContainer}>
        <Image resizeMode='contain' style={styles.titleIcon} source={ICON.DOC_DUO} />
        <Text style={styles.title}>{APP_TEXT.FILE_DETAIL.TITLE}</Text>
      </View>

      <FlatList
        ListHeaderComponent={
          <View style={[styles.filename, styles.filenameContainer]}>
            <View style={styles.circleIcon}></View>
            <Text style={[styles.filename, { opacity: 0.5 }]}>{filename}</Text>
          </View>
        }
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={files}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FileDetailItem setModalVisible={setModalVisible} item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    paddingVertical: 50,
    padding: 30,
    flexGrow: 1,
  },
  circleIcon: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: COLORS.ERROR_LIGHT
  },
  filenameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // borderWidth: 1
  },
  filename: {
    fontSize: vs(16),
    fontWeight: '700',
    backgroundColor: COLORS.NEUTRAL
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: vs(20)
  },
  titleIcon: {
    aspectRatio: 1,
    width: vs(30)
  },
  title: {
    fontSize: vs(30),
    fontWeight: '700',
    opacity: 0.7,
  },
  contentContainerStyle: {
    flexGrow: 1,
    gap: 5
  }
})