<script setup lang="ts">
import { GuessResultMatchLevel } from "./models/guess-result";

const props = defineProps<{
  matchLevel: GuessResultMatchLevel;
}>();

function getBgClass() {
  switch (props.matchLevel) {
    case GuessResultMatchLevel.Full:
      return "bg-matchFull";
    case GuessResultMatchLevel.Partial:
      return "bg-matchPartial";
    case GuessResultMatchLevel.None:
      return "bg-matchNone";
  }
}

</script>

<template>
  <div class="flex flex-col h-full aspect-square p-2 rounded-lg justify-center items-center text-white" :class="getBgClass()">
    <slot></slot>
  </div>
</template>
