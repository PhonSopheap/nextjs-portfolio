// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  fontFamily: {
    kanBold: ["kantumruy-bold", "sans-serif"],
    KanLight: ["kantumruy-light", "sans-serif"],
    Kan: ["kantumruy", "sans-serif"],
    KanRegular: ["kantumruy-regular", "sans-serif"],
  },
  fontSize: {
    xxs: ".7rem",
    xs: ".75rem",
    sm: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "4.5xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
  },
  screens: {
    'sm': "640px",
    // => @media (min-width: 640px) { ... }

    'md': "768px",
    // => @media (min-width: 768px) { ... }

    'lg': "1024px",
    // => @media (min-width: 1024px) { ... }

    'xl': "1280px",
    // => @media (min-width: 1280px) { ... }

    '2xl': "1536px",
    // => @media (min-width: 1536px) { ... }
  },

  theme: {
    extend: {},
  },
  plugins: [],
};
