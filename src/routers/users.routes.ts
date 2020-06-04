import express from 'express';
import UserController from '../controllers/users.controller';

const usersRoutes = express.Router();
const userController = new UserController();

usersRoutes.get('/users', userController.getUsers);

export default usersRoutes;