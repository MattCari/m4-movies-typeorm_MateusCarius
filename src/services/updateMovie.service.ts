import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movies, moviesRepo, moviesUpdate } from "../interfaces/movies.interfaces";

const updateMovieService = async (
    payload: moviesUpdate,
    id: number
  ): Promise<movies> => {
    const moviesRepo: moviesRepo =
      AppDataSource.getRepository(Movie);

  
    const movie: Movie | null = await moviesRepo.findOneBy({ id });
  
    const updatedMovie: movies = moviesRepo.create({
      ...movie,
      ...payload,
    });
    await moviesRepo.save(updatedMovie);
  
    return updatedMovie;
  };

  export default updateMovieService