import { FieldData } from "@/protocols";
import fieldRepository from "@/repositories/field-repository";
import { trailService } from "@/services";

async function postField(data: FieldData) {
    await trailService.checkTrailExistenceById(data.trailId);
    const field = await fieldRepository.create(data);

    return field;
}

export const fieldService = {
    postField,
};
