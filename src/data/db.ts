import { Media } from './models';

export class Database {
    media: Media[] = [
        { title: 'The Shawshank Redemption', runtime: 144, year: 1994 },
        { title: 'The Godfather', runtime: 175, year: 1972 },
        { title: 'The Dark Knight', runtime: 153, year: 2008 },
        { title: '12 Angry Men', runtime: 95, year: 1957 },
        { title: 'The Lord of the Rings: The Return of the King', runtime: 201,year: 2003 },
        { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279, year: 1812 },
        { title: '1984', author: 'George Orwell', pages: 298, year: 1949 },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, year: 1925 },
        { title: 'Jane Eyre', author: 'Charlotte Brontë', pages: 532, year: 1847 },
        { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', pages: 671, year: 1866 },
        { title: 'Respect', artist: 'Aretha Franklin', duration: 191, year: 1967 },
        { title: 'Fight the Power', artist: 'Public Enemy', duration: 323, year: 1989 },
        { title: 'A Change is Gonna Come', artist: 'Sam Cooke', duration: 191, year: 1964 },
        { title: 'Like a Rolling Stone', artist: 'Bob Dylan', duration: 373, year: 1965 },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: 276, year: 1991 },
    ];

    constructor() { }

    async getMediaAsync(): Promise<Media[]> {
        await wait(500);
        return this.media;
    }

    getMedia(): Media[] {
        return this.media;
    }
}

const wait = (ms: number) => new Promise((resolve, _) => setTimeout(resolve, ms));

