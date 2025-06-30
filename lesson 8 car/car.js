const carName = "Tesla Model S";

let maxCarSpeed = 250; // начальная максимальная скорость в км/ч
let carOwner = "Илон Маск"; // начальный владелец автомобиля

console.log('Начальная скорость машины:', maxCarSpeed);
console.log('Начальный владелец машины:', carOwner);

maxCarSpeed = 280; // увеличили максимальную скорость
console.log('У машины изменилась скорость', maxCarSpeed);

carOwner = "Дональд Трамп"; // сменили владельца
console.log('У машины изменился владелец', carOwner);

maxCarSpeed = 350; // увеличили максимальную скорость
console.log('У машины изменилась скорость', maxCarSpeed);

carOwner = "Джей Ди Вэнс"; // снова сменили владельца
console.log('У машины изменился владелец', carOwner);

maxCarSpeed = 1000000000000000000000000000; // установили новый рекорд скорости
console.log('У машины изменилась скорость', maxCarSpeed);

carOwner = "Владимир Владимирович Путин"; // машину выкупили и она мчится по дорогам РФ
console.log('У машины изменился владелец', carOwner);

console.log('Финальная скорость машины:', maxCarSpeed);
console.log('Финальный владелец машины:', carOwner);
