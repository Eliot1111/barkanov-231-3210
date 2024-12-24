function createAlert() {
    const alert = document.createElement('div');
    alert.id = 'alert';

    const alertText = document.createElement('p');
    alertText.id = 'alert-p';

    const alertBtn = document.createElement('button');
    alertBtn.id = 'alert-btn';
    alertBtn.textContent = 'Окей👌';

    alert.appendChild(alertText);
    alert.appendChild(alertBtn);
    document.body.appendChild(alert);
}

//////////////////////////////////////////

function alertBeforeSubmit(text) {
    createAlert();
    document.getElementById('alert-p').textContent = text;

    document.getElementById('alert-btn').onclick = function() {
        document.getElementById('alert').remove();

    };
}


/////////////////////////////////////////






const form = document.getElementById('main-form');

form.addEventListener('submit', function(event) {

    let soup = null;
    let mainCourse = null;
    let drink = null;
    let dessert = null;
    let salad = null;
    
    if(localStorage.getItem('soup') !== null) {
        soup = localStorage.getItem('soup');
    }
    if(localStorage.getItem('main-course') !== null) {
        mainCourse = localStorage.getItem('main-course');
    }
    if(localStorage.getItem('drink') !== null) {
        drink = localStorage.getItem('drink');
    }
    if(localStorage.getItem('dessert') !== null) {
        dessert = localStorage.getItem('dessert');
    }
    if(localStorage.getItem('salad') !== null) {
        salad = localStorage.getItem('salad');
    }
    
    console.log(drink);

    if (soup == null && mainCourse == null && drink == null && salad == null && dessert == null) {
        event.preventDefault();
        alertBeforeSubmit('Ничего не выбрано! Выберите блюда для заказа!');

    } else if (drink == null) {
        event.preventDefault();
        alertBeforeSubmit('Выберите напиток!');

    } else if (soup != null && (mainCourse == null && salad == null)) {
        event.preventDefault();
        alertBeforeSubmit('Выберите главное блюдо/салат/стартер!');

    } else if (salad != null && (soup == null && mainCourse == null)) {
        event.preventDefault();
        alertBeforeSubmit('Выберите суп или главное блюдо!');

    } else if ((drink != null || dessert != null) && soup == null && mainCourse == null && salad == null) {
        event.preventDefault();
        alertBeforeSubmit('Выберите главное блюдо!');
    } else {
    event.preventDefault();
    let formData = new FormData(form);

    fetch('https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=', {          //here goes your api
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            document.alert('Order successfully created:', data);
        })
        .catch(error => {
            document.alert('Error creating order:', error);
        });
}
});