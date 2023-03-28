import { TrailData } from "@/protocols";
import { trailService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postTrail(req: Request, res: Response) {
    const data: TrailData = req.body;

    try {
        const trail = await trailService.postTrail(data);

        res.status(httpStatus.OK).send(trail);
    } catch (err) {
        if (err.name === "ConflictError") {
            return res.status(httpStatus.CONFLICT).send({ errors: err.message });
        }
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}

export async function getTrails(req: Request, res: Response) {
    try {
        const trails = await trailService.getTrails();

        res.status(httpStatus.OK).send(trails);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ errors: err.message });
    }
}
