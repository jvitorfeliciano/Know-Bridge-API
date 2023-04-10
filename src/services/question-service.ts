import { notFoundError, conflictError } from "@/errors";
import { QuestionData } from "@/protocols";
import answerRepository from "@/repositories/answer-repository";
import questionRepository from "@/repositories/question-repository";
import { videoService } from "./video-service";

async function postQuestion(data: QuestionData) {
    await videoService.checkVideoExistenceById(data.videoId);

    const question = await questionRepository.create(data);

    return question;
}

async function validateQuestionAnswer(userId: number, answerId: number) {
    const answer = await answerRepository.findById(answerId);

    if (!answer) {
        throw notFoundError("Resposta não encontrada!");
    }

    if (answer.isCorrect === false) {
        throw conflictError("Resposta Incorreta!");
    }

    if (userId) {
        await questionRepository.postQuestionsOnUsers(userId, answer.questionId);
    }
}

export const questionService = {
    postQuestion,
    validateQuestionAnswer,
};
