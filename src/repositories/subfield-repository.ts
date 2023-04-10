import { prisma } from "@/config";
import { SubfieldData } from "@/protocols";

function create(data: SubfieldData) {
    return prisma.subfield.create({
        data,
    });
}

function findById(id: number) {
    return prisma.subfield.findUnique({
        where: {
            id,
        },
    });
}

function findByIdwithMaterials(id: number) {
    return prisma.subfield.findUnique({
        where: {
            id,
        },
        include: {
            videos: {
                include: {
                    questions: {
                        include: {
                            answers: {
                                select: {
                                    id: true,
                                    answer: true,
                                },
                            },
                        },
                    },
                    articles: true,
                },
            },
        },
    });
}

const subfieldRepository = {
    create,
    findById,
    findByIdwithMaterials,
};

export default subfieldRepository;
