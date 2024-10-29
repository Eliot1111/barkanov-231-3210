let totalSum = 0;

let currentSelections = {
    soup: null,
    mainDish: null,
    drink: null
};

function Dish(keyword, name, price, category, count, image) {
    this.keyword = keyword,
    this.name = name,
    this.price = price,
    this.category = category,
    this.count = count,
    this.image = image;
}

let dishes = [
    new Dish("gazpacho", "Гаспачо", 195, "soups", "350 г",
        "images/gazpacho.jpg"),
    new Dish("mushroom_soup", "Грибной суп", 185, "soups", "330 г",
        "images/mushroom_soup.jpg"),
    new Dish("norwegian_soup", "Норвежский суп", 270, "soups", "330 г", 
        "images/norwegian_soup.jpg"),
        
    new Dish("friedpotatoeswithmushrooms", "Жареная картошка с грибами", 150, 
        "main-dishes", "250 г", 
        "images/friedpotatoeswithmushrooms1.jpg"),
    new Dish("lasagna", "Лазанья", 385, "main-dishes", "310 г", 
        "images/lasagna.jpg"),
    new Dish("chickencutletsandmashedpotatoes", 
        "Котлеты из курицы с картофельным пюре", 225, "main-dishes", "280 г", 
        "images/chickencutletsandmashedpotatoes.jpg"),

    new Dish("orangejuice", "Апельсиновый сок", 120, "drinks", "300 мл", 
        "images/orangejuice.jpg"),
    new Dish("applejuice", "Яблочный сок", 90, "drinks", "300 мл", 
        "images/applejuice.jpg"),
    new Dish("carrotjuice", "Морковный сок", 110, "drinks", "300 мл", 
        "images/carrotjuice.jpg")
];

    
dishes.sort((a, b) => {
    if (a.category === b.category) {
        return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
});

function showDishes() {
    let formSection = document.body.querySelector(".order");
    let allChooseClassElems = formSection.getElementsByClassName('choose');
    for (let elem of allChooseClassElems) {
        elem.style.display = "block";
    }
}

function hideNothingChoosenText() {
    let formSection = document.body.querySelector(".order");

    formSection.getElementsByClassName('nothing-choosen')[0]
        .style.display = "none";
}

function higlightCard(category, event) {
    let categoryElement = document.querySelector(`.${category}`);
    let previouslySelected = categoryElement.querySelector(".selected");
    if (previouslySelected) {
        previouslySelected.classList.remove("selected");
    }

    event.currentTarget.parentNode.classList.add("selected");
}

function showNewSumm() {
    let formSection = document.body.querySelector(".order");
    let sumElement = formSection.querySelector("#total-sum");

    sumElement.textContent = totalSum + "₽";
}

function addDishToForm(event) {
    let actionTarget = event.currentTarget.parentNode.getAttribute("data-dish");
    let formSection = document.querySelector(".order");
    showDishes();
    hideNothingChoosenText();
    
    for (let dish of dishes) {
        if (dish.keyword != actionTarget) continue;

        let textSelector = formSection.querySelector(
            "#" + dish.category + "-choose");
        let dishName = dish.name;
        let dishPrice = dish.price;

        textSelector.textContent = dish.name + " " + dish.price + "₽";

        higlightCard(dish.category, event);

        if (dish.category === "soups") {
            if (currentSelections.soup) {
                totalSum -= currentSelections.soup.price;
            }
            currentSelections.soup = dish;
            formSection.querySelector("#soup-input").value = dish.keyword;

        } else if (dish.category === "main-dishes") {
            if (currentSelections.mainDish) {
                totalSum -= currentSelections.mainDish.price;
            }
            currentSelections.mainDish = dish;
            formSection.querySelector("#main-dish-input").value = dish.keyword;

        } else if (dish.category === "drinks") {
            if (currentSelections.drink) {
                totalSum -= currentSelections.drink.price;
            }
            currentSelections.drink = dish;
            formSection.querySelector("#drink-input").value = dish.keyword;
        }

        totalSum += dish.price;
        showNewSumm();
    }

}    

for (let dish of dishes) {
    let dishCard = document.createElement('div');
    dishCard.className = "menu-item";
    dishCard.setAttribute("data-dish", dish.keyword);

    let dishImgDiv = document.createElement("div");
    dishImgDiv.className = "dish-img";

    let dishImg = document.createElement("img");
    dishImg.src = dish.image;

    let dishName = document.createElement("p");
    dishName.textContent = dish.name;
    dishName.className = "dish-name";

    let dishPrice = document.createElement("p");
    dishPrice.textContent = dish.price + "₽";
    dishPrice.className = "price";

    let dishMass = document.createElement("p");
    dishMass.textContent = dish.count;
    dishMass.className = "dish-mass";

    let addButton = document.createElement("button");
    addButton.className = "btn";
    addButton.textContent = "Добавить";

    addButton.addEventListener("click", addDishToForm);


    let section = document.body.children[1].querySelector("." + dish.category);
    let container = section.querySelector(".menu-item-container");
    container.append(dishCard);
    dishCard.append(dishImgDiv);
    dishImgDiv.append(dishImg);
    dishCard.append(dishName);
    dishCard.append(dishPrice);
    dishCard.append(dishMass);
    dishCard.append(addButton);

    console.log(dishCard.getAttribute("data-dish"));

}

