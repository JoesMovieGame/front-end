import type { Movie, ProductionCompany, CastMember, Director } from "./movie";

export interface IGuessResult {
  readonly guessMovie: Movie;
  readonly isCorrect: boolean;

  readonly isSameReleaseYear: boolean;
  readonly isSameReleaseDecade: boolean;

  readonly isSameGenres: boolean;
  readonly matchingGenres: string[];

  readonly isSameProductionCompanies: boolean;
  readonly matchingProductionCompanies: ProductionCompany[];

  readonly isSameDirectors: boolean;
  readonly matchingDirectors: Director[];

  readonly isSameCast: boolean;
  readonly matchingCastMembers: CastMember[];
}

export class GuessResult implements IGuessResult {
  readonly guessMovie: Movie;
  readonly answerMovie: Movie;

  readonly isCorrect: boolean;

  readonly isSameReleaseYear: boolean;
  readonly isSameReleaseDecade: boolean;

  readonly isSameGenres: boolean;
  readonly matchingGenres: string[];

  readonly isSameProductionCompanies: boolean;
  readonly matchingProductionCompanies: ProductionCompany[];

  readonly isSameDirectors: boolean;
  readonly matchingDirectors: Director[];

  readonly isSameCast: boolean;
  readonly matchingCastMembers: CastMember[];

  constructor(guessMovie: Movie, answerMovie: Movie) {
    this.guessMovie = guessMovie;
    this.answerMovie = answerMovie;

    this.isCorrect = this.getIsCorrect();

    this.isSameReleaseYear = this.getIsSameReleaseYear();
    this.isSameReleaseDecade = this.getIsSameReleaseDecade();

    this.matchingGenres = this.getMatchingGenres();
    this.isSameGenres = this.getIsSameGenres();

    this.matchingProductionCompanies = this.getMatchingProductionCompanies();
    this.isSameProductionCompanies = this.getIsSameProductionCompanies();

    this.matchingDirectors = this.getMatchingDirectors();
    this.isSameDirectors = this.getIsSameDirectors();

    this.matchingCastMembers = this.getMatchingCastMembers();
    this.isSameCast = this.getIsSameCasts();
  }

  private getIsCorrect() {
    return this.guessMovie.id === this.answerMovie.id;
  }

  private getIsSameReleaseYear() {
    return (
      this.guessMovie.releaseDate.getFullYear() ===
      this.answerMovie.releaseDate.getFullYear()
    );
  }

  private getIsSameReleaseDecade() {
    return (
      Math.floor(this.guessMovie.releaseDate.getFullYear() / 10) ===
      Math.floor(this.answerMovie.releaseDate.getFullYear() / 10)
    );
  }

  private getMatchingGenres() {
    return this.guessMovie.genres.filter((genre) => {
      return this.answerMovie.genres.includes(genre);
    });
  }

  private getIsSameGenres() {
    return this.getMatchingGenres.length === this.answerMovie.genres.length;
  }

  private getMatchingProductionCompanies() {
    return this.guessMovie.productionCompanies.filter((company) => {
      return this.answerMovie.productionCompanies.some((answerCompany) => {
        return company.id === answerCompany.id;
      });
    });
  }

  private getIsSameProductionCompanies() {
    return (
      this.getMatchingProductionCompanies.length ===
      this.answerMovie.productionCompanies.length
    );
  }

  private getMatchingDirectors() {
    return this.guessMovie.directors.filter((director) => {
      return this.answerMovie.directors.some((answerDirector) => {
        return director.id === answerDirector.id;
      });
    });
  }

  private getIsSameDirectors() {
    return this.matchingDirectors.length === this.answerMovie.directors.length;
  }

  private getMatchingCastMembers() {
    return this.guessMovie.cast.filter((castMember) => {
      return this.answerMovie.cast.some((answerCastMember) => {
        return castMember.id === answerCastMember.id;
      });
    });
  }

  private getIsSameCasts() {
    return this.matchingCastMembers.length === this.answerMovie.cast.length;
  }
}
