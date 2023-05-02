import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  movies,
  moviesRepo,
  moviesRequest,
} from "../interfaces/movies.interfaces";
import { moviesSchema } from "../schemas/movies.schema";

const createMovieService = async (payload: moviesRequest): Promise<movies> => {
  const moviesRepo: moviesRepo = AppDataSource.getRepository(Movie);

  const movies: Movie = moviesRepo.create(payload);
  await moviesRepo.save(movies);

  return moviesSchema.parse(movies);
};

export default createMovieService