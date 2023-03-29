import { loadEnv } from "@/config";
import express, { json } from "express";
import cors from "cors";
import {
    articleRouter,
    authRouter,
    disciplineRouter,
    fieldRouter,
    questionRouter,
    subfieldRouter,
    trailRouter,
    videoRouter,
} from "@/routers";

loadEnv();

const server = express();

server
    .use(json())
    .use(cors())
    .use("/auth", authRouter)
    .use("/disciplines", disciplineRouter)
    .use("/trails", trailRouter)
    .use("/fields", fieldRouter)
    .use("/subfields", subfieldRouter)
    .use("/videos", videoRouter)
    .use("/articles", articleRouter)
    .use("/questions", questionRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
