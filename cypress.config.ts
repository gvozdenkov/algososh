import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  video: false,
  videoCompression: true,
  viewportWidth: 1300,
  viewportHeight: 800,

  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor());
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
