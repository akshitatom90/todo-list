import { prisma } from "../config/database";
import jwt from "jsonwebtoken";


interface UserDto {
    email: string;
    name: string;
    password: string;
}

export async function registeruser(userDto: UserDto): Promise<string>{

    if(!userDto.email || !userDto.name || !userDto.password){
        throw new Error("Invalid user data");
    }

    const user = await prisma.user.findUnique({
        where: {
            email: userDto.email
        }
    })

    if(user){
        throw new Error("User already exists");
    }

    const newUser = await prisma.user.create({
        data: {
            email: userDto.email,
            name: userDto.name,
            password: userDto.password
        }
    })

    return "user created successfully";
}


interface loginDto {
    email: string;
    password: string;
}


export async function loginuser(loginDto: loginDto) : Promise<string> {
    if(!loginDto.email || !loginDto.password){
        throw new Error("Invalid user data");
    }

    const existingUser = await prisma.user.findUnique({
        where:{
            email : loginDto.email
        }
    })

    if(!existingUser){
        throw new Error("not matching crendentials")
    }

    if(existingUser.password !== loginDto.password){
        throw new Error("not matching crendentials")
    }

    const token = jwt.sign({ userId: existingUser.id, userName: existingUser.name, userEmail: existingUser.email }, "akshita");

    return token;
}