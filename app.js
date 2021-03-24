import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
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

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(function(req,res,next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
})
// middleware 생성 option 1
// app.use((req, res, next) => {
    
// })

// middleware 생성 option 2
// app.use(function(req, res, next) {
        
// })


// const middleware = (req, res, next) => {
//     res.send("not happening");
// }
// app.get("/", middleware, handleHome);

// app.get("/", handleHome);

// app.get("/profile", handleProfile);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.get(routes.videos, videoRouter);

// app.listen(PORT, handleListening);

export default app;