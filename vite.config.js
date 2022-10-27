import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import { presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import transformerDirective from '@unocss/transformer-directives';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirective()]
    })
  ]
});
