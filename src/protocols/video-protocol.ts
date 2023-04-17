import { Article, Question, QuestionsOnUsers, Video } from "@prisma/client";

type VideoData = Omit<Video, "id" | "createdAt">;

type VideoWithItsMaterials =  (Video & {
    questions: (Question & {
        answers?: {
            id: number;
            answer: string;
        }[];
        users: QuestionsOnUsers[];
        isDone?: boolean;
    })[];
    articles: Article[];
})[];

export { VideoData, VideoWithItsMaterials };
