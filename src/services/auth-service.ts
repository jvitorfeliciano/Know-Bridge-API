import { conflictError } from "@/errors";
import { SignUpUserSchema } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt";

async function checkUserNameExitance(userName: string) {
    const user = await userRepository.findUserByUserName(userName);

    if (user) {
        throw conflictError("Username já cadastrado!");
    }
}

async function checkEmailExitence(email: string) {
    const user = await userRepository.findUserByEmail(email);

    if (user) {
        throw conflictError("Email já cadastrado!");
    }
}

async function signUp(object: SignUpUserSchema) {
    await checkUserNameExitance(object.userName);
    await checkEmailExitence(object.email);

    const encryptedPassword = bcrypt.hashSync(object.password, 10);
    await userRepository.createUser({ ...object, password: encryptedPassword });
}

export const authService = {
    signUp,
};

