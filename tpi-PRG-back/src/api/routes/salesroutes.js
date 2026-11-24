import { Router } from "express";
import { createSale } from "../controllers/salecontrollers.js";

const router = Router();

router.post("/",createSale);

export default router;