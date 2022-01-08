import { Router } from 'express';

const router: Router = Router();

import { createWorkshop, getWorkshops, inscriptionsStudentsWorkshop, getStudentsWorkshop, addAssistencesWorkshop } from '../controllers/Workshop.controller';

router.route('/:idTeacher').post(createWorkshop).get(getWorkshops);

router.route('/:idWorkshop/alumno/:idStudent').post(inscriptionsStudentsWorkshop);

router.route('/:idWorkshop/alumnos').get(getStudentsWorkshop);

router.route('/:idWorkshop/asistencia').post(addAssistencesWorkshop);



export default router;