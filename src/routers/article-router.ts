import { postArticle } from "@/controllers";
import { validateBody } from "@/middlewares";
import { articleSchema } from "@/schemas";
import { Router } from "express";

export const articleRouter = Router();

articleRouter.post("/", validateBody(articleSchema), postArticle);
