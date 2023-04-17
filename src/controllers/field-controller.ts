import { AuthenticatedRequest, FieldData } from "@/protocols";
import { fieldService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postField(req: Request, res: Response) {
    const data: FieldData = req.body;

    try {
        const field = await fieldService.postField(data);

        res.status(httpStatus.CREATED).send(field);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}

export async function getFieldByIdWithItsSubfields(req: AuthenticatedRequest, res: Response) {
    const fieldId = Number(req.params.fieldId);
    const userId = req.userId;

    try {
        const field = await fieldService.getFieldByIdWithItsSubfields(userId, fieldId);

        res.status(httpStatus.OK).send(field);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
