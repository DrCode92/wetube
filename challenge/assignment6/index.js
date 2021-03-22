import express from "express";
import path from "path";
import { localsMiddleware } from "./middlewares";
import siteRouter from "./siteRouter";
import routes from "./routes";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const PORT = 4000;

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
const handleListening = () => 
    console.log(`Listening`);


// app.get("/", (req, res) => res.send("Home"));

app.use(localsMiddleware);

app.use(routes.home, siteRouter);


app.listen(PORT, handleListening);


export default app;