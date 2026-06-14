// GSAP анимации для премиум-эффектов
gsap.registerPlugin(ScrollTrigger);

// Анимация загрузки
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => loader.style.display = 'none'
        });
    }
    
    // Анимация появления элементов
    gsap.from('.hero-content-3d', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Анимация feature-карточек при скролле
    gsap.from('.feature-3d', {
        scrollTrigger: {
            trigger: '.features-premium',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1)'
    });
});

// Кастомный курсор
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        gsap.to(follower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    // Ховер эффект на ссылках
    const links = document.querySelectorAll('a, button, .agent-card, .map-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            follower.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            follower.classList.remove('cursor-hover');
        });
    });
}

// Параллакс эффект
function initParallax() {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const hero = document.querySelector('.hero-content-3d');
        if (hero) {
            hero.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
    });
}

// Анимация текста с градиентом
function initGradientText() {
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
        text.style.background = 'linear-gradient(135deg, #ff4655, #ff8c42)';
        text.style.webkitBackgroundClip = 'text';
        text.style.backgroundClip = 'text';
        text.style.webkitTextFillColor = 'transparent';
    });
}

// Glitch эффект для заголовка
function initGlitchEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    setInterval(() => {
        heroTitle.style.transform = `skew(${Math.random() * 2 - 1}deg)`;
        setTimeout(() => {
            heroTitle.style.transform = 'skew(0deg)';
        }, 50);
    }, 3000);
}

// Инициализация Vanilla Tilt для 3D карточек
function initTilt() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
            scale: 1.02
        });
    }
}

// Анимация при скролле для всех элементов
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.agent-card, .map-card, .ability-category');
    
    revealElements.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.05
        });
    });
}

// Запуск всех анимаций
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initParallax();
    initGradientText();
    initGlitchEffect();
    initTilt();
    initScrollReveal();
});