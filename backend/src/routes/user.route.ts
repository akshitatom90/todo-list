import { Router } from "express";
import { loginUser, registerUser, isLogedIn } from "../controller/user.controller";
import { authmiddle } from "../middleware/auth.middleware";


const router = Router();

router.get("/islogedin",authmiddle, isLogedIn);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;