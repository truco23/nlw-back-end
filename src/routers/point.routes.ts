import InstanceRouterHelpers from "../helpers/InstanceRouterHelpers";
import PointController from "../controllers/PointController";

const pointRoutes = InstanceRouterHelpers.api;
const pointController = new PointController();

pointRoutes.post("/point", pointController.create);

export default pointRoutes;
