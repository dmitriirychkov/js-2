const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0; // Инициализируем нулем

console.log('Начало расчета зарплат'); // Добавляем лог для отладки

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
    console.log(`Зарплата разработчика ${i+1} после вычета налогов: ${salaryWithTax}`); // Лог промежуточных значений
    totalJuniorDevelopersSalary += salaryWithTax;
}

console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
