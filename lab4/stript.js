const totalAmount = 0;

const selectedItems = {
    soup: null,
    mainDish: null,
    drink: null
};

function MenuItem(dishName, cost, type, weight, key, imgSrc) {
    this.key = key;
    this.name = dishName;
    this.price = cost;
    this.category = type;
    this.weight = weight;
    this.image = imgSrc;
}

const menuItems = [
    new MenuItem("Гаспачо", 195, "soups", "350 г", "gazpacho", "images/gazpacho.jpg"),
    new MenuItem("Грибной суп", 185, "soups", "330 г", "mushroom_soup", "images/mushroom_soup.jpg"),
    new MenuItem("Норвежский суп", 270, "soups", "330 г", "norwegian_soup", "images/norwegian_soup.jpg"),
    new MenuItem("Жареная картошка с грибами", 150, "main-dishes", "250 г", "friedpotatoeswithmushrooms", "images/friedpotatoeswithmushrooms1.jpg"),
    new MenuItem("Лазанья", 385, "main-dishes", "310 г", "lasagna", "images/lasagna.jpg"),
    new MenuItem("Котлеты из курицы с картофельным пюре", 225, "main-dishes", "280 г", "chickencutletsandmashedpotatoes", "images/chickencutletsandmashedpotatoes.jpg"),
    new MenuItem("Апельсиновый сок", 120, "drinks", "300 мл", "orangejuice", "images/orangejuice.jpg"),
    new MenuItem("Яблочный сок", 90, "drinks", "300 мл", "applejuice", "images/applejuice.jpg"),
    new MenuItem("Морковный сок", 110, "drinks", "300 мл", "carrotjuice", "images/carrotjuice.jpg")
];

const displayMenuItems = () => {
    document.querySelectorAll(".choose").forEach(elem => {
        elem.style.display = "block";
    });
};

const hideEmptySelectionMessage = () => {
    document.querySelector(".order .nothing-chosen").style.display = "none";
};

const highlightSelectedCard = (type, event) => {
    const previous = document.querySelector(`.${type} .selected`);
    if (previous) previous.classList.remove("selected");
    event.currentTarget.parentNode.classList.add("selected");
};

const updateTotalAmount = () => {
    document.querySelector("#total-amount").textContent = `${totalAmount}₽`;
};

const addItemToOrder = (event) => {
    const selectedKey = event.currentTarget.parentNode.getAttribute("data-dish");
    const formSection = document.querySelector(".order");
    displayMenuItems();
    hideEmptySelectionMessage();

    menuItems.forEach(item => {
        if (item.key !== selectedKey) return;

        const textSelector = formSection.querySelector(`#${item.category}-choose`);
        textSelector.textContent = `${item.name} ${item.price}₽`;

        highlightSelectedCard(item.category, event);

        if (item.category === "soups") {
            if (selectedItems.soup) totalAmount -= selectedItems.soup.price;
            selectedItems.soup = item;
            formSection.querySelector("#soup-input").value = item.key;
        } else if (item.category === "main-dishes") {
            if (selectedItems.mainDish) totalAmount -= selectedItems.mainDish.price;
            selectedItems.mainDish = item;
            formSection.querySelector("#main-dish-input").value = item.key;
        } else if (item.category === "drinks") {
            if (selectedItems.drink) totalAmount -= selectedItems.drink.price;
            selectedItems.drink = item;
            formSection.querySelector("#drink-input").value = item.key;
        }

        totalAmount += item.price;
        updateTotalAmount();
    });
};

menuItems.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.classList.add("menu-item");
    itemCard.setAttribute("data-dish", item.key);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("dish-img");

    const img = document.createElement("img");
    img.src = item.image;

    const nameElem = document.createElement("p");
    nameElem.textContent = item.name;
    nameElem.classList.add("dish-name");

    const priceElem = document.createElement("p");
    priceElem.textContent = `${item.price}₽`;
    priceElem.classList.add("price");

    const weightElem = document.createElement("p");
    weightElem.textContent = item.weight;
    weightElem.classList.add("dish-weight");

    const addButton = document.createElement("button");
    addButton.classList.add("btn");
    addButton.textContent = "Добавить";
    addButton.addEventListener("click", addItemToOrder);

    const section = document.querySelector(`.${item.category} .menu-item-container`);
    section.append(itemCard);
    itemCard.append(imgDiv, nameElem, priceElem, weightElem, addButton);
    imgDiv.append(img);

    console.log(itemCard.getAttribute("data-dish"));
});
