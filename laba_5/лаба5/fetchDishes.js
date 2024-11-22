const dishes = [
    // Супы
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "images/menu/soups/gazpacho.jpg",
        kind: "veg",
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "images/menu/soups/mushroom_soup.jpg",
        kind: "veg",
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "images/menu/soups/norwegian_soup.jpg",
        kind: "fish",
    },
    {
        keyword: "chicken_soup",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "images/menu/soups/chicken.jpg",
        kind: "meat",
    },
    {
        keyword: "tom_yam",
        name: "Том Ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "images/menu/soups/tomyum.jpg",
        kind: "fish",
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425 г",
        image: "images/menu/soups/ramen.jpg",
        kind: "meat",
    },

    // Главное блюдо
    {
        keyword: "fried_potatoes",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main_course",
        count: "250 г",
        image: "images/menu/main_course/friedpotatoeswithmushrooms1.jpg",
        kind: "veg",
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main_course",
        count: "310 г",
        image: "images/menu/main_course/lasagna.jpg",
        kind: "veg",
    },
    {
        keyword: "chicken_cutlets",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main_course",
        count: "280 г",
        image: "images/menu/main_course/chickencutletsandmashedpotatoes.jpg",
        kind: "meat",
    },
    {
        keyword: "fish_cutlets",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main_course",
        count: "270 г",
        image: "images/menu/main_course/fishrice.jpg",
        kind: "fish",
    },
    {
        keyword: "shrimp_pasta",
        name: "Паста с креветками",
        price: 340,
        category: "main_course",
        count: "280 г",
        image: "images/menu/main_course/shrimppasta.jpg",
        kind: "fish",
    },
    {
        keyword: "margarita_pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main_course",
        count: "470 г",
        image: "images/menu/main_course/pizza.jpg",
        kind: "veg",
    },// Напитки
    {
        keyword: "orange_juice",
        name: "Апельсиновый сок",
        price: 120,
        category: "beverages",
        count: "300 мл",
        image: "images/menu/beverages/orangejuice.jpg",
        kind: "cold",
    },
    {
        keyword: "apple_juice",
        name: "Яблочный сок",
        price: 90,
        category: "beverages",
        count: "300 мл",
        image: "images/menu/beverages/applejuice.jpg",
        kind: "cold",
    },
    {
        keyword: "carrot_juice",
        name: "Морковный сок",
        price: 110,
        category: "beverages",
        count: "300 мл",
        image: "images/menu/beverages/carrotjuice.jpg",
        kind: "cold",
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "beverages",
        count: "300 мл",
        image: "images/menu/beverages/cappuccino.jpg",
        kind: "hot",
    },
    {
        keyword: "green_tea",
        name: "Зеленый чай",
        price: 100,
        category: "beverages",
        count: "300 мл",
        image: "images/menu/beverages/greentea.jpg",
        kind: "hot",
    },
    {
        keyword: "black_tea",
        name: "Черный чай",
        price: 90,
        category: "beverages",
        count: "300 мл",
        image: "images/menu/beverages/tea.jpg",
        kind: "hot",
    },

    // Салаты и стартеры
    {
        keyword: "korean_salad",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salad",
        count: "250 г",
        image: "images/menu/salads_starters/saladwithegg.jpg",
        kind: "veg",
    },
    {
        keyword: "cesar_salad",
        name: "Цезарь с курицей",
        price: 370,
        category: "salad",
        count: "220 г",
        image: "images/menu/salads_starters/caesar.jpg",
        kind: "meat",
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salad",
        count: "235 г",
        image: "images/menu/salads_starters/caprese.jpg",
        kind: "veg",
    },
    {
        keyword: "tuna_salad",
        name: "Салат с тунцом",
        price: 480,
        category: "salad",
        count: "250 г",
        image: "images/menu/salads_starters/tunasalad.jpg",
        kind: "fish",
    },
    {
        keyword: "fries_ketchup",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salad",
        count: "235 г",
        image: "images/menu/salads_starters/frenchfries1.jpg",
        kind: "veg",
    },
    {
        keyword: "fries_cesar",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salad",
        count: "235 г",
        image: "images/menu/salads_starters/frenchfries2.jpg",
        kind: "veg",
    },

    // Десерты
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "dessert",
        count: "300 г",
        image: "images/menu/desserts/baklava.jpg",
        kind: "small",
    },
    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 240,
        category: "dessert",
        count: "125 г",
        image: "images/menu/desserts/checheesecake.jpg",
        kind: "medium",
    },
    {
        keyword: "cheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "dessert",
        count: "125 г",
        image: "images/menu/desserts/chocolatecheesecake.jpg",
        kind: "medium",
    },
    {
        keyword: "choco_cake",
        name: "Шоколадный торт",
        price: 270,
        category: "dessert",
        count: "140 г",
        image: "images/menu/desserts/chocolatecake.jpg",
        kind: "medium",
    },
    {
        keyword: "donuts_3",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "dessert",
        count: "350 г",
        image: "images/menu/desserts/donuts.jpg",
        kind: "medium",
    },
    {
        keyword: "donuts_6",
        name: "Пончики (6 штук)",
        price: 650,
        category: "dessert",
        count: "700 г",
        image: "images/menu/desserts/donuts2.jpg",
        kind: "large",
    },
];

// Сортировка
dishes.sort((a, b) => a.name.localeCompare(b.name));



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

function renderDishes() {
    const soupContainer = document.getElementById("soup-container");
    const mainDishContainer = document.getElementById("main-dish-container");
    const drinkContainer = document.getElementById("drink-container");
    const saladContainer = document.getElementById("salad-container");
    const dessertContainer = document.getElementById("dessert-container");

    dishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        if (dish.category === "soup") soupContainer.appendChild(dishCard);
        if (dish.category === "main_course") mainDishContainer.appendChild(dishCard);
        if (dish.category === "beverages") drinkContainer.appendChild(dishCard);
        if (dish.category === "salad") saladContainer.appendChild(dishCard);
        if (dish.category === "dessert") dessertContainer.appendChild(dishCard);
    });

    const categoryButtonsSoup = document.getElementById("filter-soups");
    const categoryButtonsMainCourse = document.getElementById("filter-main-dishes");
    const categoryButtonsBeverages = document.getElementById("filter-drinks");
    const categoryButtonsSalad = document.getElementById("filter-salad");
    const categoryButtonsDessert = document.getElementById("filter-dessert");

    listenerCategoryButtons(categoryButtonsSoup.querySelectorAll(".filter-btn"), document.getElementById("soup-container"));
    listenerCategoryButtons(categoryButtonsMainCourse.querySelectorAll(".filter-btn"), document.getElementById("main-dish-container"));
    listenerCategoryButtons(categoryButtonsBeverages.querySelectorAll(".filter-btn"), document.getElementById("drink-container"));
    listenerCategoryButtons(categoryButtonsSalad.querySelectorAll(".filter-btn"), document.getElementById("salad-container"));
    listenerCategoryButtons(categoryButtonsDessert.querySelectorAll(".filter-btn"), document.getElementById("dessert-container"));

}

document.addEventListener("DOMContentLoaded", renderDishes);
