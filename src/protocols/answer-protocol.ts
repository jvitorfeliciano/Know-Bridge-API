import { Answer } from "@prisma/client";

type AnswerArray = Omit<Answer, "id" | "questionId">[];

type AnswerObject = {
    answers: AnswerArray;
};

export { AnswerArray, AnswerObject };
