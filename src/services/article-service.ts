import { ArticleData } from "@/protocols";
import articleRepository from "@/repositories/article-repository";
import { videoService } from "./video-service";

async function postArticle(data: ArticleData) {
    await videoService.checkVideoExistenceById(data.videoId);
    const article = await articleRepository.create(data);

    return article;
}

export const articleService = {
    postArticle,
};
