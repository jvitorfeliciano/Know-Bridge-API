import { notFoundError } from "@/errors";
import { VideoData } from "@/protocols";
import videoRepository from "@/repositories/video-repository";
import { subfieldService } from "./subfield-service";

async function postVideo(data: VideoData) {
    await subfieldService.checkSubfieldExistenceById(data.subfieldId);
    const video = await videoRepository.create(data);

    return video;
}

async function checkVideoExistenceById(id: number) {
    const video = await videoRepository.findUniqueById(id);

    if (!video) {
        throw notFoundError("Video não cadastrado!");
    }
}

export const videoService = {
    postVideo,
    checkVideoExistenceById,
};
