<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { debounce } from "@/util/debounce";
import { XMarkIcon } from "@heroicons/vue/24/solid";

interface MovieSearchResult {
  id: number;
  title: string;
  year: number;
}


const emit = defineEmits<{
  (e: 'movieSelected', movieId: number | null): void;
}>();

defineExpose({
  clearSelectedMovie
});

const selectedSearchResult = ref<MovieSearchResult | null>(null);

const search = ref("");
const searchVisible = ref(false);

const searchResults = reactive<MovieSearchResult[]>([]);

function searchMovies(query: string) {
  searchResults.splice(0);
  if (!query) return;

  searchResults.push(
    { id: 1, title: "The Matrix", year: 1999 },
    { id: 2, title: "The Matrix Reloaded", year: 2003 },
    { id: 3, title: "The Matrix Revolutions", year: 2003 }
  );
}

watch(search, debounce(searchMovies, 300));

function clearSelectedMovie() {
  selectedSearchResult.value = null;
  emit("movieSelected", null);
}

function selectMovie(movie: MovieSearchResult) {
  selectedSearchResult.value = movie;
  search.value = "";
  searchVisible.value = false;
  emit("movieSelected", movie.id);
}

function getMovieSearchResultDisplay(movie: MovieSearchResult) {
  return `${movie.title} (${movie.year})`;
}
</script>
<template>
  <div>
    <div
      class="flex justify-between items-center p-2 border"
      v-if="selectedSearchResult"
    >
      <span class="flex-grow">
        {{ getMovieSearchResultDisplay(selectedSearchResult) }}
      </span>
      <button @click="clearSelectedMovie" class="flex items-center ml-2">
        <XMarkIcon class="size-4" />
      </button>
    </div>
    <div v-else class="relative">
      <input
        class="flex-grow border rounded-md p-2 mr-2"
        type="text"
        v-model="search"
        placeholder="Search for a movie..."
        @focus="searchVisible = true"
        @blur="debounce(() => (searchVisible = false), 200)"
      />
      <ul
        v-if="searchVisible && searchResults.length"
        class="absolute z-10 mt-1 left-0 w-full border bg-white rounded-md shadow-lg"
      >
        <li
          v-for="result in searchResults"
          :key="result.id"
          @click="selectMovie(result)"
          class="p-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ getMovieSearchResultDisplay(result) }}
        </li>
      </ul>
    </div>
  </div>
</template>
