import { Trail } from "@prisma/client";

type TrailData = Omit<Trail, "id" | "createdAt">;

export { TrailData };
