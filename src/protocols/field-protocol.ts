import { Article, Field, Question, QuestionsOnUsers, Subfield, Video } from "@prisma/client";

type FieldData = Omit<Field, "id" | "createdAt">;
type FieldVector = Field[];

type FieldWithSubfieldsMaterials = Field & {
    subfields: (Subfield & {
        videos: (Video & {
            questions: (Question & {
                users?: QuestionsOnUsers[];
            })[];
            articles: Article[];
        })[];
    })[];
};



export { FieldData, FieldVector, FieldWithSubfieldsMaterials };
