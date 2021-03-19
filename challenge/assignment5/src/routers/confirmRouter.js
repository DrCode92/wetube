import express from "express";
import routes from "../routes";
import { confirmAccount } from "../controllers/confirmControllers";

const confirmRouter = express.Router();

confirmRouter.get(routes.confirmAccount, confirmAccount);

export default confirmRouter;