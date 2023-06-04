/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html'
    ],
    theme: {
        extend: {
            colors: {
                green: '#00f300',
                purple: '#ff03c9',
                yellow: '#dddd08'
            },
            spacing: {
                popup: '375px',
                video: '500px'
            }
        },
    },
    plugins: [],
}
