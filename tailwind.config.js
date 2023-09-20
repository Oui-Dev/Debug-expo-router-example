/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'custom-white': '#FFFFFF',
                'custom-black': '#000000',
                'custom-green': '#0CAF60',
                'custom-light-green': '#6DEAAD',
                'custom-gray': '#979797',
                'custom-dark-gray': '#323335',
                'custom-light-gray': '#EEEEEE',
                'custom-red': '#FA441C',
                'custom-yellow': '#FABC1C'
            }
        }
    },
    plugins: []
};
