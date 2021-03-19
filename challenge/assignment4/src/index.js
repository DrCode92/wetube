import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 4000;

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
const handleListening = () => 
    console.log(`Listening`);


const handleHome = (req, res) => res.send("Welcome home");
const handleAboutUs = (req, res) => res.send("About-us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected Page");

// Codesanbox does not need PORT :)

const betweenGlobal = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};
app.use(betweenGlobal);


app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);

const middleware = (req, res, next) => {
    res.redirect("/");
}
app.get("/protected", middleware, handleProtected);



app.listen(PORT, handleListening);