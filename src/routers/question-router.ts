import { postQuestion, validateQuestionAnswer } from "@/controllers";
import { optionalToken, validateBody } from "@/middlewares";
import { questionSchema } from "@/schemas";
import { Router } from "express";

export const questionRouter = Router();

questionRouter
    .post("/", validateBody(questionSchema), postQuestion)
    .post("/answer/:answerId", optionalToken, validateQuestionAnswer);
