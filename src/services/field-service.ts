import { notFoundError } from "@/errors";
import { FieldData } from "@/protocols";
import fieldRepository from "@/repositories/field-repository";
import { trailService } from "@/services";

async function postField(data: FieldData) {
    await trailService.checkTrailExistenceById(data.trailId);
    const field = await fieldRepository.create(data);

    return field;
}

async function checkFieldExistenceById(id: number) {
    const field = await fieldRepository.findUniqueById(id);

    if(!field){
        throw notFoundError("Field não cadastrado!")
    }
}

export const fieldService = {
    postField,
    checkFieldExistenceById
};
