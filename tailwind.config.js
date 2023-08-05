/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                // primary: '#6366f1', // Indigo 500
                secondary: '#818cf8', // Indigo 400

                utama: '#312e81', // Indigo 900
                button: '#6366f1', // Indigo 500

            },
            screens: {
                '2xl': '1320px',
            }
        },
    },
    plugins: [],
}