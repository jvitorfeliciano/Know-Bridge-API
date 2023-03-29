import { prisma } from "@/config";
import { SignUpUserSchema } from "@/protocols";

function findUserByUserName(userName: string) {
    return prisma.user.findUnique({
        where: {
            userName,
        },
    });
}

function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

function createUser(data: SignUpUserSchema) {
    return prisma.user.create({
        data,
    });
}

function createSession(userId: number) {
    return prisma.session.create({
        data: {
            userId,
        },
    });
}

function findSessionById(id: number) {
    return prisma.session.findUnique({
        where: {
            id,
        },
    });
}

function findUserById(id: number) {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

const userRepository = {
    findUserByUserName,
    findUserByEmail,
    createUser,
    createSession,
    findSessionById,
    findUserById
};

export default userRepository;
