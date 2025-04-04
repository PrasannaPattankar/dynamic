import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react'; // ✅ use named import

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'App1',
  },
  source: {
    entry: {
      index: './src/main.tsx', // 👈 make sure this path exists
    },
  },
  output: {
    distPath: {
      root: '../../dist/packages/app1',
    },
  },
});
