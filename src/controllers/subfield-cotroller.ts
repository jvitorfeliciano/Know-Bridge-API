import { SubfieldData } from "@/protocols";
import { subfieldService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postSubfield(req: Request, res: Response) {
    const data: SubfieldData = req.body;

    try {
        const field = await subfieldService.postSubfield(data);

        res.status(httpStatus.CREATED).send(field);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
