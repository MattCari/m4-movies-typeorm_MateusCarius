import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";
import { movies, moviesRepo, moviesUpdate } from "../interfaces/movies.interfaces";
import { moviesSchemaUpdateRequest } from "../schemas/movies.schema";

const update = async (
    payload: moviesUpdate,
    id: number
  ): Promise<movies> => {
    const moviesRepo: moviesRepo =
      AppDataSource.getRepository(Movie);

  
    const movie: Movie | null = await moviesRepo.findOneBy({ id });
  
    const updatedMovie: moviesUpdate = moviesRepo.create({
      ...movie,
      ...payload,
    });
    await moviesRepo.save(updatedMovie);
  
    return moviesSchemaUpdateRequest.parse(movie);
  };