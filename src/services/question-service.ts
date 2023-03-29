import { QuestionData } from "@/protocols";
import questionRepository from "@/repositories/question-repository";
import { videoService } from "./video-service";

async function postQuestion(data:QuestionData) {
    await videoService.checkVideoExistenceById(data.videoId);

    const question =  await questionRepository.create(data);

    return question;
}

export const questionService = {
    postQuestion
}