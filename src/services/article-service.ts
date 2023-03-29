import { ArticleData } from "@/protocols";
import articleRepository from "@/repositories/article-repository";

async function postArticle(data: ArticleData) {
    const article = await articleRepository.create(data);

    return article;
}

export const articleService = {
    postArticle,
};
