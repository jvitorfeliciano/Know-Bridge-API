import { prisma } from "@/config";
import { SubfieldData } from "@/protocols";

function create(data: SubfieldData) {
    return prisma.subfield.create({
        data,
    });
}

function findUniqueById(id: number) {
    return prisma.subfield.findUnique({
        where: {
            id,
        },
    });
}

const subfieldRepository = {
    create,
    findUniqueById
};

export default subfieldRepository;
