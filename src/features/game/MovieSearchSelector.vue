<script setup lang="ts">
import { ref } from "vue";
const search = ref("");
const selectedMovieId = defineModel<number | null>();
</script>
<template>
  <input type="text" v-model="search" placeholder="Search for a movie..." />
</template>
