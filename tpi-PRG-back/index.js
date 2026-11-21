import express from "express";
import cors from "cors";
import environments from "./src/api/config/environments.js";
import { productRoutes, viewRoutes,authRoutes, usersRoutes } from "./src/api/routes/index.js";
import { __dirname, join } from "./src/api/utils/index.js";
import session from "express-session";


//config
const app = express();
const PORT = environments.port;
const {session_key}= environments

app.set("view engine", "ejs"); //  EJS como motor de plantillas
app.set("views", join(__dirname, "src/views")); // carpeta donde buscar las vistas


//middlewares
app.use(cors());

app.use(express.json());

app.use(express.static(join(__dirname, "src/public"))); // habilita la carpeta de archivos estáticos

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret:session_key,
    resave:false,
    saveUninitialized:true
  }
))


//rutas

app.use("/api/products", productRoutes);

app.use("/api/users", usersRoutes);

app.use("/dashboard", viewRoutes);

app.use("/", authRoutes);






app.listen(PORT, () =>
  console.log(`Servidor encendido: http://localhost:${PORT}`),
);