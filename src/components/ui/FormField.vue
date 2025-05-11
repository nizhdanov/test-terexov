<script setup lang="ts">
import { useField } from 'vee-validate';
import { useId } from 'vue';

interface Props {
  label: string
  name: string
}

defineOptions({
  inheritAttrs: false
});
const { name } = defineProps<Props>();

const { value, errorMessage, handleBlur, setErrors } = useField(name, {}, {
  validateOnValueUpdate: false
});
const id = useId();
</script>

<template>
  <div class="flex flex-col gap-2">
    <slot name="before" />
    <label :for="id" class="text-sm" :class="errorMessage ? 'text-danger' : 'text-muted-foreground'">
      {{ label }}
      <input
        :id v-model="value" :name class="base"
        v-bind="$attrs"
        @blur="handleBlur($event, true)" @focus="setErrors([])"
      >
    </label>
    <Transition>
      <span v-if="errorMessage" class="error-message ">{{ errorMessage }}</span>
    </Transition>
    <slot name="after" />
  </div>
</template>

<style scoped>
.base {
  @apply mt-2 flex h-10 w-full rounded-md text-foreground border border-border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm;
}

.error-message {
  @apply text-xs font-medium text-danger;
  @apply transition-all duration-300 ease-in-out;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
