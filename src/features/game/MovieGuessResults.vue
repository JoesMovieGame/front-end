<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "./game-store";
import MovieGuessResult from "./MovieGuessResult.vue";

const gameStore = useGameStore();

const resultsContainer = ref<HTMLElement | null>(null);

function scrollToBottom() {
  resultsContainer.value?.scrollTo(0, resultsContainer.value.scrollHeight);
}

defineExpose({ scrollToBottom });
</script>
<template>
  <div ref="resultsContainer" v-if="gameStore.guessResults.length" class="overflow-scroll">
    <template
      v-for="result in gameStore.guessResults"
      :key="result.guessMovie.id"
    >
      <movie-guess-result :result="result" class="mb-1"/>
    </template>
  </div>
</template>
