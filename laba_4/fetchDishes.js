import { menuItems } from './assets.js';

const soupContainer = document.getElementById("soup-container");
const mainDishContainer = document.getElementById("main-dish-container");
const drinkContainer = document.getElementById("drink-container");

const selectedDishText = document.getElementById("selected-dish-text");
const selectedDishKeyword = document.getElementById("selected-dish-keyword");

const selectedSoupText = document.getElementById("selected-soup-text");
const selectedSoupKeyword = document.getElementById("selected-soup-keyword");

const selectedDrinkText = document.getElementById("selected-drink-text");
const selectedDrinkKeyword = document.getElementById("selected-drink-keyword");



let priceValue = document.getElementById('final-price-value');



let finalPrice;
let count = 0;

function displayMenuItems() {
    for (const category in menuItems) {

        const sortedItems = menuItems[category].sort((a, b) => {

            return a.name.localeCompare(b.name);
        });


        sortedItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.setAttribute('data-dish', item.keyword);

            const imgDiv = document.createElement('div');
            imgDiv.className = 'dish-image';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.keyword;

            const price = document.createElement('p');
            price.textContent = `${item.price}ք`;
            price.className = 'price';

            const name = document.createElement('p');
            name.textContent = item.name;
            name.className = 'dish-name';

            const mass = document.createElement('p');
            mass.textContent = item.mass;
            mass.className = 'dish-mass';

            const button = document.createElement('button');
            button.textContent = 'Добавить';
            button.className = 'btn';
            button.id = `add-${item.keyword}`;


            imgDiv.appendChild(img);
            card.appendChild(imgDiv);
            card.appendChild(price);
            card.appendChild(name);
            card.appendChild(mass);
            card.appendChild(button);


            if (item.category == 'soup') {
                soupContainer.appendChild(card);
            }
            else if (item.category == 'mainDish') {
                mainDishContainer.appendChild(card);
            }
            else {
                drinkContainer.appendChild(card);
            }


            button.addEventListener('click', () => addToOrder(item, card));
            button.addEventListener('click', () => selectItem(category, item, card));
        });
    }
};

displayMenuItems();


function addToOrder(item, card) {

    document.getElementById('none-selected').style.display = 'none';

    document.getElementById('final-price').style.visibility = 'visible';
    priceValue.style.visibility = 'visible';

    document.getElementById('selected-soup').style.visibility = 'visible';
    selectedSoupText.style.visibility = 'visible';

    document.getElementById('selected-dish').style.visibility = 'visible';
    selectedDishText.style.visibility = 'visible';

    document.getElementById('selected-drink').style.visibility = 'visible';
    selectedDrinkText.style.visibility = 'visible';

    if (item.category == 'soup') {
        selectedSoupText.textContent = `${item.name} ${item.price}ք`;
        selectedSoupKeyword.value = item.keyword;
    }
    else if (item.category == 'mainDish') {
        selectedDishText.textContent = `${item.name} ${item.price}ք`;
        selectedDishKeyword.value = item.keyword;
    }
    else {
        selectedDrinkText.textContent = `${item.name} ${item.price}ք`;
        selectedDrinkKeyword.value = item.keyword;
    }

};




const selectedItems = {
    soups: null,
    mainDishes: null,
    drinks: null,
};

function selectItem(category, item, card) {
    if (selectedItems[category]) {
        const prevCard = document.querySelector(`[data-dish="${selectedItems[category].keyword}"]`);
        if (prevCard) {
            prevCard.classList.remove('selected');
        }
    }

    selectedItems[category] = item;
    card.classList.add('selected');
    updateOrderSummary();
}

function deselectItem() {
    for (const category in selectedItems) {
        if (selectedItems[category]) {
            const prevCard = document.querySelector(`[data-dish="${selectedItems[category].keyword}"]`);
            if (prevCard) {
                prevCard.classList.remove('selected');
                selectedItems[category] = null;
            }
        }
    }
    updateOrderSummary();
}

function updateOrderSummary() {
    count = 0;
    finalPrice = '0ք';
    for (const category in selectedItems) {
        const item = selectedItems[category];
        if (item) {
            count += item.price;
        }
    }
    finalPrice = `${count}ք`;
    priceValue.textContent = finalPrice;
}




document.getElementById("reset-btn").onclick = function () {

    document.getElementById('none-selected').style.display = 'block';

    document.getElementById('final-price').style.visibility = 'hidden';
    priceValue.style.visibility = 'hidden';
    deselectItem();



    document.getElementById('selected-drink').style.visibility = 'hidden';
    selectedDrinkText.style.visibility = 'hidden';
    selectedDrinkText.textContent = 'Сок не выбран';
    selectedDrinkKeyword.value = '';

    document.getElementById('selected-dish').style.visibility = 'hidden';
    selectedDishText.style.visibility = 'hidden';
    selectedDishText.textContent = 'Блюдо не выбрано';
    selectedDishKeyword.value = '';

    document.getElementById('selected-soup').style.visibility = 'hidden';
    selectedSoupText.style.visibility = 'hidden';
    selectedSoupText.textContent = 'Суп не выбран';
    selectedSoupKeyword.value = '';
};








