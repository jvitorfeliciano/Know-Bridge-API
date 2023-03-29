import { prisma } from "@/config";
import { QuestionData } from "@/protocols";

function create(data: QuestionData) {
    return prisma.question.create({
        data: {
            title: data.title,
            statement: data.statement,
            videoId: data.videoId,
            answers: {
                create: data.answers,
            },
        },
    });
}

const questionRepository = {
    create,
};

export default questionRepository;
