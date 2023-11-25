import * as express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import { openRouter, protectedRouter } from './routes';
import { authenticateKey } from './middleware';

const app = express();
const port = process.env.SCRAPER_PORT || 5000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-api-key');
    next();
});

app.use(express.json());

app.use('/', openRouter);

app.use(authenticateKey);
app.use('/v1/', protectedRouter);

app.listen(port, () => {
    console.log(`Scraper app listening on port ${port}`);
});
