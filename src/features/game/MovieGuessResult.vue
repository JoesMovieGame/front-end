<script setup lang="ts">
import {
  GuessResultMatchLevel,
  type IGuessResult,
} from "./models/guess-result";
import MovieGuessResultItem from "./MovieGuessResultItem.vue";
import CastMatchResultContent from "./CastMatchResultContent.vue";
defineProps<{
  result: IGuessResult;
}>();
</script>

<template>
  <div>
    <span>{{ result.guessMovie.title }}</span>
    <div class="grid grid-cols-5 gap-1">
      <movie-guess-result-item :matchLevel="result.releaseYearMatchLevel">
        {{ result.guessMovie.releaseDate.getFullYear().toString() }}
      </movie-guess-result-item>
      <movie-guess-result-item :matchLevel="result.productionCompanyMatchLevel">
        <ul>
          <li
            v-for="productionCompany in result.guessMovie.productionCompanies"
            :key="productionCompany.id"
            :class="{
              'font-bold': result.matchingProductionCompanies.some(
                (c) => c.id == productionCompany.id
              ),
            }"
          >
            {{ productionCompany.name }}
            <span></span>
          </li>
        </ul>
      </movie-guess-result-item>
      <movie-guess-result-item :matchLevel="result.genreMatchLevel">
        <ul>
          <li
            v-for="genre in result.guessMovie.genres"
            :key="genre"
            :class="{
              'font-bold': result.matchingGenres.some((g) => g == genre),
            }"
          >
            {{ genre }}
          </li>
        </ul>
      </movie-guess-result-item>
      <movie-guess-result-item :matchLevel="result.directorsMatchLevel">
        <ul>
          <li
            v-for="director in result.guessMovie.directors"
            :key="director.id"
            :class="{
              'font-bold': result.matchingDirectors.some(
                (d) => d.id == director.id
              ),
            }"
          >
          {{ director.name }}
          </li>
        </ul>
      </movie-guess-result-item>
      <movie-guess-result-item :matchLevel="result.castMatchLevel">
        <cast-match-result-content
          :guessCastMembers="result.guessMovie.cast"
          :matchingCastMembers="result.matchingCastMembers"
        />
      </movie-guess-result-item>
    </div>
  </div>
</template>
