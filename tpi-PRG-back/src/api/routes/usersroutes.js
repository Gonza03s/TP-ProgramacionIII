import {Router} from "express"
import { createUserAdmin } from "../controllers/userscontrollers.js";

const router = Router();


router.post("/",createUserAdmin)

export default router;
