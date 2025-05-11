<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { computed, onBeforeMount, reactive } from 'vue';
import { z } from 'zod';

import Button from '@/components/ui/Button.vue';
import FormField from '@/components/ui/FormField.vue';

import type { News } from './types';

import { getNews, postLogin } from './api';
import VKIcon from './components/icons/VKIcon.vue';
import YandexIcon from './components/icons/YandexIcon.vue';
import { Carousel, Slide } from './components/ui/carousel';

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().min(1, { message: 'Поле обязательно' }).email('Некорректный email'),
    password: z.string().min(1, { message: 'Поле обязательно' }).min(6, { message: 'Минимум 6 символов' })
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    email: '',
    password: ''
  }
});

const news = reactive<News[]>([]);

onBeforeMount(async () => {
  try {
    const data = await getNews();
    data.news.forEach((item) => news.push(item));
  } catch (error) {
    console.log(error);
  }
});
const disabled = computed(() => !(meta.value.dirty === true && meta.value.valid === true));

const onSubmit = handleSubmit(async (values) => {
  await postLogin(values);
  console.log(values);
});
</script>

<template>
  <div class="min-h-screen grid lg:grid-cols-2">
    <div class="relative hidden lg:flex flex-col items-center justify-center p-8 bg-green-900/60 text-white">
      <Carousel :count="news.length" aria-label="Новости">
        <Slide v-for="slide, index in news" :key="index" :index class="flex flex-col gap-6 max-w-md">
          <img :src="slide.image" alt="" class="h-[250px] object-cover rounded">
          <h2 class="text-2xl font-medium">
            {{ slide.title }}
          </h2>
          <p class="text-sm">
            {{ slide.description }}
          </p>
          <span class="text-right">{{ slide.date }}</span>
        </Slide>
      </Carousel>
    </div>

    <div class="flex flex-col items-center justify-center p-8">
      <div class="w-full max-w-sm space-y-8">
        <div class="text-center">
          <h1 class="text-2xl font-script mb-6 text-primary">
            Online School
          </h1>
          <h2 class="text-xl text-foreground">
            Добро пожаловать
          </h2>
        </div>

        <form class="flex flex-col gap-6" novalidate @submit.prevent="onSubmit">
          <FormField
            name="email"
            label="Email"
            autocomplete="email"
            type="email"
          />

          <FormField
            name="password"
            label="Пароль"
            autocomplete="current-password"
            type="password"
          >
            <template #after>
              <div class="text-right">
                <a href="#" class="text-sm text-muted-foreground hover:underline underline-offset-4">
                  Забыли пароль?
                </a>
              </div>
            </template>
          </FormField>

          <Button type="submit" w-full :disabled>
            Войти
          </Button>

          <div class="text-muted-foreground text-sm text-center divider">
            или войти с помощью
          </div>

          <div class="grid grid-cols-2 gap-6">
            <Button type="button" variant="secondary">
              <VKIcon class="size-6" />
              <!-- Войти с VK ID -->
            </Button>
            <Button type="button" variant="secondary">
              <YandexIcon class="rounded-full size-6" />
              <!-- Войти с Яндекс ID -->
            </Button>
          </div>

          <p class="text-center text-sm text-muted-foreground">
            Ещё не зарегестрировались?
            <a href="#" class="text-primary text-nowrap hover:underline underline-offset-4">
              Создать аккаунт
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider {
  @apply flex whitespace-nowrap items-center gap-2;

  &::before,
  &::after {
    content: '';
    @apply w-full border-t border-border;
  }
}
</style>
