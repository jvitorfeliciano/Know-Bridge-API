import { Field } from "@prisma/client";

type FieldData = Omit<Field, "id" | "createdAt">;
type FieldVector = Field[];

export { FieldData, FieldVector };
