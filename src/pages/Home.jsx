import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tilt } from 'react-tilt';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [typedText, setTypedText] = useState('');
    const fullText = 'Рекомендую Business Best. Тёмно-синий костюм, белая рубашка и оксфорды — стандарт для вечерней столицы.';

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 80,
            easing: 'ease-out-cubic',
        });

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 6000);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Typewriter effect for AI section
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 40);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gentle-light dark:bg-gentle-dark text-gentle-dark dark:text-gentle-light font-sans overflow-x-hidden transition-colors duration-500" style={{backgroundImage: 'none'}}>

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

                {/* СЛАЙД 1 */}
                <div className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                        style={{
                            backgroundImage: "url('/harry-tavern.png')",
                            transform: `scale(1.05) translateY(${scrollY * 0.3}px)`
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-1/2 left-8 md:left-20 z-20 transform -translate-y-1/2 hidden md:block text-left">
                        <p className="text-gentle-gold/70 text-[10px] font-bold tracking-[0.5em] uppercase mb-6">— The Kingsman</p>
                        <h2 className="font-serif italic text-gentle-gold text-7xl md:text-9xl leading-none drop-shadow-xl">
                            <span className="line-through decoration-gentle-gold decoration-[3px]">Manners</span><br />
                            <span className="line-through decoration-gentle-gold decoration-[3px]">Maketh</span><br />
                            <span className="line-through decoration-gentle-gold decoration-[3px]">Man.</span>
                        </h2>
                    </div>
                </div>

                {/* СЛАЙД 2 */}
                <div className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/alash.png')",
                            transform: `scale(1.05) translateY(${scrollY * 0.3}px)`
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-1/2 left-8 md:left-20 z-20 transform -translate-y-1/2 hidden md:block text-left">
                        <p className="text-gentle-gold/70 text-[10px] font-bold tracking-[0.5em] uppercase mb-6">— Алаш Орда</p>
                        <div className="w-20 h-[2px] bg-gentle-gold mb-6 shadow-[0_0_15px_#C5A880]"></div>
                        <h2 className="font-serif font-bold text-white text-5xl md:text-7xl leading-tight drop-shadow-xl uppercase">
                            Ер өлшемі<br /><span className="text-gentle-gold">—</span><br />кісілік.
                        </h2>
                    </div>
                </div>

                {/* Центральный контент */}
                <div className="relative z-30 max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-8 h-[1px] bg-gentle-gold/60"></div>
                        <span className="text-gentle-gold/80 text-[9px] font-bold tracking-[0.5em] uppercase">Est. 2025 · Astana</span>
                        <div className="w-8 h-[1px] bg-gentle-gold/60"></div>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold font-serif mb-8 leading-tight drop-shadow-2xl text-white">
                        Искусство быть <br /><span className="italic text-gentle-gold font-normal">Джентльменом</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-white/70 leading-relaxed drop-shadow-md mb-12">
                        Добро пожаловать в мир элегантности, чести и безупречных манер.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/history" className="group relative overflow-hidden bg-gentle-gold text-gentle-dark px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,168,128,0.4)]">
                            <span className="relative z-10">Начать путь</span>
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                        </Link>
                        <Link to="/style" className="border border-white/40 text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:border-gentle-gold hover:text-gentle-gold transition-all duration-300">
                            Гид по стилю
                        </Link>
                    </div>
                </div>

                {/* Индикатор слайдов */}
                <div className="absolute bottom-10 right-10 z-30 flex items-center gap-3">
                    <span className="text-white/40 text-[9px] font-bold tracking-[0.3em] uppercase">0{currentSlide + 1} / 02</span>
                    <div className="flex gap-2">
                        <button onClick={() => setCurrentSlide(0)} className={`w-6 h-[1px] transition-all duration-300 ${currentSlide === 0 ? 'bg-gentle-gold' : 'bg-white/30'}`}></button>
                        <button onClick={() => setCurrentSlide(1)} className={`w-6 h-[1px] transition-all duration-300 ${currentSlide === 1 ? 'bg-gentle-gold' : 'bg-white/30'}`}></button>
                    </div>
                </div>

                {/* Скролл-индикатор */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/40 text-[8px] tracking-[0.4em] uppercase">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
                </div>
            </section>

            {/* 2. MAIN CARDS */}
            <section className="py-28 px-6 relative z-40 bg-gentle-light dark:bg-gentle-dark transition-colors duration-500">
                {/* Фоновый паттерн */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #C9973B 40px, #C9973B 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9973B 40px, #C9973B 41px)' }}>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <p className="text-gentle-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Ваш путь</p>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gentle-dark dark:text-white">Выберите направление</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Карточка 1 */}
                        <Tilt options={{ max: 10, scale: 1.03, speed: 1200, glare: true, 'max-glare': 0.1 }}>
                            <div className="relative group h-full" data-aos="fade-up">
                                {/* Золотая рамка снаружи */}
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-gentle-gold/60 via-gentle-gold/10 to-gentle-gold/60 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700"></div>
                                <div className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden h-full flex flex-col">
                                    {/* Золотая полоса сверху */}
                                    <div className="h-[2px] bg-gradient-to-r from-transparent via-gentle-gold to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                                    <div className="p-12 flex flex-col h-full">
                                        <span className="text-[100px] font-serif font-bold text-gentle-gold/5 dark:text-gentle-gold/5 leading-none absolute -right-4 top-4 pointer-events-none select-none group-hover:text-gentle-gold/8 transition-all duration-500">01</span>
                                        <div className="mb-8 relative">
                                            <div className="w-16 h-16 rounded-xl bg-gentle-gold/10 dark:bg-gentle-gold/5 flex items-center justify-center group-hover:bg-gentle-gold/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                                                <svg className="w-8 h-8 text-gentle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-gentle-gold text-[9px] font-bold tracking-[0.4em] uppercase mb-3">История & Этикет</p>
                                        <h3 className="text-2xl font-serif font-bold text-gentle-dark dark:text-white mb-4 group-hover:text-gentle-gold transition-colors duration-300">Основы Джентльменства</h3>
                                        <p className="text-gray-400 dark:text-gray-500 mb-8 flex-grow text-sm leading-relaxed">
                                            Погружение в историю, этикет и философию формирования характера. От Дебретса до классических добродетелей.
                                        </p>
                                        <Link to="/history" className="group/btn inline-flex items-center gap-3 text-gentle-dark dark:text-gentle-gold text-[10px] font-bold tracking-[0.3em] uppercase border-b border-current pb-1 hover:text-gentle-gold transition-colors">
                                            Начать изучение
                                            <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                                        </Link>
                                    </div>
                                    <div className="h-[2px] bg-gradient-to-r from-transparent via-gentle-gold to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        </Tilt>

                        {/* Карточка 2 */}
                        <Tilt options={{ max: 10, scale: 1.03, speed: 1200, glare: true, 'max-glare': 0.1 }}>
                            <div className="relative group h-full" data-aos="fade-up" data-aos-delay="150">
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-gentle-gold/60 via-gentle-gold/10 to-gentle-gold/60 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700"></div>
                                <div className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden h-full flex flex-col">
                                    <div className="h-[2px] bg-gradient-to-r from-transparent via-gentle-gold to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                                    <div className="p-12 flex flex-col h-full">
                                        <span className="text-[100px] font-serif font-bold text-gentle-gold/5 dark:text-gentle-gold/5 leading-none absolute -right-4 top-4 pointer-events-none select-none group-hover:text-gentle-gold/8 transition-all duration-500">02</span>
                                        <div className="mb-8 relative">
                                            <div className="w-16 h-16 rounded-xl bg-gentle-gold/10 dark:bg-gentle-gold/5 flex items-center justify-center group-hover:bg-gentle-gold/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                <svg className="w-8 h-8 text-gentle-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-gentle-gold text-[9px] font-bold tracking-[0.4em] uppercase mb-3">Гардероб & Стиль</p>
                                        <h3 className="text-2xl font-serif font-bold text-gentle-dark dark:text-white mb-4 group-hover:text-gentle-gold transition-colors duration-300">Гид по Стилю</h3>
                                        <p className="text-gray-400 dark:text-gray-500 mb-8 flex-grow text-sm leading-relaxed">
                                            Искусство мужского гардероба: от выбора ткани до сочетания аксессуаров. Каждая деталь имеет значение.
                                        </p>
                                        <Link to="/style" className="group/btn inline-flex items-center gap-3 text-gentle-dark dark:text-gentle-gold text-[10px] font-bold tracking-[0.3em] uppercase border-b border-current pb-1 hover:text-gentle-gold transition-colors">
                                            Изучить стиль
                                            <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                                        </Link>
                                    </div>
                                    <div className="h-[2px] bg-gradient-to-r from-transparent via-gentle-gold to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </section>

            {/* 3. ЦИТАТА */}
            <section className="relative py-28 overflow-hidden">
                {/* Фон — тёплый тёмный */}
                <div className="absolute inset-0 bg-gentle-dark"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,151,59,0.10)_0%,_transparent_70%)]"></div>
                {/* Декоративные линии */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gentle-gold/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gentle-gold/40 to-transparent"></div>

                <div className="relative max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
                    {/* Большие кавычки */}
                    <div className="text-[120px] font-serif text-gentle-gold/15 leading-none mb-0 -mb-8 font-bold select-none">"</div>
                    <p className="text-3xl md:text-5xl font-serif italic text-white leading-relaxed mb-8">
                        Джентльмен — это не тот, кто никогда не ошибается.
                        <span className="text-gentle-gold"> Это тот, кто никогда не забывает об ответственности.</span>
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[1px] w-12 bg-gentle-gold/40"></div>
                        <span className="text-gentle-gold/60 text-[10px] font-bold tracking-[0.4em] uppercase">Бернхард Рётцель, «Джентльмен»</span>
                        <div className="h-[1px] w-12 bg-gentle-gold/40"></div>
                    </div>
                </div>
            </section>

            {/* 4. AI SECTION */}
            <section className="py-32 bg-gentle-paper dark:bg-gentle-card text-gentle-dark dark:text-gentle-light relative z-10 w-full transition-colors duration-500 overflow-hidden">
                {/* Декоративный фон */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gentle-gold/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gentle-gold/8 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/3 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
                    <div data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gentle-gold/30 rounded-full mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-gentle-gold text-[9px] font-bold tracking-[0.3em] uppercase">Intelligence v1.0 · Online</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            Цифровой <br /><span className="text-gentle-gold italic font-normal">Дворецкий</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 font-light leading-relaxed max-w-md">
                            Наш ИИ обучен канонам классического стиля. Он не просто отвечает — он сопровождает вас в мире благородства, как настоящий дворецкий.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-10">
                            {['Дресс-код', 'Этикет', 'Гардероб', 'Протокол'].map((tag) => (
                                <span key={tag} className="px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase border border-gentle-gold/20 text-gentle-gold/70 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <button className="group relative overflow-hidden flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase bg-gentle-dark dark:bg-gentle-gold text-white dark:text-gentle-dark px-8 py-4 hover:shadow-[0_10px_40px_rgba(197,168,128,0.3)] transition-all duration-300">
                            <span>Запустить ассистента</span>
                            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                            <div className="absolute inset-0 bg-gentle-gold/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <Tilt options={{ max: 6, scale: 1.02, speed: 1200, glare: true, 'max-glare': 0.08 }}>
                            <div className="relative">
                                {/* Тень/свечение */}
                                <div className="absolute -inset-4 bg-gentle-gold/10 rounded-2xl blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="relative transform md:rotate-[-2deg] shadow-[0_30px_80px_-15px_rgba(15,13,11,0.15)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] rounded-xl overflow-hidden border border-gentle-paper dark:border-white/5">
                                    {/* Шапка окна */}
                                    <div className="bg-gentle-paper dark:bg-gentle-card px-5 py-3 border-b border-gentle-paper dark:border-white/5 flex justify-between items-center">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.5)]"></div>
                                        </div>
                                        <div className="text-[9px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase font-sans">Gentry AI · v1.0</div>
                                        <div className="w-14"></div>
                                    </div>
                                    {/* Тело чата */}
                                    <div className="bg-white dark:bg-gentle-ink p-6 space-y-6 min-h-[320px]">
                                        {/* Вопрос пользователя */}
                                        <div className="flex justify-end">
                                            <div className="bg-gentle-light dark:bg-gentle-card border border-gentle-paper dark:border-white/5 px-4 py-3 text-gentle-dark dark:text-gentle-light text-xs font-medium rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
                                                Что надеть на официальный ужин в Астане?
                                            </div>
                                        </div>

                                        {/* Ответ ИИ */}
                                        <div className="flex justify-start gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-gentle-gold to-gentle-gold-dark flex-shrink-0 flex items-center justify-center text-white font-bold text-[10px] italic rounded-full shadow-lg flex-shrink-0">G</div>
                                            <div className="bg-gentle-dark dark:bg-gentle-card text-gentle-light px-5 py-4 text-xs leading-relaxed shadow-xl rounded-2xl rounded-tl-none max-w-[85%] border border-gentle-gold/10 relative">
                                                {typedText}<span className="inline-block w-[2px] h-3 bg-gentle-gold ml-0.5 animate-pulse"></span>
                                            </div>
                                        </div>

                                        {/* Вопросы-теги */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {['Галстук или нет?', 'Цвет рубашки', 'Аксессуары'].map(q => (
                                                <button key={q} className="text-[9px] text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-white/5 px-3 py-1 rounded-full hover:border-gentle-gold hover:text-gentle-gold transition-all duration-200">{q}</button>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Инпут */}
                                    <div className="bg-gentle-paper dark:bg-gentle-card px-4 py-3 border-t border-gentle-paper dark:border-white/5 flex gap-3 items-center">
                                        <input type="text" placeholder="Задайте свой вопрос..." className="flex-1 bg-transparent text-[11px] text-gentle-dark/40 dark:text-white/20 outline-none" readOnly />
                                        <div className="w-7 h-7 bg-gentle-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </section>

            {/* 5. FEATURES SECTION */}
            <section className="py-32 bg-white dark:bg-gentle-dark w-full transition-colors duration-500 relative overflow-hidden">
                {/* Тонкий паттерн-водяной знак */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025] dark:opacity-[0.04]">
                    <span className="text-[20vw] font-serif font-bold text-gentle-dark dark:text-white tracking-tighter">GENTRY</span>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <p className="text-gentle-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Почему мы</p>
                        <h2 className="text-5xl md:text-7xl font-bold text-gentle-dark dark:text-white font-serif leading-tight">
                            Зачем вам это нужно?
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="h-[1px] w-16 bg-gentle-gold/40"></div>
                            <p className="text-gentle-gold font-serif italic text-lg px-2">Инвестиция в имидж — фундамент вашего будущего.</p>
                            <div className="h-[1px] w-16 bg-gentle-gold/40"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                num: '01',
                                label: 'Honor',
                                title: 'Статус',
                                desc: 'Ваш облик — это визитная карточка. Он открывает двери, закрытые для остальных.',
                                icon: <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />,
                                delay: 0,
                            },
                            {
                                num: '02',
                                label: 'Respect',
                                title: 'Уважение',
                                desc: 'Этикет — это искусство делать жизнь окружающих и свою собственную эстетичнее.',
                                icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
                                delay: 150,
                            },
                            {
                                num: '03',
                                label: 'Heritage',
                                title: 'Традиции',
                                desc: 'Мы берем лучшее из мирового опыта, переплетая его с культурой Великой Степи.',
                                icon: <><circle cx="12" cy="8" r="3" /><path d="M2 21a10 10 0 0120 0" /></>,
                                delay: 300,
                            },
                        ].map((f) => (
                            <div key={f.title} data-aos="fade-up" data-aos-delay={f.delay} className="group relative">
                                {/* Карточка */}
                                <div className="relative bg-gentle-light dark:bg-gentle-card rounded-2xl p-10 h-full border border-gentle-paper dark:border-white/5 hover:border-gentle-gold/40 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(201,151,59,0.15)] overflow-hidden">
                                    {/* Фоновый номер */}
                                    <span className="absolute -right-3 -top-8 text-[90px] font-serif font-bold text-gentle-dark/4 dark:text-white/3 leading-none pointer-events-none select-none group-hover:text-gentle-gold/8 transition-all duration-700">{f.num}</span>

                                    {/* Иконка */}
                                    <div className="relative mb-8">
                                        <div className="w-14 h-14 border border-gentle-gold/30 rotate-45 group-hover:rotate-[135deg] group-hover:border-gentle-gold transition-all duration-700 ease-in-out"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-7 h-7 text-gentle-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{f.icon}</svg>
                                        </div>
                                    </div>

                                    <p className="text-gentle-gold font-bold tracking-[0.4em] text-[9px] mb-3 uppercase">{f.label}</p>
                                    <h3 className="text-2xl font-serif font-bold text-gentle-dark dark:text-white mb-4 group-hover:text-gentle-gold transition-colors duration-300">{f.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{f.desc}</p>

                                    {/* Декоративная линия снизу */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gentle-gold to-gentle-gold/30 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. RUNNING STRIP */}
            <div className="relative overflow-hidden w-full z-20" style={{background: 'linear-gradient(135deg, #C9973B 0%, #B8880C 50%, #C9973B 100%)'}}>
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gentle-gold to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gentle-gold to-transparent z-10"></div>
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-gentle-dark font-bold text-base tracking-[0.35em] mx-6 uppercase flex items-center gap-6">
                            Manners <span className="text-gentle-dark/40">◆</span> Style <span className="text-gentle-dark/40">◆</span> Tradition <span className="text-gentle-dark/40">◆</span> Honor <span className="text-gentle-dark/40">◆</span> Kazakhstan
                        </span>
                    ))}
                </div>
            </div>

            {/* 7. FOOTER */}
            <footer className="bg-gentle-dark text-gentle-light pt-20 pb-10 w-full relative z-10 overflow-hidden">
                {/* Декоративный градиент */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gentle-gold/30 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gentle-gold/3 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-12 mb-16 text-left">
                        <div className="md:col-span-2">
                            {/* Лого */}
                            <div className="inline-block border border-gentle-gold/40 px-4 py-1.5 font-serif font-bold tracking-[0.4em] text-gentle-gold mb-6 text-lg">GENTRY</div>
                            <p className="text-gray-500 max-w-xs font-light text-sm leading-relaxed mb-6">
                                Британская классика и кодекс чести Великой Степи. Для тех, кто стремится к совершенству.
                            </p>
                            {/* Соцсети-заглушки */}
                            <div className="flex gap-3">
                                {['TG', 'IG', 'YT'].map(s => (
                                    <div key={s} className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-[9px] font-bold text-gray-600 hover:border-gentle-gold/50 hover:text-gentle-gold cursor-pointer transition-all duration-300">{s}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gentle-gold font-bold text-[10px] uppercase mb-6 tracking-[0.4em]">Навигация</h3>
                            <ul className="space-y-3 text-sm text-gray-500">
                                {[['/', 'Главная'], ['/history', 'Наследие'], ['/protocol', 'Протокол'], ['/style', 'Стиль']].map(([to, label]) => (
                                    <li key={to}>
                                        <Link to={to} className="hover:text-gentle-gold transition-colors duration-200 flex items-center gap-2 group">
                                            <span className="w-0 h-[1px] bg-gentle-gold group-hover:w-4 transition-all duration-300"></span>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gentle-gold font-bold text-[10px] uppercase mb-6 tracking-[0.4em]">Контакты</h3>
                            <div className="space-y-3 text-sm text-gray-500">
                                <p className="flex items-center gap-2">
                                    <span className="text-gentle-gold/50">◎</span> Astana, Kazakhstan
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="text-gentle-gold/50">◎</span> info@gentryguide.kz
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
                        <p>© 2025 Gentry Guide · All rights reserved</p>
                        <p className="italic font-serif normal-case text-xs text-gray-500">Ер өлшемі — кісілік</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;