import { SignUpUserSchema } from "@/protocols";
import { User } from "@prisma/client";
import Joi from "joi";

export const signUpSchema = Joi.object<SignUpUserSchema>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
