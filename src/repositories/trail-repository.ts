import { prisma } from "@/config";
import { TrailData } from "@/protocols";

function create(data: TrailData) {
    return prisma.trail.create({
        data,
    });
}
function findUniqueByTitle(title: string) {
    return prisma.trail.findUnique({
        where: {
            title,
        },
    });
}

const trailRepository = {
    create,
    findUniqueByTitle,
};

export default trailRepository;
