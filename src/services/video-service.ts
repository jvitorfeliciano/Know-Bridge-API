import { VideoData } from "@/protocols";
import videoRepository from "@/repositories/video-repository";

async function postVideo(data: VideoData) {
    const video = await videoRepository.create(data);

    return video;
}

export const videoService = {
    postVideo,
};
