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
        console.log(err);
    }
}
