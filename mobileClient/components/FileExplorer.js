//CORE
import { Alert, FlatList, RefreshControl, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
//CONSTNAT
import { ICON } from '../constant/ICON'
import { VIEW_TYPE } from '../constant/VIEW_TYPE'
import { COLORS } from '../constant/COLORS'
//CUSTOM 
import FileItem from './FileItem'
import ListHeader from './ListHeader'
import NoResult from './NoResult'
import Header from './Header'
//HELPERS
import { getLatestFiles, sortByDate } from '../helpers/sortFiles'
import getUserFiles from '../helpers/getUserFiles'
//CONTEXT
import { AuthContext } from '../context/AuthContext'
import { FilesContext } from '../context/FilesContext'

/**
 * Renders a file explorer component.
 * used in the Home Screen.
 * @param {object} props - The component props.
 * @param {Function} props.setSelectedFile - Function to set the selected.
 * @returns {JSX.Element} A React component representing the file explorer.
 */
export default function FileExplorer({ setSelectedFile }) {

    const { userToken } = useContext(AuthContext)
    const { initializeFiles, files } = useContext(FilesContext)

    const [isRefreshing, setIsRefreshing] = useState(false)
    const [viewType, setViewType] = useState(VIEW_TYPE.GRID)

    const isGridView = viewType === VIEW_TYPE.GRID
    const existData = files.length ? true : false

    async function handleRefresh() {
        setIsRefreshing(true)
        try {
            const userFiles = await getUserFiles(userToken)
            initializeFiles(userFiles)
        } catch (error) {
            Alert.alert(error || 'unexpected error', null, () => { setIsRefreshing(false) })
        }
    }

    useEffect(() => {
        (async () => {
            await handleRefresh()
        })()
    }, [])

    return (
        <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={<Header existData={existData} ><ListHeader state={{ viewType, setViewType }} /></Header>}
            ListEmptyComponent={<NoResult icon={ICON.FILE} title='No Files Yet' subText='Upload a file from the option bellow' />}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={true}
            key={isGridView ? VIEW_TYPE.GRID : VIEW_TYPE.LIST}
            numColumns={isGridView ? 2 : 1}
            columnWrapperStyle={isGridView ? styles.columnWrapper : undefined}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                    tintColor={COLORS.NEUTRAL}
                    titleColor={COLORS.NEUTRAL}
                />
            }
            data={sortByDate(getLatestFiles(files))}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FileItem setSelectedFile={setSelectedFile} isGridView={isGridView} item={item} />}
        />

    )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        gap: 15
    },
    columnWrapper: {
        gap: 15
    }
})