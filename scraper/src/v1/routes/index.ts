import * as express from 'express';
import icelandRoutes from './iceland.route';

const openRouter = express.Router();

openRouter.get('/', (req, res) => {
    res.status(200).send('Hello world!');
});

const protectedRouter = express.Router();

protectedRouter.use('/iceland/', icelandRoutes);

export {
    openRouter,
    protectedRouter,
};
