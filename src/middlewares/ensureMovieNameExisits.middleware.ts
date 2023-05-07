import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";
import { moviesRepo } from "../interfaces/movies.interfaces";

const ensureMovieNameExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const moviesRepository: moviesRepo = AppDataSource.getRepository(Movie);
  const { name } = req.body;
  const existingMovie = await moviesRepository.find({
    where: {
      name: name,
    },
  });

  if (existingMovie) {
    throw new AppError("movie already exists", 409);
  } else {
    return next();
  }
};

export default ensureMovieNameExistMiddleware;
