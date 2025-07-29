/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Exo 2', 'sans-serif'],
        'cyber': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        neon: {
          blue: '#00d4ff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#10b981',
          orange: '#f59e0b',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        },
        cyber: {
          dark: '#0a0a0a',
          darker: '#050505',
          blue: '#00d4ff',
          purple: '#8b5cf6',
          pink: '#ec4899',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradient 3s ease infinite',
        'holographic': 'holographic 4s ease-in-out infinite',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
        'neon-flicker': 'neonFlicker 1.5s infinite alternate',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        holographic: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(180deg)'
          },
        },
        cyberPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '0.8'
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        neonFlicker: {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '100%': { 
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor',
            opacity: '0.8'
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00d4ff, #8b5cf6, #ec4899, #10b981)',
        'holographic-gradient': 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
        'matrix-bg': 'radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'cyber': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'holographic': '0 0 30px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
} 