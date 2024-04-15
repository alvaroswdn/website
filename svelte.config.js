import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      relative: false,
    },
    alias: {
      $components: 'src/components',
    },
    csp: {
      directives : {
        'default-src': ['none'],
        'img-src': ['self'],
        'style-src': ['self', 'unsafe-inline'],
        'script-src': ['self', 'https://static.cloudflareinsights.com', 'unsafe-inline'],
        'connect-src': ['self', 'https://cloudflareinsights.com'],
        'font-src': ['self'],
        'manifest-src': ['self'],
        'frame-ancestors': ['none'],
        'object-src': ['none'],
        'base-uri': ['self'],
        'form-action': ['self'],
      },
    },
  },
};

export default config;
