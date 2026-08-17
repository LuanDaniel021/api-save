
import express from "express";

import teste from "./modules/teste/routes.js"
import caminhao from "./modules/caminhoes/routes.js"

export const router = express.Router();

router.use('/teste', teste)

router.use('/caminhao', caminhao)

