import * as express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.SCRAPER_PORT || 5000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key');
    next();
});

app.use((req, res, next) => {
    const apiKey = req.get('API-Key');
    if (!apiKey || apiKey !== process.env.SCRAPER_API_KEY) {
        return res.status(401).json({ error: 'Unauthorised' });
    }
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/v1/', routes);

app.listen(port, () => {
    console.log(`Scraper app listening on port ${port}`);
});
