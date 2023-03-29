import { Question } from "@prisma/client";
import { AnswerObject } from "@/protocols";

type QuestionInfo = Omit<Question, "id" | "type" | "createdAt">;

type QuestionData = QuestionInfo & AnswerObject;

export { QuestionData };
