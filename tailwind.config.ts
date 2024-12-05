import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        xam: '#3A5469',
        vien: '#BDBDBD',
        text: '#394854',
        subTitle: '#376A66',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
} satisfies Config
