import * as express from 'express';

import { openRouter, protectedRouter } from './routes';
import { authenticateKey } from './middleware';

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-api-key');
    next();
});

app.use(express.json());

app.use('/', openRouter);

app.use(authenticateKey);
app.use('/v1/', protectedRouter);

export default app;
