
import cors from 'cors';

import express from 'express';

import {router} from './router.js';

import {env} from "./config/env.js";

const app = express();

app.use(
    cors()
);

app.use(
    express.json()
);

app.use(
    express.static("public")
);

app.use(
    router
);

app.listen(
    env.port, () => console.log("Servidor api rodando na porta " + env.port)
);

