/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

import vCache from '@raegen/vite-plugin-vitest-cache';

export default defineConfig({
  // plugins: [vCache()],
  test: {
    reporters: ['default', 'html'],
  }
})
