import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Protocol = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="min-h-screen bg-[#fdfcfb] dark:bg-[#0b110c] transition-colors duration-500 pt-32 pb-20 text-gentle-dark dark:text-gray-200 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div data-aos="fade-up" className="text-center">
                    <p className="text-gentle-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-6 italic">The Art of Being an Azamat</p>
                    <h1 className="text-5xl md:text-[90px] font-serif font-bold leading-none mb-12 dark:text-white">
                        Кодекс <br /> <span className="text-gentle-gold italic font-normal tracking-tight">Поведения</span>
                    </h1>
                    <div className="w-24 h-[1px] bg-gentle-gold mx-auto mb-12"></div>
                    <p className="max-w-3xl mx-auto text-xl italic font-serif text-gray-500 dark:text-gray-400">
                        «Внутренняя дисциплина, социальная навигация и этика, определяющие облик современного мужчины в Казахстане».
                    </p>
                </div>
            </section>

            {/* 2. CHAPTER I: SOCIAL INTELLIGENCE */}
            <section className="py-32 bg-white dark:bg-[#0d140e] border-y border-gray-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-16">
                        <div className="md:col-span-4 sticky top-40 h-fit" data-aos="fade-right">
                            <h2 className="text-gentle-gold font-serif text-sm tracking-[0.3em] uppercase mb-4">Раздел I</h2>
                            <h3 className="text-4xl font-serif font-bold mb-8 dark:text-white uppercase tracking-tighter">Социальный <br /> Интеллект</h3>
                            <p className="text-sm italic text-gray-400 leading-relaxed mb-8">
                                Манеры — это не способ казаться лучше, это способ сделать мир вокруг себя гармоничнее.
                            </p>
                            <div className="w-12 h-1 bg-gentle-gold"></div>
                        </div>

                        <div className="md:col-span-8 space-y-24" data-aos="fade-up">
                            {/* Communication */}
                            <div className="group">
                                <h4 className="text-2xl font-serif italic text-gentle-gold mb-6 border-b border-gentle-gold/10 pb-4">Искусство Коммуникации</h4>
                                <div className="space-y-10">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gentle-dark dark:text-white block mb-2">Правило слушателя:</span>
                                        <p className="text-lg font-light leading-relaxed">Джентльмен говорит на 30% меньше, чем слушает. Красота слова — в его глубине и своевременности. Как гласит мудрость: <span className="italic text-gentle-gold">«Сөздің көркі — ой»</span>.</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gentle-dark dark:text-white block mb-2">Тональность и Сдержанность:</span>
                                        <p className="text-lg font-light leading-relaxed">Избегайте категоричности. Истинная сила — в спокойствии (Сабыр). Громкий голос — признак неуверенности. Используйте фразы-смягчители: «Позвольте уточнить вашу позицию».</p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Etiquette */}
                            <div className="group">
                                <h4 className="text-2xl font-serif italic text-gentle-gold mb-6 border-b border-gentle-gold/10 pb-4">Деловой Протокол</h4>
                                <div className="space-y-10">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-gentle-dark dark:text-white block mb-2">Пунктуальность:</span>
                                            <p className="text-sm opacity-80">Опоздание — это кража чужого времени. Приходите за 5 минут до встречи. Это ваш первый взнос в фонд доверия партнера.</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-gentle-dark dark:text-white block mb-2">Визитные карточки:</span>
                                            <p className="text-sm opacity-80">Принимайте и подавайте документы обеими руками. Это древний жест открытости, демонстрирующий отсутствие «оружия» и чистоту намерений.</p>
                                        </div>
                                    </div>
                                    <div className="bg-gentle-light dark:bg-black/20 p-8 rounded-sm italic text-gray-500">
                                        <strong>Телефонный этикет:</strong> На встрече смартфон должен находиться вне поля зрения. Экран, направленный вверх — невербальный сигнал о том, что вы ждете кого-то более важного, чем ваш собеседник.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CHAPTER II: THE HERITAGE CODE (HERO SECTION) */}
            <section className="py-40 bg-[#684c37] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-12 gap-16">
                        <div className="md:col-span-8 space-y-20" data-aos="fade-right">
                            <div>
                                <h2 className="text-gentle-gold font-serif text-sm tracking-[0.3em] uppercase mb-4 opacity-70">Раздел II</h2>
                                <h3 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-tight uppercase tracking-tighter italic">Национальный <br /> Код</h3>

                                <div className="space-y-20">
                                    <div className="border-l border-gentle-gold/50 pl-10">
                                        <h4 className="text-3xl font-serif italic text-gentle-gold mb-6">Принцип «Жол» (Иерархия)</h4>
                                        <p className="text-gray-200 text-xl font-light leading-relaxed mb-6">
                                            Это фундамент, отличающий джентльмена Казахстана. Уважение к старшинству (Жас) и статусу (Жол) — это не раболепие, а социальный порядок.
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                                            <li>• Первым в помещение заходит старший по возрасту, независимо от пола в бизнесе.</li>
                                            <li>• Трапеза не начинается, пока Үлкен (старший) не даст «Бата».</li>
                                            <li>• Использование суффиксов «-аға», «-еке» — маркер вашего воспитания.</li>
                                        </ul>
                                    </div>

                                    <div className="border-l border-gentle-gold/50 pl-10">
                                        <h4 className="text-3xl font-serif italic text-gentle-gold mb-6">Концепция «Ар-намыс»</h4>
                                        <p className="text-gray-200 text-xl font-light leading-relaxed mb-6">
                                            В степи слово весило больше жизни. <span className="italic text-gentle-gold">«Айтқан сөз — атылған оқ»</span> (Сказанное слово — вылетевшая пуля).
                                        </p>
                                        <p className="text-gray-300 text-lg italic">
                                            Скромность (Кішіпейілділік): Истинный джентльмен никогда не хвастается богатством. О его статусе говорят его поступки и качество его окружения.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-4 sticky top-40 h-fit" data-aos="fade-left">
                            <div className="p-10 border border-white/20 bg-white/5 backdrop-blur-xl">
                                <p className="text-3xl font-serif italic text-gentle-gold mb-6">«Азамат»</p>
                                <p className="text-xs uppercase tracking-widest opacity-50 mb-6">Definition</p>
                                <p className="text-sm font-light leading-relaxed opacity-90">
                                    Это высшее определение мужчины в нашей культуре. Это человек чести, слова и дела. Быть Азаматом — значит быть опорой для семьи и общества.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CHAPTER III: SITUATIONAL (PRACTICAL) */}
            <section className="py-40 bg-white dark:bg-[#0b110c] transition-all">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-20 items-start">
                        <div className="md:col-span-4 sticky top-40 h-fit" data-aos="fade-right">
                            <h2 className="text-gentle-gold font-serif text-sm tracking-[0.3em] uppercase mb-4">Раздел III</h2>
                            <h3 className="text-4xl font-serif font-bold mb-8 dark:text-white">Ситуативный Этикет</h3>
                            <p className="text-gray-400 font-bold text-[10px] tracking-widest uppercase mb-10">Practical Situations</p>
                            <div className="w-12 h-1 bg-gentle-gold"></div>
                        </div>

                        <div className="md:col-span-8 space-y-32" data-aos="fade-up">
                            {/* Hospitality */}
                            <div>
                                <h4 className="text-2xl font-serif italic text-gentle-dark dark:text-gentle-gold mb-8">Қонақжайлылық (Гостеприимство)</h4>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="bg-gentle-light dark:bg-white/5 p-10">
                                        <p className="text-xs font-bold text-gentle-gold uppercase tracking-[0.2em] mb-4">Подарки (Сәлемдеме)</p>
                                        <p className="text-sm leading-relaxed italic text-gray-600 dark:text-gray-400">Никогда не входите в дом с пустыми руками. Даже символический жест показывает вашу признательность за приглашение.</p>
                                    </div>
                                    <div className="bg-gentle-light dark:bg-white/5 p-10">
                                        <p className="text-xs font-bold text-gentle-gold uppercase tracking-[0.2em] mb-4">Чайная церемония</p>
                                        <p className="text-sm leading-relaxed italic text-gray-600 dark:text-gray-400">Если вы гость — не наливайте чай сами. Если вы хозяин — следите, чтобы чашка гостя была наполнена с любовью.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Conflicts */}
                            <div>
                                <h4 className="text-2xl font-serif italic text-gentle-dark dark:text-gentle-gold mb-8">Решение Конфликтов</h4>
                                <div className="space-y-10 border-l-2 border-gentle-gold pl-10">
                                    <div>
                                        <h5 className="font-bold text-lg dark:text-white mb-4">Сохранение Лица</h5>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Джентльмен не критикует прилюдно. Замечания делаются наедине. Это высшая форма уважения к достоинству оппонента.</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg dark:text-white mb-4">Логика против Эмоций</h5>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">«Таяқ еттен өтеді, сөз сүйектен өтеді» (Палка бьет по телу, слово — по костям). Используйте аргументы, а не громкость голоса.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CHAPTER IV: DIGITAL PRESENCE */}
            <section className="py-40 bg-[#152018] text-white w-full relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="zoom-in">
                    <h2 className="text-gentle-gold font-serif text-sm tracking-[0.5em] uppercase mb-8">Section IV: Digital Presence</h2>
                    <h3 className="text-5xl font-serif font-bold mb-12">Цифровая <br /> <span className="text-gentle-gold italic font-normal">Репутация</span></h3>
                    <div className="grid md:grid-cols-2 gap-16 text-left">
                        <div className="border border-white/10 p-10 bg-white/5 backdrop-blur-sm">
                            <h5 className="text-gentle-gold font-bold text-[10px] uppercase tracking-widest mb-4">Социальные сети</h5>
                            <p className="text-sm font-light leading-relaxed text-gray-300">Ваш профиль — это ваша цифровая визитка. Джентльмен избегает публичных споров в комментариях и не выставляет личную жизнь на показ ради дешевой популярности.</p>
                        </div>
                        <div className="border border-white/10 p-10 bg-white/5 backdrop-blur-sm">
                            <h5 className="text-gentle-gold font-bold text-[10px] uppercase tracking-widest mb-4">Мессенджеры</h5>
                            <p className="text-sm font-light leading-relaxed text-gray-300 italic">Соблюдайте режим тишины: деловое общение с 09:00 до 20:00. Голосовые сообщения — только по согласованию. В бизнесе правит текст.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL SUMMARY BOX */}
            <section className="py-40 bg-white dark:bg-[#0b110c]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-gentle-light dark:bg-[#1a261c] p-16 md:p-32 text-center relative" data-aos="fade-up">
                        <span className="text-8xl font-serif text-gentle-gold opacity-10 absolute top-10 left-10 italic">“</span>
                        <h2 className="text-3xl md:text-5xl font-serif italic text-gentle-dark dark:text-white leading-relaxed mb-12">
                            Джентльменство сегодня — это не фраки и цилиндры. Это готовность брать на себя ответственность там, где другие ищут оправдания.
                        </h2>
                        <div className="w-24 h-1 bg-gentle-gold mx-auto"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Protocol;