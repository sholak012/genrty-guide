import { useState, useRef, useCallback } from 'react';

// ── Конфигурация ──────────────────────────────────────────────
const ADMIN_PASSWORD = 'gentry2025';

const FORMALITY_LEVELS = [
    { id: 'businessBest',   label: 'Business Best',   icon: '⚖️' },
    { id: 'businessCasual', label: 'Business Casual', icon: '🏢' },
    { id: 'smartCasual',    label: 'Smart Casual',    icon: '🌹' },
    { id: 'ceremonial',     label: 'Ceremonial',      icon: '🎊' },
];

const SEASONS = [
    { id: 'winter', label: 'Осень — Зима', icon: '❄️' },
    { id: 'summer', label: 'Весна — Лето',  icon: '☀️' },
];

const ITEMS = [
    { id: 'jacket',    label: 'Пиджак / Верхний слой', icon: '🧥', gradient: 'from-slate-700 to-slate-500'  },
    { id: 'trousers',  label: 'Брюки',                 icon: '👖', gradient: 'from-blue-800 to-blue-600'   },
    { id: 'shirt',     label: 'Рубашка',               icon: '👔', gradient: 'from-sky-700 to-sky-500'     },
    { id: 'shoes',     label: 'Обувь',                 icon: '👞', gradient: 'from-amber-800 to-amber-600' },
    { id: 'watch',     label: 'Часы',                  icon: '⌚', gradient: 'from-gray-700 to-gray-500'   },
    { id: 'accessory', label: 'Аксессуар',             icon: '🎀', gradient: 'from-rose-800 to-rose-600'   },
];

// ── Утилиты localStorage ──────────────────────────────────────
export const STORAGE_KEY = 'gentry_admin_images';

export const getStoredImages = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
};

export const getImageKey = (formality, season, itemId) =>
    `${formality}__${season}__${itemId}`;

export const getImage = (formality, season, itemId) => {
    const store = getStoredImages();
    return store[getImageKey(formality, season, itemId)] || null;
};

// ── Компонент: слот изображения ───────────────────────────────
const ImageSlot = ({ formality, season, itemId, onUpdate }) => {
    const inputRef   = useRef(null);
    const [drag, setDrag] = useState(false);
    const stored = getImage(formality, season, itemId);
    const item   = ITEMS.find(i => i.id === itemId);

    const processFile = useCallback((file) => {
        if (!file || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const store = getStoredImages();
            store[getImageKey(formality, season, itemId)] = e.target.result;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
            onUpdate();
        };
        reader.readAsDataURL(file);
    }, [formality, season, itemId, onUpdate]);

    const handleDrop = (e) => {
        e.preventDefault(); setDrag(false);
        processFile(e.dataTransfer.files[0]);
    };

    const handleRemove = (e) => {
        e.stopPropagation();
        const store = getStoredImages();
        delete store[getImageKey(formality, season, itemId)];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        onUpdate();
    };

    return (
        <div
            className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 group ${
                drag ? 'border-gentle-gold scale-[1.02]' :
                stored ? 'border-gentle-gold/40 hover:border-gentle-gold' :
                         'border-dashed border-white/20 hover:border-gentle-gold/50'
            }`}
            style={{ aspectRatio: '16/9' }}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
        >
            {stored ? (
                <>
                    <img src={stored} alt={item?.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg">
                                Заменить
                            </span>
                            <button
                                onClick={handleRemove}
                                className="bg-red-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-600"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold">✓</span>
                    </div>
                </>
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item?.gradient} flex flex-col items-center justify-center gap-2`}>
                    <span className="text-3xl">{item?.icon}</span>
                    <span className="text-white/50 text-[9px] font-bold tracking-[0.3em] uppercase">
                        {drag ? 'Отпустите файл' : 'Нажмите или перетащите'}
                    </span>
                </div>
            )}
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => processFile(e.target.files[0])}
            />
        </div>
    );
};

// ── Главный компонент AdminPanel ──────────────────────────────
const AdminPanel = () => {
    const [authed,       setAuthed]       = useState(false);
    const [password,     setPassword]     = useState('');
    const [error,        setError]        = useState('');
    const [activeF,      setActiveF]      = useState('businessBest');
    const [activeS,      setActiveS]      = useState('winter');
    const [tick,         setTick]         = useState(0); // для перерисовки после загрузки

    const refresh = () => setTick(t => t + 1);

    const login = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) { setAuthed(true); setError(''); }
        else { setError('Неверный пароль'); }
    };

    // Подсчёт заполненных слотов
    const stats = (() => {
        const store = getStoredImages();
        const total = FORMALITY_LEVELS.length * SEASONS.length * ITEMS.length;
        const filled = Object.keys(store).length;
        return { total, filled, pct: Math.round((filled / total) * 100) };
    })();

    // Экран входа
    if (!authed) return (
        <div className="min-h-screen bg-gentle-dark flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,151,59,0.08),transparent_70%)]"></div>
            <div className="relative z-10 w-full max-w-sm">
                {/* Логотип */}
                <div className="text-center mb-10">
                    <div className="w-14 h-14 border border-gentle-gold/30 rotate-45 mx-auto mb-6 flex items-center justify-center">
                        <span className="text-gentle-gold font-serif text-2xl font-bold -rotate-45">G</span>
                    </div>
                    <h1 className="text-white font-serif text-2xl font-bold tracking-wider mb-1">Admin Panel</h1>
                    <p className="text-gentle-gold/60 text-xs tracking-[0.3em] uppercase">Gentry Guide</p>
                </div>

                <form onSubmit={login} className="bg-gentle-card rounded-2xl border border-white/5 p-8 space-y-4">
                    <div>
                        <label className="text-white/60 text-xs font-bold tracking-widest uppercase block mb-2">Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••"
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-gentle-gold/50 transition-colors placeholder-white/20 text-sm"
                            autoFocus
                        />
                        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gentle-gold hover:bg-gentle-gold-light text-white font-bold text-sm tracking-[0.2em] uppercase py-3 rounded-xl transition-colors"
                    >
                        Войти
                    </button>
                </form>

                <p className="text-white/20 text-xs text-center mt-6">
                    Доступ только для администратора сайта
                </p>
            </div>
        </div>
    );

    // Активные уровень / сезон
    const fMeta = FORMALITY_LEVELS.find(f => f.id === activeF);
    const sMeta = SEASONS.find(s => s.id === activeS);

    return (
        <div className="min-h-screen bg-gentle-dark text-white">
            {/* ── Шапка ── */}
            <header className="sticky top-0 z-50 bg-gentle-dark/95 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 border border-gentle-gold/30 rotate-45 flex items-center justify-center flex-shrink-0">
                            <span className="text-gentle-gold font-serif text-sm font-bold -rotate-45">G</span>
                        </div>
                        <div>
                            <span className="text-white font-bold text-sm tracking-wider">Admin Panel</span>
                            <span className="text-gentle-gold/50 text-xs ml-3">Управление изображениями</span>
                        </div>
                    </div>
                    {/* Прогресс-бар заполнения */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gentle-gold rounded-full transition-all duration-500"
                                     style={{ width: `${stats.pct}%` }}></div>
                            </div>
                            <span className="text-gentle-gold text-xs font-bold">{stats.filled}/{stats.total}</span>
                        </div>
                        <button
                            onClick={() => { setAuthed(false); setPassword(''); }}
                            className="text-white/40 hover:text-white/80 text-xs font-bold tracking-widest uppercase transition-colors"
                        >
                            Выйти
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* ── Инструкция ── */}
                <div className="bg-gentle-gold/10 border border-gentle-gold/20 rounded-2xl px-6 py-4 mb-10 flex items-start gap-4">
                    <span className="text-gentle-gold text-xl flex-shrink-0 mt-0.5">💡</span>
                    <div>
                        <p className="text-gentle-gold font-bold text-sm mb-1">Как загрузить фото</p>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Выберите уровень формальности и сезон → нажмите на карточку одежды или перетащите файл прямо в неё → фото сохранится автоматически и сразу отобразится на сайте. Форматы: JPG, PNG, WebP.
                        </p>
                    </div>
                </div>

                {/* ── Выбор формата (горизонтальные табы) ── */}
                <div className="mb-6">
                    <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">Уровень формальности</p>
                    <div className="flex flex-wrap gap-3">
                        {FORMALITY_LEVELS.map(f => (
                            <button
                                key={f.id}
                                onClick={() => setActiveF(f.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                                    activeF === f.id
                                        ? 'bg-gentle-gold text-white shadow-[0_4px_20px_rgba(201,151,59,0.3)]'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/5'
                                }`}
                            >
                                <span>{f.icon}</span>
                                <span>{f.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Выбор сезона ── */}
                <div className="mb-10">
                    <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">Сезон</p>
                    <div className="flex gap-3">
                        {SEASONS.map(s => (
                            <button
                                key={s.id}
                                onClick={() => setActiveS(s.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                                    activeS === s.id
                                        ? 'bg-gentle-gold text-white shadow-[0_4px_20px_rgba(201,151,59,0.3)]'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/5'
                                }`}
                            >
                                <span>{s.icon}</span>
                                <span>{s.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Активный раздел ── */}
                <div className="flex items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white">
                            {fMeta?.icon} {fMeta?.label}
                            <span className="text-gentle-gold"> · </span>
                            {sMeta?.icon} {sMeta?.label}
                        </h2>
                        <p className="text-white/40 text-sm mt-1">
                            {ITEMS.filter(item => getImage(activeF, activeS, item.id)).length} из {ITEMS.length} фото загружено
                        </p>
                    </div>
                </div>

                {/* ── Сетка слотов ── */}
                <div key={`${activeF}-${activeS}-${tick}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ITEMS.map((item) => (
                        <div key={item.id} className="bg-gentle-card rounded-2xl border border-white/5 overflow-hidden">
                            {/* Слот изображения */}
                            <ImageSlot
                                formality={activeF}
                                season={activeS}
                                itemId={item.id}
                                onUpdate={refresh}
                            />
                            {/* Подпись */}
                            <div className="px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-white/80 text-sm font-medium">{item.label}</span>
                                </div>
                                {getImage(activeF, activeS, item.id) ? (
                                    <span className="text-green-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                                        Загружено
                                    </span>
                                ) : (
                                    <span className="text-white/30 text-[10px] font-bold tracking-wider uppercase">
                                        Пусто
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Сводка по всем разделам ── */}
                <div className="mt-16 mb-4">
                    <h3 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-6">Обзор всех разделов</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {FORMALITY_LEVELS.map(f => (
                            <div key={f.id} className="bg-gentle-card rounded-xl border border-white/5 p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span>{f.icon}</span>
                                    <span className="text-white/70 text-xs font-bold">{f.label}</span>
                                </div>
                                {SEASONS.map(s => {
                                    const filled = ITEMS.filter(item => getImage(f.id, s.id, item.id)).length;
                                    const pct = Math.round((filled / ITEMS.length) * 100);
                                    return (
                                        <div key={s.id} className="mb-2">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-white/40 text-[10px]">{s.icon} {s.label.split(' — ')[0]}</span>
                                                <span className="text-gentle-gold text-[10px] font-bold">{filled}/{ITEMS.length}</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/10 rounded-full">
                                                <div className="h-full bg-gentle-gold/70 rounded-full transition-all"
                                                     style={{ width: `${pct}%` }}></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Кнопка очистить всё */}
                <div className="flex justify-end mt-8 pb-10">
                    <button
                        onClick={() => {
                            if (window.confirm('Удалить ВСЕ загруженные изображения? Это действие нельзя отменить.')) {
                                localStorage.removeItem(STORAGE_KEY);
                                refresh();
                            }
                        }}
                        className="text-red-400/60 hover:text-red-400 text-xs font-bold tracking-widest uppercase transition-colors border-b border-dashed border-red-400/20 hover:border-red-400/60 pb-0.5"
                    >
                        Очистить все изображения
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
