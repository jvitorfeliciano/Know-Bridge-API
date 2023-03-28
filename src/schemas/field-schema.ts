import { FieldData } from "@/protocols";
import Joi from "joi";

export const fieldSchema = Joi.object<FieldData>({
    title: Joi.string().required(),
    image: Joi.string().required(),
    unitNumber: Joi.number().integer().greater(0),
    trailId: Joi.number().integer().greater(0),
});
