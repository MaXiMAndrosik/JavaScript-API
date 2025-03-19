const layersArray = document.querySelectorAll(".carousel-item");
const indicatorsArray = document.querySelectorAll('[data-bs-target]');

let nextIndex = 0;

function forwardMove() {
    layersArray[nextIndex].classList.remove("active");
    indicatorsArray[nextIndex].classList.remove("active");
    nextIndex = (nextIndex + 1) % layersArray.length;
    layersArray[nextIndex].classList.add("active");
    indicatorsArray[nextIndex].classList.add("active");
}

function backwardMove() {
    layersArray[nextIndex].classList.remove("active");
    indicatorsArray[nextIndex].classList.remove("active");
    nextIndex = (nextIndex - 1 + layersArray.length) % layersArray.length;
    layersArray[nextIndex].classList.add("active");
    indicatorsArray[nextIndex].classList.add("active");
}

// Обработка клика по кнопке "следующий слайд"

const nextButton = document.querySelector('.carousel-control-next');
nextButton.addEventListener('click', forwardMove);

// Обработка клика по кнопке "предыдущий слайд"

const prevButton = document.querySelector('.carousel-control-prev');
prevButton.addEventListener('click', backwardMove);

// Запуск автопрокрутки слайдов с интервалом 5 секунд сразу при загрузке страницы

let intervalId = setInterval(forwardMove, 5000);

// Отключение автопрокрутки при наведении на слайдер

layersArray.forEach(layer => {
    layer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    layer.addEventListener('mouseleave', () => {
        intervalId = setInterval(forwardMove, 5000);
    });
});

// Переключение слайда при нажатии на стрелки клавиатуры

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        forwardMove();
    } else if (event.key === 'ArrowLeft') {
        backwardMove();
    }
});

// Переключение слайда при нажатии на индикаторы

indicatorsArray.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        layersArray.forEach(layer => layer.classList.remove('active'));
        indicatorsArray.forEach(indicator => indicator.classList.remove('active'));
        layersArray[index].classList.add('active');
        indicatorsArray[index].classList.add('active');
        nextIndex = index;
    });
});

