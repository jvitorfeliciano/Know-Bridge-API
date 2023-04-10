import { AuthenticatedRequest, QuestionData } from "@/protocols";
import { questionService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postQuestion(req: Request, res: Response) {
    const data: QuestionData = req.body;

    try {
        const question = questionService.postQuestion(data);

        res.status(httpStatus.CREATED).send(question);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}

export async function validateQuestionAnswer(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId;
    const answerId = Number(req.params.answerId);
    try {
        await questionService.validateQuestionAnswer(userId, answerId);

        res.status(httpStatus.OK).send({ message: "Resposta Correta!" });
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
        if (err.name === "ConflictError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
