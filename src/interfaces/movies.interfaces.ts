import { z } from "zod";
import {
  moviesSchema,
  moviesSchemaRequest,
  moviesSchemaResponse,
  moviesSchemaUpdateRequest,
} from "../schemas/movies.schema";
import { Repository } from "typeorm";

type movies = z.infer<typeof moviesSchema>;
type moviesRequest = z.infer<typeof moviesSchemaRequest>;
type moviesUpdate = z.infer<typeof moviesSchemaUpdateRequest>;
type moviesResponse = z.infer<typeof moviesSchemaResponse>;
type moviesRepo = Repository<movies>

export {movies, moviesRequest,moviesResponse,moviesRepo,moviesUpdate}