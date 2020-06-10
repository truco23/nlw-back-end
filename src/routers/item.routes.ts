import UserController from '../controllers/ItemController';
import InstacenRouterHelpers from '../helpers/InstanceRouterHelpers';

const userController = new UserController();
const itemRoutes = InstacenRouterHelpers.api;

itemRoutes.get('/items', userController.get);

export default itemRoutes;
