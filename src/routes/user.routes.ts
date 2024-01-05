import express from 'express'
import { UserController } from '../controllers/user.controller'

const routes = express.Router()


routes.post('/create-user', UserController.createUser)

export const UserRoutes = routes