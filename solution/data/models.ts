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
export const isBook = (m: Media): m is Book => {
    return 'pages' in m;
}

export const isMovie = (m: Media): m is Movie => {
    return 'runtime' in m;
}

export const isSong = (m: Media): m is Song => {
    return 'duration' in m;
}
