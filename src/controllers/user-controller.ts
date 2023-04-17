import { AuthenticatedRequest } from "@/protocols";
import { userService } from "@/services";
import { Response } from "express";
import httpStatus from "http-status";

export async function getUserCourses(req: AuthenticatedRequest, res: Response) {
    const { userName } = req.params;
    try {
        const courses = await userService.getUserCourses(userName);

        res.status(httpStatus.OK).send(courses);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ errors: err.message });
    }
}
