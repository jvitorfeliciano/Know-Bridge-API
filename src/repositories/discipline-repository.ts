import { prisma } from "@/config";
import { DisciplineData } from "@/protocols";

async function create(data: DisciplineData) {
    return await prisma.discipline.create({
        data,
    });
}

async function findUniqueByTitle(title: string) {
    return await prisma.discipline.findUnique({
        where: {
            title,
        },
    });
}
const disciplineRepository = {
    create,
    findUniqueByTitle,
};

export default disciplineRepository;