import { Router } from "express";
import { activateProduct, createProduct, getActiveProducts, getAllProducts, getProductById, modifyProduct, removeProduct } from "../controllers/controllers.js";
import { validateId, validateProducts } from "../middleware/middlewares.js" 


const router = Router();

router.get("/active", getActiveProducts);

router.get("/", getAllProducts);

router.get("/:id", validateId, getProductById);

router.post("/",validateProducts, createProduct);

router.put("/", validateProducts, modifyProduct)

router.delete("/:id",validateId,removeProduct);

router.put("/:id/activar", validateId, activateProduct);

export default router;
