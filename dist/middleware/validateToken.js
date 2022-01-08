"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenValidation = (req, res, next) => {
    const token = req.header("Autentication");
    if (!token)
        return res.status(401).json({ message: "Acceso denegado" });
    const payload = jsonwebtoken_1.default.verify(token, process.env.AUTH_KEY || "token");
    if (!payload)
        return res.status(401).json({ message: "Acceso denegado" });
    next();
};
exports.TokenValidation = TokenValidation;
//# sourceMappingURL=validateToken.js.map