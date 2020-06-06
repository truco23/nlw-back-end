import MainController from '../controllers/MainController';
import InstanceRouterHelpers from '../helpers/InstanceRouterHelpers';

const mainController = new MainController();
const mainRoutes = InstanceRouterHelpers.api;

mainRoutes.get('/', mainController.get);

export default mainRoutes
