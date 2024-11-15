const inputField = document.querySelector("input[type='text']");
const analyzeButton = document.querySelector(".analyze-button");
const block2 = document.querySelector(".block-2");
const innerBlock3 = document.querySelector(".inner-block-3");
const innerBlock1 = document.querySelector(".inner-block-1");

let originalColors = {};
const block3Color = "#87CEFA";

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
    block2.innerHTML = "";
    originalColors = {};

    Object.entries(data).forEach(([key, value]) => {
        const wordDiv = document.createElement("div");
        wordDiv.classList.add("word-item");
        wordDiv.textContent = `${key} ${value}`;

        const color = getRandomColor();
        wordDiv.style.backgroundColor = color;
        originalColors[value] = color;

        wordDiv.setAttribute("draggable", "true");
        wordDiv.addEventListener("dragstart", () => wordDiv.classList.add("dragging"));
        wordDiv.addEventListener("dragend", () => wordDiv.classList.remove("dragging"));

        block2.appendChild(wordDiv);
    });
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

// Обработка события на кнопке "Разобрать"
analyzeButton.addEventListener("click", () => {
    const text = inputField.value;
    const words = text.split("-");

    block2.innerHTML = "";
    innerBlock3.innerHTML = "";
    innerBlock1.textContent = "";

    const sortedData = sortWordsAndNumbers(words);
    displayWordsInBlock2(sortedData);
});

// Обработка переноса элементов в блок 3
innerBlock3.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingElement = document.querySelector(".dragging");
    const afterElement = getDragAfterElement(innerBlock3, e.clientY);

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
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".word-item:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
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
    const value = draggingElement.textContent.split(" ")[1];

    draggingElement.style.backgroundColor = originalColors[value];
    insertSorted(block2, draggingElement);
});

// Вставка элемента в сортированном порядке в блок 2
function insertSorted(container, element) {
    const items = Array.from(container.children).concat(element);

    items.sort((a, b) => {
        const textA = a.textContent.split(" ")[1];
        const textB = b.textContent.split(" ")[1];

        const keyA = isNaN(textA) ? (textA[0] === textA[0].toUpperCase() ? 'b' : 'a') : 'n';
        const keyB = isNaN(textB) ? (textB[0] === textB[0].toUpperCase() ? 'b' : 'a') : 'n';

        if (keyA !== keyB) return keyA.localeCompare(keyB);
        if (keyA === 'n') return parseInt(textA) - parseInt(textB);
        return textA.localeCompare(textB);
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
