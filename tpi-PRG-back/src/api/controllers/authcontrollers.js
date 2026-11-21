import usersmodel from "../models/usersmodel.js";
import bcrypt from "bcrypt";

export const vistaLogin = (req, res) => {
  res.render("login", {
    title: "Vista - Login",
    about: "Iniciar sesion",
  });
};

export const loginUserAdmin = async (req, res) => {
  try {
    //tomar datos del form
    const { email, password } = req.body;

    //validar datos vacios y mostrar nuevamente vista en caso de error
    if (!email || !password) {
      return res.render("login", {
        title: "login admin",
        about: "iniciar sesion",
        error: "Todos los campos son obligatorios",
      });
    }

    //comunicacion con la bd
    const [rows] = await usersmodel.selectAdmUser(email);

    //validacion user adm
    if (rows.length === 0) {
      return res.render("login", {
        title: "login admin",
        about: "iniciar sesion",
        error: "no existe usuario admin",
      });
    }

    // [ { id: 1, name: 'test', email: 'test@test.com', password: 'test' } ]
    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      //guardar sesion
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      //redirijo
      return res.redirect("/dashboard/principal");
    } else {
      return res.render("login", {
        title: "login admin",
        about: "iniciar sesion",
        error: "contraseña incorrecta",
      });
    }
  } catch (error) {
    console.log("Error en el login: ", error);

    res.status(500).json({
      message: "Error interno del servidor al hacer login",
    });
  }
};

export const logoutUserAdmin = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log("error al destruir la sesion", error);
      return res.status(500).json({
        message: "Error la destruir la sesion",
      });
    }

    res.redirect("/login"); //eliminacion exitosa redirige a login
  });
};
