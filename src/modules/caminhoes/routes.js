
import express from "express";

import {controller} from "./controller.js";

const routes = express.Router();

routes.get("/cadastro", controller.cadastro);

export default routes;

