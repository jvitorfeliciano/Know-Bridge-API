import { TrailData } from "@/protocols";
import Joi from "joi";

export const trailSchema = Joi.object<TrailData>({
    title: Joi.string().required(),
    image: Joi.string().required(),
    disciplineId: Joi.number().integer().greater(0).required(),
});
