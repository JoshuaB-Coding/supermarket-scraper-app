import * as express from 'express';
import icelandRoutes from './iceland.route';

const router = express.Router();

router.use('/iceland/', icelandRoutes);

export default router;
