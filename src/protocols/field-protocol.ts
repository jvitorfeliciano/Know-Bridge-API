import { Field } from "@prisma/client";

type FieldData = Omit<Field, "id" | "createdAt">;

export { FieldData };
