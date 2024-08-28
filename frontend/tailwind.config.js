/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      plugins: [
        require('daisyui'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
  ],
    }
  }
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//     daisyui: {
//     themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
//     darkTheme: "dark", // name of one of the included themes for dark mode
//     base: true, // applies background color and foreground color for root element by default
//     styled: true, // include daisyUI colors and design decisions for all components
//     utils: true, // adds responsive and modifier utility classes
//     prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
//     logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
//     themeRoot: ":root", // The element that receives theme color CSS variables
//   },
//     },
//   },
//   plugins: [
//     require('daisyui'),
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/forms')
//   ],
// }