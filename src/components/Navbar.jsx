import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        if (darkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [darkMode]);

    // Закрывать меню при смене маршрута
    useEffect(() => { setMenuOpen(false); }, [location]);

    const toggleTheme = () => {
        const newTheme = !darkMode;
        setDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const navLinks = [
        { to: '/', label: 'Главная' },
        { to: '/history', label: 'Наследие' },
        { to: '/protocol', label: 'Протокол' },
        { to: '/style', label: 'Стиль' },
    ];

    const isActive = (to) => location.pathname === to;

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-gentle-dark/96 backdrop-blur-md shadow-[0_4px_30px_rgba(15,13,11,0.4)] py-3'
                    : 'bg-transparent py-6'
            }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Лого */}
                    <Link to="/" className="flex items-center group">
                        <div className={`border px-4 py-1.5 font-serif font-bold tracking-[0.35em] transition-all duration-500 text-sm ${
                            isScrolled
                                ? 'border-gentle-gold text-gentle-gold group-hover:bg-gentle-gold group-hover:text-gentle-dark'
                                : 'border-white/70 text-white group-hover:border-gentle-gold group-hover:text-gentle-gold'
                        }`}>
                            GENTRY
                        </div>
                    </Link>

                    {/* Десктоп-меню */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex space-x-10 text-[10px] font-bold tracking-[0.25em] uppercase">
                            {navLinks.map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className={`relative transition-colors duration-300 group ${
                                        isActive(to)
                                            ? 'text-gentle-gold'
                                            : isScrolled
                                                ? 'text-gray-300 hover:text-gentle-gold'
                                                : 'text-white/80 hover:text-gentle-gold'
                                    }`}
                                >
                                    {label}
                                    {/* Активная подчёркивающая линия */}
                                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-gentle-gold transition-all duration-300 ${
                                        isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </Link>
                            ))}
                        </div>

                        {/* Переключатель темы */}
                        <button
                            onClick={toggleTheme}
                            className="group p-2 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <svg className="w-4 h-4 text-gentle-gold transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 text-white/70 group-hover:text-gentle-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {/* CTA кнопка */}
                        <button className={`relative overflow-hidden px-5 py-2 text-[9px] font-bold tracking-[0.25em] uppercase transition-all duration-300 group ${
                            isScrolled
                                ? 'bg-gentle-gold text-gentle-dark hover:shadow-[0_0_20px_rgba(197,168,128,0.4)]'
                                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-gentle-gold hover:border-gentle-gold hover:text-gentle-dark'
                        }`}>
                            <span className="relative z-10">AI Butler</span>
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
                        </button>
                    </div>

                    {/* Мобильная кнопка */}
                    <div className="flex md:hidden items-center gap-4">
                        <button onClick={toggleTheme} className="p-2 focus:outline-none">
                            {darkMode ? (
                                <svg className="w-4 h-4 text-gentle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex flex-col gap-1 p-2 focus:outline-none group"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
                            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : ''}`}></span>
                            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Мобильное меню */}
            <div className={`fixed inset-0 z-40 bg-gentle-dark/99 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
                menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
                {/* Декоративные элементы */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gentle-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute top-10 left-10 w-16 h-16 border border-gentle-gold/10 rotate-45"></div>
                <div className="absolute bottom-16 right-10 w-8 h-8 border border-gentle-gold/10"></div>

                <nav className="flex flex-col items-center gap-8 relative z-10">
                    {navLinks.map(({ to, label }, i) => (
                        <Link
                            key={to}
                            to={to}
                            className={`text-2xl font-serif font-bold tracking-widest transition-all duration-300 ${
                                isActive(to) ? 'text-gentle-gold' : 'text-white/60 hover:text-gentle-gold'
                            }`}
                            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                        >
                            {label}
                        </Link>
                    ))}
                    <button className="mt-6 bg-gentle-gold text-gentle-dark px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                        AI Butler
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Navbar;