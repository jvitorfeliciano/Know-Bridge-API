import { notFoundError } from "@/errors";
import { SubfieldData, SubfieldWithMaterials } from "@/protocols";
import subfieldRepository from "@/repositories/subfield-repository";
import { fieldService } from "@/services";
import { checkUserAnswers } from "@/utils/user-answers";
import { Subfield } from "@prisma/client";

async function postSubfield(data: SubfieldData) {
    await fieldService.checkFieldExistenceById(data.fieldId);
    const subfield = await subfieldRepository.create(data);

    return subfield;
}

async function checkSubfieldExistenceById(id: number) {
    const subfield = await subfieldRepository.findById(id);

    if (!subfield) {
        throw notFoundError("Subfield não cadastrado!");
    }
}

async function checkSubfieldExistence(subfield: SubfieldWithMaterials | Subfield | null) {
    if (!subfield) {
        throw notFoundError("Subfield não cadastrado!");
    }
}

async function getSubfieldByIdWithMaterials(userId: number, submaterialId: number) {
    let subfield;

    if (userId) {
        subfield = await subfieldRepository.findByIdWithMaterialsAndUsers(submaterialId);

        checkSubfieldExistence(subfield);
        checkUserAnswers(subfield.videos, userId);
    } else {
        subfield = await subfieldRepository.findByIdWithMaterials(submaterialId);

        checkSubfieldExistence(subfield);
    }

    return subfield;
}

export const subfieldService = {
    postSubfield,
    checkSubfieldExistenceById,
    getSubfieldByIdWithMaterials,
};
