import { Request, Response } from 'express';
import UserModel from '../models/Users';

import jwt from 'jsonwebtoken';

//Login usuario
export const singIn = async (req: Request, res: Response) => {
    try {
        //Desctructurar la informacion del body
        const { correo, password } = req.body;
        //Verificar si el usuario existe en la base
        const userBase = await UserModel.findOne().where({correo: correo})
        if(!userBase) return res.status(404).json({message: "Usuario incorrecto.", body: req.body});
        //Validar la password
        const correctPassowrd: boolean = await userBase.validatePassword(password);
        if(!correctPassowrd)return res.status(404).json({message: "Usuario incorrecto.", body: req.body});
        //Enviar un token
        const token: string = jwt.sign({
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
        },process.env.AUTH_KEY || 'sadf@#$SDA');
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Simulacion login maestro
export const singInSimulation = async (req:Request, res: Response) => {
    try {
        const userBase = await UserModel.findById(req.params.idTeacher,{password: 0});
        if(!userBase) return res.status(404).json({message: "Usuario incorrecto.", body: {id_maestro: req.params.idTeacher}});
        const token: string = jwt.sign({
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
        },process.env.AUTH_KEY || 'sadf@#$SDA');
        res.status(200).json({token});

    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: {id_maestro: req.params.idTeacher}});
    }
}