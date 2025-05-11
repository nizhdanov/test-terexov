import { eslint } from '@nizhdanov/eslint';

export default eslint({
  typescript: true,
  vue: { a11y: true },
  formatters: {
    markdown: true,
    html: true,
    css: true
  }
}, {
  rules:
    {
      'style/max-len': 'off'
    }
});
