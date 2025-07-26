function getSumOfNumbers(number, type = 'odd') {
  // Проверяем, что number является числом
  if (typeof number !== 'number' || isNaN(number)) {
    return NaN;
  }
  
  let sum = 0;
  
  for (let i = 0; i <= number; i++) {
    // Проверяем, нужно ли включать текущее число в сумму
    if (type === 'odd' && i % 2 !== 0) {
      sum += i;
    } else if (type === 'even' && i % 2 === 0) {
      sum += i;
    } else if (type === '') {
      sum += i;
    }
  }
  
  return sum;
}

// Примеры использования
console.log(getSumOfNumbers(10, "odd"));   // 25
console.log(getSumOfNumbers(10, "even"));  // 30
console.log(getSumOfNumbers(10, ""));      // 55
console.log(getSumOfNumbers(10));          // 25 (используется значение по умолчанию 'odd')
console.log(getSumOfNumbers("not a number")); // NaN
