function getDivisorsCount(number) {
    // Проверка на отсутствие аргумента или нечисловое значение
    if (number === undefined || typeof number !== 'number') {
        return NaN;
    }
    
    // Проверка на отрицательное или нецелое число
    if (number < 0 || !Number.isInteger(number)) {
        alert('number должен быть целым числом и больше нуля!');
        return NaN;
    }
    
    // Особый случай для 0 (у него бесконечно много делителей)
    if (number === 0) {
        return Infinity;
    }
    
    // Для 1 только один делитель
    if (number === 1) {
        return 1;
    }
    
    let count = 2; // Всегда есть делители 1 и само число
    
    // Проверяем делители от 2 до половины числа
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // Если делитель - квадратный корень, учитываем его один раз
            if (i * i === number) {
                count++;
            } else {
                count += 2; // Учитываем и i, и number/i
            }
        }
    }
    
    return count;
}

// Примеры использования из задания
console.log(getDivisorsCount(4));  // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5));  // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
