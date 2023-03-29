import { User } from "@prisma/client";
import { Request } from "express";

type SignUpUserSchema = Omit<User, "id" | "createdAt">;

type SignInUserSchema = Pick<User, "email" | "password">;

type JWTPayload = {
    userId: number;
};

type AuthenticatedRequest = Request & JWTPayload;

export { SignUpUserSchema, SignInUserSchema, AuthenticatedRequest };
