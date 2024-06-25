import express from "express";
import cors from 'cors';

import { router } from "../router/router.mjs";
import { handleError } from "../midllewares/error.mjs";
import { logger } from "../midllewares/logger.mjs";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(logger);

app.use('/api/v1', router);

app.use(handleError);

app.listen(PORT, () => {
    console.log('Running on http://localhost:3000');
});