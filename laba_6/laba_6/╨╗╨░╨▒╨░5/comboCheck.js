function comboAlert(errorMessage) {
    const comboAlert = document.getElementById('combo-alert');
    const comboAlertText = document.getElementById('combo-alert-text');
    const comboAlertButton = document.getElementById('combo-alert-ok');

    comboAlertText.textContent = errorMessage;
    comboAlert.style.display = 'flex';

    comboAlertButton.addEventListener('click', function () {
        comboAlert.style.display = 'none';
    });
}


document.getElementById('main-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let comboCheck = '';

        if (!order.soups && !order['main_course'] && !order.beverages && !order.saladsStarters) {
            comboCheck = 'Ничего не выбрано. Выберите блюда для заказа';
        } else if (!order.beverages) {
            comboCheck = 'Выберите напиток';
        } else if (!order.soups && !order['main_course'] && !order.saladsStarters) {
            comboCheck = 'Выберите главное блюдо/салат/стартер';
        } else if (order.saladsStarters && !order.soups && !order['main_course']) {
            comboCheck = 'Выберите суп или главное блюдо';
        } else if (!order['main_course'] && (order.beverages || order.dessert)) {
            comboCheck = 'Выберите главное блюдо';
        } 

        // Если есть сообщение об ошибке, показываем уведомление
        if (comboCheck) {
            comboAlert(comboCheck);
        } else { 
            event.target.submit();
        }
    });