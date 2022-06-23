import express, { Request } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/', (req: Request<{}, {}, {}>, res) => {
    // Text processing?
    // Data access with in-memory database?
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
