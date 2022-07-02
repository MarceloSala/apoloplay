import { Router } from 'express';
import { getUsers } from '../controllers/index';

const router = Router();

router.get('/user', getUsers);

export default router;
