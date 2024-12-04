let totalSum = 0;

let currentSelect = {
    soups: null, 
    mainCourse: null,
    saladsStarters: null, 
    beverages: null,
    dessert: null
};

function showDishes() {
    let formDivSection = document.body
        .querySelector(".user-order-container");
    let chooseElement = formDivSection.getElementsByClassName("choose");
    for (let elem of chooseElement) {
        elem.style.display = "block";
    }
}

function hideNothing() { 
    let formDivSection = document.body
        .querySelector(".user-order-container");
    formDivSection.getElementsByClassName("nothing")[0]
        .style.display = "none";
}

function selectCard(category, event) {
    let categoryElement = document.querySelector(`.${category}`);
    let previouslySelected = categoryElement.querySelector(".selected");
    if (previouslySelected) {
        previouslySelected.classList.remove("selected");
    }
    event.currentTarget.parentNode.classList.add("selected");
}

function showNewSum() {
    let formDivSection = document.body
        .querySelector(".user-order-container");
    let sumElement = formDivSection.querySelector("#total-sum-text");
    sumElement.textContent = totalSum;
}

function addDishToForm(event) {
    let actionTarget = event.currentTarget.parentNode
        .getAttribute("data-dish");
    let formDivSection = document.body
        .querySelector(".user-order-container");
    showDishes();
    hideNothing();

    for (let dish of dishes) {
        if (dish.keyword != actionTarget) continue;
        let textCategorySelector = formDivSection.querySelector(
            "#" + dish.category + "-choose");
        let dishName = dish.name;
        let dishPrice = dish.price;
        textCategorySelector.textContent = dishName + " " + dishPrice + "₽";

        selectCard(dish.category, event);
        
        if (dish.category === "soups") {
            if (currentSelect.soups) {
                totalSum -= currentSelect.soups.price;
            }
            currentSelect.soups = dish;
            formDivSection.querySelector(
                "#soup-input").value = dish.keyword;
        } else if (dish.category === "main-course") { 
            if (currentSelect.mainCourse) {
                totalSum -= currentSelect.mainCourse.price;
            }
            currentSelect.mainCourse = dish;
            formDivSection.querySelector(
                "#main-course-input").value = dish.keyword;
        } else if (dish.category === "salads-starters") { 
            if (currentSelect.saladsStarters) {
                totalSum -= currentSelect.saladsStarters.price;
            }
            currentSelect.saladsStarters = dish;
            formDivSection.querySelector(
                "#salads-starters-input").value = dish.keyword;
        } else if (dish.category === "beverages") { 
            if (currentSelect.beverages) {
                totalSum -= currentSelect.beverages.price;
            }
            currentSelect.beverages = dish;
            formDivSection.querySelector(
                "#beverages-input").value = dish.keyword;
        } else if (dish.category === "desserts") { 
            if (currentSelect.dessert) {
                totalSum -= currentSelect.dessert.price;
            }
            currentSelect.dessert = dish;
            formDivSection.querySelector(
                "#desserts-input").value = dish.keyword;
        } 
        
        totalSum += dish.price;
        showNewSum();
    } 
}


function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const okButton = document.getElementById('notification-ok');

    notificationText.textContent = message;
    notification.classList.add('show');

    okButton.addEventListener('click', function () {
        notification.classList.remove('show');
    });
}


function resetFunction () {

    currentSelect = {
        soups: null, 
        mainCourse: null,
        saladsStarters: null, 
        beverages: null,
        dessert: null
    };

    totalSum = 0;    

    document.getElementById('soup-input').value = '';
    document.getElementById('main-course-input').value = '';
    document.getElementById('salads-starters-input').value = '';
    document.getElementById('beverages-input').value = '';
    document.getElementById('desserts-input').value = '';


    document.getElementById('soups-choose').textContent = 'Суп не выбран';
    document.getElementById('main-course-choose')
        .textContent = 'Главное блюдо не выбрано';
    document.getElementById('salads-starters-choose')
        .textContent = 'Салат/стартер не выбран';
    document.getElementById('beverages-choose')
        .textContent = 'Напиток не выбран';
    document.getElementById('desserts-choose')
        .textContent = 'Десерт не выбран';

    document.getElementById('total-sum').textContent = '0₽';
    document.querySelector('.nothing').style.display = 'block';

    document.querySelectorAll('.menu-item, .selected').forEach(item => {
        item.classList.remove('selected');
    });

    let formSection = document.body.querySelector(".user-order-container");
    let allChooseClassElems = formSection.getElementsByClassName('choose');
    for (let elem of allChooseClassElems) {
        elem.style.display = "none";
    }
}

let resetButton = document.body.querySelector(".form-section form");
resetButton.addEventListener('reset', resetFunction);


