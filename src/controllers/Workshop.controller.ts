import { Request, Response } from 'express';
import WorkshopModel, { IWorkShop } from '../models/Workshops';
import InscriptionsModel, { IInscription } from '../models/Inscriptions';
import AssistancesModel from '../models/Assistances';
import AssistancesWorkshopModel from '../models/AssistancesWorkshops';
import moment from 'moment';

//Obtener todos los talleres
export const getWorkshops = async (req: Request, res: Response) => {
    try {
        //Populate y Agreggate ???? 
        const workshopsTeacher = await WorkshopModel.find().where({ id_user: req.params.idTeacher });
        res.status(200).json({workshopsTeacher})
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: { params: req.params.idTeacher }});
    }
}

//Crear un nuevo taller
export const createWorkshop = async (req: Request, res:Response) => {
    try {
        const workshop = req.body;
        if(!workshop.nombre || !workshop.fecha_inicio || !workshop.fecha_final || !workshop.horario) return res.status(404).json({message: "Datos incompletos", body: workshop});
        const newWorkshop: IWorkShop = new WorkshopModel(workshop);
        newWorkshop.id_user = req.params.idTeacher;
        await newWorkshop.save();
        res.status(200).json({message: "Maestro registrado."});
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Obtener todos los estudiantes del taller
export const getStudentsWorkshop = async (req: Request, res: Response) => {
    try {
        const studentsWorkshop = await InscriptionsModel.find({
            id_workshop: req.params.idWorkshop
        });
        res.status(200).json({estudantes: studentsWorkshop});
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: {params: req.params.idWorkshop}});
    }
}

//Obtener los alumnos que no esten en ese taller para solo agregarlos
export const getStudentsOfOtherWorkshops = async (req: Request, res: Response) => {

}

//Inscribir a alumnos al taller
export const inscriptionsStudentsWorkshop = async (req: Request, res: Response) => {
    try {
        const workshop = req.params.idWorkshop;
        const student = req.params.idStudent;
        if(!workshop || !student) return res.status(404).json({message: "Datos incompletos.", body: { id_taller: workshop, id_usuario: student }});
        const newInscription = new InscriptionsModel({
            id_user: student,
            id_workshop: workshop
        });
        await newInscription.save();
        res.status(200).json({message: "Alumno agregado."});
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Agregar un estudiante al taller
export const addStudentWorkshop = async (req: Request, res: Response) => {

}

//Editar alumno de un taller
export const editStudentWorkshop = async (req: Request, res: Response) => {

}

//Obtener asistencias del taller
export const getAssistencesWorkshop = async (req: Request, res: Response) => {
    try {
        //Agregar aggregate para que vayan las asistencias
        const assistence = await AssistancesModel.find().where({id_workshop: req.params.idWorkshop});
        res.status(200).json({asistencias: assistence});
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Agregar una asitencia
export const addAssistencesWorkshop = async (req: Request, res: Response) => {
    try {
        const assistences = req.body.asistencia;
        const workshop = await WorkshopModel.findById(req.params.idWorkshop);
        if(!workshop) return res.status(404).json({message: "Datos incompletos", body: assistences, params: req.params.idWorkshop });
        const today = moment().format();
        const newAssistence = new AssistancesModel({
            fecha_asistencia: today,
            id_workshop: workshop._id,
            alumnos_total: assistences.length
        });
        let usersBase = [];
        for(var i = 0; i < assistences.length; i++){
            const new_assistencia = new AssistancesWorkshopModel({
                id_user: assistences[i]._id,
                id_workshop: workshop._id,
                id_teacher: workshop.id_user,
                id_assistence: newAssistence._id,
                assistence: true
            });
            usersBase.push(new_assistencia);
        }
        await newAssistence.save();
        usersBase.map(async user => await user.save());
        res.status(200).json({message: "Asistencia agregada."});
    } catch (error) {
        res.status(500).json({message: "Error del servidor.", error, body: req.body});
    }
}

//Obtener informacion del taller
export const getInfoWorkShop = async (req: Request, res: Response) => {

}

