function filterDishesInCategory(container, selectedKind) {
    const dishes = container.querySelectorAll('.menu-item');
    
    dishes.forEach(dishCard => {
        const dishKind = dishCard.getAttribute('data-kind');
        
        if (selectedKind === 'all' || dishKind === selectedKind) {
            dishCard.style.display = 'flex'; // Показываем блюдо
        } else {
            dishCard.style.display = 'none'; // Скрываем блюдо
        }
    });
}

const categorySections = document.querySelectorAll('.menu-item-category');

categorySections.forEach(categorySection => {
    const buttons = categorySection.querySelectorAll('.item-category');
    const categoryContainer = categorySection.nextElementSibling; 
    // Контейнер блюд для данной категории
    let currentKind = null; 
    // Запоминаем выбранную подкатегорию
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedKind = button.getAttribute('data-kind');

            if (currentKind === selectedKind) {
            // Если та же подкатегория нажата второй раз, сбрасываем фильтрацию
                filterDishesInCategory(categoryContainer, 'all');
                currentKind = null;
                button.classList.remove('active'); // Убираем выделение с кнопки
            } else {
                // Применяем фильтрацию и добавляем стиль к выбранной кнопке
                filterDishesInCategory(categoryContainer, selectedKind);
                currentKind = selectedKind;

                buttons.forEach(btn => btn.classList.remove('active')); 
                // Убираем выделение со всех кнопок
                button.classList.add('active'); 
                // Добавляем выделение к текущей кнопке
            }
        });
    });
});