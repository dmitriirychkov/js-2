// 1. Function Declaration
function getName1(name) {
    return `Имя равно ${name}`;
}

// 2. Function Expression
const getName2 = function(name) {
    return `Имя равно ${name}`;
};

// 3. Arrow Function Expression
const getName3 = (name) => `Имя равно ${name}`;

// Вызов функций и вывод результатов в консоль
console.log(getName1("Евгения"));  // Имя равно Евгения
console.log(getName2("Дмитрий"));  // Имя равно Дмитрий
console.log(getName3("Ирина"));  // Имя равно Ирина
