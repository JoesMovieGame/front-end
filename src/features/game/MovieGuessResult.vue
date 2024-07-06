<script setup lang="ts">
import type { GuessResult } from './models/guess-result';

defineProps<{
    result: GuessResult;
}>();
</script>
<template>
    <div class="flex">
        <div>
            {{ result.guessMovie.title }}
        </div>
        <div>
            {{ result.guessMovie.releaseDate.getFullYear() }}
        </div>
        <div>
            {{ result.matchingGenres.join(', ') }}
        </div>
        <div>
            {{ result.matchingProductionCompanies.map(company => company.name).join(', ') }}
        </div>
        <div>
            {{ result.matchingDirectors.map(company => company.name).join(', ') }}
        </div>
        <div>
            {{  result.matchingCastMembers.map(company => company.name).join(', ') }}
        </div>
    </div>
</template>