import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Movie } from "./models/movie";
import { type IGuessResult, GuessResult } from "./models/guess-result";
import { MockMovieAPI } from "./api/movie-api";

export const useGameStore = defineStore("game", () => {
  let answerMovie: Movie | null = null;

  const guessResults = reactive<IGuessResult[]>([]);
  const gameWon = computed(() => guessResults.some((result) => result.isCorrect));

  async function initailizeGame() {
    // fetch current game answer movie data from API
    answerMovie = await MockMovieAPI.getRandomMovie();
  }

  async function guessMovie(movieId: number) {
    if (!answerMovie || gameWon.value) return;

    // fetch guess movie data from API
    const guessMovie = await MockMovieAPI.getMovieDetails(movieId);

    // add guess movie to the list
    guessResults.push(new GuessResult(guessMovie, answerMovie));
  }

  return { answerMovie, guessResults, initailizeGame, guessMovie };
});
