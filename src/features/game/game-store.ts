import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Movie } from "./models/movie";
import { type IGuessResult, GuessResult } from "./models/guess-result";

export const useGameStore = defineStore("game", () => {
  let answerMovie: Movie | null = null;

  const guessResults = reactive<IGuessResult[]>([]);
  const gameWon = computed(() => guessResults.some((result) => result.isCorrect));

  async function initailizeGame() {
    // fetch current game answer movie data from API
    answerMovie = {
      id: 1,
      title: "Joe's Test Movie",
      releaseDate: new Date("2023-01-01"),
      genres: ["Action", "Adventure"],
      productionCompanies: [{id: 1, name: "Joe Productions"}],
      directors: [{id: 1, name: "Joe Doe"}],
      cast: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "Tom Hanks" },
      ],
    };
  }

  async function guessMovie(movieId: number) {
    if (!answerMovie || gameWon.value) return;

    // fetch guess movie data from API
    const guessMovie: Movie = {
      id: movieId,
      title: "Guess Movie",
      releaseDate: new Date("2024-01-01"),
      genres: ["Action", "Adventure"],
      productionCompanies: [{id: 2, name: "Guess Productions"}, {id: 1, name: "Joe Productions"}],
      directors: [{id: 1, name: "Joe Doe"}],
      cast: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Brad Pitt" },
        { id: 3, name: "Tom Hanks" },
      ],
    };

    // add guess movie to the list
    guessResults.push(new GuessResult(guessMovie, answerMovie));
  }

  return { answerMovie, guessResults, initailizeGame, guessMovie };
});
