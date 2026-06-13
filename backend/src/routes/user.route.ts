import { Router } from "express";
import { loginUser, registerUser, isLogedIn, logoutUser } from "../controller/user.controller";
import { authmiddle } from "../middleware/auth.middleware";


const router = Router();

router.get("/islogedin",authmiddle, isLogedIn);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout" , logoutUser);


export default router;