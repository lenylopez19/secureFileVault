//CORE
import express from 'express';
//CONTROLLERS
import { UserController } from '../../controllers/users.js';

const userRoutes = express.Router()

userRoutes.post("/", UserController.create)
userRoutes.post("/login", UserController.login)

export default userRoutes