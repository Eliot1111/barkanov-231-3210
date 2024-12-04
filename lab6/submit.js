document.querySelector('.form-section').addEventListener(
    'submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        let missingMessage = '';

        if (!currentSelect.soups && !currentSelect.mainCourse
            && !currentSelect.beverages && !currentSelect.saladsStarters) {
            missingMessage = 'Ничего не выбрано. Выберите блюда для заказа';
        } else if (!currentSelect.beverages) {
            missingMessage = 'Выберите напиток';
        } else if (!currentSelect.soups && !currentSelect.mainCourse
             && !currentSelect.saladsStarters) {
            missingMessage = 'Выберите главное блюдо/салат/стартер';
        } else if (currentSelect.saladsStarters && !currentSelect.soups
             && !currentSelect.mainCourse) {
            missingMessage = 'Выберите суп или главное блюдо';
        } else if (!currentSelect.mainCourse && (currentSelect.beverages 
            || currentSelect.dessert)) {
            missingMessage = 'Выберите главное блюдо';
        } 

        // Если есть сообщение об ошибке, показываем уведомление
        if (missingMessage) {
            showNotification(missingMessage);
        } else { 
            event.target.submit();
        }
    });

