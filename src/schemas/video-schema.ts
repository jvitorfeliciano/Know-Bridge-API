import { VideoData } from "@/protocols";
import Joi from "joi";

export const videoSchema = Joi.object<VideoData>({
    title: Joi.string().required(),
    videoAdress: Joi.string().required(),
    chapterNumber: Joi.number().integer().greater(0).required(),
    subfieldId: Joi.number().integer().greater(0).required(),
});
