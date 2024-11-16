const questions = [
    {
        question: 'А когда с человеком может произойти дрожемент?',
        answers: [
            { text: 'Когда он влюбляется', correct: false },
            { text: 'Когда он идет шопиться', correct: false },
            { text: 'Когда он слышит смешную шутку', correct: false },
            { text: 'Когда он боится, пугается', correct: true, explanation: 'Лексема «дрожемент» имплицирует состояние крайнего напряжения и страха.' }
        ]
    },
    {
        question: 'Говорят, Антон заовнил всех. Это еще как понимать?',
        answers: [
            { text: 'Как так, заовнил? Ну и хамло.', correct: false },
            { text: 'Антон очень надоедливый и въедливый человек, всех задолбал', correct: false },
            { text: 'Молодец, Антон, всех победил!', correct: true, explanation: 'Термин «заовнить» происходит от английского own и переводится как «победить», «завладеть».' },
            { text: 'Нет ничего плохого в том, что Антон тщательно выбирает себе друзей', correct: false }
        ]
    },
    {
        question: 'А фразу «заскамить мамонта» как понимать?',
        answers: [
            { text: 'Разозлить кого-то из родителей', correct: false },
            { text: 'Увлекаться археологией', correct: false },
            { text: 'Развести недотепу на деньги', correct: true, explanation: 'Заскамить мамонта — значит обмануть или развести на деньги.' },
            { text: 'Оскорбить пожилого человека', correct: false }
        ]
    },
    {
        question: 'Кто такие бефефе?',
        answers: [
            { text: 'Вши?', correct: false },
            { text: 'Милые котики, такие милые, что бефефе', correct: false },
            { text: 'Лучшие друзья', correct: true, explanation: 'Бефефе — это лучшие друзья, аббревиатура от best friends forever.' },
            { text: 'Люди, которые не держат слово', correct: false }
        ]
    }
];

let currentQuestionIndex = 0; // текущий индекс вопроса
let score = 0; // счетчик правильных ответов

const startButton = document.getElementById('start-quiz'); // Кнопка "Начать викторину"
const nextQuestionButton = document.getElementById('next-question'); // Кнопка "Вопрос"
const questionsContainer = document.getElementById('questions-container'); // Контейнер с вопросами и ответами
const questionList = document.getElementById('questions'); // Контейнер для вопросов
const answerRow = document.getElementById('answer-row'); // Варианты ответов
const resultMessage = document.getElementById('result-message'); // Сообщение с результатом

startButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', showQuestion);

// Перемешивание вопросов и запуск викторины
function startQuiz() {
    document.getElementById('welcome-screen').classList.add('hidden');
    questionsContainer.classList.remove('hidden');
    shuffle(questions);  // Перемешиваем вопросы
    showQuestion();
}

// Отображение теущего вопроса
function showQuestion() {
    nextQuestionButton.classList.add('hidden'); // Скрываем кнопку "Вопрос"
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    questionBlock.innerHTML = `<h3>${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}</h3><span class="status-icon"></span>`;

    const answers = shuffle(questions[currentQuestionIndex].answers); // Перемешиваем варианты ответов

    answers.forEach(answer => {
        const answerBlock = document.createElement('div');
        answerBlock.classList.add('answer-block');
        answerBlock.textContent = answer.text;
        answerBlock.addEventListener('click', () => selectAnswer(answerBlock, answer, questionBlock));
        answerRow.appendChild(answerBlock);
    });

    questionList.appendChild(questionBlock);
}

// Выбор ответа
function selectAnswer(element, answer, questionBlock) {
    const allAnswers = element.parentNode.querySelectorAll('.answer-block');

    if (answer.correct) {
        score++;
        element.classList.add('correct');
        element.classList.add('clicked');
        questionBlock.querySelector('.status-icon').textContent = '✔️';

        setTimeout(() => {
            allAnswers.forEach(answerEl => {
                if (!answerEl.classList.contains('correct')) {
                    answerEl.classList.add('disappear-right');                      
                }
            });
        }, 500);

        element.textContent += ` . ${answer.explanation}`;

        setTimeout(() => {
            element.classList.add('disappear-right');
            allAnswers.forEach(answerEl => {
                setTimeout(() =>{
                    answerEl.style.display = "none"; //скрываем ответы
                }, 1000);
            });
        }, 2500);

    } else {
        element.classList.add('incorrect');
        element.classList.add('clicked');
        questionBlock.querySelector('.status-icon').textContent = '❌';

        setTimeout(() => {
            allAnswers.forEach(answerEl => {
                answerEl.classList.add('disappear-right');
                setTimeout(() =>{
                    answerEl.style.display = "none"; //скрываем ответы
                }, 1000);
            });
        }, 500);
    }

    currentQuestionIndex++;

    // Проверка завершения викторины
    if (currentQuestionIndex === questions.length) {
        document.getElementById('end-message').textContent = "Вопросы закончились";
        document.getElementById('end-message').classList.remove('hidden');
        resultMessage.textContent = `Вы ответили правильно на ${score} из ${questions.length} вопросов.`;
        resultMessage.classList.remove('hidden');

        // Теперь можно открывать предыдущие вопросы
        questionList.querySelectorAll('.question-block').forEach((block, index) => {
            block.addEventListener('click', () => showCorrectAnswer(block, questions[index].answers));
        });
    } else {
        nextQuestionButton.classList.remove('hidden');
    }
}

// Алгоритм Фишера-Йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Генерация случайного индекса от 0 до i
        const j = Math.floor(Math.random() * (i + 1));
        // Обмен элементов array[i] и array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Отображение правильного ответа с пояснением после завершения викторины
function showCorrectAnswer(questionBlock, answers) {
    const correctAnswer = answers.find(answer => answer.correct);
    const explanationText = `${correctAnswer.text} . ${correctAnswer.explanation}`;

    // Проверка, есть ли пояснение у текущего вопроса
    let explanationDiv = questionBlock.querySelector('.explanation');
    
    if (explanationDiv) {
        // Если пояснение уже существует, удаляем его
        explanationDiv.remove();
    } else {
        // Удаляем пояснения из всех других вопросов
        const allQuestions = document.querySelectorAll('.question-block');
        allQuestions.forEach(block => {
            const existingExplanation = block.querySelector('.explanation');
            if (existingExplanation) {
                existingExplanation.remove();
            }
        });

        // Добавляем пояснение к текущему вопросу
        explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.textContent = explanationText;
        questionBlock.appendChild(explanationDiv);
    }
}

