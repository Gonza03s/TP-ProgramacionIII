import { Router } from "express";
import {
  vistaConsultar,
  vistaCrear,
  vistaEliminar,
  vistaModificar,
  vistaProductos,
} from "../controllers/viewcontrollers.js";

const router = Router();

router.get("/principal", vistaProductos);
router.get("/consultar", vistaConsultar);
router.get("/crear", vistaCrear);
router.get("/modificar", vistaModificar);
router.get("/eliminar", vistaEliminar);

export default router;
