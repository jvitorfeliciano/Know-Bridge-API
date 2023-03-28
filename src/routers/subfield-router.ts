import { validateBody } from "@/middlewares";
import { subfieldSchema } from "@/schemas";
import { Router } from "express";

export const subfieldRouter =  Router();

subfieldRouter.post("/", validateBody(subfieldSchema))