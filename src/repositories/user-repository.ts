import { prisma } from "@/config";
import { SignUpUserSchema } from "@/protocols";

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

async function createSession(userId: number) {
    return await prisma.session.create({
        data: {
            userId,
        },
    });
}
const userRepository = {
    findUserByUserName,
    findUserByEmail,
    createUser,
    createSession,
};

export default userRepository;
