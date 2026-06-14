// Страница режимов игры

function renderModes() {
    const container = document.getElementById('modesGrid');
    if (!container) return;
    
    container.innerHTML = GAME_MODES.map(mode => `
        <div class="mode-card">
            <div class="mode-icon"><i class="fas ${mode.icon}"></i></div>
            <div class="mode-info">
                <h3>${mode.name}</h3>
                <p class="mode-desc">${mode.description}</p>
                <div class="mode-stats">
                    <span class="mode-stat"><i class="fas fa-clock"></i> ${mode.time}</span>
                    <span class="mode-stat"><i class="fas fa-users"></i> ${mode.players}</span>
                </div>
                <div class="mode-details">
                    <p><i class="fas fa-info-circle"></i> ${mode.details}</p>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderModes();
});