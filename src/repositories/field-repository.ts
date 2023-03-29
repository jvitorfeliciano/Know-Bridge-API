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

const fieldRepository = {
    create,
    findUniqueById,
};

export default fieldRepository;
