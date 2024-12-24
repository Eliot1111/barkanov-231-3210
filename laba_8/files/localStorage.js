// Переменная для хранения общей суммы заказа
let totalSum = parseFloat(localStorage.getItem('totalSum')) || 0;

export function updateTotalSumDisplay() {
    const totalSumElement = document.querySelector('.order-place-title');
    if (totalSumElement) {
        totalSumElement.textContent = `Итого: ${totalSum} ₽`;
    }
}

function updateDishSelection(dishId) {
    const dish = window.dishes.find(d => d.id === dishId);
    const category = dish.category;
    const price = dish.price;
    
    console.log(totalSum);
    const previousId = localStorage.getItem(category);
    // Обновляем сумму заказа
    if (previousId) {
        const previousDish = window.dishes
            .find(d => d.id === parseInt(previousId));
        totalSum -= previousDish.price;
        try {
            const previousCard = document
                .querySelector(`[data-id="${previousId}"]`);
            previousCard.classList.remove('selected');
        } catch (err) {
            console.error('Не удалось убрать выделение:', err);
        }
    }

    totalSum += price;

    // Сохраняем id в localStorage
    localStorage.setItem(category, dishId);
    localStorage.setItem('totalSum', totalSum);
    // Добавляем обводку для нового блюда
    const currentCard = document.querySelector(`[data-id="${dishId}"]`);
    currentCard.classList.add('selected');

    updateTotalSumDisplay();

    console.log(`Общая сумма заказа: ${totalSum}₽`);
}

function showOrderPanelIfHidden() {
    const orderPanel = document.querySelector('.order-place').parentElement;

    // Проверяем, скрыта ли панель
    if (orderPanel.style.display === 'none' 
        || getComputedStyle(orderPanel).display === 'none') {
        orderPanel.style.display = 'block'; // Показываем панель
    }
}


export function handleDishClick(event) {
    const dishId = parseInt(event.target
        .closest('.menu-item').getAttribute('data-id'));
    showOrderPanelIfHidden();
    updateDishSelection(dishId);
}

export function applyStoredSelections() {
    // Перебираем все категории
    const categories = ['soup', 'main-course', 'salad', 'drink', 'dessert'];

    categories.forEach(category => {
        const storedId = localStorage.getItem(category);
        if (storedId) {
            // Находим карточку блюда по id
            const dishCard = document.querySelector(`[data-id="${storedId}"]`);
            if (dishCard) {
                // Добавляем класс selected
                dishCard.classList.add('selected');
            }
        }
    });
}

export function toggleOrderPanelVisibility() {
    const orderPanel = document.querySelector('.order-place').parentElement;
    // Получаем секцию
    const selectedDishes = {
        soup: !!localStorage.getItem('soup'),
        mainCourse: !!localStorage.getItem('main-course'),
        salad: !!localStorage.getItem('salad'),
        drink: !!localStorage.getItem('drink'),
        dessert: !!localStorage.getItem('dessert'),
    };

    // Проверяем, выбрано ли хотя бы одно блюдо
    const hasSelectedDishes = Object.values(selectedDishes).some(Boolean);

    // Скрываем или показываем секцию
    if (hasSelectedDishes) {
        orderPanel.style.display = 'block'; // Показываем секцию
    } else {
        orderPanel.style.display = 'none'; // Скрываем секцию
    }
}