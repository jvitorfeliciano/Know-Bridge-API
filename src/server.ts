import { loadEnv } from "@/config";
import express, { json } from "express";
import cors from "cors";

loadEnv();

const server = express();

server.use(json());
server.use(cors());

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
