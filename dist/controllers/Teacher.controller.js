"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeachers = exports.createTeacher = void 0;
const Users_1 = __importDefault(require("../models/Users"));
//Crear amestros
const createTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = req.body;
        const newTeacher = new Users_1.default(teacher);
        newTeacher.password = yield newTeacher.encryptPassword(newTeacher.password);
        newTeacher.admin = false;
        newTeacher.rol = 'MAESTRO';
        yield newTeacher.save();
        res.status(200).json({ message: "Maestro registrado." });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.createTeacher = createTeacher;
//Obtener maestros
const getTeachers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield Users_1.default.find().where({ rol: 'MAESTRO' });
        res.status(200).json({ maestros: teachers });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error });
    }
});
exports.getTeachers = getTeachers;
//Editar maestros
//Elinar maestros
//# sourceMappingURL=Teacher.controller.js.map