import { Trail } from "@prisma/client";
import { Video, Field, Subfield, Question, QuestionsOnUsers } from "@prisma/client";
import { FieldVector } from "./field-protocol";
import { UserVector } from "./user-protocol";

type TrailData = Omit<Trail, "id" | "createdAt">;

type TrailVector = (Trail & {
    users: UserVector;
    fields: FieldVector;
    isEnrolled?: boolean;
})[];

type TrailObject = Trail & {
    fields: (Field & { progressPercentage?: number } & {
        subfields: (Subfield & {
            videos: (Video & {
                questions: (Question & {
                    users: QuestionsOnUsers[];
                })[];
            })[];
        })[];
    })[];
};

export { TrailData, TrailVector, TrailObject };
