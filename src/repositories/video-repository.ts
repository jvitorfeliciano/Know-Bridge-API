import { prisma } from "@/config";
import { VideoData } from "@/protocols";

function create(data: VideoData) {
    return prisma.video.create({
        data,
    });
}

const videoRepository = {
    create,
};

export default videoRepository;
