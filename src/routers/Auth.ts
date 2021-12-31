import { Router } from 'express';

const router: Router = Router();

import { singIn, singInSimulation } from '../controllers/Auth.controller';

router.post('/', singIn);

router.get('/simulation/:idTeacher', singInSimulation);


export default router;