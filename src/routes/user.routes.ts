import express from 'express'
import { UserController } from '../controllers/user.controller'

const routes = express.Router()



routes.post('/users/create-user', UserController.createUser);
routes.get('/users', UserController.getAllUser);
routes.get('/users/:id', UserController.getSingleUser)
routes.patch('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser)

export const UserRoutes = routes