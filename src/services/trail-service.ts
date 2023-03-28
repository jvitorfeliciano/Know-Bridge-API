import { conflictError } from "@/errors";
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

export const trailService = {
    postTrail,
};
