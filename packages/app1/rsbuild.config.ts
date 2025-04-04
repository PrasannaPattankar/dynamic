import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'App1',
    template: './src/index.html', // ✅ makes sure to use the HTML file
  },
  source: {
    entry: {
      index: './src/main.tsx', // ✅ must match the new entry file
    },
  },
  output: {
    distPath: {
      root: '../../dist/packages/app1',
    },
  },
});
