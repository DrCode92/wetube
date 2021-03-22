import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Peter's Site";
    res.locals.routes = routes;
    next();
}