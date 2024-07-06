<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useGameStore } from "./features/game/game-store";
const gameStore = useGameStore();

onMounted(async () => await gameStore.initailizeGame());
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Play</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
