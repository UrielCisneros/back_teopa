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
exports.singInSimulation = exports.singIn = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Login usuario
const singIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Desctructurar la informacion del body
        const { correo, password } = req.body;
        //Verificar si el usuario existe en la base
        const userBase = yield Users_1.default.findOne().where({ correo: correo });
        if (!userBase)
            return res.status(404).json({ message: "Usuario incorrecto.", body: req.body });
        //Validar la password
        const correctPassowrd = yield userBase.validatePassword(password);
        if (!correctPassowrd)
            return res.status(404).json({ message: "Usuario incorrecto.", body: req.body });
        //Enviar un token
        const token = jsonwebtoken_1.default.sign({
            _id: userBase._id,
            nombre: userBase.nombre,
            domicilio: userBase.domicilio,
            telefono: userBase.telefono,
            correo: userBase.correo,
            fecha_nacimiento: userBase.fecha_nacimiento,
            fecha_de_ingreso: userBase.fecha_de_ingreso,
            grado_estudio: userBase.grado_estudio,
            password: userBase.password,
            admin: userBase.admin,
            rol: userBase.rol,
            edad: userBase.edad
        }, process.env.AUTH_KEY || 'sadf@#$SDA');
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.singIn = singIn;
//Simulacion login maestro
const singInSimulation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userBase = yield Users_1.default.findById(req.params.idTeacher, { password: 0 });
        if (!userBase)
            return res.status(404).json({ message: "Usuario incorrecto.", body: { id_maestro: req.params.idTeacher } });
        const token = jsonwebtoken_1.default.sign({
            _id: userBase._id,
            nombre: userBase.nombre,
            domicilio: userBase.domicilio,
            telefono: userBase.telefono,
            correo: userBase.correo,
            fecha_nacimiento: userBase.fecha_nacimiento,
            fecha_de_ingreso: userBase.fecha_de_ingreso,
            grado_estudio: userBase.grado_estudio,
            password: userBase.password,
            admin: userBase.admin,
            rol: userBase.rol,
            edad: userBase.edad
        }, process.env.AUTH_KEY || 'sadf@#$SDA');
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: { id_maestro: req.params.idTeacher } });
    }
});
exports.singInSimulation = singInSimulation;
//# sourceMappingURL=Auth.controller.js.map