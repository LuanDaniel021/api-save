
import express from "express";

import {controller} from "./controller.js";

const routes = express.Router();

routes.get("/timestamp", controller.teste);

export default routes;

