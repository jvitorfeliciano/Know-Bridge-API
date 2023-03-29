import { getTrails, postTrail, postUserEnrollmentOnTrail } from "@/controllers";
import { optionalToken, requireToken, validateBody } from "@/middlewares";
import { trailSchema } from "@/schemas";
import { Router } from "express";

export const trailRouter = Router();

trailRouter
    .post("/", validateBody(trailSchema), postTrail)
    .get("/", optionalToken, getTrails)
    .post("/users/:trailId", requireToken, postUserEnrollmentOnTrail);
