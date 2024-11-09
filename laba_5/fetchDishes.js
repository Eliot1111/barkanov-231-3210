import { menuItems } from './assets.js';

const containers = {
    soup: document.getElementById("soup-container"),
    mainDish: document.getElementById("main-dish-container"),
    drink: document.getElementById("drink-container"),
    saladStarter: document.getElementById('salad-starter-container'),
    dessert: document.getElementById('dessert-container')
};

const selectedTextElements = {
    saladStarter: document.getElementById('selected-salad-starter-text'),
    saladStarterKeyword: document.getElementById('selected-salad-starter-keyword'),
    dessert: document.getElementById('selected-dessert-text'),
    dessertKeyword: document.getElementById('selected-dessert-keyword'),
    dish: document.getElementById("selected-dish-text"),
    dishKeyword: document.getElementById("selected-dish-keyword"),
    soup: document.getElementById("selected-soup-text"),
    soupKeyword: document.getElementById("selected-soup-keyword"),
    drink: document.getElementById("selected-drink-text"),
    drinkKeyword: document.getElementById("selected-drink-keyword")
};

const priceElement = document.getElementById('final-price-value');
let totalPrice = 0;

const displayMenuItems = () => {
    for (const [category, items] of Object.entries(menuItems)) {
        const sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        sortedItems.forEach(item => {
            const card = createMenuItemCard(item);
            containers[category]?.appendChild(card);
            card.querySelector('button').addEventListener('click', () => {
                handleItemSelection(category, item, card);
            });
        });
    }
};

const createMenuItemCard = (item) => {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.dataset.dish = item.keyword;
    card.dataset.kind = item.kind;

    card.innerHTML = `
        <div class="food-image">
            <img src="${item.image}" alt="${item.keyword}">
        </div>
        <p class="food-price">${item.price}ք</p>
        <p class="food-name">${item.name}</p>
        <p class="food-mass">${item.mass}</p>
        <button id="add-${item.keyword}" class="add-to-cart-btn">Добавить</button>
    `;
    return card;
};

const handleItemSelection = (category, item, card) => {
    updateSelectedItems(category, item, card);
    showSelectedItemDetails(category, item);
    updatePrice();
};

const updateSelectedItems = (category, item, card) => {
    const previousItem = selectedItems[category];
    if (previousItem) {
        const prevCard = document.querySelector(`[data-dish="${previousItem.keyword}"]`);
        prevCard?.classList.remove('selected');
    }
    selectedItems[category] = item;
    card.classList.add('selected');
};

const showSelectedItemDetails = (category, item) => {
    const selectedText = selectedTextElements[category];
    selectedText.textContent = `${item.name} ${item.price}ք`;
    selectedTextElements[`${category}Keyword`].value = item.keyword;
    selectedText.style.visibility = 'visible';
};

const selectedItems = {
    soup: null,
    mainDish: null,
    drink: null,
    saladStarter: null,
    dessert: null
};

const updatePrice = () => {
    totalPrice = Object.values(selectedItems).reduce((sum, item) => sum + (item?.price || 0), 0);
    priceElement.textContent = `${totalPrice}ք`;
};

document.getElementById("reset-btn").addEventListener('click', () => {
    Object.keys(selectedItems).forEach(category => {
        selectedTextElements[category].textContent = `Не выбран`;
        selectedTextElements[`${category}Keyword`].value = '';
        selectedTextElements[category].style.visibility = 'hidden';
    });
    document.getElementById('none-selected').style.display = 'block';
    priceElement.textContent = '0ք';
    totalPrice = 0;
});

const applyFilters = () => {
    document.querySelectorAll('.filter-p').forEach(button => {
        let activeFilter = '';
        button.addEventListener('click', () => {
            const container = button.closest('.filter-container').nextElementSibling;
            const items = container.children;
            Array.from(items).forEach(item => {
                item.style.display = item.dataset.kind === button.dataset.kind ? 'flex' : 'none';
            });
            activeFilter = activeFilter === button.dataset.kind ? '' : button.dataset.kind;
        });
    });
};

displayMenuItems();
applyFilters();
