import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/Nicole-Website/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
