import { QuestionData } from "@/protocols";
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
