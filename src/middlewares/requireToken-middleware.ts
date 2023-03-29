import { AuthenticatedRequest } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

export function jwtVerify(req: AuthenticatedRequest, res: Response, next: NextFunction, token: string) {
    jwt.verify(token, process.env.JWT_SECRET as string, async (error, decoded: { id: number }) => {
        if (error) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        const session = await userRepository.findSessionById(decoded.id);

        if (!session) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        const user = await userRepository.findUserById(session.userId);

        if (!user) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        req.userId = user.id;
        next();
    });
}

export async function requireToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    try {
        jwtVerify(req, res, next, token);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}
