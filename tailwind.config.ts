import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7cc8ff',
          400: '#36b0ff',
          500: '#0a87e8',
          600: '#006ce0',
          700: '#0055c8',
          800: '#0a47a3',
          900: '#0a2540',
          950: '#051c34',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffe0cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#FF7A18',
          600: '#e66a0f',
          700: '#cc5a0a',
          800: '#b34a05',
          900: '#993a00',
          950: '#661800',
        },
        success: {
          50: '#f0fdf4',
          100: '#dbeae0',
          200: '#bbdcc4',
          300: '#9acc9b',
          400: '#7abc71',
          500: '#00C2A8',
          600: '#00a890',
          700: '#008e79',
          800: '#007461',
          900: '#005a4a',
          950: '#003a2f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0A2540 0%, #0d3659 100%)',
        'gradient-success': 'linear-gradient(135deg, #00C2A8 0%, #00a890 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0A2540 0%, #00C2A8 100%)',
      },
      boxShadow: {
        'sm-premium': '0 2px 8px rgba(10, 37, 64, 0.08)',
        'md-premium': '0 4px 16px rgba(10, 37, 64, 0.12)',
        'lg-premium': '0 8px 32px rgba(10, 37, 64, 0.16)',
        'xl-premium': '0 16px 48px rgba(10, 37, 64, 0.2)',
        'glow': '0 0 20px rgba(0, 194, 168, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseSoft: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

export default config
