<script setup lang="ts">
import MovieGuesser from "./MovieGuesser.vue";
import MovieGuessResults from "./MovieGuessResults.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md text-center">
      <h1 class="text-2xl font-bold mb-4">Welcome to my Movie Game</h1>
      <movie-guess-results />
      <movie-guesser />
    </div>
  </div>
</template>
