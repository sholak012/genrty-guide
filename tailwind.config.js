/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // === ТЁМНАЯ ТЕМА ===
                'gentle-dark':  '#0F0D0B',    // Тёплый антрацит (не мертвый чёрный)
                'gentle-card':  '#1A1714',    // Тёплая тёмная карточка
                'gentle-ink':   '#100E0C',    // Для секций-разделителей

                // === СВЕТЛАЯ ТЕМА ===
                'gentle-light': '#F0EAE0',    // Тёплая слоновая кость (не холодный белый)
                'gentle-paper': '#E8E0D4',    // Чуть темнее для фона карточек

                // === АКЦЕНТЫ ===
                'gentle-gold':  '#C9973B',    // Насыщенное янтарное золото
                'gentle-gold-light': '#E0B86A', // Светлый вариант золота для ховеров
                'gentle-gold-dark':  '#9E7520', // Тёмный вариант золота
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}