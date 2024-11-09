import type { Movie } from "../models/movie";

const mockMovies: Movie[] = [
    {
        id: 1,
        title: 'Inception',
        releaseDate: new Date('2010-07-16'),
        genres: ['Action', 'Sci-Fi'],
        productionCompanies: [{ id: 1, name: 'Warner Bros.' }],
        directors: [{ id: 1, name: 'Christopher Nolan' }],
        cast: [
            { id: 1, name: 'Leonardo DiCaprio' },
            { id: 2, name: 'Joseph Gordon-Levitt' },
            { id: 3, name: 'Tom Hardy' },
            { id: 22, name: 'Ellen Page' },
            { id: 23, name: 'Ken Watanabe' },
        ],
    },
    {
        id: 2,
        title: 'The Matrix',
        releaseDate: new Date('1999-03-31'),
        genres: ['Action', 'Sci-Fi'],
        productionCompanies: [{ id: 2, name: 'Warner Bros.' }],
        directors: [{ id: 2, name: 'Lana Wachowski' }, { id: 3, name: 'Lilly Wachowski' }],
        cast: [
            { id: 4, name: 'Keanu Reeves' },
            { id: 5, name: 'Laurence Fishburne' },
            { id: 24, name: 'Carrie-Anne Moss' },
            { id: 25, name: 'Hugo Weaving' },
            { id: 26, name: 'Joe Pantoliano' },
        ],
    },
    {
        id: 3,
        title: 'Interstellar',
        releaseDate: new Date('2014-11-07'),
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        productionCompanies: [{ id: 1, name: 'Warner Bros.' }, { id: 3, name: 'Paramount Pictures' }],
        directors: [{ id: 1, name: 'Christopher Nolan' }],
        cast: [
            { id: 6, name: 'Matthew McConaughey' },
            { id: 7, name: 'Anne Hathaway' },
            { id: 3, name: 'Tom Hardy' },
            { id: 27, name: 'Jessica Chastain' },
            { id: 28, name: 'Michael Caine' },
        ],
    },
    {
        id: 4,
        title: 'The Dark Knight',
        releaseDate: new Date('2008-07-18'),
        genres: ['Action', 'Crime', 'Drama'],
        productionCompanies: [{ id: 1, name: 'Warner Bros.' }],
        directors: [{ id: 1, name: 'Christopher Nolan' }],
        cast: [
            { id: 8, name: 'Christian Bale' },
            { id: 9, name: 'Heath Ledger' },
            { id: 29, name: 'Aaron Eckhart' },
            { id: 30, name: 'Michael Caine' },
            { id: 31, name: 'Maggie Gyllenhaal' },
        ],
    },
    {
        id: 5,
        title: 'Pulp Fiction',
        releaseDate: new Date('1994-10-14'),
        genres: ['Crime', 'Drama'],
        productionCompanies: [{ id: 4, name: 'Miramax' }],
        directors: [{ id: 4, name: 'Quentin Tarantino' }],
        cast: [
            { id: 10, name: 'John Travolta' },
            { id: 11, name: 'Uma Thurman' },
            { id: 32, name: 'Samuel L. Jackson' },
            { id: 33, name: 'Bruce Willis' },
            { id: 34, name: 'Ving Rhames' },
        ],
    },
    {
        id: 6,
        title: 'Fight Club',
        releaseDate: new Date('1999-10-15'),
        genres: ['Drama'],
        productionCompanies: [{ id: 5, name: '20th Century Fox' }],
        directors: [{ id: 5, name: 'David Fincher' }],
        cast: [
            { id: 12, name: 'Brad Pitt' },
            { id: 13, name: 'Edward Norton' },
            { id: 35, name: 'Helena Bonham Carter' },
            { id: 36, name: 'Meat Loaf' },
            { id: 37, name: 'Jared Leto' },
        ],
    },
    {
        id: 7,
        title: 'Forrest Gump',
        releaseDate: new Date('1994-07-06'),
        genres: ['Drama', 'Romance'],
        productionCompanies: [{ id: 6, name: 'Paramount Pictures' }],
        directors: [{ id: 6, name: 'Robert Zemeckis' }],
        cast: [
            { id: 14, name: 'Tom Hanks' },
            { id: 15, name: 'Robin Wright' },
            { id: 38, name: 'Gary Sinise' },
            { id: 39, name: 'Mykelti Williamson' },
            { id: 40, name: 'Sally Field' },
        ],
    },
    {
        id: 8,
        title: 'The Shawshank Redemption',
        releaseDate: new Date('1994-09-23'),
        genres: ['Drama'],
        productionCompanies: [{ id: 7, name: 'Castle Rock Entertainment' }],
        directors: [{ id: 7, name: 'Frank Darabont' }],
        cast: [
            { id: 16, name: 'Tim Robbins' },
            { id: 17, name: 'Morgan Freeman' },
            { id: 41, name: 'Bob Gunton' },
            { id: 42, name: 'William Sadler' },
            { id: 43, name: 'Clancy Brown' },
        ],
    },
    {
        id: 9,
        title: 'The Godfather',
        releaseDate: new Date('1972-03-24'),
        genres: ['Crime', 'Drama'],
        productionCompanies: [{ id: 8, name: 'Paramount Pictures' }],
        directors: [{ id: 8, name: 'Francis Ford Coppola' }],
        cast: [
            { id: 18, name: 'Marlon Brando' },
            { id: 19, name: 'Al Pacino' },
            { id: 44, name: 'James Caan' },
            { id: 45, name: 'Richard S. Castellano' },
            { id: 46, name: 'Robert Duvall' },
        ],
    },
    {
        id: 10,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        releaseDate: new Date('2001-12-19'),
        genres: ['Adventure', 'Drama', 'Fantasy'],
        productionCompanies: [{ id: 9, name: 'New Line Cinema' }],
        directors: [{ id: 9, name: 'Peter Jackson' }],
        cast: [
            { id: 20, name: 'Elijah Wood' },
            { id: 21, name: 'Ian McKellen' },
            { id: 47, name: 'Viggo Mortensen' },
            { id: 48, name: 'Sean Astin' },
            { id: 49, name: 'Orlando Bloom' },
        ],
    },
];

export interface MovieSearchResult {
    id: number;
    title: string;
    releaseYear: number;
}

export class MockMovieAPI {
    static getRandomMovie(): Promise<Movie> {
        return new Promise((resolve) => {
            const randomIndex = Math.floor(Math.random() * mockMovies.length);
            setTimeout(() => resolve(mockMovies[randomIndex]), 500); // Simulate network delay
        });
    }
    
    static searchMoviesByTitle(title: string): Promise<MovieSearchResult[]> {
        return new Promise((resolve) => {
            const results = mockMovies
                .filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
                .map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    releaseYear: movie.releaseDate.getFullYear(),
                }));
            setTimeout(() => resolve(results), 500); // Simulate network delay
        });
    }

    static getMovieDetails(id: number): Promise<Movie> {
        return new Promise((resolve, reject) => {
            const movie = mockMovies.find(movie => movie.id === id);
            setTimeout(() => {
                if (movie) {
                    resolve(movie);
                } else {
                    reject(new Error('Movie not found'));
                }
            }, 500); // Simulate network delay
        });
    }
}