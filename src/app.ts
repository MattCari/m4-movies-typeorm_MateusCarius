import "express-async-errors";
import 'reflect-metadata'
import express, { Application, json } from "express";
import { movieRoutes } from "./routers/movies.routes";
import { handleErros } from "./errors";

const app: Application = express();
app.use(json());
app.use('/movies', movieRoutes)
app.use(handleErros)

export default app;
