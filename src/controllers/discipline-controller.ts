import { DisciplineData } from "@/protocols";
import { disciplineService } from "@/services/discipline-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postDiscipline(req: Request, res: Response) {
    const body: DisciplineData = req.body;
    try {
        const discipline = await disciplineService.postDiscipline(body);

        res.status(httpStatus.OK).send(discipline);
    } catch (err) {
        if (err.name === "ConflictError") {
            return res.status(httpStatus.CONFLICT).send({ errors: err.message });
        }
    }
}

export async function getDisciplines(req: Request, res: Response) {
    try {
        const disciplines = await disciplineService.getDisciplines();

        res.status(httpStatus.OK).send(disciplines);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ errors: err.message });
    }
}
