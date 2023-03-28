import { validateBody } from "@/middlewares";
import { Router } from "express";
import { fieldSchema } from "@/schemas";

export const fieldRouter = Router();

fieldRouter.post("/", validateBody(fieldSchema));
