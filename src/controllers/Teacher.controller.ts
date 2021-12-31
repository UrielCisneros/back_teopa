import { Request, Response } from 'express';

import UserModel, {IUser} from '../models/Users';

//Crear amestros
export const createTeacher = async ( req: Request, res: Response ) => {
    try {
        const teacher = req.body;
        const newTeacher: IUser = new UserModel(teacher);
        newTeacher.password = await newTeacher.encryptPassword(newTeacher.password);
        newTeacher.admin = false;
        newTeacher.rol = 'MAESTRO';
        await newTeacher.save();

        res.status(200).json({message: "Maestro registrado."});

    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Obtener maestros
export const getTeachers = async (req: Request, res:Response) => {

}


//Editar maestros


//Elinar maestros

