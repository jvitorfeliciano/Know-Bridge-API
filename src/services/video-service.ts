import { VideoData } from "@/protocols";
import videoRepository from "@/repositories/video-repository";
import { subfieldService } from "./subfield-service";

async function postVideo(data: VideoData) {
    await subfieldService.checkSubfieldExistenceById(data.subfieldId);
    const video = await videoRepository.create(data);

    return video;
}

export const videoService = {
    postVideo,
};
