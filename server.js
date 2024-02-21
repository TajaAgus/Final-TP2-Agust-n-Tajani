import express from "express";
import config from "./config.js";
import RouterLibros from "./router/routerLibros.js";

const app = express();

app.use(express.json());

app.use("/libros", new RouterLibros().start());

const PORT = config.PORT;

const server = app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`)
);

server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
