import express from 'express';
import router from './routes';
import {initializeDatabase} from "./models/db";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

initializeDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
