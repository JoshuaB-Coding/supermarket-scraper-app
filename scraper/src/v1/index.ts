import * as express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.SCRAPER_PORT || 5000;

app.listen(port, () => {
    console.log(`Scraper app listening on port ${port}`);
});
