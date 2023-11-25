import { Request, Response, NextFunction } from "express";

export const authenticateKey = (req: Request, res: Response, next: NextFunction) => {
    const xApiKey = req.get('x-api-key');
    if (xApiKey === process.env.SCRAPER_API_KEY) {
        return next();
    }
    return res.status(401).send({ error: 'Unauthorised' });
};
