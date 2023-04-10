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

    if (!field) {
        throw notFoundError("Field não cadastrado!");
    }
}

async function getFieldByIdWithItsSubfields(id: number) {
    const field = await fieldRepository.findByIdWithSubfields(id);

    if (!field) {
        throw notFoundError("Field não cadastrado!");
    }

    return field;
}

export const fieldService = {
    postField,
    checkFieldExistenceById,
    getFieldByIdWithItsSubfields,
};
