import { Discipline } from "@prisma/client";

type DisciplineData = Pick<Discipline, "title">;

export { DisciplineData };
