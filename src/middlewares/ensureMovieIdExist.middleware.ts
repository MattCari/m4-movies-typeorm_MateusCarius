import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { moviesRepo } from "../interfaces/movies.interfaces";
import { AppError } from "../errors";

const ensureMovieIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const moviesRepository: moviesRepo = AppDataSource.getRepository(Movie);
  const existingId = moviesRepository.find({
    where: {
      id: Number(id),
    },
  });
  if (!existingId) {
    throw new AppError("Movie not found", 404);
  } else {
    return next();
  }
};

export default ensureMovieIdExistMiddleware
