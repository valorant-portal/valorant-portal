// Полная база данных агентов Valorant
const AGENTS_DB = [
    {
        id: 1,
        name: "Jett",
        fullName: "Jett",
        role: "duelist",
        roleName: "Дуэлянт",
        description: "Представительница Южной Кореи, чья подвижность делает её королевой эйр-дрибблинга. Может уклоняться от пуль и атаковать с воздуха.",
        abilities: {
            Q: { name: "Updraft", desc: "Подбрасывает Jett в воздух", key: "Q", cooldown: "2 заряда" },
            E: { name: "Tailwind", desc: "Мгновенный рывок в направлении движения", key: "E", cooldown: "12с" },
            C: { name: "Cloudburst", desc: "Дымовая завеса, которая искривляет траекторию при прицеливании", key: "C", cooldown: "2 заряда" },
            X: { name: "Blade Storm", desc: "Метательные ножи (5 шт). При убийстве ножи восстанавливаются", key: "X", cost: "7 очков" }
        },
        tips: ["Используй Updraft для неожиданных углов", "Tailwind помогает уйти из-под ульты"],
        img: "jett",
        icon: "🗡️",
        difficulty: "Средний"
    },
    {
        id: 2,
        name: "Phoenix",
        fullName: "Phoenix",
        role: "duelist",
        roleName: "Дуэлянт",
        description: "Британский дуэлянт с огненными способностями. Может лечиться в своём огне и возрождаться.",
        abilities: {
            Q: { name: "Curveball", desc: "Изогнутая вспышка, ослепляющая врагов", key: "Q", cooldown: "1 заряд" },
            E: { name: "Blaze", desc: "Стена огня, которая лечит Phoenix и наносит урон врагам", key: "E", cooldown: "2 заряда" },
            C: { name: "Hot Hands", desc: "Зажигательная граната, создающая зону огня", key: "C", cooldown: "1 заряд" },
            X: { name: "Run it Back", desc: "Отмечает точку возрождения. При смерти во время ульты воскресает", key: "X", cost: "6 очков" }
        },
        tips: ["Используй Blaze для создания безопасного пространства", "Ульту лучше активировать перед входом на сайт"],
        img: "phoenix",
        icon: "🔥",
        difficulty: "Низкий"
    },
    {
        id: 3,
        name: "Sova",
        fullName: "Sova",
        role: "initiator",
        roleName: "Инициатор",
        description: "Русский охотник с луком. Мастер разведки и поиска врагов сквозь стены.",
        abilities: {
            Q: { name: "Shock Bolt", desc: "Ударная стрела, наносящая урон (до 75)", key: "Q", cooldown: "2 заряда" },
            E: { name: "Recon Bolt", desc: "Разведывающая стрела, отмечающая врагов в радиусе", key: "E", cooldown: "1 заряд" },
            C: { name: "Owl Drone", desc: "Управляемый дрон для разведки", key: "C", cooldown: "1 заряд" },
            X: { name: "Hunter's Fury", desc: "Три энергетических луча сквозь стены", key: "X", cost: "8 очков" }
        },
        tips: ["Изучи рикошеты Shock Bolt для урона из укрытий", "Recon Bolt можно стрелять в разные стены для неожиданного скана"],
        img: "sova",
        icon: "🦉",
        difficulty: "Высокий"
    },
    {
        id: 4,
        name: "Killjoy",
        fullName: "Killjoy",
        role: "sentinel",
        roleName: "Страж",
        description: "Немецкий гений технического прогресса. Контролирует зоны с помощью турелей и роботов.",
        abilities: {
            Q: { name: "Alarmbot", desc: "Робот-тревога, замедляющий врага при обнаружении", key: "Q", cooldown: "2 заряда" },
            E: { name: "Turret", desc: "Автоматическая турель", key: "E", cooldown: "20с после уничтожения" },
            C: { name: "Nanoswarm", desc: "Гранатомёт с нано-роями", key: "C", cooldown: "2 заряда" },
            X: { name: "Lockdown", desc: "Огромная зона задержания врагов", key: "X", cost: "8 очков" }
        },
        tips: ["Турель хороша для защиты спайка", "Nanoswarm активируется через 0.5с после установки"],
        img: "killjoy",
        icon: "🔧",
        difficulty: "Средний"
    },
    {
        id: 5,
        name: "Brimstone",
        fullName: "Brimstone",
        role: "controller",
        roleName: "Контроллер",
        description: "Американский ветеран. Использует орбитальную поддержку и дымы.",
        abilities: {
            Q: { name: "Incendiary", desc: "Зажигательная граната", key: "Q", cooldown: "1 заряд" },
            E: { name: "Sky Smoke", desc: "Дымовая завеса с карты", key: "E", cooldown: "3 заряда" },
            C: { name: "Stim Beacon", desc: "Повышает скорость стрельбы союзников", key: "C", cooldown: "1 заряд" },
            X: { name: "Orbital Strike", desc: "Орбитальный лазер", key: "X", cost: "7 очков" }
        },
        tips: ["Дымы Brimstone идеальны для закладки", "Stim Beacon используй перед заходом"],
        img: "brimstone",
        icon: "💨",
        difficulty: "Низкий"
    },
    {
        id: 6,
        name: "Omen",
        fullName: "Omen",
        role: "controller",
        roleName: "Контроллер",
        description: "Теневой контроллер. Может телепортироваться и ослеплять врагов.",
        abilities: {
            Q: { name: "Paranoia", desc: "Ослепление по прямой линии", key: "Q", cooldown: "1 заряд" },
            E: { name: "Dark Cover", desc: "Дым с дальним размещением", key: "E", cooldown: "2 заряда" },
            C: { name: "Shrouded Step", desc: "Короткая телепортация", key: "C", cooldown: "30с" },
            X: { name: "From the Shadows", desc: "Телепортация в любую точку карты", key: "X", cost: "7 очков" }
        },
        tips: ["Paranoia проходит сквозь стены", "Шум телепортации слышен врагам"],
        img: "omen",
        icon: "🌑",
        difficulty: "Высокий"
    },
    {
        id: 7,
        name: "Sage",
        fullName: "Sage",
        role: "sentinel",
        roleName: "Страж",
        description: "Китайский целитель. Может лечить, воскрешать и создавать барьеры.",
        abilities: {
            Q: { name: "Barrier Orb", desc: "Стена из льда", key: "Q", cooldown: "40с" },
            E: { name: "Slow Orb", desc: "Замедляющая зона", key: "E", cooldown: "2 заряда" },
            C: { name: "Healing Orb", desc: "Лечение союзника", key: "C", cooldown: "45с" },
            X: { name: "Resurrection", desc: "Воскрешение союзника", key: "X", cost: "8 очков" }
        },
        tips: ["Не лечи себя, если есть раненый союзник", "Wall может заблокировать проход"],
        img: "sage",
        icon: "❄️",
        difficulty: "Низкий"
    },
    {
        id: 8,
        name: "Reyna",
        fullName: "Reyna",
        role: "duelist",
        roleName: "Дуэлянт",
        description: "Мексиканский дуэлянт. Убийства дают ей способность лечиться или становиться невидимой.",
        abilities: {
            Q: { name: "Devour", desc: "Поглощение души убитого, лечение", key: "Q", cooldown: "3с" },
            E: { name: "Dismiss", desc: "Становление нематериальной", key: "E", cooldown: "3с" },
            C: { name: "Leech", desc: "Вампиризм от урона", key: "C", cooldown: "1 заряд" },
            X: { name: "Empress", desc: "Режим усиления, скорострельность + урон", key: "X", cost: "6 очков" }
        },
        tips: ["Активируй Empress до мультикилла", "Dismiss помогает уйти с линии огня"],
        img: "reyna",
        icon: "👁️",
        difficulty: "Средний"
    },
    {
        id: 9,
        name: "Cypher",
        fullName: "Cypher",
        role: "sentinel",
        roleName: "Страж",
        description: "Марокканский информационный брокер. Собирает разведданные.",
        abilities: {
            Q: { name: "Trapwire", desc: "Растяжка, оглушающая врага", key: "Q", cooldown: "2 заряда" },
            E: { name: "Cyber Cage", desc: "Дым, который можно активировать", key: "E", cooldown: "2 заряда" },
            C: { name: "Spycam", desc: "Скрытая камера", key: "C", cooldown: "1 заряд" },
            X: { name: "Neural Theft", desc: "Снятие информации с трупа", key: "X", cost: "6 очков" }
        },
        tips: ["Растяжки ставь на узких проходах", "Spycam можно кидать высоко"],
        img: "cypher",
        icon: "🕸️",
        difficulty: "Высокий"
    },
    {
        id: 10,
        name: "Breach",
        fullName: "Breach",
        role: "initiator",
        roleName: "Инициатор",
        description: "Шведский инициатор с зонтичными способностями сквозь стены.",
        abilities: {
            Q: { name: "After-shock", desc: "Удар сквозь стену", key: "Q", cooldown: "1 заряд" },
            E: { name: "Flashpoint", desc: "Вспышка сквозь стену", key: "E", cooldown: "2 заряда" },
            C: { name: "Fault Line", desc: "Землетрясение, оглушающее врагов", key: "C", cooldown: "1 заряд" },
            X: { name: "Rolling Thunder", desc: "Конусное оглушение", key: "X", cost: "7 очков" }
        },
        tips: ["Все способности проходят сквозь стены", "Сочетай Fault Line + Flashpoint"],
        img: "breach",
        icon: "💥",
        difficulty: "Средний"
    },
    {
        id: 11,
        name: "Viper",
        fullName: "Viper",
        role: "controller",
        roleName: "Контроллер",
        description: "Американский химический контроллер с отравляющим газом.",
        abilities: {
            Q: { name: "Poison Cloud", desc: "Отравляющее облако", key: "Q", cooldown: "топливо" },
            E: { name: "Toxic Screen", desc: "Стена яда", key: "E", cooldown: "топливо" },
            C: { name: "Snake Bite", desc: "Ядовитая лужа", key: "C", cooldown: "2 заряда" },
            X: { name: "Viper's Pit", desc: "Купол яда", key: "X", cost: "7 очков" }
        },
        tips: ["Ульту лучше ставить на спайке", "Следи за топливом"],
        img: "viper",
        icon: "🐍",
        difficulty: "Высокий"
    },
    {
        id: 12,
        name: "KAY/O",
        fullName: "KAY/O",
        role: "initiator",
        roleName: "Инициатор",
        description: "Робот-инициатор, подавляющий способности врагов.",
        abilities: {
            Q: { name: "FRAG/ment", desc: "Осколочная граната", key: "Q", cooldown: "1 заряд" },
            E: { name: "FLASH/drive", desc: "Вспышка", key: "E", cooldown: "2 заряда" },
            C: { name: "ZERO/point", desc: "Подавление способностей", key: "C", cooldown: "1 заряд" },
            X: { name: "NULL/cmd", desc: "Тотальное подавление врагов в радиусе", key: "X", cost: "7 очков" }
        },
        tips: ["Подавление отключает ульты", "При смерти может воскреснуть"],
        img: "kayo",
        icon: "🤖",
        difficulty: "Средний"
    }
];

// Функции для работы с данными
function getAgentsByRole(role) {
    if (role === 'all') return AGENTS_DB;
    return AGENTS_DB.filter(agent => agent.role === role);
}

function searchAgents(query) {
    const lowerQuery = query.toLowerCase();
    return AGENTS_DB.filter(agent => 
        agent.name.toLowerCase().includes(lowerQuery) ||
        agent.roleName.toLowerCase().includes(lowerQuery) ||
        Object.values(agent.abilities).some(ab => ab.name.toLowerCase().includes(lowerQuery))
    );
}

function getAgentById(id) {
    return AGENTS_DB.find(agent => agent.id === id);
}

// Сохраняем в глобальный объект
window.AGENTS_DB = AGENTS_DB;
window.getAgentsByRole = getAgentsByRole;
window.searchAgents = searchAgents;
window.getAgentById = getAgentById;