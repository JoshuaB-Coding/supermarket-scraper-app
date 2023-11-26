import { Express } from 'express';
import * as request from 'supertest';
import * as dotenv from 'dotenv';
dotenv.config();

export const requestWithoutHeaders = (app: Express) => {
    const get = async (url: string) => request(app).get(url);

    return {
        get,
    };
};

export const requestWithHeaders = (app: Express) => {
    const headers = {
        'x-api-key': process.env.SCRAPER_API_KEY,
    };

    const get = async (url: string) => request(app)
        .get(url)
        .set(headers);
    
    return {
        get,
    };
};
