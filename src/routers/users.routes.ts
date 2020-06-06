import UserController from '../controllers/ItemController';
import InstacenRouterHelpers from '../helpers/InstanceRouterHelpers';

const userController = new UserController();
const usersRoutes = InstacenRouterHelpers.api;

usersRoutes.get('/items', userController.getItems);

export default usersRoutes;
