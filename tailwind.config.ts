import { radixThemePreset } from 'radix-themes-tw';
import type { Config } from 'tailwindcss';

const config: Config = {
  plugins: [],
  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  presets: [radixThemePreset],
};
export default config;
