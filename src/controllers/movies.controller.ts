import { Request, Response } from "express";
import { movies, moviesResponse } from "../interfaces/movies.interfaces";
import createMovieService from "../services/createMovie.service";
import getMoviesService from "../services/getMovie.service";
import updateMovieService from "../services/updateMovie.service";
import deleteMovieService from "../services/deleteMovie.service";

const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  const createMovie: movies = await createMovieService(body);

  return res.status(201).json(createMovie);
};

const readMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { perPage, page } = req.query;

  const movies: moviesResponse = await getMoviesService(perPage, page);

  return res.status(200).json(movies);
};

const updatedMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const { id } = req.params;
  const updatedMovie = await updateMovieService(data, Number(id));

  return res.status(200).json(updatedMovie);
};

const removeMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {id} = req.params
  const deletedMovie = await deleteMovieService(~~id)

  return res.status(200).json()
};

export { createMovieController, readMovieController, updatedMovieController, removeMovieController };
