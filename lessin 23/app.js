// Запрос данных у пользователя
const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки').trim());
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки').trim());

// Обрезка строки
const slicedString = userString.slice(startSliceIndex, endSliceIndex);

// Вывод результата
alert(`Результат: ${slicedString}`);
