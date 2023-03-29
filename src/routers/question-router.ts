import { postQuestion } from "@/controllers";
import { validateBody } from "@/middlewares";
import { questionSchema } from "@/schemas";
import { Router } from "express";

export const questionRouter = Router();

questionRouter.post("/", validateBody(questionSchema), postQuestion);
