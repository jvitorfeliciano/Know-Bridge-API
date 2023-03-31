import {
    deleteUserEnrollmentOnTrail,
    getTrailById,
    getTrails,
    postTrail,
    postUserEnrollmentOnTrail,
} from "@/controllers";
import { optionalToken, requireToken, validateBody } from "@/middlewares";
import { trailSchema } from "@/schemas";
import { Router } from "express";

export const trailRouter = Router();

trailRouter
    .post("/", validateBody(trailSchema), postTrail)
    .get("/", optionalToken, getTrails)
    .get("/:trailId", optionalToken, getTrailById)
    .post("/users/:trailId", requireToken, postUserEnrollmentOnTrail)
    .delete("/users/:trailId", requireToken, deleteUserEnrollmentOnTrail);
