export class Database {
    movies: MovieRating[] = [
        { title: 'The Shawshank Redemption', rating: 9.2, year: 1994 },
        { title: 'The Godfather', rating: 9.2, year: 1972 },
        { title: 'The Dark Knight', rating: 9.0, year: 2008 },
        { title: 'The Godfather Part II', rating: 9.0, year: 1974 },
        { title: '12 Angry Men', rating: 8.9, year: 1957 },
        { title: 'Shindler\'s List', rating: 8.9, year: 1993 },
        { title: 'The Lord of the Rings: The Return of the King', rating: 8.9, year: 2003 },
        { title: 'Pulp Fiction', rating: 8.9, year: 1994 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', rating: 8.8, year: 2001 },
        { title: 'The Good, the Bad and the Ugly', rating: 8.8, year: 1966 },
    ]

    constructor() { }

    async getMovies(): Promise<Movie[]> {
        return this.movies;
    }
}

export interface Rateable {
    rating: number;
}

export type Movie = {
    title: string;
    year: number;
}

export type MovieRating = Movie & Rateable;
