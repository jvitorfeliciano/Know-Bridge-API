import { TrailData } from "@/protocols";
import trailRepository from "@/repositories/trail-repository";

async function postTrail(data: TrailData) {
    const trail = await trailRepository.create(data);

    return trail;
}

export const trailService = {
    postTrail,
};
