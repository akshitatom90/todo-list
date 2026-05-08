import { Router } from "express";
import { createTodo, deleteTodo, getTodos } from "../controller/todo.controller";
import { updateTodos } from "../controller/todo.controller";


const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

// router.get("/:id", getTodoById);

router.put("/:id", updateTodos);

router.delete("/:id", deleteTodo);

export default router


    