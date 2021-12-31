import { Request, Response } from 'express';
import WorkshopModel from 'models/Workshops';

//Obtener todos los talleres
export const getWorkshops = async (req: Request, res: Response) => {

}

//Crear un nuevo taller
export const createWorkshop = async (req: Request, res:Response) => {
    try {
        const workshop = req.body;

        

    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Obtener todos los estudiantes del taller
export const getStudentsWorkshop = async (req: Request, res: Response) => {

}

//Obtener los alumnos que no esten en ese taller para solo agregarlos
export const getStudentsOfOtherWorkshops = async (req: Request, res: Response) => {

}

//Inscribir a alumnos al taller
export const inscriptionsStudentsWorkshop = async (req: Request, res: Response) => {

}

//Agregar un estudiante al taller
export const addStudentWorkshop = async (req: Request, res: Response) => {

}

//Editar alumno de un taller
export const editStudentWorkshop = async (req: Request, res: Response) => {

}

//Obtener asistencias del taller
export const getAssistencesWorkshop = async (req: Request, res: Response) => {

}

//Agregar una asitencia
export const addAssistencesWorkshop = async (req: Request, res: Response) => {

}

//Obtener informacion del taller
export const getInfoWorkShop = async (req: Request, res: Response) => {

}

