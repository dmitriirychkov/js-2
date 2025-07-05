// Сохраняем данные существующего пользователя
const existingUserLogin = "the_best_user";
const existingUserPassword = "12345678";

// Запрашиваем логин и пароль у пользователя, убирая лишние пробелы
const userLogin = prompt("Введите логин").trim();
const userPassword = prompt("Введите пароль").trim();

// Проверяем соответствие введенных данных
if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert("Логин и (или) Пароль введены неверно!");
}
