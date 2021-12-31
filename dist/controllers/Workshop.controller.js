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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfoWorkShop = exports.addAssistencesWorkshop = exports.getAssistencesWorkshop = exports.editStudentWorkshop = exports.addStudentWorkshop = exports.inscriptionsStudentsWorkshop = exports.getStudentsOfOtherWorkshops = exports.getStudentsWorkshop = exports.createWorkshop = exports.getWorkshops = void 0;
//Obtener todos los talleres
const getWorkshops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getWorkshops = getWorkshops;
//Crear un nuevo taller
const createWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = req.body;
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor.", error, body: req.body });
    }
});
exports.createWorkshop = createWorkshop;
//Obtener todos los estudiantes del taller
const getStudentsWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getStudentsWorkshop = getStudentsWorkshop;
//Obtener los alumnos que no esten en ese taller para solo agregarlos
const getStudentsOfOtherWorkshops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getStudentsOfOtherWorkshops = getStudentsOfOtherWorkshops;
//Inscribir a alumnos al taller
const inscriptionsStudentsWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getAssistencesWorkshop = getAssistencesWorkshop;
//Agregar una asitencia
const addAssistencesWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.addAssistencesWorkshop = addAssistencesWorkshop;
//Obtener informacion del taller
const getInfoWorkShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getInfoWorkShop = getInfoWorkShop;
//# sourceMappingURL=Workshop.controller.js.map