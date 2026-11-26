import { Router } from "express";
import { requiredLogin } from "../middleware/middlewares.js";
import {
  vistaConsultar,
  vistaCrear,
  vistaEliminar,
  vistaModificar,
  vistaProductos,
} from "../controllers/viewcontrollers.js";

const router = Router();

router.get("/principal", requiredLogin, vistaProductos);
router.get("/consultar", requiredLogin, vistaConsultar);
router.get("/crear", requiredLogin, vistaCrear);

router.get("/modificar", requiredLogin, vistaModificar);
router.get("/modificar/:id", requiredLogin, vistaModificar);

router.get("/eliminar", requiredLogin, vistaEliminar);

export default router;
