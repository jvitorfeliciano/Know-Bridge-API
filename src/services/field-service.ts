import { FieldData } from "@/protocols";
import fieldRepository from "@/repositories/field-repository";

async function postField(data: FieldData){
    const field = await fieldRepository.create(data);

    return field;
}

export const fieldService = {
    postField
}