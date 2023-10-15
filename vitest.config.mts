import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    include: ['questions/1-hello-word/*.test.ts'],
    environment: 'jsdom',
    deps: {
      // inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
}))
