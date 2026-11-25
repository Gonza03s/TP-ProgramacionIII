import { Router } from "express";
import { excelProducts } from "../controllers/exportcontrollers.js";


const router = Router();


router.get("/products",excelProducts);


export default router;