import { User } from "@prisma/client";

type SignUpUserSchema = Omit<User, "id" | "createdAt">;

type SignInUserSchema = Pick<User, "email" | "password">;

export { SignUpUserSchema, SignInUserSchema };
