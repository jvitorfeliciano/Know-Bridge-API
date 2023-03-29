import { conflictError, notFoundError } from "@/errors";
import { TrailData } from "@/protocols";
import trailRepository from "@/repositories/trail-repository";
import { disciplineService } from "@/services";

async function checkTrailExistenceByTitle(title: string) {
    const trail = await trailRepository.findUniqueByTitle(title);

    if (trail) {
        throw conflictError("Trilha já cadastrada!");
    }
}

async function postTrail(data: TrailData) {
    await disciplineService.checkDisciplineExistenceById(data.disciplineId);
    await checkTrailExistenceByTitle(data.title);
    const trail = await trailRepository.create(data);

    return trail;
}

async function getTrails() {
    const trails = await trailRepository.findMany();

    return trails;
}

async function checkTrailExistenceById(id: number) {
    const trail = await trailRepository.findUniqueById(id);

    if (!trail) {
        throw notFoundError("Trilha não cadastrada");
    }
}

export const trailService = {
    postTrail,
    getTrails,
    checkTrailExistenceById,
};
