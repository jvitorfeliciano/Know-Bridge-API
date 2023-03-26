import { conflictError, invalidCredentialsError } from "@/errors";
import { SignInUserSchema, SignUpUserSchema } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function checkUserNameExistance(userName: string) {
    const user = await userRepository.findUserByUserName(userName);

    if (user) {
        throw conflictError("Username já cadastrado!");
    }
}

async function checkEmailExistence(email: string) {
    const user = await userRepository.findUserByEmail(email);

    if (user) {
        throw conflictError("Email já cadastrado");
    }

    return user;
}

async function signUp(object: SignUpUserSchema) {
    await checkUserNameExistance(object.userName);
    await checkEmailExistence(object.email);

    const encryptedPassword = bcrypt.hashSync(object.password, 10);
    await userRepository.createUser({ ...object, password: encryptedPassword });
}

async function checkValidEmail(email: string) {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
        throw invalidCredentialsError();
    }

    return user;
}

async function comparePassword(password: string, userPassword: string) {
    const isPasswordValid = bcrypt.compareSync(password, userPassword);

    if (!isPasswordValid) {
        throw invalidCredentialsError();
    }
}

async function createSession(userId: number) {
    const sessionId = await userRepository.createSession(userId);

    return sessionId.id;
}

function generateUserToken(sessionId: number) {
    const token = jwt.sign({ sessionId }, process.env.JWT_SECRET);

    return token;
}
async function signIn(object: SignInUserSchema) {
    const user = await checkValidEmail(object.email);
    await comparePassword(object.password, user.password);
    const sessionId = await createSession(user.id);

    const token = generateUserToken(sessionId);

    return { firstName: user.firstName, userName: user.userName, token };
}

export const authService = {
    signUp,
    signIn,
};
