import { Router } from 'express';

const router: Router = Router();

import { createTeacher } from '../controllers/Teacher.controller';

router.post('/',createTeacher);


export default router;