<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "./game-store";
import MovieSearch from "./MovieSearchSelector.vue";

const selectedMovieId = ref<number | null>(1);

const gameStore = useGameStore();

function movieSelected(movieId: number) {
  selectedMovieId.value = movieId;
}

async function guessMovie() {
  if (selectedMovieId.value === null) {
    return;
  }

  if (
    gameStore.guessResults.some(
      (r) => r.guessMovie.id === selectedMovieId.value
    )
  ) {
    // TODO show error
    return;
  }

  await gameStore.guessMovie(selectedMovieId.value);
}
</script>

<template>
  <div class="flex justify-between items-center p-4">
    <movie-search @movie-selected="movieSelected" />
    <button @click="guessMovie">Guess</button>
  </div>
</template>
