import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  context: __dirname, // 👈 sets the root context to packages/app2
  plugins: [pluginReact()],
  html: {
    title: 'App2',
    template: path.resolve(__dirname, 'src/index.html'),
  },
  source: {
    entry: {
      index: path.resolve(__dirname, 'src/main.tsx'), // 👈 resolve absolute entry
    },
  },
  output: {
    distPath: {
      root: path.resolve(__dirname, '../../dist/packages/app2'),
    },
  },
});
