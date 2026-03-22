import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tilt } from 'react-tilt';

const Style = () => {
    const [activeAudit, setActiveAudit] = useState('suit');
    const [activeVocab, setActiveVocab] = useState('suits');
    const [zoomedImg, setZoomedImg] = useState(null); // Стейт для открытого фото

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: false });
    }, []);

    // 1. БАЗА ЗНАНИЙ: ВИЗУАЛЬНЫЙ СЛОВАРЬ (С ФОТО)
    const vocabularyData = {
        suits: {
            title: "Костюмы",
            items: [
                { name: "Однобортный (Single-Breasted)", desc: "Классика на 2 или 3 пуговицы. Один ряд пуговиц. Универсален, зрительно вытягивает силуэт, подходит абсолютно всем.", img: "" },
                { name: "Двубортный (Double-Breasted)", desc: "Два широких ряда пуговиц. Выглядит более властно и авторитетно. Визуально расширяет грудную клетку.", img: "" },
                { name: "Смокинг (Dinner Jacket)", desc: "Король вечернего дресс-кода Black Tie. Отличается шелковыми лацканами и отсутствием шлиц сзади.", img: "" },
                { name: "Блейзер (Непарный пиджак)", desc: "Основа стиля Smart Casual. Шьется из фактурной ткани (твид, фланель), носится с контрастными брюками.", img: "" }
            ]
        },
        shirts: {
            title: "Сорочки",
            items: [
                { name: "Кент (Point Collar)", desc: "Универсальный воротник, углы смотрят вниз. Идеально подходит под средний узел галстука и визуально удлиняет лицо.", img: "" },
                { name: "Акула (Spread Collar)", desc: "Углы воротника широко разведены в стороны. Британский стандарт. Требует массивного галстучного узла.", img: "" },
                { name: "Button-down", desc: "Углы воротника пристегиваются пуговицами к рубашке. Эталон кэжуал стиля, носится без галстука.", img: "" },
                { name: "Французская манжета", desc: "Двойная манжета без пуговиц. Застегивается исключительно на ювелирные запонки. Самый формальный вариант.", img: "" }
            ]
        },
        shoes: {
            title: "Обувь",
            items: [
                { name: "Оксфорды (Oxfords)", desc: "Самая строгая классика. 'Закрытая шнуровка'. Черные оксфорды — абсолютный фундамент делового гардероба.", img: "" },
                { name: "Дерби (Derbys)", desc: "Более расслабленный вариант. 'Открытая шнуровка'. Идеальны для людей с высоким подъемом стопы.", img: "" },
                { name: "Монки (Monk Straps)", desc: "Элегантная обувь без шнурков, застегивается на ремешки с металлическими пряжками.", img: "" },
                { name: "Лоферы (Loafers)", desc: "Туфли без шнуровок (Penny, Tassel). Легкие, комфортные. Носятся в теплое время года.", img: "" }
            ]
        },
        accessories: {
            title: "Аксессуары",
            items: [
                { name: "Подтяжки (Braces)", desc: "Удерживают брюки на идеальной высоте. Настоящие подтяжки крепятся только на внутренние пуговицы брюк.", img: "" },
                { name: "Нагрудный платок", desc: "Элемент, оживляющий костюм. Золотое правило: платок никогда не должен быть сшит из той же ткани, что и галстук.", img: "" },
                { name: "Запонки (Cufflinks)", desc: "Цвет металла запонок должен строго совпадать с цветом корпуса ваших часов и пряжки ремня.", img: "" },
                { name: "Галстук Гренадин", desc: "Галстук из особого шелка сложного плетения. Идеальная текстура под любой костюм.", img: "" }
            ]
        }
    };

    // 2. БАЗА ЗНАНИЙ: ТЕХНИЧЕСКИЙ АУДИТ
    const auditData = {
        suit: {
            title: "Архитектура Костюма",
            desc: "Пиджак — это архитектурное сооружение. Главный тест: сожмите ткань на груди. Чувствуете независимый слой внутри? Это бортовка.",
            specs: [
                { name: "Full Canvas (Полная бортовка)", val: "Конский волос и лен. Ткань «плавает» поверх каркаса, запоминая фигуру. Срок службы: 20+ лет.", type: "good" },
                { name: "Fused (Клеевая)", val: "Синтетика под прессом. Не дышит, риск «пузырей» после химчистки.", type: "bad" },
                { name: "Pick Stitching (Вспушка)", val: "Ручная пунктирная строчка по краям лацканов. Удерживает слои ткани.", type: "detail" },
                { name: "Milanese Buttonhole", val: "«Миланская петля» на лацкане. Идеально гладкая, до 45 минут ручной работы.", type: "detail" }
            ]
        },
        shirt: {
            title: "Сорочка: Вторая кожа",
            desc: "Качество сорочки определяется плотностью шва и фурнитурой. Это фундамент комфорта джентльмена.",
            specs: [
                { name: "Плотность стежка", val: "Высший класс: 8-9 стежков на 1 см. Шов невидим и не стягивает ткань.", type: "good" },
                { name: "Пуговицы", val: "Натуральный перламутр (Mother of pearl) толщиной 3-4 мм, пришитые «на ножке».", type: "detail" },
                { name: "Split Yoke (Кокетка)", val: "Раздельная кокетка на спине, выкроенная по косой для эластичности плеч.", type: "detail" },
                { name: "Ластовица", val: "Небольшой треугольник ткани, укрепляющий боковой шов внизу.", type: "detail" }
            ]
        },
        shoes: {
            title: "Обувной Фундамент",
            desc: "Обувь джентльмена — это долговечность. Посмотрите на подошву: виден ли рант и шов?",
            specs: [
                { name: "Goodyear Welted", val: "Эталон. Кожаный рант пришивается к верху и подошве. Можно менять подошву десятилетиями.", type: "good" },
                { name: "Cemented (Клей)", val: "Одноразовая обувь. Быстрая потеря вида, подошву заменить невозможно.", type: "bad" },
                { name: "Full Grain Leather", val: "Цельнозерновая кожа. Дышит и со временем приобретает благородную патину.", type: "detail" },
                { name: "Cordovan", val: "Кожа с крупа лошади. Практически вечна, не образует заломов.", type: "detail" }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-gentle-light dark:bg-gentle-dark text-gentle-dark dark:text-gentle-light transition-colors duration-500 pt-32 pb-20 overflow-hidden">

            {/* 1. HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 mb-32 text-center" data-aos="fade-down">
                <p className="text-gentle-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-6">Sartorial Encyclopedia</p>
                <h1 className="text-6xl md:text-[100px] font-serif font-bold leading-none mb-10 tracking-tighter">
                    Справочник <br /> <span className="text-gentle-gold italic font-normal">Стиля</span>
                </h1>
                <div className="w-24 h-[1px] bg-gentle-gold mx-auto mb-10"></div>
                <p className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                    Нельзя управлять тем, чего не понимаешь. Прежде чем учиться отличать шедевры от масс-маркета, необходимо овладеть визуальным алфавитом мужского гардероба.
                </p>
            </section>

            {/* 2. ВИЗУАЛЬНЫЙ СЛОВАРЬ */}
            <section className="py-20 max-w-7xl mx-auto px-6 mb-20 border-b border-gray-200 dark:border-white/10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Глоссарий Джентльмена</h2>
                    <p className="text-gentle-gold text-xs uppercase tracking-widest">Базовые элементы гардероба</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
                    {Object.keys(vocabularyData).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveVocab(key)}
                            className={`px-8 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${activeVocab === key
                                ? 'bg-gentle-dark dark:bg-white text-white dark:text-gentle-dark border-gentle-dark dark:border-white'
                                : 'border-gray-300 dark:border-white/20 text-gray-500 hover:border-gentle-gold hover:text-gentle-gold'
                                }`}
                        >
                            {vocabularyData[key].title}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="200">
                    {vocabularyData[activeVocab].items.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-gentle-card border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-gentle-gold/30 transition-all group flex flex-col overflow-hidden">

                            {/* ОБЛАСТЬ ФОТО С КЛИКОМ НА ЗУМ */}
                            <div
                                onClick={() => setZoomedImg(item)}
                                className="w-full h-64 bg-[#f4f4f4] dark:bg-[#0a0a0a] relative overflow-hidden cursor-zoom-in"
                            >
                                {/* Иконка лупы при наведении */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>

                                {item.img ? (
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="absolute inset-4 border border-dashed border-gray-300 dark:border-white/20 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 bg-white/50 dark:bg-black/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                                        <svg className="w-8 h-8 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Слот для изображения</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-10 flex-grow flex flex-col justify-center">
                                <h4 className="text-2xl font-serif font-bold text-gentle-dark dark:text-white mb-4 group-hover:text-gentle-gold transition-colors">{item.name}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. ИНТЕРАКТИВНЫЙ АУДИТОР */}
            <section className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 w-full transition-colors">
                {/* ... (КОД АУДИТОРА ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ, КАК В ПРЕДЫДУЩЕЙ ВЕРСИИ) ... */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Технический Аудит</h2>
                        <p className="text-gentle-gold text-xs uppercase tracking-widest">Интерактивный чек-лист качества</p>
                        <p className="max-w-2xl mx-auto mt-6 text-sm text-gray-500 dark:text-gray-400">Теперь, когда вы знаете названия, научитесь отличать шедевр портновского искусства от маркетинговой подделки.</p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-4 space-y-4" data-aos="fade-right">
                            {Object.keys(auditData).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveAudit(key)}
                                    className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group ${activeAudit === key
                                        ? 'border-gentle-gold bg-gentle-gold/5 dark:bg-gentle-gold/10'
                                        : 'border-gray-200 dark:border-white/10 hover:border-gentle-gold/50'
                                        }`}
                                >
                                    <div>
                                        <span className={`block text-[9px] uppercase tracking-widest font-bold mb-1 ${activeAudit === key ? 'text-gentle-gold' : 'text-gray-400'}`}>0{Object.keys(auditData).indexOf(key) + 1}</span>
                                        <span className={`font-serif text-xl font-bold ${activeAudit === key ? 'text-gentle-gold' : ''}`}>{auditData[key].title.split(':')[0]}</span>
                                    </div>
                                    <span className={`transition-transform duration-300 ${activeAudit === key ? 'translate-x-2 text-gentle-gold' : 'text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>→</span>
                                </button>
                            ))}
                        </div>

                        <div className="md:col-span-8 bg-gentle-light dark:bg-[#111] p-10 md:p-16 border border-gray-200 dark:border-white/5 relative overflow-hidden" data-aos="fade-left">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif font-bold pointer-events-none">
                                {Object.keys(auditData).indexOf(activeAudit) + 1}
                            </div>

                            <h3 className="text-3xl font-serif font-bold mb-4 text-gentle-gold">{auditData[activeAudit].title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-12 text-sm leading-relaxed">{auditData[activeAudit].desc}</p>

                            <div className="space-y-8">
                                {auditData[activeAudit].specs.map((spec, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="mt-1">
                                            {spec.type === 'good' && <div className="w-5 h-5 rounded-full bg-green-900/20 flex items-center justify-center text-green-600 text-xs">✓</div>}
                                            {spec.type === 'bad' && <div className="w-5 h-5 rounded-full bg-red-900/20 flex items-center justify-center text-red-600 text-xs">✕</div>}
                                            {spec.type === 'detail' && <div className="w-5 h-5 flex items-center justify-center text-gentle-gold text-xs">✦</div>}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wide">{spec.name}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{spec.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ТЕКСТИЛЬНАЯ МАТРИЦА */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Иерархия Волокон</h2>
                    <p className="text-gentle-gold text-xs uppercase tracking-widest font-bold mb-8">Индекс Super: От микрона к полотну</p>
                    <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Качество костюма на 70% определяется тканью. Тонина волокна измеряется в микронах. Чем выше индекс Super, тем тоньше, мягче и деликатнее ткань.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
                    {[
                        { super: "Super 100s", mic: "18.75 µm", title: "Рабочая лошадка", desc: "Долговечна, устойчива к складкам. Идеальна для ежедневных деловых костюмов." },
                        { super: "Super 120s-130s", mic: "17.5 µm", title: "Золотая середина", desc: "Роскошный блеск в сочетании с приемлемой износостойкостью. Стандарт бизнес-класса." },
                        { super: "Super 150s-180s", mic: "15.0 µm", title: "Скрытая Роскошь", desc: "Исключительная мягкость, но высокая хрупкость. Ткань для особых случаев, требующая ухода." },
                        { super: "Super 200s+", mic: "< 13.5 µm", title: "Текстильный Экстрим", desc: "Редкость, сопоставимая с кашемиром. Ткань практически не ощущается на теле." }
                    ].map((item, idx) => (
                        <div key={idx} className="border border-gray-200 dark:border-white/10 p-8 hover:border-gentle-gold transition-colors group bg-white dark:bg-[#0a0a0a]">
                            <div className="text-gentle-gold font-bold text-2xl font-serif mb-2">{item.super}</div>
                            <div className="text-[10px] font-mono text-gray-400 mb-6 uppercase tracking-widest border-b border-gray-100 dark:border-white/10 pb-4">{item.mic}</div>
                            <h4 className="font-bold text-sm mb-3 uppercase tracking-wide group-hover:text-gentle-gold transition-colors">{item.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* МАКСИМАЛЬНОЕ ФОТО (MODAL/LIGHTBOX) */}
            {zoomedImg && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setZoomedImg(null)}
                >
                    {/* Кнопка закрытия */}
                    <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-gentle-gold transition-colors focus:outline-none">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Само фото или Заглушка */}
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Чтобы клик по картинке не закрывал модалку
                    >
                        {zoomedImg.img ? (
                            <img src={zoomedImg.img} alt={zoomedImg.name} className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm" />
                        ) : (
                            <div className="w-full aspect-video border border-dashed border-white/20 flex flex-col items-center justify-center text-gray-500 bg-white/5">
                                <span className="text-2xl md:text-4xl font-serif tracking-widest uppercase font-bold text-gentle-gold mb-6 text-center px-6">
                                    {zoomedImg.name}
                                </span>
                                <span className="text-xs uppercase tracking-[0.3em] opacity-50">Фотография в высоком разрешении</span>
                            </div>
                        )}

                        {/* Подпись под фото в полноэкранном режиме */}
                        <div className="absolute bottom-[-40px] text-center w-full">
                            <p className="text-white/60 text-sm tracking-widest uppercase">{zoomedImg.title}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Style;