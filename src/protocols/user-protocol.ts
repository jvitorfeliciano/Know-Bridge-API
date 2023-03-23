import { User } from "@prisma/client";

type SignUpUserSchema = Omit<User, "id" | "createdAt">;

export { SignUpUserSchema };
