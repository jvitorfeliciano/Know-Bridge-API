import { prisma } from "@/config";
import { VideoData } from "@/protocols";

function create(data: VideoData) {
    return prisma.video.create({
        data,
    });
}
function findUniqueById(id: number) {
    return prisma.video.findUnique({
        where: {
            id,
        },
    });
}

const videoRepository = {
    create,
    findUniqueById,
};

export default videoRepository;
