import { prisma } from "@/config";
import { TrailData } from "@/protocols";

function create(data: TrailData) {
    return prisma.trail.create({
        data,
    });
}

function findUniqueByTitle(title: string) {
    return prisma.trail.findUnique({
        where: {
            title,
        },
    });
}

function findUniqueById(id: number) {
    return prisma.field.findUnique({
        where: {
            id,
        },
    });
}

function findMany() {
    return prisma.trail.findMany({
        include: {
            fields: true,
        },
    });
}

function findManyWithUsersEnrolled() {
    return prisma.trail.findMany({
        include: {
            fields: true,
            users: true,
        },
    });
}

const trailRepository = {
    create,
    findUniqueByTitle,
    findUniqueById,
    findMany,
    findManyWithUsersEnrolled
};

export default trailRepository;
