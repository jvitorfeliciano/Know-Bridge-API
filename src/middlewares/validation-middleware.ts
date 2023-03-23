import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function validateBody(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req["body"], { abortEarly: false });

        if (!error) {
            next();
        } else {
            const errors = error.details.map((error) => error.message);

            res.status(httpStatus.BAD_REQUEST).send({ errors });
        }
    };
}
