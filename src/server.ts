import app from "./app";
import { AppDataSource } from "./data-source";

const port: number = Number(process.env.PORT) || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => console.log(err));