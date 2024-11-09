<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "./game-store";
import MovieSearch from "./MovieSearchSelector.vue";

const selectedMovieId = ref<number | null>(null);
const gameStore = useGameStore();
const movieSearch = ref<InstanceType<typeof MovieSearch>>();

const emit = defineEmits<{
  (e: 'movieGuessed', movieId: number): void;
}>();

function movieSelected(movieId: number | null) {
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
    movieSearch.value?.clearSelectedMovie();
  }
  else {
    await gameStore.guessMovie(selectedMovieId.value);
  }

  movieSearch.value?.clearSelectedMovie();
  emit("movieGuessed", selectedMovieId.value);
}
</script>

<template>
  <div class="flex justify-center items-center p-4">
    <movie-search ref="movieSearch" @movie-selected="movieSelected" />
    <button :disabled="!selectedMovieId" @click="guessMovie">Guess</button>
  </div>
</template>
