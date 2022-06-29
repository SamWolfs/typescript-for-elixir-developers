import { Book, Database, isBook, isMovie, isSong, Media, Movie, Song } from '../data';
import { MediaUtils } from '../utils/media.utils';
import R from 'ramda';

export class MediaService {
    db: Database;

    constructor() {
        this.db = new Database();
    }

    // TODO Refactor using type guards (optionally use Ramda)
    getBooks(): Book[] {
        const media = this.db.getMedia();
        const books: Book[] = R.filter(isBook, media);
        return books;
    }

    // TODO Refactor using await
    async getBooksAsync(): Promise<Book[]> {
        const media = await this.db.getMediaAsync();
        return R.filter(isBook, media);
    }

    // TODO Refactor using type guards (optionally use Ramda)
    getMovies(): Movie[] {
        const media = this.db.getMedia();
        const movies: Movie[] = R.filter(isMovie, media);
        return movies;
    }

    // TODO Refactor using await
    async getMoviesAsync(): Promise<Movie[]> {
        const media = await this.db.getMediaAsync();
        return R.filter(isMovie, media);
    }

    // TODO Refactor using type guards (optionally use Ramda)
    getSongs(): Song[] {
        const media = this.db.getMedia();
        const songs: Song[] = R.filter(isSong, media);
        return songs;
    }

    // TODO Refactor using await
    async getSongsAsync(): Promise<Song[]> {
        const media = await this.db.getMediaAsync();
        return R.filter(isSong, media);
    }

    // TODO Refactor using Ramda and async/await
    async getMovieTitleWithMinRuntime(runtime: number): Promise<string> {
        const media = await this.db.getMediaAsync();
        return R.pipe(
            R.filter((m: Media) => isMovie(m) && m.runtime > runtime),
            R.map(({ title }) => title),
            R.join(', '),
        )(media)
    }

    // TODO Refactor using Ramda and async/await
    async getAuthorsOfBooksContaining(pattern: string): Promise<{ author: string }[]> {
        const media = await this.db.getMediaAsync();
        const regex = new RegExp(pattern, 'ig');
        return R.pipe(
            R.filter((m: Media) => isBook(m) && R.match(regex, m.title).length > 0),
            R.map(({ author }: Book) => ({ author }))
        )(media);
    }

    // TODO Refactor using destructuring
    getTitles(): string {
        const media = this.db.getMedia();
        return R.pipe(
            R.map(({ title }) => title),
            R.join(', ')
        )(media);
    }

    // TODO Refactor using destructuring
    getLongestTitle(): string {
        const media = this.db.getMedia();
        const [{ title }] = media.sort(({ title: a }, { title: b }) => b.length - a.length);
        return title;
    }

    // TODO Refactor using Ramda
    getMediaLengthInSeconds(): number {
        const media = this.db.getMedia();
        return R.pipe(
            R.map(MediaUtils.getLengthInSeconds),
            R.sum
        )(media);
    }
}

