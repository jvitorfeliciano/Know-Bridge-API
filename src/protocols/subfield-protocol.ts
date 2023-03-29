import { Subfield } from "@prisma/client";

type SubfieldData = Omit<Subfield, "id" | "createdAt">;

export { SubfieldData };
