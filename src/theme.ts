import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export default definePreset(Aura, {
  primitive: {
    borderRadius: { xs: '3px', sm: '4px', md: '6px', lg: '8px', xl: '10px' },
  },
  semantic: {
    primary: {
      50: '#f7f1ee',
      100: '#edded7',
      200: '#ddc3b4',
      300: '#cda790',
      400: '#bd8c6d',
      500: '#7f5539',
      600: '#6f4931',
      700: '#5f3d2a',
      800: '#4f3122',
      900: '#3f261b',
      950: '#252221',
    },
    focusRing: { width: '2px', style: 'solid', color: '{primary.color}', offset: '3px' },
    colorScheme: {
      light: {
        primary: {
          color: '#7f5539',
          contrastColor: '#f9f7f5',
          hoverColor: '#5f3d2a',
          activeColor: '#4f3122',
        },
        surface: {
          0: '#f9f7f5',
          50: '#f2efeb',
          100: '#e8e1d9',
          200: '#d6cfc8',
          300: '#c3bcb6',
          400: '#b1aaa5',
          500: '#8e8884',
          600: '#6b6663',
          700: '#55514d',
          800: '#484442',
          900: '#333333',
          950: '#292929',
        },
        text: {
          color: '#333333',
          hoverColor: '#252221',
          mutedColor: '#655b52',
          hoverMutedColor: '#484442',
        },
        content: { background: '#e8e1d9', hoverBackground: '#d6cfc8', borderColor: '#c3bcb6' },
        highlight: {
          background: '#d6cfc8',
          focusBackground: '#c3bcb6',
          color: '#3f261b',
          focusColor: '#3f261b',
        },
      },
      dark: {
        primary: {
          color: '#e8e1d9',
          contrastColor: '#202419',
          hoverColor: '#f2efeb',
          activeColor: '#d6cfc8',
        },
        surface: {
          0: '#f9f7f5',
          50: '#f2efeb',
          100: '#e8e1d9',
          200: '#d6cfc8',
          300: '#c3bcb6',
          400: '#b1aaa5',
          500: '#8e8884',
          600: '#6b6663',
          700: '#55514d',
          800: '#484442',
          900: '#333333',
          950: '#292929',
        },
        text: {
          color: '#e8e1d9',
          hoverColor: '#f9f7f5',
          mutedColor: '#c3bcb6',
          hoverMutedColor: '#e8e1d9',
        },
        content: { background: '#2b3023', hoverBackground: '#3e4533', borderColor: '#626b51' },
        highlight: {
          background: '#484442',
          focusBackground: '#55514d',
          color: '#f2efeb',
          focusColor: '#f9f7f5',
        },
      },
    },
  },
  components: {
    galleria: {
      navButton: {
        background: 'rgba(32, 36, 25, 0.92)',
        hoverBackground: '#3e4533',
        color: '#e8e1d9',
        hoverColor: '#ffffff',
      },
    },
    button: {
      root: {
        borderRadius: '5px',
        paddingX: '1.3rem',
        paddingY: '0.8rem',
        label: { fontWeight: '600' },
      },
      colorScheme: {
        dark: {
          outlined: {
            primary: {
              borderColor: '#8e8884',
              hoverBackground: '#484442',
              activeBackground: '#55514d',
            },
          },
        },
      },
    },
    menubar: {
      root: { borderColor: 'transparent', background: 'transparent', padding: '0', gap: '1.5rem' },
    },
    card: {
      root: { background: 'transparent', shadow: 'none', borderRadius: '0' },
      body: { padding: '0', gap: '1rem' },
      title: { fontSize: '1.15rem', fontWeight: '600' },
    },
    panel: {
      root: { background: 'transparent', borderRadius: '6px' },
      header: { background: 'transparent', padding: '1.75rem 1.75rem 0.75rem' },
      content: { padding: '0 1.75rem 1.75rem' },
    },
    accordion: {
      header: { background: 'transparent', padding: '1.25rem 0' },
      content: { background: 'transparent', padding: '0 0 1.5rem' },
    },
    tag: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
        padding: '0.25rem 0.65rem',
        borderRadius: '4px',
      },
    },
    timeline: { vertical: { eventContent: { padding: '0 0 2.25rem 1.5rem' } } },
  },
})
