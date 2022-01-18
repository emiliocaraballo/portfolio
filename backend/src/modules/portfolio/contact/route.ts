import { Router } from 'express';
import { contactController } from './controller';
const router: Router = Router();
router.post('/',contactController.create);
export default router;