// Страница тестов

let currentTest = null;
let currentAnswers = [];
let currentQuestionIndex = 0;

function renderTests() {
    const container = document.getElementById('testsContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="test-card" data-test="agents">
            <div class="test-icon"><i class="fas fa-user-ninja"></i></div>
            <h3>Тест: Агенты</h3>
            <p>Проверь знание всех агентов, их ролей и способностей</p>
            <div class="test-stats">10 вопросов</div>
            <button class="btn-primary start-test">Начать тест →</button>
        </div>
        <div class="test-card" data-test="maps">
            <div class="test-icon"><i class="fas fa-map"></i></div>
            <h3>Тест: Карты</h3>
            <p>Проверь знание карт, точек и стратегий</p>
            <div class="test-stats">10 вопросов</div>
            <button class="btn-primary start-test">Начать тест →</button>
        </div>
        <div class="test-card" data-test="abilities">
            <div class="test-icon"><i class="fas fa-magic"></i></div>
            <h3>Тест: Способности</h3>
            <p>Проверь знание всех способностей и их свойств</p>
            <div class="test-stats">10 вопросов</div>
            <button class="btn-primary start-test">Начать тест →</button>
        </div>
        <div class="test-card" data-test="lore">
            <div class="test-icon"><i class="fas fa-book"></i></div>
            <h3>Тест: Лор агентов</h3>
            <p>Проверь знание историй и происхождения агентов</p>
            <div class="test-stats">10 вопросов</div>
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

function startTest(testType) {
    const testNames = {
        agents: 'Тест: Агенты',
        maps: 'Тест: Карты',
        abilities: 'Тест: Способности',
        lore: 'Тест: Лор агентов'
    };
    
    currentTest = {
        type: testType,
        name: testNames[testType],
        questions: TEST_QUESTIONS[testType]
    };
    currentAnswers = new Array(currentTest.questions.length).fill(null);
    currentQuestionIndex = 0;
    
    showTestQuestion();
}

function showTestQuestion() {
    const modal = document.getElementById('testModal');
    const content = document.getElementById('testContent');
    const question = currentTest.questions[currentQuestionIndex];
    const selectedAnswer = currentAnswers[currentQuestionIndex];
    
    content.innerHTML = `
        <div class="test-question">
            <div class="test-progress">
                Вопрос ${currentQuestionIndex + 1} из ${currentTest.questions.length}
                <div class="progress-bar"><div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / currentTest.questions.length) * 100}%"></div></div>
            </div>
            <h3>${question.question}</h3>
            <div class="test-options">
                ${question.options.map((opt, idx) => `
                    <label class="test-option ${selectedAnswer === idx ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${idx}" ${selectedAnswer === idx ? 'checked' : ''}>
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
            <div class="test-nav">
                <button class="btn-outline" id="prevBtn" ${currentQuestionIndex === 0 ? 'disabled' : ''}>← Назад</button>
                <button class="btn-primary" id="nextBtn">${currentQuestionIndex === currentTest.questions.length - 1 ? 'Завершить' : 'Далее →'}</button>
            </div>
        </div>
    `;
    
    // Сохраняем ответ
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentAnswers[currentQuestionIndex] = parseInt(e.target.value);
        });
    });
    
    document.getElementById('prevBtn')?.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showTestQuestion();
        }
    });
    
    document.getElementById('nextBtn')?.addEventListener('click', () => {
        if (currentQuestionIndex === currentTest.questions.length - 1) {
            finishTest();
        } else {
            currentQuestionIndex++;
            showTestQuestion();
        }
    });
    
    modal.style.display = 'flex';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
}

function finishTest() {
    let correct = 0;
    currentTest.questions.forEach((q, idx) => {
        if (currentAnswers[idx] === q.correct) correct++;
    });
    
    const score = Math.round((correct / currentTest.questions.length) * 100);
    
    // Сохраняем результат
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
    
    document.getElementById('testModal').style.display = 'none';
    showResults(score, correct);
}

function showResults(score, correct) {
    const modal = document.getElementById('resultsModal');
    const content = document.getElementById('resultsContent');
    
    let grade = '';
    let gradeColor = '';
    if (score >= 90) { grade = 'Отлично! 🏆'; gradeColor = '#2ecc71'; }
    else if (score >= 70) { grade = 'Хорошо! 👍'; gradeColor = '#3498db'; }
    else if (score >= 50) { grade = 'Неплохо! 📚'; gradeColor = '#f1c40f'; }
    else { grade = 'Нужно подучить! 📖'; gradeColor = '#e74c3c'; }
    
    content.innerHTML = `
        <div class="test-results">
            <h2>${currentTest.name}</h2>
            <div class="score-circle" style="border-color: ${gradeColor}">
                <span class="score-number">${score}%</span>
            </div>
            <p class="grade" style="color: ${gradeColor}">${grade}</p>
            <p>Правильных ответов: ${correct} из ${currentTest.questions.length}</p>
            <button class="btn-primary" id="closeResultsBtn">Закрыть</button>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    
    document.getElementById('closeResultsBtn')?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTests();
});