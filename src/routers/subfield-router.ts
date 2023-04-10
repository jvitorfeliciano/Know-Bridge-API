import { getSubfieldById, postSubfield } from "@/controllers";
import { optionalToken, validateBody } from "@/middlewares";
import { subfieldSchema } from "@/schemas";
import { Router } from "express";

export const subfieldRouter = Router();

subfieldRouter.post("/", validateBody(subfieldSchema), postSubfield).get("/:subfieldId", optionalToken, getSubfieldById);
