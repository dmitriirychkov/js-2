// Запрашиваем у пользователя текст и слово для поиска
const userText = prompt("Введите текст").trim();
const fragmentOfText = prompt("Введите слово из текста").trim();

// Находим индекс фрагмента в тексте
const indexOfFragment = userText.indexOf(fragmentOfText);

// Обрезаем текст до этого индекса. Если фрагмент не найден, то substring вернет пустую строку
const result = userText.substring(0, indexOfFragment + fragmentOfText.length);

// Выводим результат 
alert(`Результат: ${result}`);
