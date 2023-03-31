import { prisma } from "@/config";
import { FieldData } from "@/protocols";

function create(data: FieldData) {
    return prisma.field.create({
        data,
    });
}

function findUniqueById(id: number) {
    return prisma.field.findUnique({
        where: {
            id,
        },
    });
}

function findByIdWithSubfields(id: number) {
    return prisma.field.findUnique({
        where: {
            id,
        },
        include: {
            subfields: {
                include: {
                    videos: {
                        include: {
                            questions: true,
                            articles: true,
                        },
                    },
                },
            },
        },
    });
}

const fieldRepository = {
    create,
    findUniqueById,
    findByIdWithSubfields,
};

export default fieldRepository;
