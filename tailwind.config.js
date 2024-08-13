/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [],
  theme: {},
  plugins: [
    plugin(function ({addVariant}) {
      addVariant('hover', [
        '@media (hover: hover) { &:hover }',
        '@media (hover: none) { &:active }',
      ]);
    }),
  ],
}

