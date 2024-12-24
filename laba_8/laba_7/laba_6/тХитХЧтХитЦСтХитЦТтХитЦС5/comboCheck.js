function isComboValidForButton() {
    const selected = {
        soup: !!localStorage.getItem('soup'),
        mainCourse: !!localStorage.getItem('main-course'),
        salad: !!localStorage.getItem('salad'),
        drink: !!localStorage.getItem('drink'),
        dessert: !!localStorage.getItem('dessert'),
    };

    // Проверяем все комбо
    const combos = [
        selected.soup && selected.mainCourse && selected.salad 
        && selected.drink,
        selected.soup && selected.mainCourse && selected.drink,
        selected.soup && selected.salad && selected.drink,      
        selected.mainCourse && selected.salad && selected.drink,
        selected.mainCourse && selected.drink                 
    ];

    return combos.some(Boolean); 
}

function updateOrderButtonState() {
    const orderButton = document.querySelector('.order-place-btn');

    if (isComboValidForButton()) {
        orderButton.style.opacity = '1';
        orderButton.disabled = false;
    } else {
        orderButton.style.opacity = '0.5';
        orderButton.disabled = true;
    }
}

// При загрузке страницы и каждом клике обновляем состояние кнопки
document.addEventListener('DOMContentLoaded', updateOrderButtonState);
document.body.addEventListener('click', updateOrderButtonState);