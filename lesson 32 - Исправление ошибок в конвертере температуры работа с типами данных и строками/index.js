const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log('Введенное значение:', temperatureInCelsius, 'Тип:', typeof temperatureInCelsius); // Отладочное сообщение

// Преобразуем в число для сравнения
const temperatureNumber = Number(temperatureInCelsius);

if (temperatureNumber === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureNumber > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = temperatureNumber * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
