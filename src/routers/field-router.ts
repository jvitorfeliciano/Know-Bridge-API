import { validateBody } from "@/middlewares";
import { Router } from "express";
import { fieldSchema } from "@/schemas";
import { postField } from "@/controllers";

export const fieldRouter = Router();

fieldRouter.post("/", validateBody(fieldSchema), postField);
