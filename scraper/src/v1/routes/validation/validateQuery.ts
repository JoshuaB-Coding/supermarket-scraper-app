import { NextFunction, Request, Response } from "express";

export default (queryName: String, opts?) => (req: Request, res: Response, next: NextFunction) => {
    const queryKeys = Object.keys(req.query);
    if (queryKeys.length === 0) {
        return res.status(422).send({
            error: `Expected query ${queryName} but found no query parameters in request`,
        });
    }

    const queryExists = queryKeys.some((key) => key === queryName);
    if (!queryExists) {
        return res.status(422).send({
            error: `Expected query ${queryName} but found the following queries in request: ${queryKeys}`,
        });
    }

    next();
};