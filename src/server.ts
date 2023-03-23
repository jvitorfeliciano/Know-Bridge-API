import { loadEnv } from "@/config";
import express, { json } from "express";
import cors from "cors";
import { authRouter } from "@/routers";

loadEnv();

const server = express();

server.use(json()).use(cors()).use("/auth", authRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
