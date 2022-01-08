import { Router } from 'express';

const router: Router = Router();

import { createTeacher, getTeachers } from '../controllers/Teacher.controller';

router.post('/',createTeacher);

router.get('/', getTeachers);


export default router;