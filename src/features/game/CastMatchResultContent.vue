<script setup lang="ts">
import { computed } from "vue";
import type { CastMember } from "./models/movie";

const props = defineProps<{
  guessCastMembers: CastMember[];
  matchingCastMembers: CastMember[];
}>();

const castMemberDisplayCount = 5;

const displayedCastMembers = computed(() => {
  const castMembers = [] as { castMember: CastMember; isMatching: boolean }[];

  const maxNonMatchingCastMembers =
    castMemberDisplayCount - props.matchingCastMembers.length;
  let nonMatchingCastMembersCount = 0;

  for (let i = 0; i < props.guessCastMembers.length; i++) {
    if (nonMatchingCastMembersCount >= maxNonMatchingCastMembers) break;

    const castMember = props.guessCastMembers[i];
    const isMatching = props.matchingCastMembers.some(
      (m) => m.id === castMember.id
    );

    if (!isMatching) {
      nonMatchingCastMembersCount++;
    }

    castMembers.push({ castMember, isMatching });
  }

  for (const matchingCastMember of props.matchingCastMembers) {
    if (castMembers.some((m) => m.castMember.id === matchingCastMember.id))
      continue;

    castMembers.push({ castMember: matchingCastMember, isMatching: true });
  }

  return castMembers;
});
</script>

<template>
  <ul>
    <li
      v-for="castMember in displayedCastMembers"
      :key="castMember.castMember.id"
      :class="{'font-bold': castMember.isMatching}"
    >{{ castMember.castMember.name }}
    </li>
  </ul>
</template>
