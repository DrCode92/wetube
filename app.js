import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";


const app = express();

// const PORT = 4000;

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
// const handleListening = () => 
//     console.log(`Listening on: http://localhost:${PORT}`);

// function handleHome(req, res) {
//     console.log(req);
//     res.send("Hello from Home!")
// }
// const handleHome = (req, res) => 
//     res.send("Hello from home");

// function handleProfile(req, res) {
//     res.send("You are on my profile");
// }
// const handleProfile = (req, res) => 
//     res.send("You are on my profile");

// const betweenHome = (req, res, next) => {
//     console.log("Between");
//     next();
// };
// app.use(betweenHome);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

// const middleware = (req, res, next) => {
//     res.send("not happening");
// }
// app.get("/", middleware, handleHome);

// app.get("/", handleHome);

// app.get("/profile", handleProfile);

app.use(routes.home, globalRouter);
app.get(routes.users, userRouter);
app.get(routes.videos, videoRouter);

// app.listen(PORT, handleListening);

export default app;