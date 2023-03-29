import { AuthenticatedRequest, TrailData } from "@/protocols";
import { trailService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postTrail(req: Request, res: Response) {
    const data: TrailData = req.body;

    try {
        const trail = await trailService.postTrail(data);

        res.status(httpStatus.CREATED).send(trail);
    } catch (err) {
        if (err.name === "ConflictError") {
            return res.status(httpStatus.CONFLICT).send({ errors: err.message });
        }
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}

export async function getTrails(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId;
    try {
        const trails = await trailService.getTrails(userId);

        res.status(httpStatus.OK).send(trails);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ errors: err.message });
    }
}

export async function postUserEnrollmentOnTrail(req: AuthenticatedRequest, res: Response) {
    const trailId = Number(req.params.trailId);
    const userId = req.userId;

    try {
        const enrollmentStatus = await trailService.createEnrollmentOntrail(userId, trailId);

        res.status(httpStatus.CREATED).send(enrollmentStatus);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}

export async function deleteUserEnrollmentOnTrail(req: AuthenticatedRequest, res: Response) {
    const trailId = Number(req.params.trailId);
    const userId = req.userId;

    try {
        const enrollmentStatus = await trailService.deleteUserEnrollmentOnTrail(userId, trailId);

        res.status(httpStatus.OK).send(enrollmentStatus);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}

export async function getTrailById(req: AuthenticatedRequest, res: Response) {
    const trailId = Number(req.params.trailId);

    try {
        const trail = await trailService.getTrailById(trailId);

        res.status(httpStatus.OK).send(trail);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({ errors: err.message });
        }
    }
}
