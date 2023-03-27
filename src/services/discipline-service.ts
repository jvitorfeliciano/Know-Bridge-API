import { conflictError } from "@/errors";
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

export const disciplineService = {
    postDiscipline
}