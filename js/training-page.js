// Страница тренировок - запись на тренировки

function renderTrainingSessions() {
    const container = document.getElementById('sessionsList');
    if (!container) return;
    
    container.innerHTML = TRAINING_SESSIONS.map(session => `
        <div class="session-card" data-id="${session.id}">
            <div class="session-header">
                <h4>${session.name}</h4>
                <span class="session-level level-${session.level.toLowerCase()}">${session.level}</span>
            </div>
            <div class="session-info">
                <p><i class="fas fa-chalkboard-user"></i> Тренер: ${session.coach}</p>
                <p><i class="fas fa-calendar"></i> ${session.date} в ${session.time}</p>
                <p><i class="fas fa-users"></i> Свободно мест: ${session.slots}</p>
                <p class="session-desc">${session.description}</p>
            </div>
        </div>
    `).join('');
    
    // Заполняем select
    const select = document.getElementById('trainingSelect');
    if (select) {
        select.innerHTML = '<option value="">-- Выберите тренировку --</option>' +
            TRAINING_SESSIONS.map(session => 
                `<option value="${session.id}">${session.name} — ${session.date} ${session.time}</option>`
            ).join('');
    }
}

function loadMyRequests() {
    const currentUser = JSON.parse(localStorage.getItem('valorantUser'));
    if (!currentUser || !currentUser.loggedIn) {
        document.getElementById('requestsList').innerHTML = '<p>Войдите в аккаунт, чтобы видеть свои заявки</p>';
        return;
    }
    
    const requests = JSON.parse(localStorage.getItem('trainingRequests_' + currentUser.id) || '[]');
    const container = document.getElementById('requestsList');
    
    if (requests.length === 0) {
        container.innerHTML = '<p>У вас пока нет активных заявок</p>';
        return;
    }
    
    container.innerHTML = requests.map(req => `
        <div class="request-item">
            <div class="request-info">
                <strong>${req.trainingName}</strong>
                <span class="request-status status-${req.status}">${req.status === 'pending' ? '⏳ На рассмотрении' : '✅ Подтверждена'}</span>
            </div>
            <div class="request-details">
                <p><i class="fas fa-user"></i> Ник: ${req.playerName}</p>
                <p><i class="fas fa-trophy"></i> Ранг: ${req.playerRank}</p>
                <p><i class="fas fa-calendar"></i> Дата подачи: ${new Date(req.date).toLocaleDateString()}</p>
            </div>
        </div>
    `).join('');
}

document.getElementById('trainingForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const playerName = document.getElementById('playerName').value.trim();
    const playerEmail = document.getElementById('playerEmail').value.trim();
    const trainingId = document.getElementById('trainingSelect').value;
    const playerRank = document.getElementById('playerRank').value;
    const playerComment = document.getElementById('playerComment').value;
    
    if (!playerName || !playerEmail || !trainingId) {
        showFormMessage('Заполните все обязательные поля!', 'error');
        return;
    }
    
    if (!playerEmail.includes('@') || !playerEmail.includes('.')) {
        showFormMessage('Введите корректный email!', 'error');
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('valorantUser'));
    if (!currentUser || !currentUser.loggedIn) {
        showFormMessage('Войдите в аккаунт, чтобы записаться на тренировку!', 'error');
        return;
    }
    
    const training = TRAINING_SESSIONS.find(t => t.id == trainingId);
    if (!training) {
        showFormMessage('Выберите тренировку!', 'error');
        return;
    }
    
    // Сохраняем заявку
    const requests = JSON.parse(localStorage.getItem('trainingRequests_' + currentUser.id) || '[]');
    const newRequest = {
        id: Date.now(),
        trainingId: training.id,
        trainingName: training.name,
        playerName: playerName,
        playerEmail: playerEmail,
        playerRank: playerRank,
        playerComment: playerComment,
        status: 'pending',
        date: new Date().toISOString()
    };
    requests.push(newRequest);
    localStorage.setItem('trainingRequests_' + currentUser.id, JSON.stringify(requests));
    
    showFormMessage('✅ Заявка успешно отправлена! Ожидайте подтверждения.', 'success');
    document.getElementById('trainingForm').reset();
    loadMyRequests();
});

function showFormMessage(message, type) {
    const msgDiv = document.getElementById('formMessage');
    msgDiv.textContent = message;
    msgDiv.className = `form-message ${type}`;
    setTimeout(() => {
        msgDiv.textContent = '';
        msgDiv.className = 'form-message';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderTrainingSessions();
    loadMyRequests();
});