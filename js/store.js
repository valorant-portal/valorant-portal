// Store - централизованное хранилище состояния
class AppStore {
    constructor() {
        this.state = {
            theme: localStorage.getItem('theme') || 'dark',
            viewedAgents: JSON.parse(localStorage.getItem('viewedAgents') || '[]'),
            favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
            userStats: {
                totalViews: parseInt(localStorage.getItem('totalViews') || '0'),
                achievements: JSON.parse(localStorage.getItem('achievements') || '[]')
            }
        };
        this.listeners = [];
        this.init();
    }

    init() {
        // Применяем тему при загрузке
        if (this.state.theme === 'light') {
            document.body.classList.add('light-theme');
        }
    }

    // Подписка на изменения
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    // Уведомление подписчиков
    notify() {
        this.listeners.forEach(listener => listener(this.state));
        this.persist();
    }

    // Сохранение в localStorage
    persist() {
        localStorage.setItem('theme', this.state.theme);
        localStorage.setItem('viewedAgents', JSON.stringify(this.state.viewedAgents));
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        localStorage.setItem('totalViews', this.state.userStats.totalViews);
        localStorage.setItem('achievements', JSON.stringify(this.state.userStats.achievements));
    }

    // Переключение темы
    toggleTheme() {
        this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
        if (this.state.theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
        this.notify();
        return this.state.theme;
    }

    // Добавить просмотр агента
    addAgentView(agentId) {
        if (!this.state.viewedAgents.includes(agentId)) {
            this.state.viewedAgents.push(agentId);
            this.state.userStats.totalViews++;
            
            // Проверка достижений
            this.checkAchievements();
        }
        this.notify();
    }

    // Добавить/удалить из избранного
    toggleFavorite(agentId) {
        const index = this.state.favorites.indexOf(agentId);
        if (index === -1) {
            this.state.favorites.push(agentId);
        } else {
            this.state.favorites.splice(index, 1);
        }
        this.notify();
    }

    isFavorite(agentId) {
        return this.state.favorites.includes(agentId);
    }

    // Проверка достижений
    checkAchievements() {
        const newAchievements = [];
        
        // Достижение: Просмотр 5 агентов
        if (this.state.viewedAgents.length >= 5 && !this.state.userStats.achievements.includes('novice')) {
            newAchievements.push('novice');
            this.showAchievementNotification('Новичок', 'Просмотрено 5 агентов!');
        }
        
        // Достижение: Просмотр всех агентов
        if (this.state.viewedAgents.length >= 12 && !this.state.userStats.achievements.includes('master')) {
            newAchievements.push('master');
            this.showAchievementNotification('Мастер', 'Просмотрены все агенты!');
        }
        
        // Достижение: 10 просмотров
        if (this.state.userStats.totalViews >= 10 && !this.state.userStats.achievements.includes('dedicated')) {
            newAchievements.push('dedicated');
            this.showAchievementNotification('Преданный', '10 просмотров агентов!');
        }
        
        this.state.userStats.achievements = [...this.state.userStats.achievements, ...newAchievements];
        this.notify();
    }

    // Уведомление о достижении
    showAchievementNotification(title, message) {
        const notification = document.createElement('div');
        notification.className = 'achievement-toast';
        notification.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }

    // Получить статистику
    getStats() {
        return {
            totalViews: this.state.userStats.totalViews,
            uniqueAgentsViewed: this.state.viewedAgents.length,
            favoritesCount: this.state.favorites.length,
            achievementsCount: this.state.userStats.achievements.length,
            achievements: this.state.userStats.achievements
        };
    }
}

// Создаём глобальный экземпляр
window.appStore = new AppStore();