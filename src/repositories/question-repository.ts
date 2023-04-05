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

function postQuestionsOnUsers(userId: number, questionId: number) {
    return prisma.questionsOnUsers.create({
        data: {
            userId,
            questionId,
        },
    });
}

const questionRepository = {
    create,
    postQuestionsOnUsers
};

export default questionRepository;
