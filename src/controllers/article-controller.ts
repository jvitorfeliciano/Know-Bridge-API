import { ArticleData } from "@/protocols";
import {  articleService} from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postArticle(req: Request, res: Response) {
    const data: ArticleData = req.body;

    try {
        const article  = await articleService.postArticle(data);

        res.status(httpStatus.CREATED).send(article);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
