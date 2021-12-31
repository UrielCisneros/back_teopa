import { Router } from 'express';

const router: Router = Router();

import { createWorkshop } from '../controllers/Workshop.controller';

router.post('/', createWorkshop);

export default router;