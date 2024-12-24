const orderContainer = document.getElementById('order-container');
const noneChosenDiv = document.getElementById('nothing-chosen-div');
const form = document.getElementById('main-form');

const selectedSaladStarterText = document.getElementById('salad-choose');
const selectedSaladStarterKeyword = document.getElementById('selected-salad-keyword');

const selectedDessertText = document.getElementById('dessert-choose');
const selectedDessertKeyword = document.getElementById('selected-dessert-keyword');

const selectedDishText = document.getElementById("main-course-choose");
const selectedDishKeyword = document.getElementById("selected-dish-keyword");

const selectedSoupText = document.getElementById("soup-choose");
const selectedSoupKeyword = document.getElementById("selected-soup-keyword");

const selectedDrinkText = document.getElementById("drink-choose");
const selectedDrinkKeyword = document.getElementById("selected-drink-keyword");


let priceValue = document.getElementById('final-price-value');






export function showDishes() {
    let formDivSection = document.body
        .querySelector("#customer-order");
    let chooseElement = formDivSection.getElementsByClassName("choose");
    for (let elem of chooseElement) {
        elem.style.display = "block";
    }
}

export function hideDishes() {
    let formDivSection = document.body
        .querySelector("#customer-order");
    let chooseElement = formDivSection.getElementsByClassName("choose");
    for (let elem of chooseElement) {
        elem.style.display = "none";
    }
}

export function hideNothing() { 
    let formDivSection = document.body
        .querySelector("#customer-order");
    formDivSection.querySelector("#none-selected")
        .style.display = "none";
}

export function showNewSum() {
    let formDivSection = document.body
        .querySelector("#customer-order");
    let sumElement = formDivSection.querySelector("#final-price-value");
    let totalSum = parseFloat(localStorage.getItem('totalSum')) || 0;
    sumElement.textContent = totalSum;
}




export function addDishToForm(dishes) { 
    showDishes();
    hideNothing();

    if (localStorage.length === 0) {
        noneChosenDiv.style.display = 'block';
    } else {
        noneChosenDiv.style.display = 'none';;
    }

    Object.keys(localStorage).forEach(key => {
        // Пропускаем "totalSum"
        if (key === "totalSum") return;
        // Проверяем, есть ли элемент на странице с соответствующим ID
        const element = document.querySelector(`#${key}-choose`);
        if (!element) return;
        const dishId = parseInt(localStorage.getItem(key));
        // Находим данные о блюде по категории
        const dish = dishes.find(d => d.id === dishId);
        if (dish) {
            // Обновляем текстовый контент элемента
            element.textContent = `${dish.name} - ${dish.price}₽`;
        }
    });
    showNewSum();
}

export function resetFunction () {
    orderContainer.remove();

    localStorage.clear();
    
    selectedSoupText.textContent = 'Суп не выбран'; 
    selectedSoupKeyword.value = '';

    selectedDishText.textContent = 'Блюдо не выбрано'; 
    selectedDishKeyword.value = '';

    selectedDrinkText.textContent = 'Сок не выбран'; 
    selectedDrinkKeyword.value = '';

    selectedSaladStarterText.textContent = 'Ничего не выбрано'; 
    selectedSaladStarterKeyword.value = '';

    selectedDessertText.textContent = 'Десерт не выбран'; 
    selectedDessertKeyword.value = '';

    noneChosenDiv.style.display = 'block';
    form.style.display = 'none';
    
    showNewSum();
}

document.addEventListener('DOMContentLoaded', () => {
    let resetButton = document.body.querySelector("#reset-btn");
    if (resetButton) {
        resetButton.onclick = () => resetFunction();
    } else {
        console.error('error');
    }
});

