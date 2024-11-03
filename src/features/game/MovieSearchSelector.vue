<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { debounce } from "@/util/debounce";

interface MovieSearchResult {
  id: number;
  title: string;
  year: number;
}

const selectedMovieId = defineModel<number | null>();
const search = ref("");

const searchResults = reactive<MovieSearchResult[]>([]);

function searchMovies(query: string) {
  searchResults.splice(0);

  searchResults.push(
    { id: 1, title: "The Matrix", year: 1999 },
    { id: 2, title: "The Matrix Reloaded", year: 2003 },
    { id: 3, title: "The Matrix Revolutions", year: 2003 }
  );
}

watch(search, debounce(searchMovies, 300));
</script>
<template>
  <input type="text" v-model="search" placeholder="Search for a movie..." />

  <select v-model="selectedMovieId">
    <option value="" disabled>Select a movie...</option>
    <option v-for="result in searchResults" :key="result.id" :value="result.id">
      {{ result.title }} ({{ result.year }})
    </option>
  </select>
</template>
