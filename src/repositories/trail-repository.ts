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

function findMany() {
    return prisma.trail.findMany({});
}

const trailRepository = {
    create,
    findUniqueByTitle,
    findMany,
};

export default trailRepository;
