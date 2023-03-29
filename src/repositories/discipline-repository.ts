import { prisma } from "@/config";
import { DisciplineData } from "@/protocols";

function create(data: DisciplineData) {
    return prisma.discipline.create({
        data,
    });
}

function findUniqueByTitle(title: string) {
    return prisma.discipline.findUnique({
        where: {
            title,
        },
    });
}

function findById(id: number) {
    return prisma.discipline.findUnique({
        where: {
            id,
        },
    });
}

function findMany() {
    return prisma.discipline.findMany({});
}

const disciplineRepository = {
    create,
    findUniqueByTitle,
    findMany,
    findById,
};

export default disciplineRepository;
