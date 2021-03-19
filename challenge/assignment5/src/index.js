import express from "express";
import homeRouter from "./routers/homeRouter";
import joinRouter from "./routers/joinRouter";
import confirmRouter from "./routers/confirmRouter";
import coursesRouter from "./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";

const app = express();

const PORT = 4000;

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
const handleListening = () => 
    console.log(`Listening`);


// app.get("/", (req, res) => res.send("Home"));

app.use(routes.home, homeRouter);
app.use(routes.home, joinRouter);
app.use(routes.home, confirmRouter);
app.use(routes.home, coursesRouter);
app.use(routes.home, apiRouter);


app.listen(PORT, handleListening);


export default app;