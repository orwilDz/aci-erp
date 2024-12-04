import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins'],
            },
        },
    },

    plugins: [daisyui, forms],

    daisyui: {
        themes: [
            {
                "aci-light": {
                    "primary": "#057c5a",
                    "primary-content": "#ffffff",
                    "secondary": "#3b82f6",
                    "secondary-content": "#ffffff",
                    "accent": "#7c3aed",
                    "accent-content": "#ffffff",
                    "neutral": "#057c5a",
                    "neutral-content": "#ffffff",
                    "base-100": "white",
                    "base-200": "#dedede",
                    "base-300": "#bebebe",
                    "base-content": "#000000",
                    "info": "#0000ff",
                    "info-content": "#c6dbff",
                    "success": "#04b825",
                    "success-content": "#ffffff",
                    "warning": "#eab308",
                    "warning-content": "#ffffff",
                    "error": "#ef4444",
                    "error-content": "#ffffff",
                    "--body-bg": "#ecedef",
                },
            },
        ],
        base: false,        // Désactive le thème de base
        darkTheme: false,   // Désactive la détection du mode sombre
    },
};
