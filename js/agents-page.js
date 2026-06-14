// Страница агентов - отображение всех агентов с фильтрацией

function renderAgents(role = 'all') {
    const grid = document.getElementById('agentsGrid');
    if (!grid) return;
    
    const filtered = role === 'all' ? AGENTS : AGENTS.filter(a => a.role === role);
    
    grid.innerHTML = filtered.map(agent => `
        <div class="agent-card" data-agent-id="${agent.id}">
            <div class="agent-info">
                <div class="agent-name">${agent.name}</div>
                <span class="role-badge role-${agent.role}">${agent.roleName}</span>
                <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:8px;">
                    <i class="fas fa-globe"></i> ${agent.origin}
                </div>
                <div style="font-size:0.7rem; margin-top:5px;">
                    <i class="fas ${agent.icon}"></i> ${agent.playstyle}
                </div>
                <div style="font-size:0.7rem; margin-top:5px;">
                    <i class="fas fa-star"></i> Сложность: ${agent.difficulty}
                </div>
            </div>
        </div>
    `).join('');
    
    // Добавляем обработчики кликов
    document.querySelectorAll('.agent-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.agentId);
            showAgentModal(id);
            
            // Сохраняем просмотр агента для статистики
            const currentUser = JSON.parse(localStorage.getItem('valorantUser'));
            if (currentUser && currentUser.loggedIn) {
                const viewed = JSON.parse(localStorage.getItem('viewedAgents_' + currentUser.id) || '[]');
                if (!viewed.includes(id)) {
                    viewed.push(id);
                    localStorage.setItem('viewedAgents_' + currentUser.id, JSON.stringify(viewed));
                }
            }
        });
    });
}

function showAgentModal(agentId) {
    const agent = getAgentById(agentId);
    if (!agent) return;
    
    const modal = document.getElementById('agentModal');
    const content = document.getElementById('agentModalContent');
    
    content.innerHTML = `
        <div class="agent-modal-detail">
            <div class="modal-agent-header">
                <div class="modal-agent-icon">
                    <i class="fas ${agent.icon}"></i>
                </div>
                <div>
                    <h2>${agent.name}</h2>
                    <span class="role-badge role-${agent.role}">${agent.roleName}</span>
                    <span class="difficulty-badge">Сложность: ${agent.difficulty}</span>
                </div>
            </div>
            
            <div class="modal-agent-info">
                <div class="info-row"><i class="fas fa-globe"></i> <strong>Происхождение:</strong> ${agent.originDetail || agent.origin}</div>
                <div class="info-row"><i class="fas fa-id-card"></i> <strong>Настоящее имя:</strong> ${agent.realName || 'Неизвестно'}</div>
                <div class="info-row"><i class="fas fa-calendar"></i> <strong>Возраст:</strong> ${agent.age || 'Неизвестно'}</div>
                <div class="info-row"><i class="fas fa-ruler"></i> <strong>Рост:</strong> ${agent.height || 'Неизвестно'}</div>
                <div class="info-row"><i class="fas fa-gamepad"></i> <strong>Стиль игры:</strong> ${agent.playstyle}</div>
            </div>
            
            <div class="modal-lore">
                <h3><i class="fas fa-book-open"></i> История агента</h3>
                <p>${agent.fullLore || agent.lore}</p>
            </div>
            
            <div class="modal-abilities">
                <h3><i class="fas fa-magic"></i> Способности</h3>
                <div class="abilities-detailed">
                    ${agent.abilities.map(ab => `
                        <div class="ability-detailed">
                            <div class="ability-detailed-icon"><i class="fas ${ab.icon}"></i></div>
                            <div class="ability-detailed-info">
                                <div class="ability-detailed-name">${ab.name}</div>
                                <div class="ability-detailed-desc">${ab.desc}</div>
                                <div class="ability-detailed-stats">
                                    <span class="stat-tag"><i class="fas fa-tag"></i> ${ab.type || 'Способность'}</span>
                                    ${ab.damage ? `<span class="stat-tag"><i class="fas fa-bolt"></i> Урон: ${ab.damage}</span>` : ''}
                                    ${ab.heal ? `<span class="stat-tag"><i class="fas fa-heart"></i> Лечение: ${ab.heal}</span>` : ''}
                                    ${ab.duration ? `<span class="stat-tag"><i class="fas fa-hourglass"></i> Длительность: ${ab.duration}</span>` : ''}
                                    ${ab.cooldown ? `<span class="stat-tag"><i class="fas fa-clock"></i> Перезарядка: ${ab.cooldown}</span>` : ''}
                                    ${ab.charges ? `<span class="stat-tag"><i class="fas fa-layer-group"></i> Зарядов: ${ab.charges}</span>` : ''}
                                    ${ab.cost ? `<span class="stat-tag"><i class="fas fa-star"></i> Стоимость: ${ab.cost}</span>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-tips">
                <h3><i class="fas fa-lightbulb"></i> Советы по игре</h3>
                <ul>
                    <li>Используйте ${agent.abilities[0]?.name || 'способности'} для контроля пространства</li>
                    <li>${agent.name} лучше всего раскрывается на ${agent.role === 'duelist' ? 'атаке' : agent.role === 'sentinel' ? 'защите' : 'обеих сторонах'}</li>
                    <li>Комбинируйте ульту с командой для максимального эффекта</li>
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Закрытие модального окна
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
}

function setupFilters() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            const role = filter.dataset.role;
            renderAgents(role);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderAgents('all');
    setupFilters();
});