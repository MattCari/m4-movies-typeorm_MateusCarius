import { Router } from "express";
import { createMovieController, readMovieController } from "../controllers/movies.controller";

const movieRoutes: Router = Router()

movieRoutes.post("",createMovieController)
movieRoutes.get("",readMovieController)
movieRoutes.patch("")
movieRoutes.delete("")

export {movieRoutes}