import { Trail } from "@prisma/client";
import { FieldVector } from "./field-protocol";
import { UserVector } from "./user-protocol";

type TrailData = Omit<Trail, "id" | "createdAt">;
type TrailVector = (Trail & {
    users: UserVector;
    fields: FieldVector;
    isEnrolled?: boolean;
})[];

export { TrailData, TrailVector };
