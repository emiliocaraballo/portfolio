import { Router } from 'express';
import { projectController } from './controller';
const router: Router = Router();
router.post('/',projectController.create);
export default router;