import { prisma } from "@/config";
import { SignUpUserSchema } from "@/protocols";
import { User } from "@prisma/client";

async function findUserByUserName(userName: string) {
    return await prisma.user.findUnique({
        where: {
            userName,
        },
    });
}

async function findUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
}

async function createUser(data: SignUpUserSchema) {
    return await prisma.user.create({
        data,
    });
}

const userRepository = {
    findUserByUserName,
    findUserByEmail,
    createUser,
};

export default userRepository;
