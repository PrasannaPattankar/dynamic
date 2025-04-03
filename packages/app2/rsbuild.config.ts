import { defineConfig } from '@rsbuild/core';
import react from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [react()],
  html: {
    template: './src/index.html',
  },
});
