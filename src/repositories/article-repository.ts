import { prisma } from "@/config";
import { ArticleData } from "@/protocols";

function create(data: ArticleData){
    return prisma.article.create({
        data
    })
}

const articleRepository = {
    create
}

export default articleRepository;