const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const resetButton = document.getElementById('reset-btn');
const resultContainer = document.getElementById('result');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

function loadQuiz() {
    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', () => {
    const score = calculateScore();
    resultContainer.textContent = `You scored ${score} out of ${quizQuestions.length}`;
});

resetButton.addEventListener('click', () => {
    // Clear all selected answers
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
    resultContainer.textContent = ''; // Clear the result display
});
// Load the quiz when the page loads
loadQuiz();

