// ДАННЫЕ АГЕНТОВ (БЕЗ ИКОНОК)
const agentsData = [
    { id: 1, name: "Jett", role: "duelist", roleName: "Дуэлянт", abilities: "Updraft, Tailwind, Cloudburst, Blade Storm" },
    { id: 2, name: "Phoenix", role: "duelist", roleName: "Дуэлянт", abilities: "Blaze, Curveball, Hot Hands, Run it Back" },
    { id: 3, name: "Sova", role: "initiator", roleName: "Инициатор", abilities: "Shock Bolt, Recon Bolt, Owl Drone, Hunter's Fury" },
    { id: 4, name: "Killjoy", role: "sentinel", roleName: "Страж", abilities: "Nanoswarm, Alarmbot, Turret, Lockdown" },
    { id: 5, name: "Brimstone", role: "controller", roleName: "Контроллер", abilities: "Incendiary, Sky Smoke, Stim Beacon, Orbital Strike" },
    { id: 6, name: "Omen", role: "controller", roleName: "Контроллер", abilities: "Paranoia, Dark Cover, Shrouded Step, From the Shadows" },
    { id: 7, name: "Sage", role: "sentinel", roleName: "Страж", abilities: "Barrier Orb, Slow Orb, Healing Orb, Resurrection" },
    { id: 8, name: "Reyna", role: "duelist", roleName: "Дуэлянт", abilities: "Devour, Dismiss, Leech, Empress" },
    { id: 9, name: "Cypher", role: "sentinel", roleName: "Страж", abilities: "Trapwire, Cyber Cage, Spycam, Neural Theft" },
    { id: 10, name: "Breach", role: "initiator", roleName: "Инициатор", abilities: "After-shock, Flashpoint, Fault Line, Rolling Thunder" },
    { id: 11, name: "Viper", role: "controller", roleName: "Контроллер", abilities: "Poison Cloud, Toxic Screen, Snake Bite, Viper's Pit" },
    { id: 12, name: "KAY/O", role: "initiator", roleName: "Инициатор", abilities: "FRAG/ment, FLASH/drive, ZERO/point, NULL/cmd" }
];

// ДАННЫЕ КАРТ
const mapsData = [
    { name: "Ascent", desc: "Итальянская карта с открытой средней линией.", tips: "Контролируйте Mid Market — это ключ к победе!", positions: "A Main, Mid Market, B Site" },
    { name: "Bind", desc: "Карта без середины, с двумя телепортами.", tips: "Используйте телепорты для быстрых ротаций!", positions: "A Site, B Site, U-Hall" },
    { name: "Haven", desc: "Три точки закладки спайка (A, B, C).", tips: "Быстрые ротации между точками — ключ к победе!", positions: "A Long, B Site, C Long" },
    { name: "Split", desc: "Вертикальная карта с канатными дорогами.", tips: "Контролируйте высоту — используйте верёвки!", positions: "A Ramp, Mid, B Garage" },
    { name: "Icebox", desc: "Заводская карта с контейнерами.", tips: "Используйте контейнеры как укрытия!", positions: "A Site, B Site, Mid" }
];

// Функция для имени файла (KAY/O → kayo)
function getAgentImageName(name) {
    if (name === "KAY/O") return "kayo";
    return name.toLowerCase();
}

// ОТОБРАЖЕНИЕ АГЕНТОВ (БЕЗ ИКОНОК, С КАРТИНКАМИ)
function displayAgents(role = "all") {
    const grid = document.getElementById("agentsGrid");
    if (!grid) return;
    
    const filtered = role === "all" ? agentsData : agentsData.filter(a => a.role === role);
    
    grid.innerHTML = filtered.map(agent => {
        const imgName = getAgentImageName(agent.name);
        return `
            <div class="agent-card">
                <img src="images/agents/${imgName}.jpeg" 
                     alt="${agent.name}"
                     style="width: 100%; height: 180px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;"
                     onerror="this.onerror=null; this.src='images/agents/${imgName}.jpg'">
                <div class="agent-name">${agent.name}</div>
                <span class="agent-role ${agent.role}">${agent.roleName}</span>
                <p style="margin-top: 0.8rem; font-size: 0.85rem; color: #aaa;">${agent.abilities}</p>
            </div>
        `;
    }).join("");
}

// ОТОБРАЖЕНИЕ КАРТ (С КАРТИНКАМИ .jpeg)
function displayMaps() {
    const container = document.getElementById("mapsContainer");
    if (!container) return;
    
    container.innerHTML = mapsData.map(map => {
        const mapName = map.name.toLowerCase();
        return `
            <div class="map-card">
                <img src="images/maps/${mapName}.jpeg" 
                     alt="${map.name}"
                     style="width: 100%; border-radius: 10px; margin-bottom: 1rem;"
                     onerror="this.src='https://placehold.co/800x400/1a1a2a/ff4655?text=${map.name}'">
                <h2>🗺️ ${map.name}</h2>
                <p>${map.desc}</p>
                <p style="margin-top: 0.5rem;"><strong>📍 Ключевые позиции:</strong> ${map.positions}</p>
                <p style="color: #ff4655; margin-top: 0.5rem;">💡 Совет: ${map.tips}</p>
            </div>
        `;
    }).join("");
}

// ОТОБРАЖЕНИЕ СПОСОБНОСТЕЙ (БЕЗ ИКОНОК)
function displayAbilities() {
    const container = document.getElementById("abilitiesContainer");
    if (!container) return;
    
    container.innerHTML = agentsData.map(agent => `
        <div class="ability-category">
            <h2>${agent.name} <span style="font-size: 0.8rem; background: #ff4655; padding: 0.2rem 0.8rem; border-radius: 20px; margin-left: 0.5rem;">${agent.roleName}</span></h2>
            <p><strong>⚡ Способности:</strong> ${agent.abilities}</p>
            <p style="color: #aaa; font-size: 0.85rem; margin-top: 0.5rem;">➡️ Q / E / C — базовые умения | X — ультимативная способность</p>
        </div>
    `).join("");
}

// ФИЛЬТРАЦИЯ АГЕНТОВ
function setupFilters() {
    const filters = document.querySelectorAll(".filter");
    if (!filters.length) return;
    
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const role = btn.dataset.role;
            displayAgents(role);
        });
    });
}

// ЗАПУСК ВСЕГО
document.addEventListener("DOMContentLoaded", () => {
    displayAgents("all");
    displayMaps();
    displayAbilities();
    setupFilters();
});