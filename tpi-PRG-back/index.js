import express from "express";
import cors from "cors";
import environments from "./src/api/config/environments.js";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";

import { __dirname, join } from "./src/api/utils/index.js";

const app = express();
const PORT = environments.port;

//  EJS como motor de plantillas
app.set("view engine", "ejs");

// carpeta donde buscar las vistas
app.set("views", join(__dirname, "src/views"));

// habilita la carpeta de archivos estáticos
app.use(express.static(join(__dirname, "src/public")));

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/dashboard", viewRoutes);

app.get("/", (_, res) => {
  res.send("Ruta por defecto");
});

app.listen(PORT, () =>
  console.log(`Servidor encendido: http://localhost:${PORT}`),
);
