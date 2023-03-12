import { Router } from "express";
import { getPrecoChamada } from "../controllers/chamadaController";
export const router = Router();

router.get("/", (req, res) => res.send("Api fale mais"));

router.get("/chamada", getPrecoChamada);
