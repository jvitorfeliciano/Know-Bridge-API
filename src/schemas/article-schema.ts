import { ArticleData } from "@/protocols/article-protocol";
import Joi from "joi";

export const articleSchema =  Joi.object<ArticleData>({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
    videoId: Joi.number().integer().greater(0).required(), 
})