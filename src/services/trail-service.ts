import { conflictError, notFoundError } from "@/errors";
import { TrailData, TrailObject, TrailVector } from "@/protocols";
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
    const trail = await trailRepository.findById(id);

    if (!trail) {
        throw notFoundError("Trilha não cadastrada");
    }
}

async function createEnrollmentOntrail(userId: number, trailId: number) {
    await checkTrailExistenceById(trailId);

    await trailRepository.createTrailsOnUsers(userId, trailId);

    return { isEnrolled: true };
}

async function deleteUserEnrollmentOnTrail(userId: number, trailId: number) {
    await checkTrailExistenceById(trailId);

    await trailRepository.deleteTrailsOnUsers(userId, trailId);

    return { isEnrolled: false };
}

function computeProgressPercentage(trailObject: TrailObject, userId: number) {
    console.log(new Date().getTime());
    trailObject.fields.forEach((field) => {
        let numberOfQuestions = 0;
        let numberOfQuestionsDone = 0;

        field.subfields.forEach((subfield) =>
            subfield.videos.forEach((video) =>
                video.questions.forEach((question) => {
                    numberOfQuestions++;

                    if (question.users.some((user) => user.userId === userId)) {
                        numberOfQuestionsDone++;
                    }

                    delete subfield.videos;
                }),
            ),
        );

        if (numberOfQuestions === 0 || numberOfQuestionsDone === 0) {
            field.progressPercentage = 0;
        } else {
            field.progressPercentage = Math.floor(numberOfQuestionsDone / numberOfQuestions) * 100;
        }
    });

    console.log(new Date().getTime());
}

async function getTrailById(userId: number, trailId: number) {
    let trail;

    if (userId) {
        trail = await trailRepository.findByIdWithFieldsSubfieldsAndQuestions(trailId);

        if (!trail) {
            throw notFoundError("Trilha não cadastrada");
        }

        computeProgressPercentage(trail, userId);
    } else {
        trail = await trailRepository.findByIdWithFieldsAndSubfields(trailId);

        if (!trail) {
            throw notFoundError("Trilha não cadastrada");
        }
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
