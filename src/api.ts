import type { News } from './types';

const news: News[] = [
  {
    title: 'Новый курс по веб-разработке!',
    description: 'Стартует интенсивный курс по современной веб-разработке на JavaScript и React. Регистрация уже открыта!',
    date: '23.04.2025',
    image: 'https://images.unsplash.com/photo-1672309046475-4cce2039f342?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Бесплатный вебинар по маркетингу',
    description: 'Приглашаем всех на бесплатный вебинар \'Digital-маркетинг 2025: тренды и инструменты\'. 15 мая в 19:00.',
    date: '06.05.2025',
    image: 'https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Обновление платформы обучения',
    description: 'Мы улучшили интерфейс и добавили новые функции для удобства студентов. Попробуйте уже сегодня!',
    date: '11.05.2025',
    image: 'https://plus.unsplash.com/premium_photo-1720288700959-17b6880d3979?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const getNews = async () => ({
  success: true,
  news
});

// eslint-disable-next-line unused-imports/no-unused-vars
export const postLogin = async (body: { email: string; password: string }) => ({
  success: true
});
