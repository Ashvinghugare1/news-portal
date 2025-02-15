# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


##Install Tailwind CSS
##Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

npm create vite@latest . -- --template react
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p


##Configure your template paths
##Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



##Add the Tailwind directives to your CSS
##Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

## to start project
npm run dev

##Installation icon (for standard modern project)
npm install react-icons --save

##for pi chart
npm install recharts
 
