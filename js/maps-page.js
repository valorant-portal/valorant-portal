// Страница карт - отображение всех карт с кнопкой просмотра карты сверху

function renderMaps() {
    const container = document.getElementById('mapsContainer');
    if (!container) return;
    
    container.innerHTML = MAPS.map(map => `
        <div class="map-card" data-map-name="${map.name}">
            <div class="map-info">
                <div class="agent-name">${map.name}</div>
                <div class="role-badge" style="background:var(--accent); color:white; margin:8px 0;">${map.mode}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary)">
                    <i class="fas fa-map-marker-alt"></i> ${map.location}
                </div>
                <div style="font-size:0.75rem; margin-top:8px;">${map.description}</div>
                <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="map-detail-btn" data-map="${map.name}">
                        <i class="fas fa-info-circle"></i> Подробнее
                    </button>
                    <button class="map-overview-btn" data-map="${map.name}">
                        <i class="fas fa-map"></i> Карта сверху
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Обработчики для кнопок
    document.querySelectorAll('.map-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mapName = btn.dataset.map;
            showMapDetail(mapName);
        });
    });
    
    document.querySelectorAll('.map-overview-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mapName = btn.dataset.map;
            showMapOverview(mapName);
        });
    });
}

function showMapDetail(mapName) {
    const map = MAPS.find(m => m.name === mapName);
    if (!map) return;
    
    const modal = document.getElementById('mapOverviewModal');
    const content = document.getElementById('mapOverviewContent');
    
    content.innerHTML = `
        <div class="map-detail-modal">
            <h2>🗺️ ${map.name}</h2>
            <div class="map-detail-grid">
                <div class="map-detail-section">
                    <h3><i class="fas fa-info-circle"></i> Общая информация</h3>
                    <p><strong>Режим:</strong> ${map.mode}</p>
                    <p><strong>Локация:</strong> ${map.location}</p>
                    <p><strong>Год выхода:</strong> ${map.year || '2020'}</p>
                    <p><strong>Описание:</strong> ${map.description}</p>
                </div>
                <div class="map-detail-section">
                    <h3><i class="fas fa-bullhorn"></i> Ключевые позиции</h3>
                    <div class="positions-list">
                        ${map.positions.map(pos => `<span class="position-tag">${pos}</span>`).join('')}
                    </div>
                </div>
                <div class="map-detail-section">
                    <h3><i class="fas fa-radio"></i> Каллы (Callouts)</h3>
                    <div class="positions-list">
                        ${map.callouts.map(callout => `<span class="callout-tag">${callout}</span>`).join('')}
                    </div>
                </div>
                <div class="map-detail-section">
                    <h3><i class="fas fa-lightbulb"></i> Тактика</h3>
                    <p>${map.tactics}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
}

function showMapOverview(mapName) {
    const map = MAPS.find(m => m.name === mapName);
    if (!map) return;
    
    const modal = document.getElementById('mapOverviewModal');
    const content = document.getElementById('mapOverviewContent');
    
    // Создаём схематичное изображение карты сверху с позициями
    content.innerHTML = `
        <div class="map-overview-modal">
            <h2>🗺️ ${map.name} — Карта сверху</h2>
            <div class="map-schematic">
                <div class="schematic-title">
                    <p><i class="fas fa-arrows-alt"></i> Вид сверху со всеми ключевыми позициями</p>
                </div>
                <div class="schematic-visual">
                    <svg viewBox="0 0 800 500" class="map-svg">
                        ${generateMapSchematic(map.name)}
                    </svg>
                </div>
                <div class="schematic-legend">
                    <h3><i class="fas fa-map-pin"></i> Легенда позиций</h3>
                    <div class="legend-list">
                        ${map.positions.map((pos, idx) => `
                            <div class="legend-item">
                                <span class="legend-dot" style="background: ${getPositionColor(idx)}"></span>
                                <span>${pos}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="schematic-note">
                    <p><i class="fas fa-info-circle"></i> Нажмите на позицию на карте, чтобы узнать о ней подробнее</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
}

function generateMapSchematic(mapName) {
    // Генерируем SVG схему карты в зависимости от названия
    const schematics = {
        'Ascent': `<rect x="200" y="150" width="400" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                    <text x="400" y="260" text-anchor="middle" fill="white" font-size="14">A SITE</text>
                    <text x="150" y="250" text-anchor="middle" fill="#ff4655" font-size="12">A Main</text>
                    <text x="650" y="250" text-anchor="middle" fill="#ff4655" font-size="12">B Main</text>
                    <text x="400" y="120" text-anchor="middle" fill="#ff4655" font-size="12">Mid Market</text>
                    <line x1="400" y1="150" x2="400" y2="120" stroke="#ff4655" stroke-width="1" stroke-dasharray="4"/>
                    <rect x="100" y="200" width="80" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                    <rect x="620" y="200" width="80" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                    <rect x="350" y="280" width="100" height="60" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>`,
        'Bind': `<rect x="250" y="150" width="300" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                 <text x="400" y="260" text-anchor="middle" fill="white" font-size="14">СЕРЕДИНА ОТСУТСТВУЕТ</text>
                 <rect x="100" y="180" width="100" height="140" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                 <rect x="600" y="180" width="100" height="140" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                 <text x="150" y="170" text-anchor="middle" fill="#ff4655" font-size="11">A Site</text>
                 <text x="650" y="170" text-anchor="middle" fill="#ff4655" font-size="11">B Site</text>
                 <text x="150" y="340" text-anchor="middle" fill="white" font-size="10">Телепорт A→B</text>
                 <text x="650" y="340" text-anchor="middle" fill="white" font-size="10">Телепорт B→A</text>`,
        'Haven': `<rect x="150" y="150" width="500" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                  <rect x="80" y="200" width="80" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                  <rect x="360" y="200" width="80" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                  <rect x="640" y="200" width="80" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                  <text x="120" y="190" text-anchor="middle" fill="#ff4655" font-size="11">A Site</text>
                  <text x="400" y="190" text-anchor="middle" fill="#ff4655" font-size="11">B Site</text>
                  <text x="680" y="190" text-anchor="middle" fill="#ff4655" font-size="11">C Site</text>`,
        'Split': `<rect x="200" y="150" width="400" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                  <rect x="250" y="100" width="50" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                  <rect x="500" y="100" width="50" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                  <text x="275" y="95" text-anchor="middle" fill="#ff4655" font-size="10">A Ramp</text>
                  <text x="525" y="95" text-anchor="middle" fill="#ff4655" font-size="10">B Garage</text>
                  <text x="400" y="380" text-anchor="middle" fill="#ff4655" font-size="12">Mid (Ropes)</text>`,
        'Icebox': `<rect x="150" y="150" width="500" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                   <rect x="100" y="200" width="100" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                   <rect x="600" y="200" width="100" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                   <text x="150" y="190" text-anchor="middle" fill="#ff4655" font-size="11">A Site</text>
                   <text x="650" y="190" text-anchor="middle" fill="#ff4655" font-size="11">B Site</text>
                   <text x="400" y="320" text-anchor="middle" fill="#ff4655" font-size="11">Mid Boiler</text>`,
        'Breeze': `<rect x="100" y="150" width="600" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                   <rect x="50" y="200" width="120" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                   <rect x="630" y="200" width="120" height="100" fill="#1a2a35" stroke="#ff4655" stroke-width="1" rx="5"/>
                   <text x="110" y="190" text-anchor="middle" fill="#ff4655" font-size="11">A Site</text>
                   <text x="690" y="190" text-anchor="middle" fill="#ff4655" font-size="11">B Site</text>
                   <text x="400" y="310" text-anchor="middle" fill="#ff4655" font-size="11">Mid Doors</text>`
    };
    
    return schematics[mapName] || `<rect x="200" y="150" width="400" height="200" fill="#2a3a45" stroke="#ff4655" stroke-width="2" rx="10"/>
                                    <text x="400" y="260" text-anchor="middle" fill="white" font-size="16">Карта ${mapName}</text>
                                    <text x="400" y="300" text-anchor="middle" fill="#ff4655" font-size="12">Вид сверху</text>`;
}

function getPositionColor(index) {
    const colors = ['#ff4655', '#2ecc71', '#3498db', '#f1c40f', '#e74c3c', '#9b59b6', '#1abc9c', '#e67e22'];
    return colors[index % colors.length];
}

document.addEventListener('DOMContentLoaded', () => {
    renderMaps();
});