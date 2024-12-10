const API_URL = "http://lab7-api.std-900.ist.mospolytech.ru/api/dishes";

let dishes = [];

// Функция загрузки блюд с сервера
async function loadDishes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        dishes = await response.json(); // Обновляем массив блюд

        // Сортируем блюда по имени перед рендерингом
        dishes.sort((a, b) => a.name.localeCompare(b.name));

        renderDishes(); // Вызываем функцию отображения блюд
    } catch (error) {
        console.error("Ошибка при загрузке блюд:", error);
    }
}

// Функция создания карточки блюда
function createDishCard(dish) {
    const card = document.createElement("div");
    card.classList.add("menu-item");
    card.setAttribute("data-dish", dish.keyword);

    card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="menu-item-image">
        <div class="menu-item-details">
            <h3>${dish.name}</h3>
            <p>Цена: ${dish.price} руб.</p>
            <p>Вес: ${dish.count}</p>
            <button class="add-to-order-btn" data-keyword="${dish.keyword}">Добавить</button>
        </div>
    `;
    return card;
}

// Функция фильтрации блюд
function sortFoodItems(foodGrid, kind) {
    const foodItems = foodGrid.querySelectorAll(".menu-item");
    foodItems.forEach(foodItem => {
        const keyword = foodItem.getAttribute("data-dish");
        const dish = dishes.find(d => d.keyword === keyword);
        if (dish && dish.kind !== kind) {
            foodItem.style.display = "none";
        } else {
            foodItem.style.display = "flex";
        }
    });
}

function removeActiveClassFromButtons(buttons) {
    buttons.forEach(button => {
        button.classList.remove("active");
    });
}

function unSortFoodItems(foodGrid) {
    const foodItems = foodGrid.querySelectorAll(".menu-item");
    foodItems.forEach(foodItem => {
        foodItem.style.display = "flex";
    });
}

// Функция обработки кнопок фильтрации
function listenerCategoryButtons(categoryButtons, foodGrid) {
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const isActive = button.classList.contains("active");

            if (isActive) {
                button.classList.remove("active");
                unSortFoodItems(foodGrid);
            } else {
                removeActiveClassFromButtons(categoryButtons);
                button.classList.add("active");

                const kind = button.getAttribute("data-kind");
                sortFoodItems(foodGrid, kind);
            }
        });
    });
}

// Функция отображения блюд на странице
function renderDishes() {
    const soupContainer = document.getElementById("soup-container");
    const mainDishContainer = document.getElementById("main-dish-container");
    const drinkContainer = document.getElementById("drink-container");
    const saladContainer = document.getElementById("salad-container");
    const dessertContainer = document.getElementById("dessert-container");

    // Очищаем контейнеры перед повторным рендерингом
    soupContainer.innerHTML = "";
    mainDishContainer.innerHTML = "";
    drinkContainer.innerHTML = "";
    saladContainer.innerHTML = "";
    dessertContainer.innerHTML = "";

    dishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        if (dish.category === "soup") soupContainer.appendChild(dishCard);
        if (dish.category === "main-course") mainDishContainer.appendChild(dishCard);
        if (dish.category === "drink") drinkContainer.appendChild(dishCard);
        if (dish.category === "salad") saladContainer.appendChild(dishCard);
        if (dish.category === "dessert") dessertContainer.appendChild(dishCard);
    });
    const categoryButtonsSoup = document.getElementById("filter-soups");
    const categoryButtonsMainCourse = document.getElementById("filter-main-dishes");
    const categoryButtonsBeverages = document.getElementById("filter-drinks");
    const categoryButtonsSalad = document.getElementById("filter-salad");
    const categoryButtonsDessert = document.getElementById("filter-dessert");

    listenerCategoryButtons(categoryButtonsSoup.querySelectorAll(".filter-btn"), soupContainer);
    listenerCategoryButtons(categoryButtonsMainCourse.querySelectorAll(".filter-btn"), mainDishContainer);
    listenerCategoryButtons(categoryButtonsBeverages.querySelectorAll(".filter-btn"), drinkContainer);
    listenerCategoryButtons(categoryButtonsSalad.querySelectorAll(".filter-btn"), saladContainer);
    listenerCategoryButtons(categoryButtonsDessert.querySelectorAll(".filter-btn"), dessertContainer);
}

// Запуск загрузки блюд при загрузке страницы
document.addEventListener("DOMContentLoaded", loadDishes);