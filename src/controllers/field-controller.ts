import { FieldData } from "@/protocols";
import { fieldService, trailService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postField(req: Request, res: Response) {
    const data: FieldData = req.body;

    try {
        const field = await fieldService.postField(data);

        res.status(httpStatus.CREATED).send(field);
    } catch (err) {
        if (err.name === "ConflictError") {
            return res.status(httpStatus.CONFLICT).send({ errors: err.message });
        }
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}