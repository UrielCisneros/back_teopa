import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

export const TokenValidation = (req: Request,res: Response,next: NextFunction) => {
    const token = req.header("Autentication");
    if(!token) return res.status(401).json({message: "Acceso denegado"});
    const payload = jwt.verify(token, process.env.AUTH_KEY || "token");
    if(!payload) return res.status(401).json({message: "Acceso denegado"});
    next();
}