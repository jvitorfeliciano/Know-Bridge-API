/*  async function postDiscipline(){
    
}  */

import { conflictError } from "@/errors";
import disciplineRepository from "@/repositories/discipline-repository";

async function checkDisciplineExistenceByTitle(title: string) {
    const discipline = await disciplineRepository.findUniqueByTitle(title);

    if (discipline) {
        throw conflictError("Disciplina já cadastrada");
    }
}
