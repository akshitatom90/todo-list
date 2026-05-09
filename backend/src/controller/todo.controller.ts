import { type Request, type Response } from "express";
import { createtodo, deletetodo, gettodos, updatetodos } from "../services/todo.service";


export async function createTodo(req: Request, res: Response) {

    if (!req.user) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    const todocreated = await createtodo({
        title: req.body.title,
        user: req.user
    });

    res.send(todocreated);
}

export async function getTodos(req: Request, res: Response) {

    if(!req.user){
        return res.status(401).send({ message: "Unauthorized" });
    }
    const todos = await gettodos(req.user);
    res.send(todos);
}



export async function updateTodos(req: Request, res: Response) {

    if (!req.user) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    const todoId = req.params.id as string;

    const updatedtodos = await updatetodos({
        title: req.body?.title,
        isCompleted: req.body?.iscompleted,
        user: req.user,
        todoId: todoId
    });

    res.send(updatedtodos);
}


export async function deleteTodo(req: Request, res: Response) {

    if(!req.user){
        return res.status(401).send({ message: "Unauthorized" });
    }

    const todoId = req.params.id as string;

    const deletetodos =  await deletetodo({
        user: req.user,
        todoId: todoId
    })
    res.send(deletetodos);
}
