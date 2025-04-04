import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'App2',
    template: path.resolve(__dirname, 'src/index.html'), // ✅ Absolute path works reliably
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  output: {
    distPath: {
      root: '../../dist/packages/app2',
    },
  },
});
