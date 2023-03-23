import { signIn, signUp } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema, signUpSchema } from "@/schemas";
import { Router } from "express";

export const authRouter = Router();

authRouter.post("/sign-up", validateBody(signUpSchema), signUp).post("/sign-in", validateBody(signInSchema), signIn);
