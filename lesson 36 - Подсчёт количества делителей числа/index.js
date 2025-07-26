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
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    
    return count;
}
