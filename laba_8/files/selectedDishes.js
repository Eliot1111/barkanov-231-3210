import {
    addDishToForm,
    hideDishes,
    showNewSum
} from './formLogic.js';

function Dish(keyword, name, price, category, mass, image, kind, id) {
    this.keyword = keyword,
    this.name = name, 
    this.price = price, 
    this.category = category,
    this.mass = mass,
    this.image = image,
    this.kind = kind,
    this.id = id;    
}

function getSelectedDishes(dishes) {
    const categories = Object.keys(localStorage).filter(key => 
        !['totalSum'].includes(key) // Исключаем ненужные ключи
    );

    const selectedDishes = [];
    categories.forEach(category => {
        const dishId = parseInt(localStorage.getItem(category), 10); 
        // Получаем ID блюда
        if (dishId) {
            const dish = dishes.find(d => d.id === dishId); 
            // Находим блюдо в массиве dishes
            if (dish) {
                selectedDishes.push({ ...dish, category }); 
                // Добавляем блюдо с категорией
            }
        }
    });
    if (categories.length == 0) {
        let dishDiv = document.body.querySelector("#nothing-chosen-div");
        dishDiv.style.display = "block";
    }

    return selectedDishes;
}

// Функция удаления блюда
function removeDish(category) {
    const dishId = parseInt(localStorage.getItem(category), 10); 
    // Получаем ID удаляемого блюда
    const dish = dishes.find(d => d.id === dishId); 
    // Находим блюдо в массиве dishes
    
    if (dish) {
        // Обновляем totalSum в localStorage
        let totalSum = parseInt(localStorage.getItem('totalSum'), 10) || 0;
        totalSum -= dish.price; // Вычитаем цену удаляемого блюда
        localStorage.setItem('totalSum', totalSum); // Сохраняем обновленное зна
        localStorage.removeItem(category); // Удаляем ID из localStorage
        document.querySelector(`[data-category="${category}"]`).remove(); 

        const textElement = document.querySelector(`#${category}-choose`);
        if (textElement) textElement.textContent = "Блюдо не выбрано";
        
    }

    const categories = Object.keys(localStorage).filter(key => 
        !['totalSum'].includes(key) // Исключаем ненужные ключи
    );
    if (categories.length == 0) {
        hideDishes();
        
    }
    showNewSum();

    let objects = Object.keys(localStorage).filter(key => 
        !['totalSum'].includes(key) // Исключаем ненужные ключи
    );

    if (objects.length == 0) {
        let dishDiv = document.body.querySelector("#nothing-chosen-div");
        dishDiv.style.display = "block";
    }

}

function renderDishCard(dish) {
    let dishCard = document.createElement('div');
    dishCard.className = "menu-item";
    dishCard.setAttribute("data-id", dish.id);
    dishCard.setAttribute("data-category", dish.category); 
    // Добавляем атрибут категории
    dishCard.style.flexFlow = "column";

    let dishImgDiv = document.createElement('div');
    dishImgDiv.className = "img-container";

    let dishImg = document.createElement('img');
    dishImg.className = "dish-img";
    dishImg.src = dish.image;

    let dishPrice = document.createElement('p');
    dishPrice.textContent = `${dish.price} ₽`;
    dishPrice.className = "dish-price";

    let dishName = document.createElement('p');
    dishName.textContent = dish.name;
    dishName.className = "dish-name";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "btn";
    deleteButton.addEventListener("click", () => removeDish(dish.category)); 
    // Удаление блюда

    // Определение контейнера на странице
    let section = document.body.querySelector(".menu-item-container");
    section.append(dishCard);
    dishCard.append(dishImgDiv);
    dishImgDiv.append(dishImg);
    dishCard.append(dishPrice);
    dishCard.append(dishName);
    dishCard.append(deleteButton);
}

// Основная логика рендера
function renderSelectedDishes(dishes) {
    const selectedDishes = getSelectedDishes(dishes);
    // Получаем все выбранные блюда

    selectedDishes.forEach(dish => {
        renderDishCard(dish); // Рендерим каждое блюдо
    });
}


async function loadDishes() {
    const apiURL = "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes";
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        data.sort((a, b) => {
            if (a.category === b.category) {
                // сортируем по одному из свойств объекта 
                return a.name.localeCompare(b.name); 
                // при совпадении категории сортируем по имени
            }
        });

        window.dishes = data.map(item => new Dish(
            item.keyword,
            item.name,
            item.price,
            item.category,
            item.count,
            item.image,
            item.kind,
            item.id
        ));
        renderSelectedDishes(data);

        const categories = Object.keys(localStorage).filter(key => 
            !['totalSum'].includes(key) // Исключаем ненужные ключи
        );

        if (categories.length != 0) {
            addDishToForm(data);
        }
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadDishes();
});

