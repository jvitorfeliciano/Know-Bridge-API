import { SignInUserSchema, SignUpUserSchema } from "@/protocols";
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
            return res.status(httpStatus.CONFLICT).send({ errors: [err.message] });
        }
    }
}

async function signIn(req: Request, res: Response) {
    const body: SignInUserSchema = req.body;
    try {
        const token = await authService.signIn(body);

        res.status(httpStatus.OK).send({ token });
    } catch (err) {
        if (err.name === "InvalidCredentialsError") {
            return res.status(httpStatus.UNAUTHORIZED).send({ errors: [err.message] });
        }
    }
}
export { signUp, signIn };
