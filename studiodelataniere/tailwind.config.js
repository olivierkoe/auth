/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#243748",
      secondary: "#EB8731",
      deconexion: "#EB0031",
      logoYoutube: "#EB0031",
    },
  },
};
export const plugins = [];
