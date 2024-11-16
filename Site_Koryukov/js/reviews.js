const reviews = [
    {
        text: "Лучший тренажерный зал! Тренировки по паркуру — это просто космос!",
        stars: 4,
        activity: "Паркур",
        date: "2024-11-01",
        name: "Иван, 24 года"
    },
    {
        text: "Очень круто! Тренировки по скалолазанию дают мощный заряд энергии и эмоций!",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-10-29",
        name: "Ирина, 27 лет"
    },
    {
        text: "Пейнтбол — это настоящая страсть! Отличная атмосфера, супер тренеры!",
        stars: 4,
        activity: "Пейнтбол",
        date: "2024-10-15",
        name: "Игорь, 28 лет"
    },
    {
        text: "Занятия по паркуру подарили мне море позитива и ощущение свободы. Очень нравится подход к тренировкам.",
        stars: 5,
        activity: "Паркур",
        date: "2024-11-03",
        name: "Ольга, 19 лет"
    },
    {
        text: "Отличное место для тренировок по скалолазанию! Тренера профессионалы, всегда поддержат и подскажут, как улучшить навыки.",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-11-02",
        name: "Марина, 26 лет"
    },
    {
        text: "С друзьями сыграли, это было круто! Хорошие тренеры и отличное оборудование!",
        stars: 4,
        activity: "Пейнтбол",
        date: "2024-10-18",
        name: "Павел, 35 лет"
    },
    {
        text: "Скала — это место, где ты реально преодолеваешь себя. Отличные тренировки!",
        stars: 3,
        activity: "Скалолазание",
        date: "2024-09-25",
        name: "Дмитрий, 29 лет"
    },
    {
        text: "Пейнтбол с Energy X — это всегда увлекательные и напряженные игры. Очень интересно!",
        stars: 5,
        activity: "Пейнтбол",
        date: "2024-11-05",
        name: "Денис, 29 лет"
    },
    {
        text: "Очень интересные тренировки, каждый раз учишься чему-то новому! Рекомендую всем!",
        stars: 4,
        activity: "Паркур",
        date: "2024-10-12",
        name: "Алексей, 25 лет"
    },
    {
        text: "Прекрасное место для развития силы и выносливости! Особенно мне понравилось скалолазание.",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-10-30",
        name: "Екатерина, 31 год"
    },
    {
        text: "Пейнтбол — это круто! Отличная команда и атмосфера на тренировках.",
        stars: 4,
        activity: "Пейнтбол",
        date: "2024-10-08",
        name: "Максим, 27 лет"
    },
    {
        text: "Тренировки по паркуру дают невероятную свободу и уверенность в себе!",
        stars: 5,
        activity: "Паркур",
        date: "2024-10-22",
        name: "Анна, 22 года"
    },
    {
        text: "Не ожидал, что скалолазание так затянет! Тренера очень хорошие и поддерживающие.",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-10-14",
        name: "Константин, 30 лет"
    },
    {
        text: "Мои дети в восторге от тренировки по пейнтболу! Отличная команда и супер атмосфера.",
        stars: 5,
        activity: "Пейнтбол",
        date: "2024-10-25",
        name: "Ирина, 40 лет"
    },
    {
        text: "Паркур с Energy X — это не просто тренировки, это стиль жизни. Очень рекомендую!",
        stars: 4,
        activity: "Паркур",
        date: "2024-10-05",
        name: "Анатолий, 23 года"
    },
    {
        text: "Скалолазание для меня открыло новые горизонты! Очень нравится тренироваться в Energy X.",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-09-30",
        name: "Светлана, 28 лет"
    },
    {
        text: "Ходил на пейнтбол с друзьями, очень круто провели время! Рекомендую всем!",
        stars: 4,
        activity: "Пейнтбол",
        date: "2024-09-20",
        name: "Юрий, 32 года"
    },
    {
        text: "Паркур — это захватывающе! Я получил отличный опыт и научился новым техникам.",
        stars: 4,
        activity: "Паркур",
        date: "2024-10-09",
        name: "Егор, 26 лет"
    },
    {
        text: "Обожаю скалолазание в Energy X! Тренера всегда помогают и дают полезные советы.",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-09-18",
        name: "Алёна, 29 лет"
    },
    {
        text: "Пейнтбол в Energy X — это настоящая адреналиновая встряска! Нам с друзьями очень понравилось.",
        stars: 5,
        activity: "Пейнтбол",
        date: "2024-10-02",
        name: "Дмитрий, 30 лет"
    },
    {
        text: "Очень жду следующего занятия по паркуру! Это то, что мне нужно для снятия стресса.",
        stars: 4,
        activity: "Паркур",
        date: "2024-09-28",
        name: "Ирина, 25 лет"
    },
    {
        text: "Тренировки по скалолазанию в Energy X — это не только физическая нагрузка, но и масса удовольствия.",
        stars: 5,
        activity: "Скалолазание",
        date: "2024-09-15",
        name: "Тимур, 33 года"
    }
];

// Получаем все чекбоксы для активности
const checkboxes = document.querySelectorAll('.activity-checkbox');

function displayReviews(activity = null) {
    const reviewContainer = document.getElementById('reviews-list');
    reviewContainer.innerHTML = ''; // Очистить контейнер перед добавлением новых отзывов

    // Получаем выбранные активности, если это страница с чекбоксами
    const selectedActivities = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Фильтруем отзывы по активности или выбранным активностям
    const filteredReviews = reviews.filter(review =>
        (activity ? review.activity === activity : selectedActivities.includes(review.activity))
    );

    // Ограничиваем вывод только для страниц с конкретной активностью
    const reviewsToShow = activity ? filteredReviews.slice(0, 4) : filteredReviews;

    // Если нет отзывов для выбранной активности
    if (reviewsToShow.length === 0) {
        reviewContainer.innerHTML = "<p>Отзывов нет для выбранной активности.</p>";
        return;
    }

    // Добавляем отзывы в контейнер
    reviewsToShow.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        
        reviewElement.innerHTML = `
            <p>"${review.text}"</p>
            <div class="stars">${getStars(review.stars)}</div>
            <p>- ${review.name}</p>
            <p class="review-date">${review.date}</p>
            <p class="activity-name">${review.activity}</p>
        `;
        
        reviewContainer.appendChild(reviewElement);
    });
}

function getStars(stars) {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        starsHTML += i < stars ? '<span class="star filled">&#9733;</span>' : '<span class="star">&#9733;</span>';
    }
    return starsHTML;
}

// Обработчик изменений на чекбоксах (только для страницы "Отзывы")
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        displayReviews(); // Обновляем список отзывов при изменении состояния чекбоксов
    });
});

// Первоначальный рендер отзывов
document.addEventListener('DOMContentLoaded', () => {
    // Для страницы с активностями передаем конкретную активность
    const pageActivity = document.body.dataset.activity;

    if (pageActivity) {
        displayReviews(pageActivity);
    } else {
        displayReviews(); // На странице "Отзывы" выводим все отзывы, отфильтрованные по выбранным активностям
    }
});