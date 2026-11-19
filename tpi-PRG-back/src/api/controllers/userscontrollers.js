import bcrypt from "bcrypt";
import usersmodel from "../models/usersmodel.js";

export const createUserAdmin = async (req, res) => {
  try {
    //obtener datos del body
    const { name, email, password } = req.body;

    //validar datos
    if (!name || !email || !password) {
      return res.render("post", {
        title: "crear",
        error: "todos los campos son obligatorios para crear un admin",
      });
    }

    //bcypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //comunicacion bd
    const [rows] = await usersmodel.createUserAdmin(name, email, hashedPassword);

    console.log("creacion nuevo user respuesta bd: ", rows);


    //respuesta
    return res.render("post", {
      title: "Crear",
      exito: "Usuario creado Exitosamente",
    });
  } catch (error) {
    console.log("Error en el registro de usuarios admin: ", error);

    res.status(500).json({
      message: "Error interno del servidor al crear usuario admin",
    });
  }
};
