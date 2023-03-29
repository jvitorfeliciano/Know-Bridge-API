import { validateBody } from "@/middlewares";
import { videoSchema } from "@/schemas";
import { Router } from "express";

export const videoRouter = Router();

videoRouter.post("/", validateBody(videoSchema));
