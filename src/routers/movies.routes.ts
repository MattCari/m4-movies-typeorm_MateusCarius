import { Router } from "express";
import {
  createMovieController,
  readMovieController,
  removeMovieController,
  updatedMovieController,
} from "../controllers/movies.controller";
import ensureMovieNameExistMiddleware from "../middlewares/ensureMovieNameExisits.middleware";
import validateBodyMiddleware from "../middlewares/validateBody.middleware";
import { moviesSchemaRequest } from "../schemas/movies.schema";
import { moviesSchemaUpdateRequest } from "../schemas/movies.schema";
import ensureMovieIdExistMiddleware from "../middlewares/ensureMovieIdExist.middleware";

const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  validateBodyMiddleware(moviesSchemaRequest),
  ensureMovieNameExistMiddleware,
  createMovieController
);
movieRoutes.get("", readMovieController);
movieRoutes.patch(
  "/:id",
  ensureMovieIdExistMiddleware,
  validateBodyMiddleware(moviesSchemaUpdateRequest),
  ensureMovieNameExistMiddleware,
  updatedMovieController
);
movieRoutes.delete("/:id", ensureMovieIdExistMiddleware, removeMovieController);

export { movieRoutes };
