
import { title } from "process";
import { prisma } from "../config/database";
import type { Todo } from "../generated/prisma/browser";
import type { User } from "../types/express";

interface createDto {
    title: string;
    user: User;
}

export async function createtodo( createDto : createDto) : Promise<Todo> {

    if(!createDto.title){
        throw new Error("Invalid todo data");
    }

    const todo = await prisma.todo.create({
        data: {
            title: createDto.title,
            userId: createDto.user.userId
        }
    })

    return todo;
}


export async function gettodos(user: User) : Promise<Todo[]> { 
    const todos = await prisma.todo.findMany({
        where: {
            userId: user.userId
        },
        orderBy: {
            createdAt : "desc"
        }
    })
    return todos;  
}


interface UpdateTodoDto {
    title?: string;
    isCompleted?: boolean;
    user: User;
    todoId: string;
}

export async function updatetodos(
    updateTodoDto: UpdateTodoDto
): Promise<Todo> {

    if (
        updateTodoDto.title === undefined &&
        updateTodoDto.isCompleted === undefined
    ) {
        throw new Error(`Invalid todo data hello world, ${updateTodoDto}`);
    }

    const updateData: any = {};

    if (updateTodoDto.title !== undefined) {
        updateData.title = updateTodoDto.title;
    }

    if (updateTodoDto.isCompleted !== undefined) {
        updateData.isCompleted = updateTodoDto.isCompleted;
    }

    const updatedtodos = await prisma.todo.update({
        where: {
            id: updateTodoDto.todoId
        },
        data: updateData
    });

    return updatedtodos;
}

interface deleteDto {
    user: User;
    todoId: string;
}

export async function deletetodo(deleteDto: deleteDto) : Promise<Todo> {

    if(!deleteDto.todoId){
        throw new Error("Invalid todo data");
    }

    const deletetodos = await prisma.todo.delete({
        where: {
            id: deleteDto.todoId
        }
    })  

    return deletetodos;
}