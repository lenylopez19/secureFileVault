//3RD PARTY
import multer from 'multer'
//HELPERS
import { ensureDestination } from '../helpers/files/ensureDestination.js'

/**
 * Middleware for handling file uploads using multer.
 * Sets up a multer instance with custom disk storage configuration.
 */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destination = `storage/${req.user.userId}`
        ensureDestination(destination)
        cb(null, destination)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

export default function fileMiddleware() {
    return multer({ storage })
}


