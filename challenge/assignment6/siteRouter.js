import express from "express";
import routes from "./routes";
import { home, login, photos, profile } from "./routerControllers.js";

const siteRouter = express.Router();

siteRouter.get(routes.home, home);
siteRouter.get(routes.login, login);
siteRouter.get(routes.photos, photos);
siteRouter.get(routes.profile, profile);

export default siteRouter;