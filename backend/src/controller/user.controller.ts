import type { Request, Response } from "express";
import { loginuser, registeruser } from "../services/user.service";

export async function registerUser(req: Request, res: Response) {
    try {
        const message = await registeruser(req.body);
        return res.send({ message });
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const token = await loginuser(req.body);

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

    res.send({ message: 'Login successful' });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
}

export async function isLogedIn(req:Request , res: Response){
    try {
        res.send({ message: 'User is logged in', user: req.user });
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }   
}