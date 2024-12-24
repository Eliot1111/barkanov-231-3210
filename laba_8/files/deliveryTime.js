const fasterRadio = document.getElementById('radio-time-now');
const timeRadio = document.getElementById('radio-time-later');
const timeBlock = document.getElementById('data-input-id');

// Функция для обновления отображения блока
function toggleTimeBlock() {
    if (fasterRadio.checked) {
        timeBlock.style.display = 'none'; // Скрываем блок
        document.getElementById('input-time').removeAttribute('required');
        // Убираем обязательность поля
    } else if (timeRadio.checked) {
        timeBlock.style.display = 'block'; // Показываем блок
        document.getElementById('input-time').setAttribute('required', 'true'); 
        // Добавляем обязательность поля
    }
}

// Слушаем изменения в радио-кнопках
fasterRadio.addEventListener('change', toggleTimeBlock);
timeRadio.addEventListener('change', toggleTimeBlock);

// Устанавливаем начальное состояние
toggleTimeBlock();

document.addEventListener('DOMContentLoaded', toggleTimeBlock);
