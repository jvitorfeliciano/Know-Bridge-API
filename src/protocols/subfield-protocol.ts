import { Article, Question, QuestionsOnUsers, Subfield, Video } from "@prisma/client";

type SubfieldData = Omit<Subfield, "id" | "createdAt">;

type SubfieldWithMaterials = Subfield & {
    videos: (Video & {
        questions: (Question & {
            answers: {
                id: number;
                answer: string;
            }[];
            users: QuestionsOnUsers[];
            isDone?: boolean;
        })[];
        articles: Article[];
    })[];
};

type SubfieldVector = (Subfield & {
    videos: (Video & {
        questions: (Question & {
            users: QuestionsOnUsers[];
        })[];
        articles: Article[];
    })[];
})[];

export { SubfieldData, SubfieldWithMaterials, SubfieldVector };
