<script setup lang="ts">
import { inject } from 'vue';

interface Props {
  index: number
}

const { index } = defineProps<Props>();
const current = inject<number>('current');
</script>

<template>
  <div v-show="index === current" class="slide" role="group">
    <slot />
  </div>
</template>
