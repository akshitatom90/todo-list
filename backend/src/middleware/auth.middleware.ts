import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function authmiddle(req : Request, res: Response, next: NextFunction   ) {
    const token = req.cookies.token;

    console.log("Token from cookie:", token);

    if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    
    jwt.verify(token, "akshita", (err : any, decoded : any) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        req.user = decoded;

        next();
    });
}

