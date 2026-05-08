// main router


import { Router } from "express";
import userRoute from "./user.route";
import todoRoute from "./todo.route";
import { authmiddle } from "../middleware/auth.middleware";

const router = Router();

router.use("/user", userRoute);

router.use("/todo", authmiddle,  todoRoute);

export default router;