import { Article } from "@prisma/client";

type ArticleData = Omit<Article, "id" | "createdAt" | "type">;

export { ArticleData };
