import { notFoundError } from "@/errors";
import userRepository from "@/repositories/user-repository";

async function getUserCourses(userName: string){
    const courses =  await userRepository.findUserByUserNameWithCourses(userName);

    if(!courses){
        throw notFoundError("Usuário não encontrado!");
    }

    return courses;
}

export const userService =  {
    getUserCourses
}