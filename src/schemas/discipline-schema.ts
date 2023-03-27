import { DisciplineData } from "@/protocols";
import Joi from "joi";

export const disciplineSchema = Joi.object<DisciplineData>({
    title: Joi.string().required(),
});
