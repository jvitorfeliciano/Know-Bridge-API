import { validateBody } from "@/middlewares";
import { disciplineSchema } from "@/schemas";
import { Router } from "express";

export const disciplineRouter = Router();

disciplineRouter.post("/", validateBody(disciplineSchema));
