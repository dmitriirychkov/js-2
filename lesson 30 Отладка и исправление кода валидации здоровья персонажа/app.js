let health = prompt('Введите число параметра "здоровье" для персонажа');

// Преобразуем строку в число
health = Number(health);

console.log('Введенное значение:', health);
console.log('Тип данных:', typeof health);

if (health <= 0 || isNaN(health)) {
    console.log('Параметр "здоровье" должен быть больше нуля!');
} else {
    console.log('Параметр "здоровье" равен ' + health);
}
