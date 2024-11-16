const inputField = document.querySelector("input[type='text']");
const analyzeButton = document.querySelector(".analyze-button");
const innerBlock1 = document.querySelector(".inner-block-1");
const block2 = document.querySelector(".block-2");
const innerBlock3 = document.querySelector(".block-3");

let originalColors = {};
const block3Color = "#87CEFA";

// Обработка события на кнопке "Разобрать"
analyzeButton.addEventListener("click", handleAnalyze);

// Обработка нажатия Enter в поле ввода
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleAnalyze();
    }
});

function handleAnalyze() {
    const text = inputField.value.trim(); // Убираем лишние пробелы с начала и конца строки
    const words = text.split("-").map(word => word.trim()).filter(word => word !== "");
    // Если после обработки список слов пустой, выводим предупреждение
    if (words.length === 0) {
        alert("Пожалуйста, введите хотя бы одно слово.");
        return;
    }
    block2.innerHTML = "";        // Очищаем содержимое блока 2
    innerBlock3.innerHTML = "";   // Очищаем содержимое блока 3
    innerBlock1.textContent = ""; // Очищаем текст в innerBlock1

    const sortedData = sortWordsAndNumbers(words); // Сортируем слова и числа
    displayWordsInBlock2(sortedData); // Отображаем отсортированные слова в block2
}

// Функция сортировки слов и чисел по алфавиту и возрастанию
function sortWordsAndNumbers(words) {
    const lowercaseWords = [];
    const uppercaseWords = [];
    const numbers = [];

    words.forEach(word => {
        if (!isNaN(word)) {
            numbers.push(Number(word));
        } else if (word[0] === word[0].toUpperCase()) {
            uppercaseWords.push(word);
        } else {
            lowercaseWords.push(word);
        }
    });

    lowercaseWords.sort((a, b) => a.localeCompare(b));
    uppercaseWords.sort((a, b) => a.localeCompare(b));
    numbers.sort((a, b) => a - b);

    const sortedData = {};
    lowercaseWords.forEach((word, index) => sortedData[`a${index + 1}`] = word);
    uppercaseWords.forEach((word, index) => sortedData[`b${index + 1}`] = word);
    numbers.forEach((number, index) => sortedData[`n${index + 1}`] = number);

    return sortedData;
}

// Функция для отображения слов в блоке 2
function displayWordsInBlock2(data) {
    originalColors = {};

    Object.entries(data).forEach(([key, value]) => {
        const wordDiv = document.createElement("div");
        wordDiv.classList.add("word-item");
        wordDiv.textContent = `${key} ${value}`;

        const color = getRandomColor();
        wordDiv.style.backgroundColor = color;
        originalColors[key] = color;

        wordDiv.setAttribute("draggable", "true");
        wordDiv.addEventListener("dragstart", () => wordDiv.classList.add("dragging"));
        wordDiv.addEventListener("dragend", () => wordDiv.classList.remove("dragging"));

        block2.appendChild(wordDiv);
    });
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

// Обработка переноса элементов в блок 3
innerBlock3.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingElement = document.querySelector(".dragging");
    const afterElement = getDragAfterElement(innerBlock3, e.clientX);

    if (afterElement == null) {
        innerBlock3.appendChild(draggingElement);
    } else {
        innerBlock3.insertBefore(draggingElement, afterElement);
    }
});

innerBlock3.addEventListener("drop", (e) => {
    const draggingElement = document.querySelector(".dragging");
    draggingElement.style.backgroundColor = block3Color;
    block2.removeChild(draggingElement);
});

// Функция для определения, куда вставить перетаскиваемый элемент в блоке 3
function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll(".word-item:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2; // Сравниваем по координате X, а не Y

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Смена цвета при возврате в блок 2 и добавление в правильное место
block2.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingElement = document.querySelector(".dragging");
    const key = draggingElement.textContent.split(" ")[0];

    draggingElement.style.backgroundColor = originalColors[key];
    insertSorted(block2, draggingElement);
});

// Вставка элемента в сортированном порядке в блок 2
function insertSorted(container, element) {
    const items = Array.from(container.children).concat(element);

    items.sort((a, b) => {
        const keyA = a.textContent.split(" ")[0];  // ключ, например: a1, b2
        const keyB = b.textContent.split(" ")[0];  // ключ, например: a2, n1

        return keyA.localeCompare(keyB, undefined, { numeric: true });
    });

    container.innerHTML = "";
    items.forEach(item => container.appendChild(item));
}

// Отображение слова в блоке 1 при клике на элемент в блоке 3
innerBlock3.addEventListener("click", (e) => {
    if (e.target.classList.contains("word-item")) {
        const selectedWord = e.target.textContent.split(" ")[1];
        innerBlock1.textContent += selectedWord + " ";
    }
});
