function Dish(keyword, name, price, category, mass, image, kind) {
    this.keyword = keyword,
    this.name = name, 
    this.price = price, 
    this.category = category,
    this.mass = mass,
    this.image = image,
    this.kind = kind;
}

let dishes = [
    new Dish("gazpacho", "Гаспачо", 195, "soups", "350 г", 
        "img/soups/gazpacho.jpg", "veg"),
    new Dish("mushroom_soup", "Грибной суп", 185, "soups", "330 г",
        "img/soups/mushroom_soup.jpg", "veg"),
    new Dish("norwegian_soup", "Норвежский суп", 270, "soups", "330 г", 
        "img/soups/norwegian_soup.jpg", "fish"),
    new Dish("ramen", "Рамен", 375, "soups", "425 г",
        "img/soups/ramen.jpg", "meat"),
    new Dish("tomyum", "Том ям с креветками", 650, "soups", "500 г",
        "img/soups/tomyum.jpg", "fish"),
    new Dish("chicken.jpg", "Куриный суп", 330, "soups", "350 г", 
        "img/soups/chicken.jpg", "meat"),

    new Dish("friedpotatoeswithmushrooms", "Жареная картошка с грибами", 
        150, "main-course", "250 г", 
        "img/main_course/friedpotatoeswithmushrooms1.jpg", "veg"),
    new Dish("lasagna", "Лазанья", 385, "main-course", "310 г", 
        "img/main_course/lasagna.jpg", "meat"),
    new Dish("chickencutletsandmashedpotatoes", 
        "Котлеты из курицы с картофельным пюре", 225, "main-course", "280 г", 
        "img/main_course/chickencutletsandmashedpotatoes.jpg", "meat"),
    new Dish("fishrice", "Рыбная котлета с рисом и спаржей", 320, 
        "main-course", "270 г", "img/main_course/fishrice.jpg", "fish"),
    new Dish("pizza", "Пицца Маргарита", 450, "main-course", "470 g", 
        "img/main_course/pizza.jpg", "veg"),
    new Dish("shrimppasta", "Паста с креветками", 340, "main-course", "280 г",
        "img/main_course/shrimppasta.jpg", "fish"), 

    new Dish("saladwithegg", "Корейский салат с овощами и яйцом", 330, 
        "salads-starters", "250 г", "img/salads_starters/saladwithegg.jpg", 
        "veg"),
    new Dish("caesar", "Цезарь с цыпленком", 370, "salads-starters", "220 г",
        "img/salads_starters/caesar.jpg", "meat"),
    new Dish("caprese", "Карпезе с моцареллой", 350, "salads-starters",
        "235 г", "img/salads_starters/caprese.jpg", "veg"),
    new Dish("tunasalad", "Салат с тунцом", 480, "salads-starters", "250 г",
        "img/salads_starters/tunasalad.jpg", "fish"),
    new Dish("frenchfries1", "Картофель ври с соусом Цезарь", 280, 
        "salads-starters", "235 г", "img/salads_starters/frenchfries1.jpg", 
        "veg"),
    new Dish("frenchfries2", "Картофель фри с кетчупом", 260, "salads-starters",
        "235 г", "img/salads_starters/frenchfries2.jpg", "veg"),

    new Dish("orangejuice", "Апельсиновый сок", 120, "beverages", "300 мл",
        "img/beverages/orangejuice.jpg", "cold"),
    new Dish("applejuice", "Яблочный сок", 90, "beverages", "300 мл",
        "img/beverages/applejuice.jpg", "cold"),
    new Dish("carrotjuice", "Морковный сок", 110, "beverages", "300 мл",
        "img/beverages/carrotjuice.jpg", "cold"),
    new Dish("cappuccino", "Капучино", 180, "beverages", "300 мл",
        "img/beverages/cappuccino.jpg", "hot"),
    new Dish("greentea", "Зеленый чай", 100, "beverages", "300 мл",
        "img/beverages/greentea.jpg", "hot"),
    new Dish("blacktea", "Черный чай", 90, "beverages", "300 мл",
        "img/beverages/blacktea.jpg", "hot"),

    new Dish("baklava", "Пахлава", 220, "desserts", "300 гр",
        "img/desserts/baklava.jpg", "medium"),
    new Dish("cheesecake", "Чизкейк", 240, "desserts", "125 гр",
        "img/desserts/cheesecake.jpg", "small"),
    new Dish("chФФecheesecake", "Шоколадный чизкейк", 260, "desserts", "125 гр",
        "img/desserts/chocolatecheesecake.jpg", "small"),
    new Dish("chocolatecake", "Шоколадный торт", 270, "desserts", "140 гр",
        "img/desserts/chocolatecake.jpg", "small"),
    new Dish("donuts", "Пончики (3 штуки)", 350, "desserts", "350 гр",
        "img/desserts/donuts.jpg", "medium"),
    new Dish("donuts_big", "Пончики (6 штук)", 650, "desserts", "700 гр",
        "img/desserts/donuts_big.jpg", "large"),
];

dishes.sort((a, b) => {
    if (a.category === b.category) {
        // сортируем по одному из свойств объекта 
        return a.name.localeCompare(b.name); 
        // при совпадении категории сортируем по имени
    }
});