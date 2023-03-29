import { conflictError, notFoundError } from "@/errors";
import { DisciplineData } from "@/protocols";
import disciplineRepository from "@/repositories/discipline-repository";

async function checkDisciplineExistenceByTitle(title: string) {
    const discipline = await disciplineRepository.findUniqueByTitle(title);

    if (discipline) {
        throw conflictError("Disciplina já cadastrada");
    }
}

async function postDiscipline(object: DisciplineData) {
    await checkDisciplineExistenceByTitle(object.title);

    const discipline = await disciplineRepository.create(object);

    return discipline;
}

async function getDisciplines() {
    const disciplines = await disciplineRepository.findMany();

    return disciplines;
}

async function checkDisciplineExistenceById(id: number) {
    const discipline = await disciplineRepository.findById(id);

    if (!discipline) {
        throw notFoundError("Disciplina não encontrada");
    }
}

export const disciplineService = {
    postDiscipline,
    getDisciplines,
    checkDisciplineExistenceById,
};
