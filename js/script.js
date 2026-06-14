// ========== ВСЕ АГЕНТЫ (26 АГЕНТОВ ДО ИЮНЯ 2026) ==========
const AGENTS = [
    // Дуэлянты (10)
    { id: 1, name: "Jett", role: "duelist", roleName: "Дуэлянт", origin: "Южная Корея", originDetail: "Сеул, Южная Корея", realName: "Сон Ён", age: "22 года", playstyle: "Мобильность, воздушные атаки", icon: "fa-wind", lore: "Корейская агентша, управляющая ветром. Быстрая и смертоносная. Выросла в Сеуле, тренировалась в паркуре.", fullLore: "Сон Ён потеряла семью во время нападения королевства-изгоя на Сеул. Тогда впервые проявились её силы — она создала воздушную стену, чтобы спасти выживших. Jett известна своей дерзостью и уверенностью, часто рискует в бою, полагаясь на свою скорость. Её любимое оружие — ножи, с которыми она буквально танцует в воздухе.", abilities: [{ name:"Облачко", desc:"Создает дымовую завесу, искривляется при прицеливании", icon:"fa-cloud", type:"Дым", stats:"Длительность: 4.5с | Зарядов: 2"},{ name:"Порыв ветра", desc:"Мгновенный рывок в направлении движения", icon:"fa-forward", type:"Мобильность", stats:"Перезарядка: 12с | Зарядов: 1"},{ name:"Попутный ветер", desc:"Затяжной рывок в воздухе", icon:"fa-shoe-prints", type:"Пассивная", stats:"Парение в воздухе"},{ name:"Вихрь клинков", desc:"Метательные ножи. При убийстве ножи восстанавливаются", icon:"fa-khanda", type:"Ультимативная", stats:"Урон: 50/150 | Ножей: 5 | Стоимость: 7"}] },
    { id: 2, name: "Phoenix", role: "duelist", roleName: "Дуэлянт", origin: "Великобритания", originDetail: "Лондон, Великобритания", realName: "Джейми Адиси", age: "24 года", playstyle: "Агрессивный, самовосстановление", icon: "fa-fire", lore: "Британский боец с огнем. Самовосстановление и контроль территории.", fullLore: "Джейми всегда был лидером — в школе, в уличных бандах, а затем в элитном подразделении Лондонской полиции. Когда радианит начал менять мир, Джейми обнаружил, что может не только создавать огонь, но и лечиться в нём. Его способность воскрешаться поразила даже учёных Протокола. Phoenix не любит ждать — он всегда идёт первым.", abilities: [{ name:"Вспышка", desc:"Ослепляющая шаровая молния, огибает углы", icon:"fa-sun", type:"Ослепление", stats:"Длительность: 1.5с | Зарядов: 2"},{ name:"Стена", desc:"Огненная стена, преграждает путь и лечит Phoenix", icon:"fa-fire", type:"Барьер/Лечение", stats:"Урон: 60/с | Лечение: 50 HP | Длительность: 6с"},{ name:"Пламя", desc:"Область огня, наносящая урон и лечащая Phoenix", icon:"fa-heartbeat", type:"Урон/Лечение", stats:"Урон: 60 | Лечение: 50 HP"},{ name:"Перерождение", desc:"Отмечает точку возрождения. При смерти воскресает", icon:"fa-undo-alt", type:"Ультимативная", stats:"Стоимость: 6"}] },
    { id: 3, name: "Reyna", role: "duelist", roleName: "Дуэлянт", origin: "Мексика", originDetail: "Мехико, Мексика", realName: "Зейна Рейес", age: "26 лет", playstyle: "Соло, вампиризм", icon: "fa-dragon", lore: "Мексиканский вампир. Пожирает души убитых врагов.", fullLore: "Зейна Рейес выросла в бедном районе Мехико. Она рано научилась выживать и полагаться только на себя. Когда радианит пробудил в ней способность поглощать души, она стала практически неуязвимой в бою. Reyna не доверяет никому, кроме своей сестры. В бою она хладнокровна и смертоносна.", abilities: [{ name:"Пожиратель душ", desc:"Поглощает душу убитого, лечит Reyna", icon:"fa-dragon", type:"Лечение", stats:"Лечение: 100 HP"},{ name:"Отказ от души", desc:"Становление нематериальной для уклонения", icon:"fa-shield-haltered", type:"Мобильность", stats:"Длительность: 2с"},{ name:"Лихорадочный взгляд", desc:"Ослепление врагов", icon:"fa-eye-slash", type:"Ослепление", stats:"Длительность: 2с | Зарядов: 2"},{ name:"Императрица", desc:"Режим усиления", icon:"fa-crown", type:"Ультимативная", stats:"Стоимость: 6"}] },
    { id: 4, name: "Raze", role: "duelist", roleName: "Дуэлянт", origin: "Бразилия", originDetail: "Салвадор, Бразилия", realName: "Татьяна Диас", age: "25 лет", playstyle: "Взрывной", icon: "fa-bomb", lore: "Бразильский подрывник. Любит взрывы.", fullLore: "Татьяна Диас выросла в бедном районе Салвадора. Она с детства увлекалась пиротехникой и взрывчатыми веществами. Когда радианит усилил её способности, её взрывчатка стала ещё мощнее. Raze — самая громкая и энергичная агентша Протокола. Она обожает взрывы и не представляет боя без динамита.", abilities: [{ name:"Кластерная граната", desc:"Взрыв, разлетающийся на мины", icon:"fa-bomb", type:"Урон", stats:"Урон: 50-75"},{ name:"Коробка со взрывчаткой", desc:"Замедляющая взрывчатка", icon:"fa-box", type:"Ловушка", stats:"Урон: 60 | Замедление: 50%"},{ name:"Надувной рюкзак", desc:"Прыжок в воздух", icon:"fa-jet-fighter-up", type:"Мобильность", stats:"Прыжок"},{ name:"Салют", desc:"Ракета с огромным уроном", icon:"fa-rocket", type:"Ультимативная", stats:"Урон: 150 | Стоимость: 8"}] },
    { id: 5, name: "Yoru", role: "duelist", roleName: "Дуэлянт", origin: "Япония", originDetail: "Токио, Япония", realName: "Кёсукэ Ямамото", age: "27 лет", playstyle: "Обман, иллюзии", icon: "fa-mask", lore: "Японский разрыв измерений. Телепорты и клоны.", fullLore: "Кёсукэ был самым молодым детективом в истории токийской полиции. Он расследовал дела, связанные с радианитом, и однажды провалился в другое измерение. Там он научился манипулировать пространством и временем. Yoru может создавать свои копии, становиться невидимым и телепортироваться.", abilities: [{ name:"Обманка", desc:"Создаёт клон для отвлечения", icon:"fa-clone", type:"Иллюзия", stats:"Длительность: 5с"},{ name:"Точка телепорта", desc:"Устанавливает маркер для телепорта", icon:"fa-location-dot", type:"Мобильность", stats:"Длительность: 20с"},{ name:"Измерение", desc:"Переход в другое измерение", icon:"fa-door-open", type:"Невидимость", stats:"Длительность: 4с"},{ name:"Измеренный рывок", desc:"Телепорт с маской", icon:"fa-vector-square", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 6, name: "Neon", role: "duelist", roleName: "Дуэлянт", origin: "Филиппины", originDetail: "Манила, Филиппины", realName: "Талай Далаван", age: "21 год", playstyle: "Скорость, электричество", icon: "fa-bolt", lore: "Филиппинская спринтерша. Очень быстрая.", fullLore: "Талай с детства обожала бегать. Она участвовала в соревнованиях и всегда приходила первой. Когда радианит дал ей невероятную скорость, она поняла, что может использовать её для защиты людей. Neon — самая быстрая агентша Протокола. Энергичная и жизнерадостная, она заряжает команду своей энергией.", abilities: [{ name:"Высокая скорость", desc:"Спринт с возможностью стрельбы", icon:"fa-person-running", type:"Мобильность", stats:"Скорость: +50%"},{ name:"Перегрузка", desc:"Лазер с рук", icon:"fa-bolt", type:"Урон", stats:"Урон: 20/тик"},{ name:"Быстрая полоса", desc:"Скольжение", icon:"fa-dharmachakra", type:"Мобильность", stats:"Скольжение"},{ name:"Разряд", desc:"Мощный электрический удар", icon:"fa-charging-station", type:"Ультимативная", stats:"Урон: 120 | Стоимость: 7"}] },
    { id: 7, name: "Waylay", role: "duelist", roleName: "Дуэлянт", origin: "Таиланд", originDetail: "Бангкок, Таиланд", realName: "Пимчанок", age: "24 года", playstyle: "Свет, скорость", icon: "fa-sun", lore: "Таиландская дуэлянтка, управляющая светом.", fullLore: "Пимчанок была профессиональной спортсменкой. Радианит дал ей способность управлять светом и создавать световые копии. Waylay — новая звезда Протокола, её способности до конца не изучены.", abilities: [{ name:"Световой след", desc:"Оставляет световую дорожку", icon:"fa-sun", type:"Мобильность", stats:"Скорость: +40%"},{ name:"Ослепление", desc:"Вспышка света", icon:"fa-sun", type:"Ослепление", stats:"Длительность: 1.5с"},{ name:"Световой барьер", desc:"Стена света", icon:"fa-shield", type:"Защита", stats:"HP: 500"},{ name:"Солнечный удар", desc:"Луч света", icon:"fa-sun", type:"Ультимативная", stats:"Урон: 100 | Стоимость: 7"}] },
    { id: 8, name: "Iso", role: "duelist", roleName: "Дуэлянт", origin: "Китай", originDetail: "Шанхай, Китай", realName: "Ли Вэй", age: "28 лет", playstyle: "Устойчивость, щиты", icon: "fa-shield", lore: "Китайский дуэлянт с энергетическими щитами.", fullLore: "Ли Вэй был телохранителем в Шанхае. Его способность создавать энергетические щиты делала его непобедимым. После радианитной катастрофы его силы усилились, и он присоединился к Протоколу.", abilities: [{ name:"Энергетический щит", desc:"Создаёт щит", icon:"fa-shield", type:"Защита", stats:"HP щита: 100"},{ name:"Ударная волна", desc:"Толчок врагов", icon:"fa-hand-fist", type:"Урон", stats:"Урон: 40"},{ name:"Барьер", desc:"Стена энергии", icon:"fa-shield-haltered", type:"Защита", stats:"Длительность: 8с"},{ name:"Непробиваемость", desc:"Полная неуязвимость", icon:"fa-shield", type:"Ультимативная", stats:"Длительность: 5с | Стоимость: 8"}] },
    { id: 9, name: "Tejo", role: "duelist", roleName: "Дуэлянт", origin: "Колумбия", originDetail: "Богота, Колумбия", realName: "Карлос Мендоса", age: "29 лет", playstyle: "Звук, дезориентация", icon: "fa-head-side-vr", lore: "Колумбийский дуэлянт со звуковыми способностями.", fullLore: "Карлос был звукорежиссёром. Он научился использовать звук как оружие. Его способности дезориентируют врагов и делают их уязвимыми.", abilities: [{ name:"Звуковой удар", desc:"Дезориентация", icon:"fa-head-side-vr", type:"Контроль", stats:"Длительность: 2с"},{ name:"Эхо", desc:"Раскрывает врагов", icon:"fa-eye", type:"Разведка", stats:"Радиус: 10м"},{ name:"Шумовая граната", desc:"Ослепление звуком", icon:"fa-bomb", type:"Ослепление", stats:"Длительность: 1.5с"},{ name:"Симфония хаоса", desc:"Массовая дезориентация", icon:"fa-head-side-vr", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 10, name: "Vyse", role: "duelist", roleName: "Дуэлянт", origin: "Египет", originDetail: "Каир, Египет", realName: "Лейла Хассан", age: "26 лет", playstyle: "Кристаллы, ловушки", icon: "fa-gem", lore: "Египетская дуэлянтка с кристаллическими способностями.", fullLore: "Лейла была археологом, изучавшим древние артефакты. Радианит пробудил в ней способность создавать кристаллы. Она использует их для ловушек и защиты.", abilities: [{ name:"Кристальная ловушка", desc:"Ловушка из кристаллов", icon:"fa-gem", type:"Ловушка", stats:"Урон: 50"},{ name:"Кристальная стена", desc:"Стена из кристаллов", icon:"fa-gem", type:"Барьер", stats:"HP: 600"},{ name:"Осколки", desc:"Разлетающиеся осколки", icon:"fa-gem", type:"Урон", stats:"Урон: 30/осколок"},{ name:"Кристальная буря", desc:"Шторм из кристаллов", icon:"fa-gem", type:"Ультимативная", stats:"Урон: 80/с | Стоимость: 8"}] },

    // Инициаторы (7)
    { id: 11, name: "Sova", role: "initiator", roleName: "Инициатор", origin: "Россия", originDetail: "Санкт-Петербург, Россия", realName: "Александр Сагин", age: "30 лет", playstyle: "Разведка, поиск врагов", icon: "fa-bow-arrow", lore: "Русский охотник. Находит врагов сквозь стены.", fullLore: "Александр родился в семье лесников. Он с детства учился читать следы и понимать лес. Когда ему было 15 лет, он спас группу туристов, заблудившихся в тайге. Позже он присоединился к спецназу. Его способность видеть сквозь стены — результат воздействия радианита.", abilities: [{ name:"Ударная стрела", desc:"Взрывная стрела, наносящая урон", icon:"fa-bow-arrow", type:"Урон", stats:"Урон: 75 | Рикошет: 2"},{ name:"Разведывательная стрела", desc:"Стрела, раскрывающая врагов в радиусе", icon:"fa-eye", type:"Разведка", stats:"Радиус: 15м | Длительность: 12с"},{ name:"Дрон-сова", desc:"Управляемый дрон для разведки", icon:"fa-drone", type:"Разведка", stats:"Длительность: 10с | HP: 100"},{ name:"Охотничья стрела", desc:"Три энергетических луча сквозь стены", icon:"fa-bullseye", type:"Ультимативная", stats:"Урон: 80 | Стоимость: 8"}] },
    { id: 12, name: "Breach", role: "initiator", roleName: "Инициатор", origin: "Швеция", originDetail: "Стокгольм, Швеция", realName: "Эрик Свенсон", age: "32 года", playstyle: "Контроль, оглушение", icon: "fa-hand-fist", lore: "Шведский киборг. Ударные волны и ослепление сквозь стены.", fullLore: "Эрик Свенсон был военным инженером, потерявшим руки при взрыве. Его спасли кибернетические протезы, которые оказались невероятно мощными. Он может создавать ударные волны и землетрясения. Breach — один из самых агрессивных инициаторов.", abilities: [{ name:"Ударная волна", desc:"Пробивает стены, нанося урон", icon:"fa-hand-fist", type:"Урон", stats:"Урон: 60"},{ name:"Вспышка", desc:"Ослепление через стены", icon:"fa-bolt", type:"Ослепление", stats:"Длительность: 2с | Зарядов: 2"},{ name:"Сейсмический удар", desc:"Землетрясение, оглушающее врагов", icon:"fa-mound", type:"Оглушение", stats:"Оглушение: 3с"},{ name:"Громовой удар", desc:"Конусное оглушение на большой дистанции", icon:"fa-thunderstorm", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 13, name: "Skye", role: "initiator", roleName: "Инициатор", origin: "Австралия", originDetail: "Сидней, Австралия", realName: "Киран Адамс", age: "26 лет", playstyle: "Разведка, лечение", icon: "fa-feather-alt", lore: "Австралийская друид. Призывает животных.", fullLore: "Киран выросла в дикой природе Австралии, где научилась понимать животных. Когда радианит дал ей способность призывать существ, она стала использовать их для разведки и поддержки. Skye — добрая и заботливая, всегда готова помочь команде.", abilities: [{ name:"Исцеляющий свет", desc:"Лечение союзников в радиусе", icon:"fa-leaf", type:"Лечение", stats:"Лечение: 100 HP"},{ name:"Следопыт", desc:"Управляемый тигр, ослепляющий врагов", icon:"fa-paw", type:"Ослепление", stats:"Длительность: 2.5с"},{ name:"Пыльца", desc:"Исцеляющая зона", icon:"fa-dove", type:"Лечение", stats:"Лечение: 50 HP"},{ name:"Искатели", desc:"Призраки, ищущие врагов", icon:"fa-crow", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 14, name: "KAY/O", role: "initiator", roleName: "Инициатор", origin: "Неизвестно", originDetail: "Альтернативное будущее", realName: "KAY/O", age: "Неизвестно", playstyle: "Подавление способностей", icon: "fa-robot", lore: "Робот-инициатор, подавляющий способности врагов.", fullLore: "KAY/O прибыл из альтернативного будущего, где радианит уничтожил человечество. Он был создан как оружие против радианита. Его главная цель — уничтожить всех, кто использует радианит во зло.", abilities: [{ name:"Осколочная граната", desc:"Граната", icon:"fa-bomb", type:"Урон", stats:"Урон: 75"},{ name:"Вспышка", desc:"Ослепление", icon:"fa-sun", type:"Ослепление", stats:"Длительность: 1.5с | Зарядов: 2"},{ name:"Подавление", desc:"Отключает способности врагов", icon:"fa-ban", type:"Контроль", stats:"Длительность: 4с"},{ name:"Нулевой командный пункт", desc:"Массовое подавление", icon:"fa-microchip", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 15, name: "Fade", role: "initiator", roleName: "Инициатор", origin: "Турция", originDetail: "Стамбул, Турция", realName: "Хазал Эйлет", age: "27 лет", playstyle: "Охота, страх", icon: "fa-bat", lore: "Турецкий инициатор с сенсорными способностями.", fullLore: "Хазал потеряла своего напарника во время радианитной аномалии. После этого она поклялась находить врагов где угодно. Её способности позволяют ей видеть сквозь стены и преследовать цели.", abilities: [{ name:"Следопыт", desc:"Существо, идущее по следу", icon:"fa-bat", type:"Разведка", stats:"Длительность: 8с"},{ name:"Ужас", desc:"Ослепление", icon:"fa-eye-slash", type:"Ослепление", stats:"Длительность: 2с"},{ name:"Кошмар", desc:"Точка страха", icon:"fa-skull", type:"Контроль", stats:"Страх: 3с"},{ name:"Судный день", desc:"Массовый поиск врагов", icon:"fa-bat", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 16, name: "Gekko", role: "initiator", roleName: "Инициатор", origin: "США", originDetail: "Лос-Анджелес, США", realName: "Родриго Гонсалес", age: "24 года", playstyle: "Создания, контроль", icon: "fa-dog", lore: "Американский инициатор с дружелюбными существами.", fullLore: "Родриго всегда любил животных. Когда радианит дал ему способность создавать существ, он стал использовать их для помощи команде. Gekko — дружелюбный и энергичный. Wingman, Dizzy, Thrash — его питомцы стали легендарными в Протоколе.", abilities: [{ name:"Головокружение", desc:"Существо-ослепление", icon:"fa-dog", type:"Ослепление", stats:"Длительность: 2с"},{ name:"Крылатый", desc:"Существо-огонь", icon:"fa-paw", type:"Урон", stats:"Урон: 30"},{ name:"Мош", desc:"Существо-замедление", icon:"fa-bug", type:"Замедление", stats:"Замедление: 50%"},{ name:"Трэш", desc:"Гигантское существо", icon:"fa-dragon", type:"Ультимативная", stats:"Стоимость: 8"}] },
    { id: 17, name: "Harbor", role: "initiator", roleName: "Инициатор", origin: "Индия", originDetail: "Мумбаи, Индия", realName: "Варун Батра", age: "35 лет", playstyle: "Вода, контроль", icon: "fa-water", lore: "Индийский контроллер воды.", fullLore: "Варун Батра был моряком, который потерял свой корабль во время радианитного шторма. Он выжил, но вода изменила его. Теперь он управляет водой и создаёт барьеры. Harbor — спокойный и мудрый, как океан.", abilities: [{ name:"Водяная волна", desc:"Стена воды", icon:"fa-water", type:"Барьер", stats:"Длительность: 10с"},{ name:"Каскад", desc:"Поток воды", icon:"fa-water-ladder", type:"Урон", stats:"Урон: 30"},{ name:"Бухта", desc:"Защитная зона", icon:"fa-water", type:"Защита", stats:"Защита"},{ name:"Цунами", desc:"Массовое замедление", icon:"fa-water", type:"Ультимативная", stats:"Стоимость: 7"}] },

    // Контроллеры (6)
    { id: 18, name: "Brimstone", role: "controller", roleName: "Контроллер", origin: "США", originDetail: "Бостон, США", realName: "Лиам Бирн", age: "42 года", playstyle: "Поддержка, дымы", icon: "fa-satellite-dish", lore: "Американский командир. Дымы и орбитальная поддержка.", fullLore: "Лиам Бирн — ветеран войн будущего. Он командовал элитными отрядами ещё до появления радианита. Когда мир изменился, он использовал свои знания, чтобы создать Протокол VALORANT. Brimstone — лидер и наставник для всех агентов.", abilities: [{ name:"Зажигательная граната", desc:"Зона огня", icon:"fa-fire-flame-curved", type:"Урон", stats:"Урон: 60/с | Длительность: 6с"},{ name:"Дымовая завеса", desc:"Три дыма с настройкой с карты", icon:"fa-smog", type:"Дым", stats:"Длительность: 15с | Зарядов: 3"},{ name:"Стимулятор", desc:"Повышает скорострельность", icon:"fa-gauge-high", type:"Бафф", stats:"Скорострельность: +15%"},{ name:"Орбитальный удар", desc:"Лазер с орбиты", icon:"fa-satellite-dish", type:"Ультимативная", stats:"Урон: 40/тик | Стоимость: 7"}] },
    { id: 19, name: "Viper", role: "controller", roleName: "Контроллер", origin: "США", originDetail: "Сент-Луис, США", realName: "Сабина Каллас", age: "35 лет", playstyle: "Контроль территории, яд", icon: "fa-skull", lore: "Американский химик. Токсичные облака и стены яда.", fullLore: "Сабина Каллас была гениальным химиком. Когда королевство-изгой атаковало её лабораторию, все её коллеги погибли. Сабина выжила, но изменилась — она решила, что отравляющие вещества могут быть оружием. Viper хладнокровна и расчётлива.", abilities: [{ name:"Ядовитое облако", desc:"Выброс газа", icon:"fa-smog", type:"Урон", stats:"Урон: 30/с | Топливо: 15с"},{ name:"Токсичная стена", desc:"Стена яда", icon:"fa-chalkboard", type:"Барьер", stats:"Урон: 30/с | Топливо: 20с"},{ name:"Змеиный укус", desc:"Ядовитая лужа", icon:"fa-biohazard", type:"Урон", stats:"Урон: 40/с | Длительность: 6.5с"},{ name:"Логово Viper", desc:"Облако яда вокруг", icon:"fa-skull", type:"Ультимативная", stats:"Урон: 30/с | Стоимость: 7"}] },
    { id: 20, name: "Omen", role: "controller", roleName: "Контроллер", origin: "Неизвестно", originDetail: "Засекречено", realName: "???", age: "Неизвестно", playstyle: "Агрессивный контроль", icon: "fa-ghost", lore: "Таинственный теневой охотник. Телепортация и дымы.", fullLore: "Омен — загадка даже для Протокола. Никто не знает, кто он и откуда. Его тело покрыто тенями, а воспоминания стёрты. Он может телепортироваться, создавать дымы на огромном расстоянии и ослеплять врагов. В бою он непредсказуем и опасен.", abilities: [{ name:"Паранойя", desc:"Ослепление по прямой", icon:"fa-tower-broadcast", type:"Ослепление", stats:"Длительность: 2с"},{ name:"Темное убежище", desc:"Дым с дальним размещением", icon:"fa-cloud-moon", type:"Дым", stats:"Длительность: 15с | Зарядов: 2"},{ name:"Теневой шаг", desc:"Короткая телепортация", icon:"fa-arrow-right", type:"Мобильность", stats:"Перезарядка: 30с"},{ name:"Из тени", desc:"Глобальная телепортация", icon:"fa-ghost", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 21, name: "Astra", role: "controller", roleName: "Контроллер", origin: "Гана", originDetail: "Аккра, Гана", realName: "Эффия", age: "28 лет", playstyle: "Глобальный контроль, звезды", icon: "fa-star", lore: "Ганский контроллер с космическими способностями.", fullLore: "Эффия была астрофизиком. Она обнаружила, что радианит связан с космической энергией. Теперь она может создавать звезды на карте и управлять пространством. Astra — одна из самых сложных агентов для освоения.", abilities: [{ name:"Звезда", desc:"Устанавливает звезду", icon:"fa-star", type:"Контроль", stats:"Зарядов: 5"},{ name:"Гравитационная ловушка", desc:"Притягивает врагов", icon:"fa-gravity", type:"Контроль", stats:"Притяжение"},{ name:"Нова", desc:"Взрыв звезды", icon:"fa-star", type:"Урон", stats:"Урон: 50"},{ name:"Космический разрыв", desc:"Разрыв пространства", icon:"fa-star", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 22, name: "Clove", role: "controller", roleName: "Контроллер", origin: "Шотландия", originDetail: "Эдинбург, Шотландия", realName: "Фиона Маклауд", age: "23 года", playstyle: "Дымы, воскрешение", icon: "fa-crown", lore: "Шотландский контроллер с воскрешением.", fullLore: "Фиона — самая загадочная из новых агентов. Она погибла в радианитной катастрофе, но каким-то образом вернулась. Теперь она может кратковременно воскресать после смерти. Clove — жизнерадостная и дерзкая, смерть её не пугает.", abilities: [{ name:"Дымное облако", desc:"Дым", icon:"fa-cloud", type:"Дым", stats:"Длительность: 15с"},{ name:"Едкая кислота", desc:"Зона урона", icon:"fa-skull", type:"Урон", stats:"Урон: 40/с"},{ name:"Облако страха", desc:"Ослепление", icon:"fa-eye-slash", type:"Ослепление", stats:"Длительность: 2с"},{ name:"Второй шанс", desc:"Кратковременное воскрешение", icon:"fa-undo", type:"Ультимативная", stats:"Стоимость: 7"}] },
    { id: 23, name: "Deadlock", role: "controller", roleName: "Контроллер", origin: "Норвегия", originDetail: "Осло, Норвегия", realName: "Ингрид Ларсен", age: "29 лет", playstyle: "Ловушки, контроль", icon: "fa-spider", lore: "Норвежский контроллер с липкими ловушками.", fullLore: "Ингрид была инженером в норвежской компании по производству материалов. Она разработала супер-липкие полимеры, которые стали основой её способностей. Deadlock — хладнокровна и расчётлива. Её ловушки не дают врагам и шагу ступить.", abilities: [{ name:"Паутина", desc:"Липкая ловушка", icon:"fa-spider", type:"Ловушка", stats:"Обездвиживание"},{ name:"Гравитационный узел", desc:"Зона притяжения", icon:"fa-bolt", type:"Замедление", stats:"Замедление: 70%"},{ name:"Сенсор", desc:"Детектор врагов", icon:"fa-eye", type:"Разведка", stats:"Радиус: 10м"},{ name:"Клетка", desc:"Тюрьма для врага", icon:"fa-cage", type:"Ультимативная", stats:"Стоимость: 7"}] },

    // Стражи (6)
    { id: 24, name: "Sage", role: "sentinel", roleName: "Страж", origin: "Китай", originDetail: "Горы Цзяньгун, Китай", realName: "Ли Нин", age: "28 лет", playstyle: "Поддержка, исцеление", icon: "fa-heart", lore: "Китайский целитель. Лечит и воскрешает.", fullLore: "Ли Нин была целительницей в своём монастыре задолго до появления радианита. Она изучала древние тексты о жизненной энергии. Sage — самый миролюбивый агент, но на поле боя она становится непробиваемой стеной. Она верит, что каждая жизнь ценна.", abilities: [{ name:"Сфера исцеления", desc:"Лечит союзника", icon:"fa-medkit", type:"Лечение", stats:"Лечение: 100 HP | Перезарядка: 45с"},{ name:"Сфера замедления", desc:"Замедляет врагов", icon:"fa-snowflake", type:"Замедление", stats:"Замедление: 50% | Длительность: 7с"},{ name:"Сфера барьера", desc:"Стена из льда", icon:"fa-shield", type:"Барьер", stats:"HP: 800 | Длительность: 40с"},{ name:"Воскрешение", desc:"Оживляет союзника", icon:"fa-user-plus", type:"Ультимативная", stats:"Стоимость: 8"}] },
    { id: 25, name: "Cypher", role: "sentinel", roleName: "Страж", origin: "Марокко", originDetail: "Рабат, Марокко", realName: "Амир Эль Амлари", age: "34 года", playstyle: "Разведка, информация", icon: "fa-eye", lore: "Марокканский разведчик. Сеть камер и ловушек.", fullLore: "Амир был лучшим агентом марокканской разведки. Его методы были неортодоксальны, но результаты впечатляли. Cypher никогда не снимает маску — никто не знает его истинного лица. Он параноик, но именно это делает его лучшим разведчиком.", abilities: [{ name:"Растяжка", desc:"Ловушка, оглушающая врагов", icon:"fa-trap", type:"Ловушка", stats:"Оглушение: 3с"},{ name:"Кибер-клетка", desc:"Дым", icon:"fa-video", type:"Дым", stats:"Длительность: 7с | Зарядов: 2"},{ name:"Камера", desc:"Скрытая камера", icon:"fa-camera", type:"Разведка", stats:"Перезарядка: 30с"},{ name:"Кража данных", desc:"Раскрывает всех врагов", icon:"fa-brain", type:"Ультимативная", stats:"Стоимость: 6"}] },
    { id: 26, name: "Killjoy", role: "sentinel", roleName: "Страж", origin: "Германия", originDetail: "Берлин, Германия", realName: "Клара Хан", age: "23 года", playstyle: "Защита, турели", icon: "fa-microchip", lore: "Немецкий гений. Турели и нано-боты.", fullLore: "Клара Хан с детства увлекалась робототехникой. В 16 лет она поступила в лучший технический университет Берлина. Когда радианит начал создавать проблемы, она разработала технологию его нейтрализации. Killjoy — самый молодой агент, но её изобретения спасли множество жизней.", abilities: [{ name:"Нано-рой", desc:"Граната с нано-роями", icon:"fa-bug", type:"Урон", stats:"Урон: 40/с | Длительность: 4с"},{ name:"Турель", desc:"Автоматическая турель", icon:"fa-robot", type:"Защита", stats:"Урон: 8/выстрел | HP: 125"},{ name:"Тревога-бот", desc:"Робот-ловушка", icon:"fa-bell", type:"Ловушка", stats:"Замедление: 40%"},{ name:"Замок", desc:"Зона задержания врагов", icon:"fa-lock", type:"Ультимативная", stats:"Стоимость: 8"}] }
];

// ========== ВСЕ КАРТЫ (12 ШТУК) ==========
const MAPS = [
    { name: "Ascent", mode: "Стандарт", location: "Венеция, Италия", positions: "A Main, Mid, B Main, Catwalk, Market", description: "Классическая карта с открытой серединой.", img: "images/ascent.jpg", overviewImg: "images/ascent-overview.jpg" },
    { name: "Bind", mode: "Стандарт", location: "Рабат, Марокко", positions: "A Short, A Long, B Long, Hookah, U-Hall", description: "Карта без середины, с телепортами.", img: "images/bind.jpg", overviewImg: "images/bind-overview.jpg" },
    { name: "Breeze", mode: "Стандарт", location: "Бермудский треугольник", positions: "A Cave, A Main, Mid, B Main, B Elbow", description: "Большая открытая карта.", img: "images/breeze.jpg", overviewImg: "images/breeze-overview.jpg" },
    { name: "Fracture", mode: "Стандарт", location: "Нью-Мексико, США", positions: "A Rope, A Main, Arcade, B Main, B Tunnel", description: "Карта с двумя атакующими спавнами.", img: "images/fracture.jpg", overviewImg: "images/fracture-overview.jpg" },
    { name: "Haven", mode: "Стандарт", location: "Тхимпху, Бутан", positions: "A Long, A Short, C Long, C Garage, Mid", description: "Единственная карта с тремя точками.", img: "images/haven.jpg", overviewImg: "images/haven-overview.jpg" },
    { name: "Icebox", mode: "Стандарт", location: "Остров Беннетта, Россия", positions: "A Snow, A Belt, Mid, B Green, B Yellow", description: "Вертикальная карта с зиплайнами.", img: "images/icebox.jpg", overviewImg: "images/icebox-overview.jpg" },
    { name: "Lotus", mode: "Стандарт", location: "Западные Гаты, Индия", positions: "A Ruins, A Drop, B Mound, C Waterfall, Stairs", description: "Трехточечная карта.", img: "images/lotus.jpg", overviewImg: "images/lotus-overview.jpg" },
    { name: "Pearl", mode: "Стандарт", location: "Лиссабон, Португалия", positions: "A Art, A Main, Mid, B Main, B Flowers", description: "Подземная карта.", img: "images/pearl.jpg", overviewImg: "images/pearl-overview.jpg" },
    { name: "Split", mode: "Стандарт", location: "Токио, Япония", positions: "A Ramp, A Sewer, Mid, B Garage, B Heaven", description: "Вертикальная карта.", img: "images/split.jpg", overviewImg: "images/split-overview.jpg" },
    { name: "Sunset", mode: "Стандарт", location: "Лос-Анджелес, США", positions: "A Main, A Lobby, Mid, B Market, B Alley", description: "Городская карта.", img: "images/sunset.jpg", overviewImg: "images/sunset-overview.jpg" },
    { name: "Abyss", mode: "Стандарт", location: "Ян-Майен, Норвегия", positions: "A Site, Mid, B Site, Drop Zone, Bridge", description: "Карта с пропастями.", img: "images/abyss.jpg", overviewImg: "images/abyss-overview.jpg" },
    { name: "Corrode", mode: "Стандарт", location: "Мон-Сен-Мишель, Франция", positions: "A Main, Mid Control, B Main, Waterways, Upper Hall", description: "Карта с водными путями.", img: "images/corrode.jpg", overviewImg: "images/corrode-overview.jpg" }
];

// ========== РЕЖИМЫ ==========
const GAME_MODES = [
    { name: "Стандартный режим (Unrated)", icon: "fa-flag-checkered", desc: "Классический режим 5x5 до 13 побед", time: "30-45 мин", players: "5x5", details: "Лучший способ научиться играть. Без давления ранга." },
    { name: "Соревновательный (Competitive)", icon: "fa-trophy", desc: "Ранговый режим", time: "30-45 мин", players: "5x5", details: "Серьёзный режим для опытных игроков. Влияет на ранг." },
    { name: "Быстрая игра (Swift Play)", icon: "fa-bolt", desc: "Ускоренный режим до 5 побед", time: "10-15 мин", players: "5x5", details: "Быстрый вход и выход. Начинается с пистолетного раунда." },
    { name: "Спайк-раш (Spike Rush)", icon: "fa-bomb", desc: "Короткий режим до 4 побед", time: "8-12 мин", players: "5x5", details: "Каждый раунд все получают одинаковое оружие." },
    { name: "Эскалация (Escalation)", icon: "fa-chart-line", desc: "Смена оружия после убийств", time: "10-15 мин", players: "5x5", details: "Оружие меняется автоматически. Способности отключены." },
    { name: "Смертельный бой (Deathmatch)", icon: "fa-skull-crossbones", desc: "Каждый за себя до 40 убийств", time: "10 мин", players: "FFA", details: "Идеален для разминки и тренировки меткости." },
    { name: "Team Deathmatch", icon: "fa-users", desc: "Командный режим до 100 убийств", time: "15 мин", players: "5x5", details: "Можно возрождаться с выбранным оружием." },
    { name: "Схватка (Replication)", icon: "fa-copy", desc: "Все игроки за одного агента", time: "10-15 мин", players: "5x5", details: "Очень весёлый и хаотичный режим." }
];

// ========== ТЕСТЫ ==========
const TESTS = {
    agents: { name: "Тест: Агенты", questions: [
        { q: "Какой агент может воскрешать союзников?", options: ["Sage", "Phoenix", "Skye", "Killjoy"], correct: 0 },
        { q: "Какой роли принадлежит Jett?", options: ["Страж", "Дуэлянт", "Контроллер", "Инициатор"], correct: 1 },
        { q: "У какого агента есть турель?", options: ["Cypher", "Killjoy", "Breach", "Sova"], correct: 1 },
        { q: "Какой агент использует лук?", options: ["Jett", "Sova", "Raze", "Phoenix"], correct: 1 },
        { q: "Какой агент может телепортироваться?", options: ["Omen", "Sage", "Brimstone", "Killjoy"], correct: 0 }
    ]},
    maps: { name: "Тест: Карты", questions: [
        { q: "На какой карте три точки закладки?", options: ["Split", "Haven", "Ascent", "Bind"], correct: 1 },
        { q: "На какой карте есть телепорты?", options: ["Bind", "Breeze", "Pearl", "Icebox"], correct: 0 },
        { q: "Где находится карта Split?", options: ["Лондон", "Токио", "Нью-Йорк", "Париж"], correct: 1 },
        { q: "Какая карта находится в России?", options: ["Icebox", "Split", "Ascent", "Haven"], correct: 0 },
        { q: "Какая карта самая большая?", options: ["Split", "Ascent", "Breeze", "Bind"], correct: 2 }
    ]}
};

// ========== ТРЕНИРОВКИ ==========
const TRAINING_SESSIONS = [
    { id: 1, name: "Основы прицеливания", coach: "AimMaster", date: "20 июня 2026", time: "18:00 MSK", slots: 5, level: "Начинающий" },
    { id: 2, name: "Агенты-дуэлянты", coach: "DuelistPro", date: "21 июня 2026", time: "19:00 MSK", slots: 3, level: "Средний" },
    { id: 3, name: "Тактика командной игры", coach: "TeamLead", date: "22 июня 2026", time: "20:00 MSK", slots: 4, level: "Продвинутый" },
    { id: 4, name: "Стрельба с демаскировкой", coach: "SniperElite", date: "23 июня 2026", time: "18:30 MSK", slots: 5, level: "Средний" },
    { id: 5, name: "Разбор карт", coach: "MapExpert", date: "24 июня 2026", time: "19:30 MSK", slots: 2, level: "Все уровни" }
];

// ========== ОТОБРАЖЕНИЕ КАРТ ==========
function renderMaps() {
    const grid = document.getElementById('mapsGrid');
    if (!grid) return;
    
    grid.innerHTML = MAPS.map(map => `
        <div class="map-card" data-map-name="${map.name}">
            <img src="${map.img}" alt="${map.name}" style="width:100%; height:160px; object-fit:cover;" onerror="this.src='https://placehold.co/400x200/1a2a35/ff4655?text=${map.name}'">
            <div class="map-info">
                <div class="agent-name">${map.name}</div>
                <div class="role-badge" style="background:var(--accent); color:white; margin:8px 0;">${map.mode}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary)">${map.location}</div>
                <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="btn-map-detail" data-map="${map.name}">Подробнее</button>
                    <button class="btn-map-overview" data-map="${map.name}">Позиции карты видом сверху</button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.btn-map-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mapName = btn.dataset.map;
            showMapDetail(mapName);
        });
    });
    
    document.querySelectorAll('.btn-map-overview').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mapName = btn.dataset.map;
            showMapOverview(mapName);
        });
    });
    
    document.querySelectorAll('.map-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-map-detail') && !e.target.closest('.btn-map-overview')) {
                const mapName = card.dataset.mapName;
                showMapDetail(mapName);
            }
        });
    });
}

function showMapDetail(mapName) {
    const map = MAPS.find(m => m.name === mapName);
    const container = document.getElementById('mapDetailContainer');
    if (!container || !map) return;
    
    container.innerHTML = `
        <div class="map-detail-content">
            <div class="map-screenshot">
                <img src="${map.img}" alt="${map.name}" style="width:100%; border-radius:12px;" onerror="this.src='https://placehold.co/600x400/1a2a35/ff4655?text=${map.name}'">
            </div>
            <div class="map-detail-text">
                <h3>${map.name}</h3>
                <span class="map-mode">${map.mode}</span>
                <p><i class="fas fa-location-dot"></i> ${map.location}</p>
                <p>${map.description}</p>
                <div class="map-positions">
                    <h4>Ключевые позиции</h4>
                    <ul>
                        ${map.positions.split(',').map(p => `<li>${p.trim()}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn-to-maps" id="backToMapsBtn">Ко всем картам</button>
            </div>
        </div>
    `;
    
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    const backBtn = document.getElementById('backToMapsBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('mapsGrid').scrollIntoView({ behavior: 'smooth' });
            container.innerHTML = `
                <div class="map-detail-placeholder">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Выбери карту</h3>
                    <p>Нажми на любую карту выше, чтобы увидеть подробную информацию</p>
                </div>
            `;
        });
    }
}

function showMapOverview(mapName) {
    const map = MAPS.find(m => m.name === mapName);
    const modal = document.getElementById('mapOverviewModal');
    const content = document.getElementById('mapOverviewContent');
    if (!modal || !content || !map) return;
    
    content.innerHTML = `
        <div style="text-align: center;">
            <h2>${map.name} - Карта сверху</h2>
            <p>Позиции и ключевые точки</p>
            <img src="${map.overviewImg}" alt="${map.name} overview" style="width:100%; max-width:800px; border-radius:16px; margin:20px 0;" onerror="this.src='https://placehold.co/800x600/1a2a35/ff4655?text=${map.name}+%D0%9A%D0%B0%D1%80%D1%82%D0%B0+%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83'">
            <div style="margin-top: 20px;">
                <h3>Ключевые позиции:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 10px;">
                    ${map.positions.split(',').map(p => `<span style="background:var(--border); padding:5px 12px; border-radius:20px; font-size:0.8rem;">${p.trim()}</span>`).join('')}
                </div>
            </div>
            <button class="btn-primary" id="closeOverviewBtn" style="margin-top: 20px;">Закрыть</button>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    document.getElementById('closeOverviewBtn')?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.querySelector('.close-modal')?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// ========== ОТОБРАЖЕНИЕ АГЕНТОВ ==========
function renderAgents() {
    const grid = document.getElementById('agentsGrid');
    if (!grid) return;
    grid.innerHTML = AGENTS.map(agent => `
        <div class="agent-card" data-agent-id="${agent.id}">
            <div class="agent-info">
                <div class="agent-name">${agent.name}</div>
                <span class="role-badge role-${agent.role}">${agent.roleName}</span>
                <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:5px;">${agent.origin}</div>
                <div style="font-size:0.7rem; margin-top:5px;"><i class="fas ${agent.icon}"></i> ${agent.playstyle}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.agent-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.agentId);
            showAbilities(id);
        });
    });
}

function showAbilities(agentId) {
    const agent = AGENTS.find(a => a.id === agentId);
    const container = document.getElementById('abilitiesContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="abilities-header">
            <div class="abilities-agent-icon"><i class="fas ${agent.icon}"></i></div>
            <div class="abilities-agent-title">
                <h2>${agent.name}</h2>
                <span class="role-badge role-${agent.role}">${agent.roleName}</span>
                <span style="margin-left: 10px;">${agent.origin}</span>
            </div>
        </div>
        
        <div class="abilities-grid">
            ${agent.abilities.map(ab => `
                <div class="ability-card">
                    <div class="ability-icon"><i class="fas ${ab.icon}"></i></div>
                    <div class="ability-name">${ab.name}</div>
                    <div class="ability-desc">${ab.desc}</div>
                    <div class="ability-stats">${ab.type} | ${ab.stats}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="lore-expanded">
            <h4>Лор агента</h4>
            <p><strong>Настоящее имя:</strong> ${agent.realName || 'Неизвестно'} | <strong>Возраст:</strong> ${agent.age || 'Неизвестно'} | <strong>Происхождение:</strong> ${agent.originDetail || agent.origin}</p>
            <p style="margin-top: 10px;">${agent.fullLore || agent.lore}</p>
            <div class="lore-details">
                <div class="lore-detail-item"><i class="fas fa-tag"></i> Роль: ${agent.roleName}</div>
                <div class="lore-detail-item"><i class="fas fa-gamepad"></i> Стиль: ${agent.playstyle}</div>
            </div>
            <button class="btn-lore" id="fullLoreBtn">Полный лор</button>
        </div>
    `;
    
    const loreBtn = document.getElementById('fullLoreBtn');
    if (loreBtn) {
        loreBtn.addEventListener('click', () => {
            document.getElementById('loreModalContent').innerHTML = `
                <div class="lore-full">
                    <h2>${agent.name}</h2>
                    <h3>История</h3>
                    <p>${agent.fullLore || agent.lore}</p>
                    <h3>Происхождение</h3>
                    <p>${agent.originDetail || agent.origin}</p>
                    <h3>Настоящее имя</h3>
                    <p>${agent.realName || 'Неизвестно'}</p>
                    <h3>Возраст</h3>
                    <p>${agent.age || 'Неизвестно'}</p>
                    <h3>Способности</h3>
                    <ul>
                        ${agent.abilities.map(ab => `<li><strong>${ab.name}</strong> — ${ab.desc}<br><small>${ab.type} | ${ab.stats}</small></li>`).join('')}
                    </ul>
                </div>
            `;
            document.getElementById('loreModal').style.display = 'flex';
        });
    }
}

// ========== ОТОБРАЖЕНИЕ РЕЖИМОВ ==========
function renderModes() {
    const container = document.getElementById('modesContainer');
    if (!container) return;
    container.innerHTML = GAME_MODES.map(mode => `
        <div class="mode-card">
            <div class="mode-icon"><i class="fas ${mode.icon}"></i></div>
            <div class="mode-info">
                <h3>${mode.name}</h3>
                <p class="mode-desc">${mode.desc}</p>
                <div class="mode-stats">
                    <span><i class="fas fa-clock"></i> ${mode.time}</span>
                    <span><i class="fas fa-users"></i> ${mode.players}</span>
                </div>
                <div class="mode-details"><i class="fas fa-info-circle"></i> ${mode.details}</div>
            </div>
        </div>
    `).join('');
}

function renderModesPreview() {
    const container = document.getElementById('modesPreview');
    if (!container) return;
    const preview = GAME_MODES.slice(0, 4);
    container.innerHTML = preview.map(mode => `
        <div class="mode-preview-card" onclick="window.location.href='modes.html'">
            <i class="fas ${mode.icon}"></i>
            <h4>${mode.name}</h4>
            <p>${mode.desc}</p>
            <span class="mode-time"><i class="fas fa-clock"></i> ${mode.time}</span>
        </div>
    `).join('');
}

// ========== ТЕСТЫ ==========
function renderTests() {
    const container = document.getElementById('testsContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="test-card" data-test="agents">
            <div class="test-icon"><i class="fas fa-user-ninja"></i></div>
            <h3>${TESTS.agents.name}</h3>
            <p>Проверь знание всех агентов и их ролей</p>
            <div class="test-stats">${TESTS.agents.questions.length} вопросов</div>
            <button class="btn-primary start-test">Начать тест →</button>
        </div>
        <div class="test-card" data-test="maps">
            <div class="test-icon"><i class="fas fa-map"></i></div>
            <h3>${TESTS.maps.name}</h3>
            <p>Проверь знание карт и их особенностей</p>
            <div class="test-stats">${TESTS.maps.questions.length} вопросов</div>
            <button class="btn-primary start-test">Начать тест →</button>
        </div>
    `;
    
    document.querySelectorAll('.start-test').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const testCard = e.target.closest('.test-card');
            const testType = testCard.dataset.test;
            startTest(testType);
        });
    });
}

let currentTest = null;
let currentAnswers = [];
let currentQuestionIndex = 0;

function startTest(testType) {
    currentTest = TESTS[testType];
    currentAnswers = new Array(currentTest.questions.length).fill(null);
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const modal = document.getElementById('testModal');
    const content = document.getElementById('testContent');
    const q = currentTest.questions[currentQuestionIndex];
    
    content.innerHTML = `
        <div style="padding:10px;">
            <div style="margin-bottom:20px;">
                Вопрос ${currentQuestionIndex + 1} из ${currentTest.questions.length}
                <div style="height:4px; background:var(--border); margin-top:5px;">
                    <div style="height:100%; width:${((currentQuestionIndex + 1) / currentTest.questions.length) * 100}%; background:var(--accent);"></div>
                </div>
            </div>
            <h3 style="margin-bottom:20px;">${q.q}</h3>
            <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
                ${q.options.map((opt, idx) => `
                    <label style="display:flex; align-items:center; gap:10px; padding:10px; background:var(--bg-primary); border-radius:10px; cursor:pointer;">
                        <input type="radio" name="answer" value="${idx}" ${currentAnswers[currentQuestionIndex] === idx ? 'checked' : ''}>
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
            <div style="display:flex; justify-content:space-between;">
                <button class="btn-outline" id="prevBtn" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Назад</button>
                <button class="btn-primary" id="nextBtn">${currentQuestionIndex === currentTest.questions.length - 1 ? 'Завершить' : 'Далее'}</button>
            </div>
        </div>
    `;
    
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentAnswers[currentQuestionIndex] = parseInt(e.target.value);
        });
    });
    
    document.getElementById('prevBtn')?.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    });
    
    document.getElementById('nextBtn')?.addEventListener('click', () => {
        if (currentQuestionIndex === currentTest.questions.length - 1) {
            finishTest();
        } else {
            currentQuestionIndex++;
            showQuestion();
        }
    });
    
    modal.style.display = 'flex';
    modal.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
}

function finishTest() {
    let correct = 0;
    currentTest.questions.forEach((q, idx) => {
        if (currentAnswers[idx] === q.correct) correct++;
    });
    const score = Math.round((correct / currentTest.questions.length) * 100);
    
    const currentUser = JSON.parse(localStorage.getItem('valorantUser'));
    if (currentUser && currentUser.loggedIn) {
        const results = JSON.parse(localStorage.getItem('testResults') || '[]');
        results.push({
            userId: currentUser.id,
            testName: currentTest.name,
            score: score,
            correctAnswers: correct,
            totalQuestions: currentTest.questions.length,
            date: new Date().toISOString()
        });
        localStorage.setItem('testResults', JSON.stringify(results));
    }
    
    const modal = document.getElementById('testModal');
    const content = document.getElementById('testContent');
    
    content.innerHTML = `
        <div style="text-align:center; padding:20px;">
            <h2>${currentTest.name}</h2>
            <div style="width:120px; height:120px; border-radius:50%; border:4px solid var(--accent); display:flex; align-items:center; justify-content:center; margin:20px auto;">
                <span style="font-size:2rem; font-weight:700;">${score}%</span>
            </div>
            <p>Правильных ответов: ${correct} из ${currentTest.questions.length}</p>
            <button class="btn-primary" id="closeTestBtn" style="margin-top:20px;">Закрыть</button>
        </div>
    `;
    
    document.getElementById('closeTestBtn')?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// ========== ТРЕНИРОВКИ ==========
function renderTrainingSessions() {
    const container = document.getElementById('sessionsList');
    if (!container) return;
    
    container.innerHTML = TRAINING_SESSIONS.map(s => `
        <div class="session-card">
            <div><strong>${s.name}</strong> <span style="background:var(--accent); padding:2px 8px; border-radius:20px; font-size:0.7rem;">${s.level}</span></div>
            <div style="font-size:0.8rem; margin-top:5px;"><i class="fas fa-chalkboard-user"></i> ${s.coach}</div>
            <div style="font-size:0.8rem;"><i class="fas fa-calendar"></i> ${s.date} в ${s.time}</div>
            <div style="font-size:0.8rem;"><i class="fas fa-users"></i> Мест: ${s.slots}</div>
        </div>
    `).join('');
    
    const select = document.getElementById('trainingSelect');
    if (select) {
        select.innerHTML = '<option value="">-- Выберите тренировку --</option>' +
            TRAINING_SESSIONS.map(s => `<option value="${s.id}">${s.name} — ${s.date}</option>`).join('');
    }
}

function loadTrainingRequests() {
    const user = JSON.parse(localStorage.getItem('valorantUser'));
    if (!user || !user.loggedIn) {
        const container = document.getElementById('requestsList');
        if (container) container.innerHTML = '<p style="text-align:center;">Войдите в аккаунт, чтобы видеть заявки</p>';
        return;
    }
    
    const requests = JSON.parse(localStorage.getItem('trainingRequests_' + user.id) || '[]');
    const container = document.getElementById('requestsList');
    if (!container) return;
    
    if (requests.length === 0) {
        container.innerHTML = '<p style="text-align:center;">У вас пока нет заявок</p>';
        return;
    }
    
    container.innerHTML = requests.map(r => `
        <div class="request-item">
            <div><strong>${r.trainingName}</strong> <span class="status-pending">На рассмотрении</span></div>
            <div style="font-size:0.8rem; margin-top:5px;"><i class="fas fa-user"></i> Ник: ${r.playerName}</div>
            <div style="font-size:0.7rem; color:var(--text-secondary);">Подано: ${new Date(r.date).toLocaleDateString()}</div>
        </div>
    `).join('');
}

if (document.getElementById('trainingForm')) {
    document.getElementById('trainingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = JSON.parse(localStorage.getItem('valorantUser'));
        if (!user || !user.loggedIn) {
            document.getElementById('formMessage').innerHTML = '<span style="color:#e74c3c;">Ошибка: Войдите в аккаунт!</span>';
            return;
        }
        
        const playerName = document.getElementById('playerName').value.trim();
        const playerEmail = document.getElementById('playerEmail').value.trim();
        const trainingId = document.getElementById('trainingSelect').value;
        const playerRank = document.getElementById('playerRank').value;
        const playerComment = document.getElementById('playerComment').value;
        
        if (!playerName || !playerEmail || !trainingId) {
            document.getElementById('formMessage').innerHTML = '<span style="color:#e74c3c;">Ошибка: Заполните все поля!</span>';
            return;
        }
        
        const training = TRAINING_SESSIONS.find(t => t.id == trainingId);
        if (!training) return;
        
        const requests = JSON.parse(localStorage.getItem('trainingRequests_' + user.id) || '[]');
        requests.push({
            id: Date.now(),
            trainingId: training.id,
            trainingName: training.name,
            playerName: playerName,
            playerEmail: playerEmail,
            playerRank: playerRank,
            playerComment: playerComment,
            status: 'pending',
            date: new Date().toISOString()
        });
        localStorage.setItem('trainingRequests_' + user.id, JSON.stringify(requests));
        
        document.getElementById('formMessage').innerHTML = '<span style="color:#2ecc71;">Успех: Заявка отправлена!</span>';
        document.getElementById('trainingForm').reset();
        loadTrainingRequests();
        setTimeout(() => document.getElementById('formMessage').innerHTML = '', 3000);
    });
}

// ========== ФИЛЬТРЫ ==========
function setupFilters() {
    const filters = document.querySelectorAll('.filter');
    if (!filters.length) return;
    
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            const role = filter.dataset.role;
            filterAgents(role);
        });
    });
}

function filterAgents(role) {
    const grid = document.getElementById('agentsGrid');
    if (!grid) return;
    
    const filtered = role === 'all' ? AGENTS : AGENTS.filter(a => a.role === role);
    
    grid.innerHTML = filtered.map(agent => `
        <div class="agent-card" data-agent-id="${agent.id}">
            <div class="agent-info">
                <div class="agent-name">${agent.name}</div>
                <span class="role-badge role-${agent.role}">${agent.roleName}</span>
                <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:5px;">${agent.origin}</div>
                <div style="font-size:0.7rem; margin-top:5px;"><i class="fas ${agent.icon}"></i> ${agent.playstyle}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.agent-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.agentId);
            showAbilities(id);
        });
    });
}

// ========== ТЕМА ==========
function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') document.body.classList.add('light');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light');
            localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
        });
    }
}

// ========== ЛОГО И КАБИНЕТ ==========
const cabinetBtn = document.getElementById('cabinetBtn');
if (cabinetBtn) {
    cabinetBtn.addEventListener('click', () => {
        window.location.href = 'cabinet.html';
    });
}

const logo = document.getElementById('logoHome');
if (logo) {
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// ========== СТРЕЛОЧКИ ==========
const scrollUp = document.getElementById('scrollUp');
const scrollDown = document.getElementById('scrollDown');
if (scrollUp) scrollUp.addEventListener('click', () => window.scrollBy({ top: -400, behavior: 'smooth' }));
if (scrollDown) scrollDown.addEventListener('click', () => window.scrollBy({ top: 400, behavior: 'smooth' }));

// ========== МОДАЛЬНЫЕ ОКНА ==========
const closeModal = document.querySelector('.close-modal');
if (closeModal) {
    closeModal.addEventListener('click', () => {
        document.getElementById('loreModal').style.display = 'none';
    });
}

window.onclick = (e) => {
    const modal = document.getElementById('loreModal');
    if (e.target === modal) modal.style.display = 'none';
    const mapModal = document.getElementById('mapOverviewModal');
    if (e.target === mapModal) mapModal.style.display = 'none';
};

// ========== ЗАПУСК ==========
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('mapsGrid')) renderMaps();
    if (document.getElementById('agentsGrid')) renderAgents();
    if (document.getElementById('modesContainer')) renderModes();
    if (document.getElementById('modesPreview')) renderModesPreview();
    if (document.getElementById('testsContainer')) renderTests();
    if (document.getElementById('sessionsList')) renderTrainingSessions();
    if (document.getElementById('requestsList')) loadTrainingRequests();
    if (document.querySelector('.filter')) setupFilters();
    initTheme();
});