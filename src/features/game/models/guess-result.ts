import type { Movie, ProductionCompany, CastMember, Director } from "./movie";

export enum GuessResultMatchLevel {
  None,
  Partial,
  Full
}

export interface IGuessResult {
  readonly guessMovie: Movie;
  readonly isCorrect: boolean;

  readonly releaseYearMatchLevel: GuessResultMatchLevel;

  readonly genreMatchLevel: GuessResultMatchLevel;
  readonly matchingGenres: string[];

  readonly productionCompanyMatchLevel: GuessResultMatchLevel;
  readonly matchingProductionCompanies: ProductionCompany[];

  readonly directorsMatchLevel: GuessResultMatchLevel;
  readonly matchingDirectors: Director[];

  readonly castMatchLevel: GuessResultMatchLevel;
  readonly matchingCastMembers: CastMember[];
}

export class GuessResult implements IGuessResult {
  readonly guessMovie: Movie;
  readonly answerMovie: Movie;

  readonly isCorrect: boolean;

  readonly releaseYearMatchLevel: GuessResultMatchLevel;

  readonly genreMatchLevel: GuessResultMatchLevel;
  readonly matchingGenres: string[];

  readonly productionCompanyMatchLevel: GuessResultMatchLevel;
  readonly matchingProductionCompanies: ProductionCompany[];

  readonly directorsMatchLevel: GuessResultMatchLevel;
  readonly matchingDirectors: Director[];

  readonly castMatchLevel: GuessResultMatchLevel;
  readonly matchingCastMembers: CastMember[];

  constructor(guessMovie: Movie, answerMovie: Movie) {
    this.guessMovie = guessMovie;
    this.answerMovie = answerMovie;

    this.isCorrect = this.getIsCorrect();

    this.releaseYearMatchLevel = this.getReleaseYearMatchLevel();

    this.matchingGenres = this.getMatchingGenres();
    this.genreMatchLevel = this.getGenreMatchLevel();

    this.matchingProductionCompanies = this.getMatchingProductionCompanies();
    this.productionCompanyMatchLevel = this.getProductionCompaniesMatchLevel();

    this.matchingDirectors = this.getMatchingDirectors();
    this.directorsMatchLevel = this.getDirectorsMatchLevel();

    this.matchingCastMembers = this.getMatchingCastMembers();
    this.castMatchLevel = this.getCastsMatchLevel();
  }

  private getIsCorrect() {
    return this.guessMovie.id === this.answerMovie.id;
  }

  private getReleaseYearMatchLevel() {
    if (this.isCorrect) return GuessResultMatchLevel.Full;

    if (this.guessMovie.releaseDate.getFullYear() === this.answerMovie.releaseDate.getFullYear())
      return GuessResultMatchLevel.Full;
    
    if (Math.abs(this.guessMovie.releaseDate.getFullYear() - this.answerMovie.releaseDate.getFullYear()) <= 10)
      return GuessResultMatchLevel.Partial;
    
    return GuessResultMatchLevel.None;
  }

  private getMatchingGenres() {
    return this.guessMovie.genres.filter((genre) => {
      return this.answerMovie.genres.includes(genre);
    });
  }

  private getGenreMatchLevel() {
    if (this.isCorrect) return GuessResultMatchLevel.Full;

    if (this.guessMovie.genres.length === this.answerMovie.genres.length
      && this.matchingGenres.length === this.guessMovie.genres.length)
      return GuessResultMatchLevel.Full;
    if (this.matchingGenres.length > 0)
      return GuessResultMatchLevel.Partial;
    return GuessResultMatchLevel.None;
  }

  private getMatchingProductionCompanies() {
    return this.guessMovie.productionCompanies.filter((company) => {
      return this.answerMovie.productionCompanies.some((answerCompany) => {
        return company.id === answerCompany.id;
      });
    });
  }

  private getProductionCompaniesMatchLevel() {
    if (this.isCorrect) return GuessResultMatchLevel.Full;

    if (this.guessMovie.productionCompanies.length === this.answerMovie.productionCompanies.length
      && this.matchingProductionCompanies.length === this.guessMovie.productionCompanies.length)
      return GuessResultMatchLevel.Full;
    if (this.matchingProductionCompanies.length > 0)
      return GuessResultMatchLevel.Partial;
    return GuessResultMatchLevel.None;
  }

  private getMatchingDirectors() {
    return this.guessMovie.directors.filter((director) => {
      return this.answerMovie.directors.some((answerDirector) => {
        return director.id === answerDirector.id;
      });
    });
  }

  private getDirectorsMatchLevel() {
    if (this.isCorrect) return GuessResultMatchLevel.Full;

    if (this.guessMovie.directors.length === this.answerMovie.directors.length
      && this.matchingDirectors.length === this.guessMovie.directors.length)
      return GuessResultMatchLevel.Full;
    if (this.matchingDirectors.length > 0)
      return GuessResultMatchLevel.Partial;
    return GuessResultMatchLevel.None;
  }

  private getMatchingCastMembers() {
    return this.guessMovie.cast.filter((castMember) => {
      return this.answerMovie.cast.some((answerCastMember) => {
        return castMember.id === answerCastMember.id;
      });
    });
  }

  private getCastsMatchLevel() {
    if (this.isCorrect) return GuessResultMatchLevel.Full;

    if (this.guessMovie.cast.length === this.answerMovie.cast.length
      && this.matchingCastMembers.length === this.guessMovie.cast.length)
      return GuessResultMatchLevel.Full;
    if (this.matchingCastMembers.length > 0)
      return GuessResultMatchLevel.Partial;
    return GuessResultMatchLevel.None;
  }
}
