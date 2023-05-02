import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { moviesRepo, moviesResponse } from "../interfaces/movies.interfaces";
import { moviesSchemaResponse } from "../schemas/movies.schema";

const getMoviesService = async (perPage: any, page: any): Promise<moviesResponse> => {
    const movieRepo: moviesRepo =
      AppDataSource.getRepository(Movie);
  
    const take: number = Number(perPage) || 5;
    const skip: number = Number(page) || 1;
  
    const movies: Array<Movie> = await movieRepo.find({
      take,
      skip: (skip - 1) * take,
    });
  
    return moviesSchemaResponse.parse(movies);
  };

  export default getMoviesService


  