const dishes = [
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "images/gazpacho.jpg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "images/mushroom_soup.jpg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "images/norwegian_soup.jpg"
    },
    {
        keyword: "fried_potatoes_with_mushrooms",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main_course",
        count: "250 г",
        image: "images/friedpotatoeswithmushrooms1.jpg"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main_course",
        count: "310 г",
        image: "images/lasagna.jpg"
    },
    {
        keyword: "chicken_cutlets_and_mashed_potatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main_course",
        count: "280 г",
        image: "images/chickencutletsandmashedpotatoes.jpg"
    },
    {
        keyword: "orange_juice",
        name: "Апельсиновый сок",
        price: 120,
        category: "beverages",
        count: "300 мл",
        image: "images/orangejuice.jpg"
    },
    {
        keyword: "apple_juice",
        name: "Яблочный сок",
        price: 90,
        category: "beverages",
        count: "300 мл",
        image: "images/applejuice.jpg"
    },
    {
        keyword: "carrot_juice",
        name: "Морковный сок",
        price: 110,
        category: "beverages",
        count: "300 мл",
        image: "images/carrotjuice.jpg"
    },
];


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

function renderDishes() {
    const soupContainer = document.getElementById("soup-container");
    const mainDishContainer = document.getElementById("main-dish-container");
    const drinkContainer = document.getElementById("drink-container");

    dishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        if (dish.category === "soup") soupContainer.appendChild(dishCard);
        if (dish.category === "main_course") mainDishContainer.appendChild(dishCard);
        if (dish.category === "beverages") drinkContainer.appendChild(dishCard);
    });
}

document.addEventListener("DOMContentLoaded", renderDishes);
