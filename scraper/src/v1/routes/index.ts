import * as express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
    res.send('HELLO THERE');
});

export default router;
