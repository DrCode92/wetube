import express from "express";
import routes from "../routes";
import { courses, courseNew, courseMine } from "../controllers/coursesControllers";

const coursesRouter = express.Router();

coursesRouter.get(routes.courses, courses);
coursesRouter.get(routes.courseNew, courseNew);
coursesRouter.get(routes.courseMine, courseMine);

export default coursesRouter;