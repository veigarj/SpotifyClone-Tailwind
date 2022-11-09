/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      space: {
        14: '3.5rem',
        '125px': '125px',
      },
      colors: {
        hoverspt: '#18D760',
        'purple-main': '#2D4689',
        'green-main': '#1ED760',
      },
      backgroundImage: (theme) => ({
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },
      backgroundPosition: {
        banner: '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      fontSize: {
        '9x1': '9rem',
      },
    },
  },
  plugins: [],
};
