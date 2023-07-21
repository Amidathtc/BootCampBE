import express, { Application } from "express";

const readPort = process.env.MY_PORT;
const port: number = parseInt(readPort!);

const app: Application = express();

const server = app.listen(process.env.PORT || port, () => {});

process.on("uncaughtException", (error: Error) => {
  console.log("Shutting down server because of uncaughtException Error");
  console.log(error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Shutting down server because of unhandledRejection Error");
  console.log(reason);

  server.close(() => {
    process.exit(1);
  });
});
