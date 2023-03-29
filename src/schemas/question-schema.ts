import { QuestionData } from "@/protocols";
import Joi from "joi";

export const questionSchema = Joi.object<QuestionData>({
    title: Joi.string().required(),
    statement: Joi.string().required(),
    videoId: Joi.number().integer().greater(0).required(),
    answers: Joi.array()
        .min(2)
        .items(
            Joi.object({
                answer: Joi.string().required(),
                isCorrect: Joi.boolean().required(),
            }),
        ).required(),
});
