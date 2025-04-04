import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'App2',
    template: './src/index.html', // ✅ Ensure this file exists
  },
  source: {
    entry: {
      index: './src/main.tsx', // ✅ Entry point for your React app
    },
  },
  output: {
    distPath: {
      root: '../../dist/packages/app2', // ✅ Output directory
    },
  },
});
