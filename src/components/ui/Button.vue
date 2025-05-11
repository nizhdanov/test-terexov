<script setup lang="ts">
type Size = 'md';
type Variant = 'primary' | 'secondary';

interface Props {
  size?: Size;
  variant?: Variant;
  wFull?: boolean;
}

const { size = 'md', variant = 'primary', wFull = false } = defineProps<Props>();
</script>

<template>
  <button :class="[size, variant, { 'w-full': wFull }]" class="base">
    <slot />
  </button>
</template>

<style scoped>
.base {
  @apply cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50;

  &:focus-visible {
    @apply outline-none ring-2 ring-ring ring-offset-2;
  }

  &svg {
    @apply pointer-events-none size-4 shrink-0;
  }
}

.md {
  @apply h-10 px-4 py-2;
}

.primary {
  @apply bg-primary text-primary-foreground hover:bg-primary/90;
}

.secondary {
  @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
}
</style>
