import { MediaService } from '../../src/services/media.service';

let service: MediaService;

beforeAll(async () => {
    service = new MediaService();
});

describe('Beep Boop', () => {
    it('getBooks should return books', () => {
        const expected = [
            { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279, year: 1812 },
            { title: '1984', author: 'George Orwell', pages: 298, year: 1949 },
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, year: 1925 },
            { title: 'Jane Eyre', author: 'Charlotte Brontë', pages: 532, year: 1847 },
            { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', pages: 671, year: 1866 },
        ];
        const books = service.getBooks();
        expect(books).toStrictEqual(expected);
    });

    it('getMovies should return movies', () => {
        const expected = [
            { title: 'The Shawshank Redemption', runtime: 144, year: 1994 },
            { title: 'The Godfather', runtime: 175, year: 1972 },
            { title: 'The Dark Knight', runtime: 153, year: 2008 },
            { title: '12 Angry Men', runtime: 95, year: 1957 },
            { title: 'The Lord of the Rings: The Return of the King', runtime: 201, year: 2003 },
        ];
        const movies = service.getMovies();
        expect(movies).toStrictEqual(expected);
    });

    it('getSongs should return songs', () => {
        const expected = [
            { title: 'Respect', artist: 'Aretha Franklin', duration: 191, year: 1967 },
            { title: 'Fight the Power', artist: 'Public Enemy', duration: 323, year: 1989 },
            { title: 'A Change is Gonna Come', artist: 'Sam Cooke', duration: 191, year: 1964 },
            { title: 'Like a Rolling Stone', artist: 'Bob Dylan', duration: 373, year: 1965 },
            { title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: 276, year: 1991 },
        ];
        const songs = service.getSongs();
        expect(songs).toStrictEqual(expected);
    });

    it('getTitles should return titles', () => {
        const expected = `The Shawshank Redemption, The Godfather, The Dark Knight, 12 Angry Men, The Lord of the Rings: The Return of the King, Pride and Prejudice, 1984, The Great Gatsby, Jane Eyre, Crime and Punishment, Respect, Fight the Power, A Change is Gonna Come, Like a Rolling Stone, Smells Like Teen Spirit`;
        const titles = service.getTitles();
        expect(titles).toStrictEqual(expected);
    });

    it('getLongestTitle should return the longest title', () => {
        const expected = 'The Lord of the Rings: The Return of the King';
        const title = service.getLongestTitle();
        expect(title).toStrictEqual(expected);
    });

    it('getMediaLengthInSeconds should return the total media length in seconds', () => {
        const expected = 282634;
        const length = service.getMediaLengthInSeconds();
        expect(length).toStrictEqual(expected);
    });

});
