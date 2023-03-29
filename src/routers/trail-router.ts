import { getTrails, postTrail } from "@/controllers";
import { validateBody } from "@/middlewares";
import { trailSchema } from "@/schemas";
import { Router } from "express";

export const trailRouter = Router();

trailRouter.post("/", validateBody(trailSchema), postTrail).get("/", getTrails);
