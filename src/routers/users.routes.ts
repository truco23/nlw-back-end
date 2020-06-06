import UserController from '../controllers/UsersController';
import InstacenRouterHelpers from '../helpers/InstanceRouterHelpers';

const userController = new UserController();
const usersRoutes = InstacenRouterHelpers.api;

usersRoutes.get('/users', userController.getUsers);

export default usersRoutes;
