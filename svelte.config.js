import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '200.html',
      precompress: false
    }),
    paths: {
      base: '/dca-simulator'
    },
    prerender: {
      entries: ['*'],
      handleHttpError: 'warn'
    }
  }
};

export default config;
