import { AuthenticatedRequest } from "@/protocols";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import { jwtVerify } from "./requireToken-middleware";

export async function optionalToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");
    
    if (token) {
        try {
            jwtVerify(req, res, next, token);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
        }
    } else {
        next();
    }
}
