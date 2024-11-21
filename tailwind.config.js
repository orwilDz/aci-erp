import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';
import theme from 'tailwindcss/defaultTheme';

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
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
        daisyui: {
            themes: [
                {
                    abc: {
                        "primary": "#057c5a",
                        "primary-content": "#ffffff",
                        "secondary": "#3b82f6",
                        "secondary-content": "#ffffff",
                        "accent": "#7c3aed",
                        "accent-content": "#ffffff",
                        "neutral": "057c5a",
                        "neutral-content": "white",
                        "base-100": "#ECEDEF",
                        "base-200": "#dedede",
                        "base-300": "#bebebe",
                        "base-content": "#000000",
                        "info": "#0000ff",
                        "info-content": "#c6dbff",
                        "success": "#04b825",
                        "success-content": "white",
                        "warning": "#eab308",
                        "warning-content": "#fffff",
                        "error": "#ef4444",
                        "error-content": "#ffffff",
                    },
                },
            ]
        }
    },

    plugins: [daisyui, forms],
};
