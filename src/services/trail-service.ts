import { conflictError, notFoundError } from "@/errors";
import { TrailData, TrailVector } from "@/protocols";
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

function verifyUserEnrollmentOnTrail(vector: TrailVector, userId: number) {
    vector.forEach((trail) => {
        if (trail.users.some((user) => user.userId === userId)) {
            trail.isEnrolled = true;
            delete trail.users;
        } else {
            trail.isEnrolled = false;
            delete trail.users;
        }
    });
}

async function getTrails(userId: number) {
    let trails;

    if (userId) {
        trails = await trailRepository.findManyWithUsersEnrolled();
        verifyUserEnrollmentOnTrail(trails, userId);
    } else {
        trails = await trailRepository.findMany();
    }

    return trails;
}

async function checkTrailExistenceById(id: number) {
    const trail = await trailRepository.findUniqueById(id);

    if (!trail) {
        throw notFoundError("Trilha não cadastrada");
    }
}

async function createEnrollmentOntrail(userId: number, trailId: number) {
    await checkTrailExistenceById(trailId);

    const register = await trailRepository.createTrailsOnUsers(userId, trailId);

    return register;
}

async function deleteUserEnrollmentOnTrail(userId: number, trailId: number) {
    await checkTrailExistenceById(trailId);

    await trailRepository.deleteTrailsOnUsers(userId, trailId);
}

async function getTrailById(id: number) {
    const trail = await trailRepository.findByIdWithFieldsAndSubfields(id);

    if (!trail) {
        throw notFoundError("Trilha não cadastrada");
    }

    return trail;
}

export const trailService = {
    postTrail,
    getTrails,
    checkTrailExistenceById,
    createEnrollmentOntrail,
    deleteUserEnrollmentOnTrail,
    getTrailById,
};
