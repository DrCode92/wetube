import express from "express";
import routes from "../routes";
import { api, apiBuy, apiRefund, apiRemove, apiEdit } from "../controllers/apiControllers.js";

const apiRouter = express.Router();

apiRouter.get(routes.api, api);
apiRouter.get(routes.apiBuy, apiBuy);
apiRouter.get(routes.apiRefund, apiRefund);
apiRouter.get(routes.apiRemove, apiRemove);
apiRouter.get(routes.apiEdit, apiEdit);

export default apiRouter;
