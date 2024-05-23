//CORE
import express from 'express'
//CONTROLLERS
import { fileController } from '../../controllers/files.js'
//MIDDLEWARES
import fileMiddleware from '../../middlewares/fileMiddleware.js'

const fileRoutes = express.Router()
const upload = fileMiddleware()

fileRoutes.post('/', upload.single('file'), fileController.uploadFile)
fileRoutes.get('/', fileController.getAll)
fileRoutes.get('/:name', fileController.getByName)
fileRoutes.get('/download/:fileId', fileController.download)

export default fileRoutes