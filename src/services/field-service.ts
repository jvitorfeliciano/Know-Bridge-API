import { notFoundError } from "@/errors";
import { FieldData, FieldWithSubfieldsMaterials, SubfieldVector } from "@/protocols";
import fieldRepository from "@/repositories/field-repository";
import { trailService } from "@/services";
import { checkUserAnswers } from "@/utils/user-answers";

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

async function checkFieldExistence(field: FieldWithSubfieldsMaterials | null) {
    if (!field) {
        throw notFoundError("Field não cadastrado!");
    }
}

function checkUserAnswersOnSubfields(vector: SubfieldVector, userId: number) {
    vector.forEach((subfield) => checkUserAnswers(subfield.videos, userId));
}

async function getFieldByIdWithItsSubfields(userId: number, fieldId: number) {
    let field;

    if (userId) {
        field = await fieldRepository.findByIdWithSubfieldsAndUser(fieldId);

        checkFieldExistence(field);
        checkUserAnswersOnSubfields(field.subfields, userId);
    } else {
        field = await fieldRepository.findByIdWithSubfields(fieldId);
        checkFieldExistence(field);
    }

    return field;
}

export const fieldService = {
    postField,
    checkFieldExistenceById,
    getFieldByIdWithItsSubfields,
};
