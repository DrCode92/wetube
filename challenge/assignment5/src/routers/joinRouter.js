import express from "express";
import routes from "../routes";
import { join, login } from "../controllers/joinControllers";

const joinRouter = express.Router();

joinRouter.use(routes.join, join);
joinRouter.get(routes.login, login);

export default joinRouter;