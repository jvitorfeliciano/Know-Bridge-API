import { AuthenticatedRequest, SubfieldData } from "@/protocols";
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

export async function getSubfieldById(req: AuthenticatedRequest, res: Response) {
    const subfieldId = Number(req.params.subfieldId);

    try {
        const subfield = await subfieldService.getSubfieldByIdWithMaterials(subfieldId);

        res.status(httpStatus.OK).send(subfield);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
