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
exports.getInfoWorkShop = exports.addAssistencesWorkshop = exports.getAssistencesWorkshop = exports.editStudentWorkshop = exports.addStudentWorkshop = exports.inscriptionsStudentsWorkshop = exports.getStudentsOfOtherWorkshops = exports.getStudentsWorkshop = exports.createWorkshop = exports.getWorkshops = void 0;
const Workshops_1 = __importDefault(require("../models/Workshops"));
const Inscriptions_1 = __importDefault(require("../models/Inscriptions"));
const Assistances_1 = __importDefault(require("../models/Assistances"));
const AssistancesWorkshops_1 = __importDefault(require("../models/AssistancesWorkshops"));
const moment_1 = __importDefault(require("moment"));
//Obtener todos los talleres
const getWorkshops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Populate y Agreggate ???? 
        const workshopsTeacher = yield Workshops_1.default.find().where({ id_user: req.params.idTeacher });
        res.status(200).json({ workshopsTeacher });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: { params: req.params.idTeacher } });
    }
});
exports.getWorkshops = getWorkshops;
//Crear un nuevo taller
const createWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = req.body;
        if (!workshop.nombre || !workshop.fecha_inicio || !workshop.fecha_final || !workshop.horario)
            return res.status(404).json({ message: "Datos incompletos", body: workshop });
        const newWorkshop = new Workshops_1.default(workshop);
        newWorkshop.id_user = req.params.idTeacher;
        yield newWorkshop.save();
        res.status(200).json({ message: "Maestro registrado." });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.createWorkshop = createWorkshop;
//Obtener todos los estudiantes del taller
const getStudentsWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentsWorkshop = yield Inscriptions_1.default.find({
            id_workshop: req.params.idWorkshop
        });
        res.status(200).json({ estudantes: studentsWorkshop });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: { params: req.params.idWorkshop } });
    }
});
exports.getStudentsWorkshop = getStudentsWorkshop;
//Obtener los alumnos que no esten en ese taller para solo agregarlos
const getStudentsOfOtherWorkshops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getStudentsOfOtherWorkshops = getStudentsOfOtherWorkshops;
//Inscribir a alumnos al taller
const inscriptionsStudentsWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = req.params.idWorkshop;
        const student = req.params.idStudent;
        if (!workshop || !student)
            return res.status(404).json({ message: "Datos incompletos.", body: { id_taller: workshop, id_usuario: student } });
        const newInscription = new Inscriptions_1.default({
            id_user: student,
            id_workshop: workshop
        });
        yield newInscription.save();
        res.status(200).json({ message: "Alumno agregado." });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.inscriptionsStudentsWorkshop = inscriptionsStudentsWorkshop;
//Agregar un estudiante al taller
const addStudentWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.addStudentWorkshop = addStudentWorkshop;
//Editar alumno de un taller
const editStudentWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.editStudentWorkshop = editStudentWorkshop;
//Obtener asistencias del taller
const getAssistencesWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Agregar aggregate para que vayan las asistencias
        const assistence = yield Assistances_1.default.find().where({ id_workshop: req.params.idWorkshop });
        res.status(200).json({ asistencias: assistence });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.getAssistencesWorkshop = getAssistencesWorkshop;
//Agregar una asitencia
const addAssistencesWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assistences = req.body.asistencia;
        const workshop = yield Workshops_1.default.findById(req.params.idWorkshop);
        if (!workshop)
            return res.status(404).json({ message: "Datos incompletos", body: assistences, params: req.params.idWorkshop });
        const today = (0, moment_1.default)().format();
        const newAssistence = new Assistances_1.default({
            fecha_asistencia: today,
            id_workshop: workshop._id,
            alumnos_total: assistences.length
        });
        let usersBase = [];
        for (var i = 0; i < assistences.length; i++) {
            const new_assistencia = new AssistancesWorkshops_1.default({
                id_user: assistences[i]._id,
                id_workshop: workshop._id,
                id_teacher: workshop.id_user,
                id_assistence: newAssistence._id,
                assistence: true
            });
            usersBase.push(new_assistencia);
        }
        yield newAssistence.save();
        usersBase.map((user) => __awaiter(void 0, void 0, void 0, function* () { return yield user.save(); }));
        res.status(200).json({ message: "Asistencia agregada." });
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.addAssistencesWorkshop = addAssistencesWorkshop;
//Obtener informacion del taller
const getInfoWorkShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getInfoWorkShop = getInfoWorkShop;
//# sourceMappingURL=Workshop.controller.js.map