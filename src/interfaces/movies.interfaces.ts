import { z } from "zod";
import {
  moviesSchema,
  moviesSchemaRequest,
  moviesSchemaResponse,
  moviesSchemaUpdateRequest,
} from "../schemas/movies.schema";
import { DeepPartial, Repository } from "typeorm";

type movies = z.infer<typeof moviesSchema>;
type moviesRequest = z.infer<typeof moviesSchemaRequest>;
type moviesUpdate = DeepPartial<moviesRequest>
type moviesResponse = z.infer<typeof moviesSchemaResponse>;
type moviesRepo = Repository<movies>

interface IMoviePagination {
  prevPage: string | null
  nextPage: string | null
  count: number,
  data: moviesResponse
}

export {movies, moviesRequest,moviesResponse,moviesRepo,moviesUpdate,IMoviePagination}