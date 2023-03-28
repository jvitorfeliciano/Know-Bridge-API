import { loadEnv } from "@/config";
import express, { json } from "express";
import cors from "cors";
import { authRouter, disciplineRouter, trailRouter } from "@/routers";

loadEnv();

const server = express();

server
    .use(json())
    .use(cors())
    .use("/auth", authRouter)
    .use("/disciplines", disciplineRouter)
    .use("/trails", trailRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
