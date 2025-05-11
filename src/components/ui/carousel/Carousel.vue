<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core';
import { provide, ref } from 'vue';

interface Props {
  count: number
}

const { count } = defineProps<Props>();
const current = ref(0);

provide('current', current);

const { pause } = useIntervalFn(() => {
  if (current.value === count - 1) {
    current.value = 0;
  } else {
    current.value += 1;
  }
}, 5000);

function selectSlide(num: number) {
  current.value = num - 1;
  pause();
}
</script>

<template>
  <div class="carousel" role="region">
    <div aria-live="off">
      <slot />
    </div>
    <div
      class="controls" role="group"
      aria-label="Управление слайдами"
    >
      <button
        v-for="num in count" :key="num"
        :aria-label="`Показать ${num} из ${count}`"
        v-bind="num - 1 === current && {
          'class': 'active',
          'aria-current': true,
        }"
        type="button"
        @click="selectSlide(num)"
      />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  @apply flex flex-col items-center gap-5;
}

.controls {
  button {
    @apply cursor-pointer select-none size-2 rounded-full bg-white/40;

    &.active {
      @apply bg-white pointer-events-none;
    }

    &:focus-visible {
      @apply outline-none ring-2 ring-ring ring-offset-2;
    }

    + button {
      @apply ms-3;
    }
  }
}
</style>
