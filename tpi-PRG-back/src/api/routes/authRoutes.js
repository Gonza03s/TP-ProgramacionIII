import { Router } from "express";
import { loginUserAdmin, logoutUserAdmin, vistaLogin } from "../controllers/authcontrollers.js";

const router = Router();

router.get("/", vistaLogin); // desde la raiz siempre redirigir a login
router.get("/login", vistaLogin);


//login
router.post("/login", loginUserAdmin);
router.post("/logout", logoutUserAdmin)
export default router;
