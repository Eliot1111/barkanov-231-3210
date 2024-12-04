document.addEventListener('DOMContentLoaded', () => {
    for (let dish of dishes) {
        let dishCard = document.createElement('div');
        dishCard.className = "menu-item";
        dishCard.setAttribute("data-dish", dish.keyword);
        dishCard.setAttribute("data-kind", dish.kind);
        dishCard.style.flexFlow = "column";
    
        let dishImgDiv = document.createElement('div');
        dishImgDiv.className = "img-container";
    
        let dishImg = document.createElement('img');
        dishImg.className = "dish-img";
        dishImg.src = dish.image;
    
    
        let dishPrice = document.createElement('p');
        dishPrice.textContent = dish.price;
        dishPrice.className = "dish-price";
    
        let dishName = document.createElement('p');
        dishName.textContent = dish.name;
        dishName.className = "dish-name";
    
        let dishMass = document.createElement('p');
        dishMass.textContent = dish.mass;
        dishMass.className = "dish-mass";
    
        let addButton = document.createElement("button");
        addButton.textContent = "Добавить";
        addButton.className = "btn";
    
        addButton.addEventListener("click", addDishToForm);
    
        let section = document.body.children[1]
            .querySelector("." + dish.category);
        let con = section.querySelector(".menu-item-container");
        
        con.append(dishCard);
        dishCard.append(dishImgDiv);
        dishImgDiv.append(dishImg);
        dishCard.append(dishPrice);
        dishCard.append(dishName);
        dishCard.append(dishMass);
        dishCard.append(addButton);
    }
});