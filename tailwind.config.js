import React from 'react';

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#4682B4',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
