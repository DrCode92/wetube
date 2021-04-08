import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";


const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening`);

app.listen(PORT, handleListening);


export default app;