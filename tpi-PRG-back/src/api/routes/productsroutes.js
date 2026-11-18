import { Router } from "express";
import { createProduct, getAllProducts, getProductById, modifyProduct, removeProduct } from "../controllers/controllers.js";
import { validateId, validateProducts } from "../middleware/middlewares.js" 


const router = Router();

router.get("/", getAllProducts);

router.get("/:id", validateId, getProductById);

router.post("/",validateProducts, createProduct);

router.put("/", validateProducts, modifyProduct)

router.delete("/:id",validateId,removeProduct);


export default router;
