import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { MediaService } from './services/media.service';

const app = express();
const service = new MediaService()
const port = 8000;

app.use(bodyParser.json());

// TODO refactor using async/await and destructuring
app.post('/', (req: Request<{}, {}, ApiRequest>, res: Response) => {
    if (req.body.kind === 'movies') {
        service.getMovieTitleWithMinRuntime(req.body.minRuntime)
            .then(result => res.send({ result }));
    } else if (req.body.kind === 'authors') {
        service.getAuthorsOfBooksContaining(req.body.pattern)
            .then(result => res.send({ result }));
    } else {
        res.send({ result: 'Function not implemented' });
    }
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
