import { SignUpUserSchema } from "@/protocols";
import { authService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function signUp(req: Request, res: Response) {
    const body: SignUpUserSchema = req.body;
    try {
        await authService.signUp(body);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        if (err.name === "ConflictError") {
            return res.status(httpStatus.CONFLICT).send({ message: err.message });
        }
    }
}

export { signUp };
