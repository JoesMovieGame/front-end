<script setup lang="ts">
import { ref } from "vue";
import MovieGuesser from "./MovieGuesser.vue";
import MovieGuessResults from "./MovieGuessResults.vue";

const guessResults = ref<InstanceType<typeof MovieGuessResults>>();

function onMovieGuessed(_: number) {
  if (!guessResults.value) return;

  guessResults.value.scrollToBottom();
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="flex flex-col bg-white p-8 rounded shadow-md text-center w-3/4 max-h-screen">
      <h1 class="text-2xl font-bold mb-4">Welcome to my Movie Game</h1>
      <movie-guess-results ref="guessResults" />
      <movie-guesser @movie-guessed="onMovieGuessed" />
    </div>
  </div>
</template>
