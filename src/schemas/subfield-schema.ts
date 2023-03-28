import { SubfieldData } from "@/protocols";
import Joi from "joi";

export const subfieldSchema = Joi.object<SubfieldData>({
    title: Joi.string().required(),
    lessonNumber: Joi.number().integer().greater(0),
    fieldId: Joi.number().integer().greater(0),
});
