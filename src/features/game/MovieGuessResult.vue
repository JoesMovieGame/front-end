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
  <div class="flex space-x-1">
    <movie-guess-result-item
      :matchLevel="
        result.isCorrect
          ? GuessResultMatchLevel.Full
          : GuessResultMatchLevel.None
      "
    >
      <div class="text-center">
        {{ result.guessMovie.title }}
      </div>
    </movie-guess-result-item>
    <movie-guess-result-item :matchLevel="result.releaseYearMatchLevel">
      <div class="text-center">
        {{ result.guessMovie.releaseDate.getFullYear().toString() }}
      </div>
    </movie-guess-result-item>
    <movie-guess-result-item :matchLevel="result.productionCompanyMatchLevel">
      <ul class="text-sm">
        <li
          v-for="productionCompany in result.guessMovie.productionCompanies"
          :key="productionCompany.id"
        >
          <span
            :class="
              result.matchingProductionCompanies.some(
                (c) => c.id == productionCompany.id
              )
                ? 'font-bold'
                : ''
            "
            >{{ productionCompany.name }}</span
          >
        </li>
      </ul>
    </movie-guess-result-item>
    <movie-guess-result-item :matchLevel="result.genreMatchLevel">
      <ul>
        <li v-for="genre in result.guessMovie.genres" :key="genre">
          <span
            :class="
              result.matchingGenres.some((g) => g == genre) ? 'font-bold' : ''
            "
            >{{ genre }}</span
          >
        </li>
      </ul>
    </movie-guess-result-item>
    <movie-guess-result-item :matchLevel="result.directorsMatchLevel">
      <ul>
        <li v-for="director in result.guessMovie.directors" :key="director.id">
          <span
            :class="
              result.matchingDirectors.some((d) => d.id == director.id)
                ? 'font-bold'
                : ''
            "
            >{{ director.name }}</span
          >
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
</template>
