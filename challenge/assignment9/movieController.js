import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
  } from "./db";
  
  export const home = (req, res) => {
      const movies = getMovies();
      res.render("movies", {pageTitle: "Join", movies});
      console.log(movies);
  };
  export const movieDetail = (req, res) => {};
  export const filterMovie = (req, res) => {};
  