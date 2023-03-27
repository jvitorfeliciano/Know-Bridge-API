import { prisma } from "@/config";
import { DisciplineData } from "@/protocols";

async function create(data: DisciplineData) {
    await prisma.discipline.create({
        data,
    });
}

const disciplineRepository = {
    create,
};
