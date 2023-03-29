import { Video } from "@prisma/client";

type VideoData = Omit<Video, "id" | "createdAt">;

export { VideoData };
