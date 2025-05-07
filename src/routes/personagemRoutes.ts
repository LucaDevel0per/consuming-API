import { Router } from "express";
import { getPersonagem } from "../controllers/personagemController";

const router = Router();

router.get("/:id", getPersonagem);

export default router;