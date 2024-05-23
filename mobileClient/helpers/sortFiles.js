/**
 * Sorts an array of files by date in descending order.
 * 
 * @function
 * @param {Object[]} files - The array of files to sort.
 * @returns {Object[]} The sorted array of files.
 */
export function sortByDate(files) {
    files.sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at))
    return files
}

/**
 * Returns the latest file from each group of files with the same name.
 * 
 * @function
 * @param {Object[]} files - The array of files.
 * @returns {Object[]} The latest file from each group of files with the same name.
 */
export function getLatestFiles(files) {
    const groupedByName = groupByName(files)

    const latestFiles = Object.values(groupedByName).map(group => {
        group.sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at))
        return group[0]
    })
    return latestFiles
}

/**
 * Groups an array of files by their filename.
 * 
 * @function
 * @param {Object[]} files - The array of files to group.
 * @returns {Object} An object where keys are filenames and values are arrays of files with the same name.
 */
export function groupByName(files) {
    const groupedByName = files.reduce((sortedObj, eachObject) => {
        const key = eachObject.filename
        if (!sortedObj[key]) sortedObj[key] = []
        sortedObj[key].push(eachObject)
        return sortedObj
    }, {})
    return groupedByName
}