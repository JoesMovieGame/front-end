<script setup lang="ts">
import { useGameStore } from "./game-store";
import MovieGuessResult from "./MovieGuessResult.vue";

const gameStore = useGameStore();
</script>
<template>
  <div v-if="gameStore.guessResults.length">
    <template
      v-for="result in gameStore.guessResults"
      :key="result.guessMovie.id"
    >
      <movie-guess-result :result="result" class="mb-1"/>
    </template>
  </div>
</template>
