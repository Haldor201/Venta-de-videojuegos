import {Router} from "express";
import {login,register,logout,verifyToken,profile} from "../controllers/auth.controller.js"
import { loginSchema,registerSchema } from "../schemas/auth.schemas.js";
import { validateSchema } from "../middlewares/validateAuth.js";
import { authRequired } from "../middlewares/validateToken.js";
const router=Router();

router.post("/login",validateSchema(loginSchema),login);
router.post("/register",validateSchema(registerSchema),register);
router.post("/logout",logout)
router.post("/verify",verifyToken)
router.post("/profile",authRequired,profile)

export default router;