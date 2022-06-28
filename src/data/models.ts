export type Book = {
    author: string;
    pages: number;
    title: string;
    year: number;
}

export type Movie = {
    runtime: number;
    title: string;
    year: number;
}

export type Song = {
    artist: string;
    duration: number;
    title: string;
    year: number;
}

export type Media = Book | Movie | Song;

// TODO define type guards
