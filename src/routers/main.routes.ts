import express from 'express';

import MainController from '../controllers/main.controller';

const mainRoutes = express.Router();
const mainController = new MainController();

mainRoutes.get('/', mainController.get);

export default mainRoutes;