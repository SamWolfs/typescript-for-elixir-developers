import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/', (req: Request<{}, {}, ApiRequest>, res: Response) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});

type ApiRequest = MovieRequest

type MovieRequest = {
    kind: 'movies',
    minRuntime: number
}

type BookRequest = {
    kind: 'books',
}
