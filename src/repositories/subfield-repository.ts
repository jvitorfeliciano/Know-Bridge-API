import { prisma } from "@/config";
import { SubfieldData } from "@/protocols";

function create(data: SubfieldData){
    return prisma.subfield.create({
        data
    })
}

const subfieldRepository = {
    create
}

export default subfieldRepository;