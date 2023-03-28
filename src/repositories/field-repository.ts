import { prisma } from "@/config";
import { FieldData } from "@/protocols";

function create(data: FieldData) {
    return prisma.field.create({
        data,
    });
}

const fieldRepository = {
    create,
};

export default fieldRepository;
