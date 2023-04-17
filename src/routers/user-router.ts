import { getUserCourses } from "@/controllers/user-controller";
import { requireToken } from "@/middlewares";
import { Router } from "express";

export const userRouter = Router();

userRouter.get("/:userName", requireToken, getUserCourses);
