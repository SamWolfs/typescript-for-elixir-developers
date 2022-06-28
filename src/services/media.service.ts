import { Book, Database, Movie, Song } from '../data';
import { MediaUtils } from '../utils/media.utils';

export class MediaService {
    db: Database;

    constructor() {
        this.db = new Database();
    }

    // TODO Refactor using type guards
    getBooks(): Book[] {
        const media = this.db.getMedia();
        const books: Book[] = media.filter((m): m is Book => 'pages' in m);
        return books;
    }

    async getBooksAsync(): Promise<Book[]> {
        return this.db.getMediaAsync().then(media => {
            return media.filter((m): m is Book => 'pages' in m);
        });
    }

    // TODO Refactor using type guards
    getMovies(): Movie[] {
        const media = this.db.getMedia();
        const movies: Movie[] = media.filter((m): m is Movie => 'runtime' in m);
        return movies;
    }

    async getMoviesAsync(): Promise<Movie[]> {
        return this.db.getMediaAsync().then(media => {
            return media.filter((m): m is Movie => 'runtime' in m);
        });
    }

    // TODO Refactor using type guards
    getSongs(): Song[] {
        const media = this.db.getMedia();
        const songs: Song[] = media.filter((m): m is Song => 'duration' in m);
        return songs;
    }

    async getSongsAsync(): Promise<Song[]> {
        return this.db.getMediaAsync().then(media => {
            return media.filter((m): m is Song => 'duration' in m);
        });
    }

    // TODO Refactor using destructuring
    getTitles(): string {
        const media = this.db.getMedia();
        const titles = media.map(m => m.title).join(', ');
        return titles;
    }

    // TODO Refactor using destructuring
    getLongestTitle(): string {
        const media = this.db.getMedia();
        const sortedByTitle = media.sort((a, b) => b.title.length - a.title.length);
        return sortedByTitle[0].title;
    }

    // TODO Refactor using Ramda
    getMediaLengthInSeconds(): number {
        const media = this.db.getMedia();
        const lengths = media.map(MediaUtils.getLengthInSeconds);
        const totalLength = lengths.reduce((acc, v) => acc + v);
        return totalLength;
    }
}
