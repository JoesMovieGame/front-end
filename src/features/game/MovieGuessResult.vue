<script setup lang="ts">
import type { IGuessResult } from './models/guess-result';

defineProps<{
    result: IGuessResult;
}>();
</script>
<template>
    <div class="flex" v-once>
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