import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { MediaService } from './services/media.service';

const app = express();
const service = new MediaService()
const port = 8000;

app.use(bodyParser.json());

// TODO refactor using async/await and destructuring
app.post('/', async ({ body }: Request<{}, {}, ApiRequest>, res: Response) => {
    let result;
    if (body.kind === 'movies') {
        result = { result: await service.getMovieTitleWithMinRuntime(body.minRuntime) };
    } else if (body.kind === 'authors') {
        result = { result: await service.getAuthorsOfBooksContaining(body.pattern) };
    } else {
        result = { result: 'Function not implemented' };
    }
    res.send(result);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

type ApiRequest = MovieRequest | AuthorRequest;

type MovieRequest = {
    kind: 'movies',
    minRuntime: number
}

type AuthorRequest = {
    kind: 'authors',
    pattern: string
}
