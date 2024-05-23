//CORE
import React, { useState, createContext } from "react";

/**
 * Context for managing files.
 * @namespace FilesContext
 */
export const FilesContext = createContext();


/**
 * Provider component that manages file state and provides file-related functions to its children.
 * @function
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components that will receive the context.
 * @returns {JSX.Element} The provider component with file context.
 */
export function FilesProvider({ children }) {

    const [files, setFiles] = useState([])

    /**
    * Adds a file to the list of files.
    * @param {Object} file - The file to add.
    */
    function addFiles(file) {
        setFiles(currentFiles => [file, ...currentFiles])
    }

    /**
   * Initializes the list of files with fetched files.
   * @param {Array<Object>} fetchedFiles - The files fetched from storage.
   */
    function initializeFiles(fetchedFiles) {
        setFiles(fetchedFiles)
    }

    return (
        <FilesContext.Provider value={{ files, addFiles, initializeFiles }}>
            {children}
        </FilesContext.Provider>
    )

}

