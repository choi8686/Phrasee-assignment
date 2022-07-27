
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
const app = express();
const PORT = 8000;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(PORT, 'waiting on port.');
});