import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      boxShadow: {
        layer: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        card: "0 4px 12px rgba(45, 49, 66, 0.08), 0 2px 4px rgba(45, 49, 66, 0.05), 0 0 0 1px rgba(45, 49, 66, 0.02)",
        button: "0 4px 12px rgba(44, 110, 73, 0.15), 0 2px 4px rgba(44, 110, 73, 0.1)",
        sm: "0 2px 6px rgba(45, 49, 66, 0.08)",
        md: "0 4px 12px rgba(45, 49, 66, 0.08), 0 2px 4px rgba(45, 49, 66, 0.05)",
        lg: "0 8px 24px rgba(45, 49, 66, 0.1), 0 4px 8px rgba(45, 49, 66, 0.05)",
        xl: "0 16px 32px rgba(45, 49, 66, 0.1), 0 8px 16px rgba(45, 49, 66, 0.05)",
        floating: "0 16px 32px rgba(44, 110, 73, 0.12), 0 8px 16px rgba(44, 110, 73, 0.08)",
      },
      colors: {
        // Custom theme colors from ChooseBetter landing page
        "earth-green": {
          DEFAULT: "#2C6E49",
          dark: "#1F5135",
          light: "#4C956C",
        },
        "deep-teal": "#1D6A73",
        mint: "#90BE6D",
        sage: "#74A57F",
        "warm-sand": "#F9EFC7",
        terracotta: {
          DEFAULT: "#E07A5F",
          light: "#F1A493",
        },
        clay: "#873E23",
        charcoal: "#2D3142",
        slate: "#4F5D75",
        "medium-gray": "#8D99AE", 
        cloud: "#BFC0C0",
        "light-gray": "#EEF0F2",
        snow: "#F8F9F6",
        
        // Data colors
        positive: {
          DEFAULT: "#4C956C",
          light: "rgba(76, 149, 108, 0.15)",
        },
        negative: {
          DEFAULT: "#E07A5F",
          light: "rgba(224, 122, 95, 0.15)",
        },
        neutral: {
          DEFAULT: "#4F5D75",
          light: "rgba(79, 93, 117, 0.15)",
        },
        highlight: {
          DEFAULT: "#FFD166",
          light: "rgba(255, 209, 102, 0.15)",
        },
        
        // European colors
        "eu-blue": "#003399",
        "eu-gold": "#FFCC00",
        
        // Keep existing colors as fallbacks
        black: "#0d0e12",
        white: "#fff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Helvetica", "Arial", "sans-serif"],
        heading: ["Fraunces", "Georgia", "serif"],
      },
      fontSize: {
        '3xl': ['1.75rem', { lineHeight: '2.1rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3.5rem', { lineHeight: '4.2rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'pill': '9999px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
