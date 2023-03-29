import { notFoundError } from "@/errors";
import { SubfieldData } from "@/protocols";
import subfieldRepository from "@/repositories/subfield-repository";
import { fieldService } from "@/services";

async function postSubfield(data: SubfieldData) {
    await fieldService.checkFieldExistenceById(data.fieldId);
    const subfield = await subfieldRepository.create(data);

    return subfield;
}

async function checkSubfieldExistenceById(id: number) {
    const subfield = await subfieldRepository.findUniqueById(id);

    if (!subfield) {
        throw notFoundError("Subfield não cadastrado!");
    }
}

export const subfieldService = {
    postSubfield,
    checkSubfieldExistenceById,
};
