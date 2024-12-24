const API_URL = "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes";

let dishes = [];

import { 
    handleDishClick,
    applyStoredSelections, 
    updateTotalSumDisplay,
    toggleOrderPanelVisibility
} from './localStorage.js';




window.soup = [];
window['main-course'] = [];
window.salad = [];
window.drink = [];
window.dessert = [];

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

function renderDishes(dishes) {
    for (let dish of dishes) {
        if (window[dish.category]) {
            window[dish.category].push(dish.id);
        }

        let dishCard = document.createElement('div');
        dishCard.className = "menu-item";
        dishCard.setAttribute("data-dish", dish.keyword);
        dishCard.setAttribute("data-kind", dish.kind);
        dishCard.setAttribute("data-id", dish.id);
        dishCard.style.flexFlow = "column";

        let dishImgDiv = document.createElement('div');
        dishImgDiv.className = "img-container";

        let dishImg = document.createElement('img');
        dishImg.className = "menu-item-image";
        dishImg.src = dish.image;

        let dishPrice = document.createElement('p');
        dishPrice.textContent = `${dish.price} ₽`;
        dishPrice.className = "dish-price";

        let dishName = document.createElement('p');
        dishName.textContent = dish.name;
        dishName.className = "dish-name";

        let dishMass = document.createElement('p');
        dishMass.textContent = dish.count;
        dishMass.className = "dish-mass";

        let addButton = document.createElement("button");
        addButton.textContent = "Добавить";
        addButton.className = "add-to-order-btn";

        addButton.addEventListener("click", handleDishClick);
        
        // Определение нужного контейнера на странице
        console.log('.' + dish.category)
        let section = document.body.children[1].querySelector("." + dish.category);
        let con = section.querySelector(".menu-item-container");
        
        // Добавление элементов в DOM
        con.append(dishCard);
        dishCard.append(dishImgDiv);
        dishImgDiv.append(dishImg);
        dishCard.append(dishPrice);
        dishCard.append(dishName);
        dishCard.append(dishMass);
        dishCard.append(addButton);

        // localStorage.clear();
        applyStoredSelections();
        updateTotalSumDisplay();
        toggleOrderPanelVisibility();
    }
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
        renderDishes(data);
        console.log(data);  
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadDishes);







// // Функция загрузки блюд с сервера
// async function loadDishes() {
//     try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//             throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
//         }
//         dishes = await response.json(); // Обновляем массив блюд

//         // Сортируем блюда по имени перед рендерингом
//         dishes.sort((a, b) => a.name.localeCompare(b.name));

//         renderDishes(); // Вызываем функцию отображения блюд
//     } catch (error) {
//         console.error("Ошибка при загрузке блюд:", error);
//     }
// }

// // Функция создания карточки блюда
// function createDishCard(dish) {
//     const card = document.createElement("div");
//     card.classList.add("menu-item");
//     card.setAttribute("data-dish", dish.keyword);

//     card.innerHTML = `
//         <img src="${dish.image}" alt="${dish.name}" class="menu-item-image">
//         <div class="menu-item-details">
//             <h3>${dish.name}</h3>
//             <p>Цена: ${dish.price} руб.</p>
//             <p>Вес: ${dish.count}</p>
//             <button class="add-to-order-btn" data-keyword="${dish.keyword}">Добавить</button>
//         </div>
//     `;
//     return card;
// }






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





// // Функция отображения блюд на странице
// function renderDishes() {
//     const soupContainer = document.getElementById("soup-container");
//     const mainDishContainer = document.getElementById("main-dish-container");
//     const drinkContainer = document.getElementById("drink-container");
//     const saladContainer = document.getElementById("salad-container");
//     const dessertContainer = document.getElementById("dessert-container");

//     // Очищаем контейнеры перед повторным рендерингом
//     soupContainer.innerHTML = "";
//     mainDishContainer.innerHTML = "";
//     drinkContainer.innerHTML = "";
//     saladContainer.innerHTML = "";
//     dessertContainer.innerHTML = "";

//     dishes.forEach(dish => {
//         const dishCard = createDishCard(dish);
//         if (dish.category === "soup") soupContainer.appendChild(dishCard);
//         if (dish.category === "main-course") mainDishContainer.appendChild(dishCard);
//         if (dish.category === "drink") drinkContainer.appendChild(dishCard);
//         if (dish.category === "salad") saladContainer.appendChild(dishCard);
//         if (dish.category === "dessert") dessertContainer.appendChild(dishCard);
//     });
//     const categoryButtonsSoup = document.getElementById("filter-soups");
//     const categoryButtonsMainCourse = document.getElementById("filter-main-dishes");
//     const categoryButtonsBeverages = document.getElementById("filter-drinks");
//     const categoryButtonsSalad = document.getElementById("filter-salad");
//     const categoryButtonsDessert = document.getElementById("filter-dessert");

//     listenerCategoryButtons(categoryButtonsSoup.querySelectorAll(".filter-btn"), soupContainer);
//     listenerCategoryButtons(categoryButtonsMainCourse.querySelectorAll(".filter-btn"), mainDishContainer);
//     listenerCategoryButtons(categoryButtonsBeverages.querySelectorAll(".filter-btn"), drinkContainer);
//     listenerCategoryButtons(categoryButtonsSalad.querySelectorAll(".filter-btn"), saladContainer);
//     listenerCategoryButtons(categoryButtonsDessert.querySelectorAll(".filter-btn"), dessertContainer);
// }

// Запуск загрузки блюд при загрузке страницы
document.addEventListener("DOMContentLoaded", loadDishes);