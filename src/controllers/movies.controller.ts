import { Request, Response } from "express";
import { movies, moviesResponse } from "../interfaces/movies.interfaces";
import createMovieService from "../services/createMovie.service";
import getMoviesService from "../services/getMovie.service";

const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  const createdWorkOrder: movies = await createMovieService(body);

  return res.status(201).json(createdWorkOrder);
};

const readMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { perPage, page } = req.query;

  const movies: moviesResponse = await getMoviesService(perPage, page);

  return res.status(200).json(movies);
};

export {createMovieController,readMovieController}