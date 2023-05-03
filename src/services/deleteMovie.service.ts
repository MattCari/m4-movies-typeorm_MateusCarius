import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";
import {moviesRepo } from "../interfaces/movies.interfaces";

const deleteMovieService = async (id: number): Promise<void> => {
  const moviesRepo: moviesRepo = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await moviesRepo.findOneBy({ id });
 
  if (!movie) {
    throw new AppError("movie not found", 404);
  }

  await moviesRepo.remove(movie);
};

export default deleteMovieService