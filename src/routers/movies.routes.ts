import { Router } from "express";
import {
  createMovieController,
  readMovieController,
  removeMovieController,
  updatedMovieController,
} from "../controllers/movies.controller";

const movieRoutes: Router = Router();

movieRoutes.post("", createMovieController);
movieRoutes.get("", readMovieController);
movieRoutes.patch("/:id", updatedMovieController);
movieRoutes.delete("/:id", removeMovieController);

export { movieRoutes };
