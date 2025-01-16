// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from '#app'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F5F7F8',    // Slightly blue-tinted light gray for subtle depth
    'surface-variant': '#EC407A',   // pink for tooltips
    'on-surface-variant': '#FFFFFF', // white for text on pink surfaces
    'surface-dark': '#2D3436',      // Charcoal for navbars and navdrawers

    // Primary (Teal) family
    'primary-lighten-4': '#F7FDFE',
    'primary-lighten-3': '#E0F7FA',
    'primary-lighten-2': '#80DEEB',
    'primary-lighten-1': '#26C6DA',
    'primary': '#00B3C5',
    'primary-darken-1': '#007A8A',
    'primary-darken-2': '#005D6B',
    'primary-darken-3': '#00424D',
    'primary-darken-4': '#002A33',

    // Secondary (Pink) family
    'secondary-lighten-3': '#FCE4EC',  // Very pale pink
    'secondary-lighten-2': '#FFA4C1',
    'secondary-lighten-1': '#FF719B',
    'secondary': '#EC407A',
    'secondary-darken-1': '#D81B60',
    'secondary-darken-2': '#B0003A',

    // Tertiary (Yellow) family
    'tertiary-lighten-3': '#FFF8E1',  // Very pale yellow
    'tertiary-lighten-2': '#FFE082',
    'tertiary-lighten-1': '#FFD54F',
    'tertiary': '#FFB300',
    'tertiary-darken-1': '#FB8C00',
    'tertiary-darken-2': '#EF6C00',

    error: '#FF4D4D',     
    info: '#0099E6',      
    success: '#00B894',   
    warning: '#FF9800'   
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})
