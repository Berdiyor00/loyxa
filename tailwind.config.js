/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: '0.5rem',
                sm: '0.5rem',
                lg: '2rem',
                xl: '2.5rem',
                '2xl': '3rem',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}