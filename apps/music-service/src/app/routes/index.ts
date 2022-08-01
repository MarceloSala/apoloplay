import { Router } from 'express';
import {
  deletesongById,
  getsongById,
  getsongs,
  createsong,
  updatesongById,
} from 'c:/Users/usuario/Downloads/Proyecto musica/apps/music-service/src/app/modules/index';

const router = Router();

router.get('/songs', getsongs);
router.get('/song', getsongById);
router.post('/song', createsong);
router.patch('/song', updatesongById);
router.delete('/song', deletesongById);

export default router;
