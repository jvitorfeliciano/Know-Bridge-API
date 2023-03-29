import { SubfieldData } from "@/protocols";
import subfieldRepository from "@/repositories/subfield-repository";
import { fieldService } from "@/services";

async function postSubfield(data: SubfieldData) {
    await fieldService.checkFieldExistenceById(data.fieldId);
    const subfield = await subfieldRepository.create(data);

    return subfield;
}

export const subfieldService = {
    postSubfield
}