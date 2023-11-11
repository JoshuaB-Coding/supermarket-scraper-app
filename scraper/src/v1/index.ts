import * as express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORTAL_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/v1/', routes);

app.listen(port, () => {
    console.log(`Scraper app listening on port ${port}`);
});
