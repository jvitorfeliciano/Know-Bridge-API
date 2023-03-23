import { SignInUserSchema, SignUpUserSchema } from "@/protocols";
import Joi from "joi";

const signUpSchema = Joi.object<SignUpUserSchema>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const signInSchema = Joi.object<SignInUserSchema>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export { signUpSchema, signInSchema };
