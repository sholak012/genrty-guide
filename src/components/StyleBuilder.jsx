import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { getImage } from '../pages/AdminPanel';

// ============================================================
// БИБЛИОТЕКА СТИЛЕЙ — styleLibrary
// ============================================================

// ЗАГЛУШКИ ИЗОБРАЖЕНИЙ — по категории
// При наличии реальных фото заменить src на путь к файлу
const ITEM_IMAGES = {
    jacket: '/images/style/jacket.jpg',
    trousers: '/images/style/trousers.jpg',
    shirt: '/images/style/shirt.jpg',
    shoes: '/images/style/shoes.jpg',
    watch: '/images/style/watch.jpg',
    accessory: '/images/style/accessory.jpg',
};

// Цвета-заглушки для фото (пока фото нет)
const ITEM_GRADIENT = {
    jacket: 'from-slate-800 to-slate-600',
    trousers: 'from-blue-900 to-blue-700',
    shirt: 'from-sky-800 to-sky-600',
    shoes: 'from-amber-900 to-amber-700',
    watch: 'from-gray-800 to-gray-600',
    accessory: 'from-rose-900 to-rose-700',
};

const ITEM_META = {
    jacket: { label: 'Пиджак / Верхний слой', color: 'text-slate-500 dark:text-slate-400' },
    trousers: { label: 'Брюки', color: 'text-blue-600 dark:text-blue-400' },
    shirt: { label: 'Рубашка', color: 'text-sky-600 dark:text-sky-400' },
    shoes: { label: 'Обувь', color: 'text-amber-700 dark:text-amber-500' },
    watch: { label: 'Часы', color: 'text-gray-500 dark:text-gray-400' },
    accessory: { label: 'Аксессуар', color: 'text-rose-600 dark:text-rose-400' },
};

const styleLibrary = {
    businessBest: {
        label: 'Business Best',
        winter: {
            jacket: {
                name: 'Тёмно-синий или угольный однотонный пиджак (Full Canvas)',
                desc: 'Шерсть Super 120s–150s, плотность 280–320 g/m². Британский крой: жёсткое плечо, высокая пройма, приталенный силуэт. Никакого принта — только сила.',
                check: 'Примерка плеча: край пиджака совпадает с окончанием вашего плеча, без нависания. Просуньте кулак между грудью и пиджаком — должен быть плотный зазор. Поднимите руки: пиджак не должен «ехать» вверх вместе с ними.',
                icon: '🧥',
            },
            trousers: {
                name: 'Брюки из того же материала, со стрелкой',
                desc: 'Корень брюк: 1–2 защипа. Длина до каблука с лёгким «break» (1 складка). Стрелка обязательна — она передаёт военную строгость.',
                check: 'Стрелка должна доходить до основания большого пальца ноги. Проверьте посадку сидя: ткань не «квадратится» на ягодицах. Зазор в шаге — минимум 5 см в сидячем положении.',
                icon: '👖',
            },
            shirt: {
                name: 'Белая рубашка из двухслойного поплина, двойные манжеты',
                desc: '100% хлопок, плотность 100–120 нитей. Воротник Spread Collar. Двойные манжеты требуют запонкu — это обязательный акцент силы в деловом образе.',
                check: 'Сожмите рукав в кулаке на 5 секунд: хлопок оставит мятость — это норма. Ткань блестит на свету = синтетика. Воротник должен стоять, а не заворачиваться.',
                icon: '👔',
            },
            shoes: {
                name: 'Чёрные Cap-Toe Oxfords, гладкая телячья кожа',
                desc: 'Закрытая шнуровка — вершина деловой формальности. Никакого броги, никакого суэда. Этот ботинок читается как власть с первого взгляда.',
                check: 'Проведите ногтем по незаметному месту — Full Grain кожа «залечит» след. Дешёвый блеск без царапины = PU-кожа. Кожаная прошитая подошва — признак качества.',
                icon: '👞',
            },
            watch: {
                name: 'Dress watch: тонкий корпус ≤ 12 мм, кожаный ремень',
                desc: 'Диаметр 36–40 мм. Белый или кремовый циферблат. Чёрный кожаный ремень. Никаких хроно, никаких Smart Watch в Business Best.',
                check: 'Часы не должны выступать под манжетой. Застегните пиджак и согните руку — если часы видны из-под манжеты лишь на 1–2 мм, это идеально.',
                icon: '⌚',
            },
            accessory: {
                name: 'Бордовый или тёмно-синий галстук, шёлк, диагональная полоска',
                desc: 'Ширина 7–8 см. Узел: Виндзор. Regiment stripe — сигнал принадлежности к элите. Матовый шёлк, не блестящий полиэстер.',
                check: 'Острие галстука касается пряжки ремня: не длиннее, не короче. Узел не должен «косить» — потяните за маленький конец для выравнивания.',
                icon: '🎀',
            },
        },
        summer: {
            jacket: {
                name: 'Светло-серый пиджак из Tropical Wool или мохэра',
                desc: 'Tropical Wool — шерсть лёгкого плетения, 180–200 g/m². Держит формальность и вентилируется. Мохэр даёт благородный блеск — дерзко и правильно.',
                check: 'Тест вентиляции: возьмите ткань в руку, дуньте сквозь неё — воздух должен проходить. Тёплая синтетика не пропустит. Shoulder test: плечо совпадает с вашим, без нависания.',
                icon: '🧥',
            },
            trousers: {
                name: 'Брюки из тропической шерсти в тон пиджаку, без отворотов',
                desc: 'Летом отворот брюк — лишний тепловой карман. Чистый низ, слегка зауженный силуэт — современная интерпретация классики.',
                check: 'Длина: минимальный break в летних брюках. Ткань должна свободно «дышать»: поднимите ткань — падает сразу, не прилипает.',
                icon: '👖',
            },
            shirt: {
                name: 'Белая рубашка из батиста или тонкого поплина',
                desc: 'Батист — самый тонкий хлопок. В середине жаркого дня потрогайте: натуральный хлопок впитает влагу, синтетика — нет.',
                check: 'Поднесите рукав к свету: тонкий хлопок должен просвечивать (батист). Синтетика не светопропускает, но и не дышит.',
                icon: '👔',
            },
            shoes: {
                name: 'Коричневые суэдовые дерби или двойные монки',
                desc: 'Летняя замша в коньячном тоне. Монки с двумя пряжками — самая изысканная летняя альтернатива оксфордам.',
                check: 'Суэд проверяют щёткой: против ворса — текстура поднимается равномерно. Гладкое пятно = некачественная замша. Беречь от влаги.',
                icon: '👞',
            },
            watch: {
                name: 'Часы с металлическим браслетом или НАТО-ремнём',
                desc: 'Летом кожаный ремень потеет — браслет практичнее. НАТО-ремень в синем или бежевом: лёгкий акцент на строгом образе.',
                check: 'Браслет: вставьте один палец — проходит свободно, но не соскользнёт. Длина: циферблат остаётся по центру запястья.',
                icon: '⌚',
            },
            accessory: {
                name: 'Шёлковый галстук с мелким принтом (огурцы, горошек)',
                desc: 'Мелкий принт говорит: «я знаю толк». Цвета: бледно-голубой, лазурный, тёмно-бордовый на светлом фоне.',
                check: 'Цвет галстука темнее рубашки и светлее костюма — правило трёх тонов. Переверните галстук: если принт чёткий = качественный шёлк.',
                icon: '🎀',
            },
        },
    },
    businessCasual: {
        label: 'Business Casual',
        winter: {
            jacket: {
                name: 'Серый или тёмно-синий блейзер (Half Canvas), структурированная посадка',
                desc: 'Шерсть Super 100s, 220–260 g/m². Допускает мелкую клетку или тонкую полоску. Полу-бортовка сохраняет форму.',
                check: 'Тест на бортовку: прощупайте лацкан — Half Canvas даст тактильный зазор между подкладкой и тканью. Fused-пиджак — жёсткий монолит без зазора.',
                icon: '🧥',
            },
            trousers: {
                name: 'Тёмно-серые шерстяные брюки или Cotton Chinos',
                desc: 'Business Casual допускает качественные чиносы из прочёсанного хлопка. Цвета: серый, тёмно-синий, шоколадный.',
                check: 'Потяните ткань — качественный хлопок возвращается без деформации. Плохой хлопок «мешкует» к обеду. Нитки швов: ровные, без петель.',
                icon: '👖',
            },
            shirt: {
                name: 'Голубая или белая рубашка Spread Collar, одинарные манжеты',
                desc: 'Голубой Oxford Cloth — шероховатая, прочная ткань для ежедневного офиса. Одинарные манжеты без запонок — правило Business Casual.',
                check: 'Oxford Cloth: поверхность слегка рельефная (переплетение нитей). Воротник: пуговица застёгивается легко, не сужая шею.',
                icon: '👔',
            },
            shoes: {
                name: 'Тёмно-коричневые Derby или броги из гладкой кожи',
                desc: 'Коричневый с серым костюмом — классический европейский образ. Derby с открытой шнуровкой менее формальны, но в офисе безупречны.',
                check: 'Нажмите большим пальцем на кожу — Full Grain слегка «сядет» и вернётся. Corrected Grain — жёстче. Кожаная прошитая подошва гнётся равномерно.',
                icon: '👞',
            },
            watch: {
                name: 'Деловые часы 38–42 мм, стальной или титановый корпус',
                desc: 'Кожаный ремень или стальной браслет. Простой циферблат. Smart Watch разрушает деловой образ — замените на классический аналог.',
                check: 'Размер корпуса: положите руку плашмя — часы не выходят за края запястья. Слишком большие = «компенсация». Циферблат читается с вытянутой руки.',
                icon: '⌚',
            },
            accessory: {
                name: 'Тёмно-синий галстук в тонкую полоску или однотонный',
                desc: 'Ширина 7–8 см. В Business Casual допустим образ без галстука с расстёгнутым воротником и белым платком в кармане.',
                check: 'Без галстука: воротник ровный, 1 пуговица расстёгнута. Белый платок «телевизором» — замена галстуку. Оба акцента одновременно — перебор.',
                icon: '🎀',
            },
        },
        summer: {
            jacket: {
                name: 'Льняной или хлопковый блейзер без подкладки (Unlined)',
                desc: 'Без подкладки — максимально дышит. Допустимы светлые цвета: серо-голубой, песочный. Неаполитанский крой: мягкое плечо.',
                check: 'Мягкое плечо (Spalla camicia): надавите — оно слегка «провалится». Если жёсткое — плечевая прокладка. Встряхните: должен вернуться в форму.',
                icon: '🧥',
            },
            trousers: {
                name: 'Льняные или хлопковые брюки светлых тонов',
                desc: 'Бежевый, серо-голубой. Лён мнётся — это его природа, не дефект. Примите это как стиль.',
                check: 'Лён vs синтетика: сожмите — лён именно помнётся (натуральные волокна живые). Синтетика вернётся немедленно, но в ней будет жарко.',
                icon: '👖',
            },
            shirt: {
                name: 'Голубая льняная рубашка или Button-Down из хлопка',
                desc: 'Button-Down воротник не заворачивается без галстука. Закатите рукава на два аккуратных сгиба — по-неаполитански.',
                check: 'Button-Down тест: нажмите на пуговицу воротника — она должна фиксировать конец воротника без зазора.',
                icon: '👔',
            },
            shoes: {
                name: 'Суэдовые лоферы или дерби в коньячном тоне',
                desc: 'Лоферы без шнурков — летнее разрешение Business Casual. Penny Loafer — классика. Носки: невидимки или тонкие хлопковые.',
                check: 'Лофер: встаньте на носки — лофер не должен слетать с пятки. Если слетает — размер велик или колодка неподходящая.',
                icon: '👞',
            },
            watch: {
                name: 'Часы с тканевым или резиновым ремнём, светлый циферблат',
                desc: 'НАТО-ремень в синем или хаки. Лёгкий спортивный акцент при строгом силуэте — разрешённое нарушение правил.',
                check: 'Ремень не оставляет отпечатков на коже после дня носки. Ширина ремня совпадает с шириной ушек корпуса часов.',
                icon: '⌚',
            },
            accessory: {
                name: 'Нагрудный платок или без галстука, воротник расстёгнут',
                desc: 'Летом галстук — привилегия. Белый хлопковый платок «телевизором» — достаточный знак элегантности.',
                check: 'Платок выглядывает на 0.5–1 см над краем кармана. Пёстрый платок + пёстрый галстук = катастрофа. Один акцент на образ.',
                icon: '🤍',
            },
        },
    },
    smartCasual: {
        label: 'Smart Casual',
        winter: {
            jacket: {
                name: 'Тёмно-синий или бордовый непарный пиджак',
                desc: 'Непарный пиджак — главный инструмент Smart Casual. Структурированный, но не «костюмный». Бархатные лацканы допустимы.',
                check: 'Длина пиджака: заканчивается у основания большого пальца при опущенной руке. Под непарным пиджаком — тёмные брюки контрастного тона.',
                icon: '🧥',
            },
            trousers: {
                name: 'Тёмно-серые шерстяные брюки, зауженные без отворота',
                desc: 'Фланелевые брюки в зимний вечер — абсолютная элегантность. Контраст с непарным пиджаком — суть Smart Casual.',
                check: 'Фланель: прикоснитесь щекой — мягкая и тёплая, как пух. Стандартная шерсть — прохладная и гладкая.',
                icon: '👖',
            },
            shirt: {
                name: 'Тёмно-синяя или бургундская рубашка, воротник расстёгнут',
                desc: 'Расстегните 1–2 пуговицы. Никаких галстуков. Хлопок или вискозная смесь — оба уместны вечером.',
                check: 'Посадка рубашки: лежит ровно при заправке, но позволяет вытащить при casual-переходе. Рукав выглядывает из-под пиджака на 1–1.5 см.',
                icon: '👔',
            },
            shoes: {
                name: 'Chelsea Boots или суэдовые монки, коричневый / тёмно-зелёный',
                desc: 'Chelsea Boots — самая харизматичная обувь Smart Casual. Резиновая вставка по бокам: идеально эластичная посадка.',
                check: 'Chelsea Boot плотно обхватывает лодыжку. Встаньте на носок — пятка поднялась, но голень «отпустило». Если пятка болтается — не ваша колодка.',
                icon: '👢',
            },
            watch: {
                name: 'Статусные часы с кожаным ремнём, тонкий корпус',
                desc: 'Smart Casual — момент, когда часы говорят о вас больше всего остального. Тонкий корпус, интересный циферблат.',
                check: 'Dress watch ≤12 мм. Положите запястье рядом со столешницей — часы не задевают поверхность при опускании руки.',
                icon: '⌚',
            },
            accessory: {
                name: 'Шёлковый платок в кармане, небрежно сложенный',
                desc: 'Вместо галстука: небрежно сложенный шёлковый платок — eleganza. Один акцент на лацкане — знак тонкого вкуса.',
                check: 'Небрежный платок: сожмите в кулак и вставьте в карман — сложится сам. Натуральный шёлк: потрите между пальцами — почувствуется тепло.',
                icon: '✨',
            },
        },
        summer: {
            jacket: {
                name: 'Льняной пиджак светлых тонов, итальянский крой',
                desc: 'Слоновая кость, бежевый, серо-голубой. Мятость льна — это «sprezzatura» (изысканная небрежность), не дефект.',
                check: 'Плечо летнего льняного: мягкое, «проваливается» при нажатии. Если пиджак собирается в складки за под лопатками — спинка коротка.',
                icon: '🧥',
            },
            trousers: {
                name: 'Льняные или Cotton Twill брюки, светлый тон',
                desc: 'Белые или бежевые. Укороченные (1 см выше щиколотки) + лоферы без носков — итальянский рецепт.',
                check: 'Укорочение: нижний край на 1–2 см выше щиколотки. Лодыжка видна, но щиколотка не оголена. Ниже икры, выше щиколотки.',
                icon: '👖',
            },
            shirt: {
                name: 'Льняная рубашка в полоску, воротник расстёгнут на 2 пуговицы',
                desc: 'Летнее свидание: расстегните 2 пуговицы. Stripe — знак лёгкости. Цвета: голубой, розовый лосось, лавандовый.',
                check: 'Льняная рубашка будет мяться — оставьте. Помятый лён на casual-образе смотрится правильно.',
                icon: '👔',
            },
            shoes: {
                name: 'Лоферы Penny или Tassel, коньячный / белый, без носков',
                desc: 'Летний смарт-кэжуал: Penny Loafer в коньячном — абсолютная летняя романтика. Носки-невидимки спасут от мозолей.',
                check: 'Лофер без носков: берём антибактериальные стельки. Натуральная кожаная подкладка — признак качества.',
                icon: '👞',
            },
            watch: {
                name: 'Часы с тканевым НАТО-ремнём или плетёным браслетом',
                desc: 'Плетёный ремень в летнем Smart Casual — итальянская классика. Цвета: бежевый, синий, белый.',
                check: 'НАТО ремень снимается за 30 секунд — практично. После ношения дайте просохнуть.',
                icon: '⌚',
            },
            accessory: {
                name: 'Тёмные очки с металлической или роговой оправой',
                desc: 'Солнечные очки — единственный аксессуар, уместный в любой ситуации. Оправа должна повторять форму лица.',
                check: 'Поляризованные линзы: посмотрите на блестящую поверхность под углом — они устранят блик. UV400 маркировка — обязательна.',
                icon: '🕶️',
            },
        },
    },
    ceremonial: {
        label: 'Ceremonial',
        winter: {
            jacket: {
                name: 'Зимний чапан из бархата/велюра поверх тёмного костюма Full Canvas',
                desc: 'Сочетание западного и казахского кода — высший уровень идентичности. Тёмно-синий Super 120s + бархатный чапан с национальным орнаментом.',
                check: 'Чапан сидит свободно поверх пиджака, не стесняя движений. Рукава пиджака видны на 1–1.5 см. Воротник пиджака расстёгнут под чапаном.',
                icon: '🧥',
            },
            trousers: {
                name: 'Тёмно-синие или угольные брюки со стрелкой, безупречное глажение',
                desc: 'Брюки в тон пиджаку, строгая стрелка. На торжестве их будет видно только при движении — стрелка должна быть безупречной.',
                check: 'Для стойкой стрелки: влажная ткань поверх + горячий утюг. Крахмал закрепит стрелку на весь вечер.',
                icon: '👖',
            },
            shirt: {
                name: 'Белоснежная рубашка, твёрдый воротник Spread, золотые запонки',
                desc: 'Белый — цвет уважения и торжества в казахской традиции. Двойные манжеты, золотые запонки. Манжета выглядывает из-под пиджака на 1.5 см.',
                check: 'Белизна: замочите в кислородном отбеливателе за день до события. Крахмальный воротник держит форму весь вечер.',
                icon: '👔',
            },
            shoes: {
                name: 'Чёрные полированные оксфорды, зеркальный блеск',
                desc: 'Полировка до зеркала — ритуал накануне. Натуральная кожа начищается гуталином, затем бесцветным воском. Ваше отражение должно читаться в носке.',
                check: 'Методика полировки: крем → 10 мин → воск кругами → 5 мин → натрите тканью. Проверьте: ваше отражение читается в носке ботинка.',
                icon: '👞',
            },
            watch: {
                name: 'Золотые часы или позолоченный корпус, белый циферблат',
                desc: 'Золото — цвет торжества в казахской культуре. Rolex Datejust Gold или аналог. Кожаный ремень: тёмно-коричневый или чёрный.',
                check: 'Позолота: проверьте уши корпуса и застёжку — там стирается первым. Серебро проступает = часы уже поношены. Новые: позолота равномерна.',
                icon: '⌚',
            },
            accessory: {
                name: 'Галстук-бабочка из шёлка или бордовый галстук, золотые запонки',
                desc: 'Самовязаная бабочка с небольшой асимметрией — признак настоящего класса. Готовая на зажиме — допустима, но знающие заметят.',
                check: 'Самовязаная бабочка: концы не должны быть одинаковыми — небольшая асимметрия выдаёт ручную вязку. Это элита.',
                icon: '🎀',
            },
        },
        summer: {
            jacket: {
                name: 'Летний чапан из шёлка или лёгкого хлопка + льняной костюм',
                desc: 'Шёлковый чапан двигается и блестит под солнцем — визуальная роскошь. Льняной костюм слоновой кости под него — безупречное сочетание.',
                check: 'Шёлк: сожмите в кулак — не потеряет блеск, вернётся в форму. Синтетика хрустит. Потрите шёлк между ладонями — нагреется (кинетическое тепло).',
                icon: '🧥',
            },
            trousers: {
                name: 'Льняные брюки слоновой кости или светло-бежевые',
                desc: 'Торжественный лён — не парадокс. В казахстанское лето +35°, и лён — единственный правильный выбор.',
                check: 'Лён vs всё остальное: приложите ладонь изнутри — натуральный лён прохладный и влагоотводящий. Смесь — нейтральная.',
                icon: '👖',
            },
            shirt: {
                name: 'Белая льняная рубашка, аскот вместо галстука',
                desc: 'Аскот (шейный платок) — изысканная альтернатива галстуку на летнем торжестве. Повязывается свободно, концы прячутся в рубашку.',
                check: 'Аскот: берите 100% шёлк — не парит и держит форму. Синтетический будет жаться и съезжать.',
                icon: '👔',
            },
            shoes: {
                name: 'Белые или бежевые лоферы из гладкой кожи',
                desc: 'Тёмная обувь на светлом летнем образе разрывает силуэт. Светлая — продолжает льняной тон. Перед событием: белый крем + полировка.',
                check: 'Белая кожа: нанесите белый крем за 30 мин. Пятна от травы — уксусная вода (1:3). После тоя: просушите в колодках, иначе кожа деформируется.',
                icon: '👞',
            },
            watch: {
                name: 'Золотые или розово-золотые часы с белым циферблатом',
                desc: 'Rose gold в летнем образе — изысканный выбор. Белый циферблат даёт световой акцент под прямым солнцем.',
                check: 'Розовое золото (PVD): безель и торец корпуса того же тона, что и циферблат. Неравномерный цвет = некачественное покрытие. PVD держится 5+ лет.',
                icon: '⌚',
            },
            accessory: {
                name: 'Шёлковый платок в нагрудный карман или аскот',
                desc: 'Летний той: аскот или яркий платок — один акцент. Цвет платка — единственная яркая точка образа. Не используйте оба акцента сразу.',
                check: 'Хлопковый платок — чёткий «телевизор». Шёлковый — небрежная форма сама собой. Выступает из кармана на 0.5–1 см, не больше.',
                icon: '✨',
            },
        },
    },
};

// ============================================================
// ОПЦИИ
// ============================================================

const FORMALITY_LEVELS = [
    { id: 'businessBest', label: 'Business Best', sublabel: 'Переговоры · Сделки', icon: '⚖️', desc: 'Максимальная деловая формальность. Каждая деталь работает на авторитет.' },
    { id: 'businessCasual', label: 'Business Casual', sublabel: 'Офис · Рабочие встречи', icon: '🏢', desc: 'Профессионально, но с пространством для индивидуальности.' },
    { id: 'smartCasual', label: 'Smart Casual', sublabel: 'Свидание · Мероприятие', icon: '🌹', desc: 'Элегантность без строгости. Образ, который нравится и запоминается.' },
    { id: 'ceremonial', label: 'Ceremonial', sublabel: 'Той · Свадьба · Узату', icon: '🎊', desc: 'Торжественное событие. Образ, достойный памяти и уважения предков.' },
];

const SEASONS = [
    { id: 'winter', label: 'Осень — Зима', icon: '❄️', desc: 'Окт — Март · Плотные ткани', fabrics: ['Шерсть 280–320 g/m²', 'Фланель', 'Бархат'] },
    { id: 'summer', label: 'Весна — Лето', icon: '☀️', desc: 'Апр — Сент · Лёгкие ткани', fabrics: ['Лён', 'Tropical Wool', 'Хлопок батист'] },
];

const STEP_LABELS = ['Формат', 'Сезон', 'Капсула'];

// ============================================================
// LIGHTBOX — Fullscreen modal при клике на фото
// ============================================================
const Lightbox = ({ src, item, meta, onClose }) => {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] overflow-y-auto"
            onClick={onClose}
        >
            {/* Тёмный оверлей (фиксированный) */}
            <div className="fixed inset-0 bg-black/95 backdrop-blur-sm"></div>

            {/* Золотая рамка-акцент сверху (фиксированная) */}
            <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gentle-gold/70 to-transparent z-20"></div>

            {/* Контейнер для скролла */}
            <div className="relative z-10 flex flex-col min-h-full p-6 py-16">
                <div
                    className="relative flex flex-col items-center w-full max-w-5xl m-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Изображение (без жесткого ограничения высоты) */}
                    <div className="relative w-full flex items-center justify-center">
                        <img
                            src={src}
                            alt={item.name}
                            className="max-w-full rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
                            style={{ imageRendering: 'high-quality' }}
                        />
                    </div>

                    {/* Подпись снизу */}
                    <div className="mt-8 text-center px-4">
                        <p className={`text-xs font-bold tracking-[0.35em] uppercase mb-2 ${meta.color}`}>
                            {meta.label}
                        </p>
                        <h3 className="text-white font-serif text-lg md:text-xl font-bold mb-4">
                            {item.name}
                        </h3>
                        <span className="text-white/25 text-xs tracking-widest uppercase inline-block">
                            ESC или клик вне — закрыть
                        </span>
                    </div>
                </div>
            </div>

            {/* Кнопка закрытия (фиксированная) */}
            <button
                onClick={onClose}
                className="fixed top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="Закрыть"
            >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};


const CapsuleCard = ({ itemKey, item, index, formality, season, onOpenLightbox }) => {
    const [showCheck, setShowCheck] = useState(false);
    const meta = ITEM_META[itemKey];
    const grad = ITEM_GRADIENT[itemKey];
    // приоритет: localStorage (админ-панель) → public/images/style/
    const adminImg = getImage(formality, season, itemKey);
    const imgSrc = adminImg || ITEM_IMAGES[itemKey];

    return (
        <div className="group bg-white dark:bg-gentle-card rounded-2xl border border-gentle-paper dark:border-white/5 hover:border-gentle-gold/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,151,59,0.12)] overflow-hidden flex flex-col">
            {/* ── Область изображения (приоритет: getImage из admin-панели) ── */}
            <div
                className={`relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gentle-ink flex-shrink-0 ${adminImg ? 'cursor-zoom-in' : ''}`}
                onClick={() => adminImg && onOpenLightbox({ src: adminImg, item, meta })}
            >
                {adminImg ? (
                    /* Фото загружено через admin-panel */
                    <img
                        src={adminImg}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    /* Заглушка, пока фото не загружено */
                    <div className={`absolute inset-0 bg-gradient-to-br ${grad} flex flex-col items-center justify-center gap-3`}>
                        <span className="text-5xl md:text-6xl drop-shadow-lg">{item.icon}</span>
                        <span className="text-white/30 text-[9px] font-bold tracking-[0.4em] uppercase">
                            Добавьте фото
                        </span>
                    </div>
                )}
                {/* Иконка-увеличитель (только если фото есть) */}
                {adminImg && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-black/50 border border-white/30 backdrop-blur-sm flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                )}
                {/* Номер карточки */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white/70 text-[10px] font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                {/* Золотая полоска снизу изображения */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gentle-gold/80 to-transparent"></div>
            </div>

            {/* ── Контент ── */}
            <div className="p-6 flex flex-col flex-1">
                {/* Категория */}
                <span className={`text-[10px] font-bold tracking-[0.35em] uppercase mb-3 block ${meta.color}`}>
                    {meta.label}
                </span>

                {/* Название — крупно */}
                <h4 className="font-serif font-bold text-lg md:text-xl text-gentle-dark dark:text-white mb-3 leading-snug group-hover:text-gentle-gold transition-colors duration-300">
                    {item.name}
                </h4>

                {/* Описание — читаемый размер */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                    {item.desc}
                </p>

                {/* Кнопка критериев качества */}
                <button
                    onClick={() => setShowCheck(!showCheck)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gentle-gold/25 hover:border-gentle-gold/70 hover:bg-gentle-gold/5 transition-all duration-300"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-gentle-gold text-sm">✓</span>
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gentle-gold">
                            {showCheck ? 'Скрыть критерии' : 'Критерии качества'}
                        </span>
                    </div>
                    <svg className={`w-3.5 h-3.5 text-gentle-gold transition-transform duration-300 ${showCheck ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Раскрывающиеся критерии */}
                {showCheck && (
                    <div className="mt-4 p-5 bg-gentle-dark rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,151,59,0.15),transparent_70%)]"></div>
                        <div className="relative z-10">
                            <p className="text-gentle-gold text-[9px] font-bold tracking-[0.4em] uppercase mb-3">Как проверить в магазине</p>
                            <p className="text-white/85 text-sm leading-relaxed italic font-serif">
                                {item.check}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// ============================================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ============================================================
const StyleBuilder = () => {
    const [step, setStep] = useState(1);
    const [formality, setFormality] = useState(null);
    const [season, setSeason] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [lightbox, setLightbox] = useState(null); // { src, item, meta }

    const closeLightbox = useCallback(() => setLightbox(null), []);

    const transition = (fn) => {
        setAnimating(true);
        setTimeout(() => { fn(); setAnimating(false); }, 280);
    };

    const selectFormality = (id) => { setFormality(id); transition(() => setStep(2)); };
    const selectSeason = (id) => { setSeason(id); transition(() => setStep(3)); };
    const reset = () => { transition(() => { setFormality(null); setSeason(null); setStep(1); }); };

    const fMeta = FORMALITY_LEVELS.find(f => f.id === formality);
    const sMeta = SEASONS.find(s => s.id === season);
    const capsule = formality && season ? styleLibrary[formality]?.[season] : null;

    return (
        <div>
            {/* Lightbox */}
            {lightbox && (
                <Lightbox
                    src={lightbox.src}
                    item={lightbox.item}
                    meta={lightbox.meta}
                    onClose={closeLightbox}
                />
            )}
            {/* ── ПРОГРЕСС ── */}
            <div className="flex items-center gap-4 mb-12">
                {STEP_LABELS.map((label, i) => (
                    <div key={label} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${step > i + 1 ? 'bg-gentle-gold text-white shadow-[0_0_14px_rgba(201,151,59,0.5)]' :
                                step === i + 1 ? 'border-2 border-gentle-gold text-gentle-gold bg-transparent' :
                                    'border border-gray-200 dark:border-white/15 text-gray-300 dark:text-white/20'
                            }`}>
                            {step > i + 1 ? '✓' : i + 1}
                        </div>
                        <span className={`hidden sm:block text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${step === i + 1 ? 'text-gentle-gold' :
                                step > i + 1 ? 'text-gentle-gold/50' :
                                    'text-gray-300 dark:text-white/20'
                            }`}>{label}</span>
                        {i < 2 && <div className="hidden sm:block w-10 h-[1px] bg-gray-200 dark:bg-white/8 mx-1"></div>}
                    </div>
                ))}
                {step > 1 && (
                    <div className="ml-auto flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-gentle-gold/50">
                        {fMeta && <span>{fMeta.label}</span>}
                        {sMeta && <><span className="text-gray-300">·</span><span>{sMeta.label}</span></>}
                    </div>
                )}
            </div>

            {/* ── ШАГИ ── */}
            <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

                {/* ШАГ 1: УРОВЕНЬ ФОРМАЛЬНОСТИ */}
                {step === 1 && (
                    <div>
                        <p className="text-gentle-gold text-xs font-bold tracking-[0.5em] uppercase mb-3">Шаг 1 — Выберите формат</p>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-gentle-dark dark:text-white mb-4 leading-tight">
                            Какой уровень<br />
                            <span className="text-gentle-gold italic font-normal">формальности?</span>
                        </h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            Не «куда идёте», а «каким хотите выглядеть». Уровень формальности определяет каждую деталь образа — от плотности шерсти до ширины галстука.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {FORMALITY_LEVELS.map((level) => (
                                <button
                                    key={level.id}
                                    onClick={() => selectFormality(level.id)}
                                    className="group relative bg-white dark:bg-gentle-card rounded-2xl p-8 text-left border border-gentle-paper dark:border-white/5 hover:border-gentle-gold/60 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(201,151,59,0.12)] cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-gentle-gold/0 to-transparent group-hover:from-gentle-gold/5 transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gentle-gold to-gentle-gold-light group-hover:w-full transition-all duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-5">
                                            <span className="text-4xl">{level.icon}</span>
                                            <svg className="w-5 h-5 text-gray-200 dark:text-white/10 group-hover:text-gentle-gold group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                        <h4 className="font-serif font-bold text-2xl text-gentle-dark dark:text-white mb-1 group-hover:text-gentle-gold transition-colors">{level.label}</h4>
                                        <p className="text-gentle-gold/70 text-xs font-bold tracking-[0.3em] uppercase mb-3">{level.sublabel}</p>
                                        <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed">{level.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ШАГ 2: СЕЗОН */}
                {step === 2 && (
                    <div>
                        <p className="text-gentle-gold text-xs font-bold tracking-[0.5em] uppercase mb-3">Шаг 2 — Климат и ткань</p>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-gentle-dark dark:text-white mb-4 leading-tight">
                            Климат определяет<br />
                            <span className="text-gentle-gold italic font-normal">ткань и крой</span>
                        </h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            Шерсть 320 g/m² в астанинское +35° или лёгкий лён в декабрьский мороз — ошибки, которые читаются мгновенно и необратимо.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5 mb-8">
                            {SEASONS.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => selectSeason(s.id)}
                                    className="group relative bg-white dark:bg-gentle-card rounded-2xl p-8 text-left border border-gentle-paper dark:border-white/5 hover:border-gentle-gold/60 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(201,151,59,0.12)] cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gentle-gold to-gentle-gold-light group-hover:w-full transition-all duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl mb-5">{s.icon}</div>
                                        <h4 className="font-serif font-bold text-2xl text-gentle-dark dark:text-white mb-2 group-hover:text-gentle-gold transition-colors">{s.label}</h4>
                                        <p className="text-sm text-gray-400 dark:text-gray-500 mb-5">{s.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {s.fabrics.map(f => (
                                                <span key={f} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-gentle-gold/25 text-gentle-gold/70 rounded-full">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => transition(() => setStep(1))} className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-gentle-gold transition-colors">
                            <span>←</span> Назад
                        </button>
                    </div>
                )}

                {/* ШАГ 3: РЕЗУЛЬТАТ */}
                {step === 3 && capsule && (
                    <div>
                        <p className="text-gentle-gold text-xs font-bold tracking-[0.5em] uppercase mb-3">Ваш архитектурный чертёж готов</p>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-gentle-dark dark:text-white mb-2 leading-tight">
                            {fMeta?.label}
                            <span className="text-gentle-gold italic font-normal"> · {sMeta?.label}</span>
                        </h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 mb-2 max-w-2xl leading-relaxed">
                            Нажмите «Критерии качества» на каждой карточке — это ваш чеклист: как проверить вещь прямо в магазине или примерочной.
                        </p>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="h-[1px] w-12 bg-gentle-gold/30"></div>
                            <span className="text-gentle-gold/50 text-[10px] tracking-widest uppercase">{fMeta?.sublabel}</span>
                            <div className="h-[1px] w-12 bg-gentle-gold/30"></div>
                        </div>

                        {/* Сетка карточек — 3 колонки, изображения */}
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                            {Object.entries(capsule).map(([key, item], index) => (
                                <CapsuleCard key={key} itemKey={key} item={item} index={index} formality={formality} season={season} onOpenLightbox={setLightbox} />
                            ))}
                        </div>

                        {/* Принцип Архитектора */}
                        <div className="bg-gentle-dark rounded-2xl p-8 mb-8 relative overflow-hidden border border-white/5">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,151,59,0.12),transparent_60%)]"></div>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gentle-gold/30 to-transparent"></div>
                            <div className="relative z-10 flex gap-6 items-start">
                                <div className="text-gentle-gold/20 font-serif text-6xl leading-none flex-shrink-0 select-none">"</div>
                                <div>
                                    <p className="text-gentle-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Принцип Архитектора</p>
                                    <p className="text-white/80 text-base leading-relaxed italic font-serif">
                                        Мы учим не покупать, а выбирать. Образ — это система. Каждая вещь имеет функцию. Понять эту функцию — значит никогда больше не ошибиться в примерочной.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Кнопки управления */}
                        <div className="flex flex-wrap items-center gap-6">
                            <button onClick={reset}
                                className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-gentle-gold pb-1 text-gentle-dark dark:text-gentle-gold hover:text-gentle-gold transition-all">
                                ← Собрать другой образ
                            </button>
                            <button onClick={() => transition(() => setStep(2))}
                                className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-gentle-gold transition-colors border-b border-dashed border-gray-300 pb-1">
                                Изменить сезон
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StyleBuilder;
