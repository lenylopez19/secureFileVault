//CORE
import express from 'express'
//ROUTES
import userRoutes from './api/routes/users.js'
import fileRoutes from './api/routes/files.js'
//MIDDLEWARES
import authMiddleware from './middlewares/authMiddleware.js'

const app = express()
app.disable('x-powered-by')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/users', userRoutes)
app.use('/file', authMiddleware, fileRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

export default app