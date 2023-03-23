import { signUp } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signUpSchema } from "@/schemas";
import { Router } from "express";

export const authRouter = Router();

authRouter.post("/sign-up", validateBody(signUpSchema), signUp);
