import { prisma } from "@/config";

function findById(id: number) {
    return prisma.answer.findUnique({
        where: {
            id,
        },
    });
}

const answerRepository = {
    findById,
};

export default answerRepository;
