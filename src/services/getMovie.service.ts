import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMoviePagination, moviesRepo } from "../interfaces/movies.interfaces";

const getMoviesService = async (
  perPage: number | undefined,
  page: number | undefined,
  order: string | undefined,
  sort: string | undefined
): Promise<IMoviePagination> => {
  const movieRepo: moviesRepo = AppDataSource.getRepository(Movie);
  const take: number = perPage || 5;
  const skip: number = page || 1;
  const sortValue = sort || "id"
  const orderValue = order || "asc"

  console.log(orderValue,sortValue);
  let movies: Array<Movie> | undefined;
  if (!page || !perPage) {
    movies = await movieRepo.find();
  } else {
    movies = await movieRepo.find({
      skip: (skip - 1) * take,
      take,
      order: { [sortValue!]: orderValue!},
    });
  }

  const counter = await movieRepo.findAndCount({
    select: {
      id: true,
    },
  });
  console.log(page, perPage);

  return {
    prevPage: `http://localhost:3000/movies?page=${
      perPage! - 1
    }&perPage=${page}`,
    nextPage: `http://localhost:3000/movies?page=${
      perPage! + 1
    }&perPage=${page}`,
    count: counter[1],
    data: movies,
  };
};

export default getMoviesService;
