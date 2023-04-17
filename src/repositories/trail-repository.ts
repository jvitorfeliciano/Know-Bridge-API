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

function findById(id: number) {
    return prisma.trail.findUnique({
        where: {
            id,
        },
    });
}

function findMany() {
    return prisma.trail.findMany({
        include: {
            fields: {
                orderBy: {
                    unitNumber: "asc",
                },
            },
        },
    });
}

function findManyWithUsersEnrolled() {
    return prisma.trail.findMany({
        include: {
            fields: {
                orderBy: {
                    unitNumber: "asc",
                },
            },
            users: true,
        },
    });
}

function createTrailsOnUsers(userId: number, trailId: number) {
    return prisma.trailsOnUsers.create({
        data: {
            userId,
            trailId,
        },
    });
}

function deleteTrailsOnUsers(userId: number, trailId: number) {
    return prisma.trailsOnUsers.delete({
        where: {
            userId_trailId: { userId, trailId },
        },
    });
}

function findByIdWithFieldsAndSubfields(id: number) {
    return prisma.trail.findUnique({
        where: {
            id,
        },
        include: {
            fields: {
                orderBy: {
                    unitNumber: "asc",
                },
                include: {
                    subfields: {
                        include: {
                            videos: true,
                        },
                        orderBy: {
                            lessonNumber: "asc",
                        },
                    },
                },
            },
        },
    });
}

function findByIdWithFieldsSubfieldsAndQuestions(id: number) {
    return prisma.trail.findUnique({
        where: {
            id,
        },
        include: {
            fields: {
                orderBy: {
                    unitNumber: "asc",
                },
                include: {
                    subfields: {
                        orderBy: {
                            lessonNumber: "asc",
                        },
                        include: {
                            videos: {
                                include: {
                                    questions: {
                                        include: {
                                            users: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
}

const trailRepository = {
    create,
    findUniqueByTitle,
    findById,
    findMany,
    findManyWithUsersEnrolled,
    createTrailsOnUsers,
    deleteTrailsOnUsers,
    findByIdWithFieldsAndSubfields,
    findByIdWithFieldsSubfieldsAndQuestions,
};

export default trailRepository;
