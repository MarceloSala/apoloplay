import { Router } from 'express';
import {
  getsongs,
  getsongById,
  createsong,
  updatesongById,
  deletesongById,
} from '../modules/index';

const router = Router();

router.get('/songs', getsongs);
router.get('/song', getsongById);
router.post('/song', createsong);
router.patch('/song', updatesongById);
router.delete('/song', deletesongById);

export default router;
