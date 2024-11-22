// Объект для хранения текущего заказа
const order = {
    soup: null,
    main_course: null,
    beverages: null,
};

// Функция обновления выбранного блюда
function updateOrder(keyword) {
    const dish = dishes.find(d => d.keyword === keyword);
    const dishElements = document.querySelectorAll(".menu-item");
    dishElements.forEach(dish => {
        if (dish.getAttribute("data-dish") === keyword) {
            let dishCategory = dish.closest(".menu-item-container");
            let dishCategoryItems = dishCategory.querySelectorAll(".menu-item");
            dishCategoryItems.forEach(dishCategory => {
                dishCategory.classList.remove("selected");
            })
            dish.classList.add("selected");
        }
    })
    if (!dish) return;

    // Обновляем заказ для соответствующей категории
    const categoryMap = {
        soup: "selected-soup",
        main_course: "selected-dish",
        beverages: "selected-drink",
        salad: "selected-salad",
        dessert: "selected-dessert"
    };

    const textMap = {
        soup: "selected-soup-text",
        main_course: "selected-dish-text",
        beverages: "selected-drink-text",
        salad: "selected-salad-text",
        dessert: "selected-dessert-text"
    };

    const inputMap = {
        soup: "selected-soup-keyword",
        main_course: "selected-dish-keyword",
        beverages: "selected-drink-keyword",
        salad: "selected-salad-keyword",
        dessert: "selected-dessert-keyword"
    };

    order[dish.category] = dish;

    // Обновляем отображение блюда
    const selectedElement = document.getElementById(categoryMap[dish.category]);
    const textElement = document.getElementById(textMap[dish.category]);
    const keywordInput = document.getElementById(inputMap[dish.category]);

    if (dish) {
        selectedElement.textContent = dish.name;
        selectedElement.classList.remove("hidden");

        textElement.textContent = `Цена: ${dish.price} руб.`;
        textElement.classList.remove("hidden");

        keywordInput.value = dish.keyword;
    }

    // Обновляем состояние "Ничего не выбрано", если есть блюда
    document.getElementById("none-selected").style.display = Object.values(order).some(o => o) ? "none" : "block";

    // Обновляем общую стоимость
    updateTotalPrice();
}

// Функция подсчета итоговой стоимости
function updateTotalPrice() {
    const totalPrice = Object.values(order)
        .filter(Boolean) // Оставляем только выбранные блюда
        .reduce((sum, dish) => sum + dish.price, 0);

    const priceElement = document.getElementById("final-price");
    const priceValueElement = document.getElementById("final-price-value");

    if (totalPrice > 0) {
        priceElement.textContent = `Стоимость заказа: ${totalPrice} руб.`;
        priceElement.classList.remove("hidden");

        priceValueElement.textContent = `${totalPrice}`;
        priceValueElement.classList.remove("hidden");
    } else {
        priceElement.textContent = "Стоимость заказа: 0 руб.";
        priceElement.classList.remove("hidden");

        priceValueElement.textContent = "0";
        priceValueElement.classList.add("hidden");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    // Обработчик кликов по кнопкам "Добавить"
    document.body.addEventListener("click", event => {
        if (event.target.classList.contains("add-to-order-btn")) {
            const keyword = event.target.getAttribute("data-keyword");
            if (keyword) {
                updateOrder(keyword);
            }
        }
    });
    formButton();
});

function showMessage(message) {
    const overlay = document.createElement("div");
    overlay.classList.add("notification");

    const popup = document.createElement("div");
    popup.classList.add("notification-content");

    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Окей";
    closeButton.classList.add("ok-button");

    closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    popup.appendChild(messageParagraph);
    popup.appendChild(closeButton);
    overlay.appendChild(popup);

    document.body.appendChild(overlay);
}

function formButton() {
    const submitButton = document.getElementById("active-button-submit");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedItems = {
            soup: document.getElementById("selected-soup-keyword").value,
            main_dish: document.getElementById("selected-dish-keyword").value,
            salad: document.getElementById("selected-salad-keyword").value,
            dessert: document.getElementById("selected-dessert-keyword").value,
            drink: document.getElementById("selected-drink-keyword").value
        };

        const { soup, main_dish, salad, dessert, drink } = selectedItems;
        console.log(soup, main_dish, salad, dessert, drink);
        if (!soup && !main_dish && !salad && !dessert && !drink) {
            showMessage("Ничего не выбрано. Выберите блюда для заказа");
        } else if (!drink) {
            showMessage("Выберите напиток");
        } else if (soup && !main_dish && !salad) {
            showMessage("Выберите главное блюдо/салат/стартер");
        } else if (salad && !soup && !main_dish) {
            showMessage("Выберите суп или главное блюдо");
        } else if ((dessert || drink) && !soup && !main_dish && !salad) {
            showMessage("Выберите главное блюдо");
        } else {
            document.querySelector("form").submit();
        }
    });
}
