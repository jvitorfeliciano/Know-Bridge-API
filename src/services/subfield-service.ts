import { SubfieldData } from "@/protocols";
import subfieldRepository from "@/repositories/subfield-repository";

async function postSubfield(data: SubfieldData) {
    const subfield = await subfieldRepository.create(data);

    return subfield;
}

export const subfieldService = {
    postSubfield
}