import { VideoData } from "@/protocols";
import { subfieldService, videoService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postVideo(req: Request, res: Response) {
    const data: VideoData = req.body;

    try {
        const video = await videoService.postVideo(data);

        res.status(httpStatus.CREATED).send(video);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
