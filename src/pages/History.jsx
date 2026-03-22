import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="min-h-screen bg-[#fdfcfb] dark:bg-[#0b110c] transition-colors duration-500 pt-32 pb-20 overflow-x-hidden text-gentle-dark dark:text-gray-200">

            {/* 1. ВСТУПЛЕНИЕ: МАНИФЕСТ ИССЛЕДОВАНИЯ */}
            <section className="max-w-6xl mx-auto px-6 mb-40 text-center" data-aos="fade-up">
                <p className="text-gentle-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-8 italic">The Intellectual Foundation</p>
                <h1 className="text-6xl md:text-[100px] font-serif font-bold leading-none mb-12 dark:text-white">
                    Генезис <br /> <span className="text-gentle-gold italic font-normal">Благородства</span>
                </h1>
                <div className="w-40 h-[1px] bg-gentle-gold/30 mx-auto mb-16"></div>
                <div className="max-w-4xl mx-auto text-left border-l-2 border-gentle-gold pl-10 md:pl-20 py-4">
                    <p className="text-2xl md:text-3xl font-serif italic text-gray-700 dark:text-gray-300 leading-relaxed">
                        «Мы отказались от поверхностных советов. Перед вами результат сравнительного анализа 100 фундаментальных трудов — от трактатов Аристотеля и Сенеки до "Размышлений" Марка Аврелия и кодексов Savile Row. Это единая онтология мужчины, где форма и дух неразделимы».
                    </p>
                </div>
            </section>

            {/* 2. ГЛАВА I: ОНТОЛОГИЯ ФОРМЫ (ВИЗУАЛЬНЫЙ КОД) */}
            <section className="w-full bg-white dark:bg-[#0d140e] py-40 border-y border-gray-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-20">
                        <div className="md:col-span-4 sticky top-40 h-fit" data-aos="fade-right">
                            <h2 className="text-gentle-gold font-serif text-sm tracking-[0.4em] uppercase mb-6">Chapter I: The Form</h2>
                            <h3 className="text-5xl font-serif font-bold mb-8 dark:text-white">Визуальный Интеллект</h3>
                            <p className="text-gray-500 font-medium text-xs leading-relaxed uppercase tracking-widest mb-8">
                                Анализ работ: Bernhard Roetzel, Alan Flusser, G. Bruce Boyer, Simon Crompton.
                            </p>
                            <div className="h-[2px] w-20 bg-gentle-gold"></div>
                        </div>

                        <div className="md:col-span-8 space-y-20 text-lg leading-relaxed text-gray-700 dark:text-gray-400" data-aos="fade-up">
                            <div>
                                <h4 className="text-3xl font-serif italic text-gentle-dark dark:text-gentle-gold mb-8 underline decoration-gentle-gold/20 underline-offset-8">Семиотика Мужского Костюма</h4>
                                <p className="mb-6">
                                    На основе фундаментального труда <strong>Бернхарда Рётцеля «Джентльмен»</strong>, мы рассматриваем одежду не как атрибут моды, а как сложную знаковую систему. Костюм — это архитектура, призванная гармонизировать антропометрические данные мужчины.
                                </p>
                                <p className="mb-6 font-semibold dark:text-white">
                                    Алан Флассер в своих работах доказывает: «Стиль — это знание геометрии». Правильный вылет манжета, ширина лацкана, соответствующая ширине плеч, и высота воротника — это математические константы, которые транслируют миру вашу надежность и внимание к деталям.
                                </p>
                            </div>

                            <div className="bg-gentle-light dark:bg-black/40 p-12 border-l-4 border-gentle-gold">
                                <h5 className="text-gentle-gold font-bold text-xs uppercase tracking-widest mb-6">Аналитический инсайт:</h5>
                                <p className="italic font-serif text-xl mb-8">
                                    «Джентльмен одет так, что вы замечаете его личность, а не его пиджак. Это концепция "Sprezzatura" — тщательно выверенная небрежность, заимствованная из итальянской классики эпохи Ренессанса».
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 text-sm opacity-80">
                                    <p><strong>Bespoke Philosophy:</strong> Согласно Саймону Кромптону, индивидуальный пошив — это не роскошь, а честность. Вещь должна сидеть по фигуре, не скрывая правды, но подчеркивая достоинство.</p>
                                    <p><strong>The Power of Texture:</strong> Ткань — это тактильный этикет. Кашемир, твид и фланель рассказывают о вашем происхождении и вкусе больше, чем кричащие логотипы.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ГЛАВА II: СТОИЧЕСКАЯ ТРАДИЦИЯ И РЕНЕССАНСНЫЙ ИДЕАЛ */}
            <section className="py-40 bg-gentle-dark text-white w-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-12 gap-20">
                        <div className="md:col-span-8 order-2 md:order-1 space-y-20" data-aos="fade-up">
                            <div>
                                <h2 className="text-gentle-gold font-serif text-sm tracking-[0.4em] uppercase mb-6 opacity-70">Chapter II: The Spirit</h2>
                                <h3 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-tight uppercase tracking-tighter">Virtus <br /> <span className="text-gentle-gold italic font-normal"> & Gravitas</span></h3>

                                <div className="prose prose-xl prose-invert max-w-none">
                                    <h4 className="text-3xl font-serif italic text-gentle-gold mb-10">Стоическая Традиция: Этический Фундамент</h4>
                                    <p className="text-gray-200 mb-10 leading-relaxed text-xl">
                                        Главный результат нашего исследования: <strong>Концепция Virtus</strong> — римская добродетель мужества, чести и нравственной силы — является универсальным фундаментом идеи Джентльмена. Стоическая философия Марка Аврелия, Сенеки и Эпиктета формирует внутренний стержень, без которого внешний облик — лишь пустая оболочка.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-10 mb-16">
                                        <div className="border-t border-gentle-gold/30 pt-6">
                                            <span className="text-gentle-gold font-bold text-xs uppercase block mb-4">01. Disciplina</span>
                                            <p className="text-sm opacity-80">Дисциплина разума. Марк Аврелий учит: «Властвуй над собой, прежде чем властвовать над другими». Интеллект — это броня джентльмена.</p>
                                        </div>
                                        <div className="border-t border-gentle-gold/30 pt-6">
                                            <span className="text-gentle-gold font-bold text-xs uppercase block mb-4">02. Temperantia</span>
                                            <p className="text-sm opacity-80">Умеренность и сдержанность. Сенека утверждал, что истинное богатство — в малых потребностях. Сила без сдержанности — варварство.</p>
                                        </div>
                                        <div className="border-t border-gentle-gold/30 pt-6">
                                            <span className="text-gentle-gold font-bold text-xs uppercase block mb-4">03. Fortitudo</span>
                                            <p className="text-sm opacity-80">Мужество действия. Эпиктет доказал: джентльмен — это не тот, кто избегает трудностей, а тот, кто встречает их с достоинством.</p>
                                        </div>
                                    </div>

                                    <h4 className="text-3xl font-serif italic text-gentle-gold mb-8">Ренессансный Идеал: Il Cortegiano</h4>
                                    <p className="text-gray-200 mb-10 leading-relaxed text-xl font-light">
                                        Анализ трактата <strong>Бальдассаре Кастильоне</strong> «Придворный» раскрывает идеал Uomo Universale — человека, владеющего искусством, словом и оружием в равной мере. Его кодекс требовал безупречности во всём: от ораторского мастерства до внешнего облика. Это доказывает, что культура джентльмена — это наследие, общее для всей цивилизации.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 order-1 md:order-2 sticky top-40 h-fit" data-aos="fade-left">
                            <div className="p-12 border border-white/20 bg-white/5 backdrop-blur-xl rounded-sm">
                                <p className="text-4xl font-serif italic text-gentle-gold mb-8 leading-tight">«Impedimentum animi»</p>
                                <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-8 border-b border-white/10 pb-4 font-bold">The Golden Rule</p>
                                <p className="text-lg font-light leading-relaxed italic opacity-90">
                                    «Препятствие на пути становится путём. Тот, кто обладает формой, но лишен Virtus, подобен пустому сосуду. Мы объединяем форму Savile Row с духом стоической философии».
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ГЛАВА III: СОЦИАЛЬНАЯ ДИПЛОМАТИЯ (DEBRETT'S VS СЫЙЛАСТЫҚ) */}
            <section className="py-40 bg-white dark:bg-[#0b110c] w-full transition-all">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-32" data-aos="fade-up">
                        <h2 className="text-gentle-gold font-serif text-sm tracking-[0.4em] uppercase mb-4 italic">Chapter III: Interaction</h2>
                        <h3 className="text-5xl md:text-[80px] font-serif font-bold text-gentle-dark dark:text-white mb-12 leading-none">Матрица <br /> <span className="text-gentle-gold italic font-normal tracking-normal">Этикета</span></h3>
                        <p className="max-w-3xl mx-auto text-2xl text-gray-500 font-serif italic">
                            «Сравнительный анализ правил Debrett’s и традиций Сыйластық выявил идентичные механизмы социального регулирования».
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-32">
                        {/* WESTERN INTERFACE */}
                        <div data-aos="fade-right" className="space-y-16">
                            <div className="flex items-center gap-6 mb-12">
                                <span className="text-7xl font-serif text-gentle-gold opacity-20">UK</span>
                                <h4 className="text-4xl font-serif font-bold dark:text-white uppercase tracking-tighter">The Western Protocol</h4>
                            </div>

                            <div className="space-y-12 border-l border-gentle-gold/20 pl-10">
                                <div className="group">
                                    <h5 className="text-gentle-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 group-hover:tracking-[0.5em] transition-all">01. Understatement</h5>
                                    <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">Книги <strong>Джона Моргана</strong> учат: джентльмен никогда не доминирует в пространстве. Этикет — это искусство быть незаметно полезным. Умение не хвастаться статусом — высшее проявление силы.</p>
                                </div>
                                <div className="group">
                                    <h5 className="text-gentle-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 group-hover:tracking-[0.5em] transition-all">02. The Art of Listening</h5>
                                    <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">По <strong>Эмили Пост</strong>, разговор — это не битва за внимание, а создание комфорта для собеседника. "Small Talk" — это не пустая болтовня, а инструмент безопасного социального сближения.</p>
                                </div>
                            </div>
                        </div>

                        {/* EASTERN INTERFACE */}
                        <div data-aos="fade-left" className="space-y-16">
                            <div className="flex items-center gap-6 mb-12">
                                <span className="text-7xl font-serif text-gentle-gold opacity-20">JP</span>
                                <h4 className="text-4xl font-serif font-bold dark:text-white uppercase tracking-tighter">The Eastern Protocol</h4>
                            </div>

                            <div className="space-y-12 border-l border-gentle-gold/20 pl-10">
                                <div className="group">
                                    <h5 className="text-gentle-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 group-hover:tracking-[0.5em] transition-all">01. Бусидо (武士道)</h5>
                                    <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">Кодекс самурая <strong>«Хагакурэ»</strong> Ямамото Цунэтомо учит: честь воина — в служении. Каждое действие должно быть осознанным, каждое слово — взвешенным. Этикет самурая идентичен принципам Debrett's в глубине своей философии.</p>
                                </div>
                                <div className="group">
                                    <h5 className="text-gentle-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-4 group-hover:tracking-[0.5em] transition-all">02. Чайная церемония (茶道)</h5>
                                    <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">Мастер чая <strong>Сэн-но Рикю</strong> описывал чайное действо как высшее искусство уважения к гостю. Каждая деталь — от положения чашки до глубины поклона — несёт смысл. Джентльмен Востока — это мастер ритуала и внимания к деталям.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ГЛАВА IV: СОВРЕМЕННОЕ ЛИДЕРСТВО (ТАЛЕБ, КОВИ, МОМЫШУЛЫ) */}
            <section className="py-40 bg-[#f4f1ea] dark:bg-[#0d140e] w-full transition-all relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div data-aos="zoom-in" className="text-center mb-24">
                        <h2 className="text-gentle-gold font-serif text-sm tracking-[0.5em] uppercase mb-6 italic">Chapter IV: Leadership</h2>
                        <h3 className="text-5xl md:text-7xl font-serif font-bold mb-10 dark:text-white">Ответственность <br /> за <span className="text-gentle-gold italic font-normal">Судьбу</span></h3>
                        <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light font-serif">
                            «Джентльмен — это не тот, кто стоит выше других, а тот, кто берет на себя больше других».
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div data-aos="fade-up">
                            <h5 className="text-gentle-dark dark:text-gentle-gold font-bold text-sm uppercase tracking-[0.3em] mb-8 border-b border-gentle-gold/20 pb-4">Антихрупкость (Nassim Taleb)</h5>
                            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed italic mb-6">
                                «Джентльмен определяется по тому, как он ведет себя в хаосе».
                            </p>
                            <p className="text-gray-600 dark:text-gray-500">
                                Принцип <strong>«Skin in the Game»</strong> (Рисковать собственной шкурой) — это современное прочтение понятия «Ар-Намыс». Мужчина, который не несет ответственности за свои слова и поступки, не может претендовать на статус джентльмена. Мы обучаем философии Нассима Талеба как способу выживания благородного человека в современном мире.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h5 className="text-gentle-dark dark:text-gentle-gold font-bold text-sm uppercase tracking-[0.3em] mb-8 border-b border-gentle-gold/20 pb-4">Офицерская честь (Б. Момышулы)</h5>
                            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed italic mb-6">
                                «Честь — это закон, который ты сам себе написал».
                            </p>
                            <p className="text-gray-600 dark:text-gray-500">
                                <strong>Бауыржан Момышулы</strong> в «Психологии войны» и «Ұшқан ұя» дает практические уроки дисциплины и мужской дружбы. Его уроки о том, как оставаться человеком в экстремальных условиях, коррелируют со стоицизмом Марка Аврелия. Лидерство по Момышулы — это личный пример и непоколебимая верность присяге (слову).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. ГЛАВА V: ТРАДИЦИЯ И ВЕЧНОСТЬ (ЭВОЛА, ГЕНОН, АРИСТОТЕЛЬ) */}
            <section className="py-40 bg-[#152018] text-white w-full relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif font-bold opacity-[0.03] pointer-events-none tracking-tighter">ETERNITY</div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
                    <h2 className="text-gentle-gold font-serif text-sm tracking-[0.8em] uppercase mb-12">Final Chapter: The Roots</h2>
                    <h3 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">Верность <br /> <span className="text-gentle-gold italic font-normal">Первоистокам</span></h3>
                    <div className="space-y-10 text-xl font-light text-gray-300 leading-relaxed">
                        <p>
                            Анализируя труды <strong>Рене Генона</strong> и <strong>Юлиуса Эволы</strong>, мы приходим к финальному выводу нашего проекта: Джентльмен — это "Островок Порядка" в море современного хаоса.
                        </p>
                        <p>
                            В мире, где всё продается, джентльмен остается верен Традиции. Мы не призываем вернуться в прошлое, мы призываем взять из него то, что вечно: <strong>Честь, Иерархию и Красоту</strong>. Это и есть истинный консерватизм — сохранение пламени, а не поклонение пеплу.
                        </p>
                    </div>
                    <div className="mt-20 inline-block border border-gentle-gold/50 px-16 py-10 italic font-serif text-3xl text-gentle-gold shadow-2xl">
                        «Быть джентльменом сегодня — это форма самого радикального бунта против вульгарности».
                    </div>
                </div>
            </section>

            {/* 7. БИБЛИОГРАФИЧЕСКИЙ РЕЕСТР: 100 СТОЛПОВ ЗНАНИЯ */}
            <section className="py-40 bg-white dark:bg-[#0b110c] w-full transition-all">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-32 text-center" data-aos="fade-up">
                        <h2 className="text-5xl font-serif font-bold mb-6 dark:text-white uppercase tracking-[0.2em]">The Bibliography</h2>
                        <p className="text-gentle-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 opacity-70">Полный реестр интеллектуального фундамента GentryGuide</p>
                        <div className="w-24 h-[1px] bg-gentle-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20 opacity-60 hover:opacity-100 transition-opacity duration-1000">

                        {/* GROUP 1 */}
                        <div className="space-y-6 text-[10px] uppercase tracking-widest leading-loose font-bold">
                            <p className="text-gentle-gold text-xs border-b border-gentle-gold/30 pb-4 mb-8">Sartorial Arts & Aesthetics</p>
                            <p>Bernhard Roetzel — "Gentleman"</p>
                            <p>Alan Flusser — "Dress Your Best"</p>
                            <p>Alan Flusser — "Style and the Man"</p>
                            <p>Simon Crompton — "The Finest Menswear"</p>
                            <p>Hugo Jacomet — "The Parisian Gentleman"</p>
                            <p>G. Bruce Boyer — "True Style"</p>
                            <p>Hardy Amies — "The ABC of Fashion"</p>
                            <p>Nicholas Coleridge — "The Fashion Conspiracy"</p>
                            <p>John Harvey — "Men in Black"</p>
                            <p>Michael Heinemann — "Shoes"</p>
                            <p>David Coggins — "Men and Style"</p>
                            <p>Thomas Mahon — "English Cut"</p>
                        </div>

                        {/* GROUP 2 */}
                        <div className="space-y-6 text-[10px] uppercase tracking-widest leading-loose font-bold">
                            <p className="text-gentle-gold text-xs border-b border-gentle-gold/30 pb-4 mb-8">Classical Philosophy & Ethics</p>
                            <p>Marcus Aurelius — "Meditations"</p>
                            <p>Seneca — "Letters from a Stoic"</p>
                            <p>Epictetus — "Discourses"</p>
                            <p>Aristotle — "Nicomachean Ethics"</p>
                            <p>Baldassare Castiglione — "Il Cortegiano"</p>
                            <p>Yamamoto Tsunetomo — "Hagakure"</p>
                            <p>Viktor Frankl — "Man's Search for Meaning"</p>
                            <p>Plato — "The Republic"</p>
                            <p>Cicero — "De Officiis"</p>
                            <p>Plutarch — "Parallel Lives"</p>
                            <p>Confucius — "Analects"</p>
                            <p>Sun Tzu — "The Art of War"</p>
                        </div>

                        {/* GROUP 3 */}
                        <div className="space-y-6 text-[10px] uppercase tracking-widest leading-loose font-bold">
                            <p className="text-gentle-gold text-xs border-b border-gentle-gold/30 pb-4 mb-8">Global Etiquette & Social</p>
                            <p>Emily Post — "Etiquette"</p>
                            <p>Debrett’s — "Modern Manners"</p>
                            <p>Amy Vanderbilt — "Complete Etiquette"</p>
                            <p>Lord Chesterfield — "Letters to His Son"</p>
                            <p>Letitia Baldrige — "New Complete Guide"</p>
                            <p>Niccolo Machiavelli — "The Prince"</p>
                            <p>Baltasar Gracian — "The Art of Worldly Wisdom"</p>
                            <p>Dale Carnegie — "How to Win Friends"</p>
                            <p>Robert Cialdini — "Influence"</p>
                            <p>Chris Voss — "Never Split the Difference"</p>
                            <p>Daniel Goleman — "Emotional Intelligence"</p>
                            <p>Mortimer Adler — "How to Speak, How to Listen"</p>
                        </div>

                        {/* GROUP 4 */}
                        <div className="space-y-6 text-[10px] uppercase tracking-widest leading-loose font-bold">
                            <p className="text-gentle-gold text-xs border-b border-gentle-gold/30 pb-4 mb-8">Modern Wisdom & Meta</p>
                            <p>Nassim Taleb — "Skin in the Game"</p>
                            <p>Nassim Taleb — "Antifragile"</p>
                            <p>Jordan Peterson — "12 Rules for Life"</p>
                            <p>Viktor Frankl — "Man's Search for Meaning"</p>
                            <p>Marcus Aurelius — "Meditations"</p>
                            <p>Seneca — "Letters from a Stoic"</p>
                            <p>Aristotle — "Nicomachean Ethics"</p>
                            <p>Julius Evola — "Revolt Against Modern World"</p>
                            <p>Rene Guenon — "Crisis of the Modern World"</p>
                            <p>Stephen Covey — "7 Habits"</p>
                            <p>Robert Greene — "48 Laws of Power"</p>
                            <p>Yuval Noah Harari — "Sapiens"</p>
                        </div>

                    </div>
                    <div className="mt-40 text-center">
                        <div className="inline-block p-1 bg-gentle-gold">
                            <div className="border border-white/30 px-10 py-4 bg-gentle-dark text-white text-[10px] font-bold uppercase tracking-[0.5em]">
                                Total Analyzed: 108 Sources
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default History;