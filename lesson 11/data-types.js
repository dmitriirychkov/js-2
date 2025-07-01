// Числовой тип 
const age = 37;
console.log('age', age, typeof age); // Выведет: age 20 number

// Строковый тип 
const name = 'Dmitrii';
console.log('name', name, typeof name); // Выведет: name Dmitrii string

// Логический тип - boolean
const isStudent = true;
console.log('isStudent', isStudent, typeof isStudent); // Выведет: isStudent true boolean

// Null 
const emptyValue = null;
console.log('emptyValue', emptyValue, typeof emptyValue); // Выведет: emptyValue null object

// Undefined 
const notDefined = undefined;
console.log('notDefined', notDefined, typeof notDefined); // Выведет: notDefined undefined undefined

// Объект 
const person = { firstName: 'Дмитрий', lastName: 'Рычков' };
console.log('person', person, typeof person); // Выведет: person {firstName: "Дмитрий", lastName: "Рычков"} object

// BigInt 
const bigNumber = 9007199254740991n;
console.log('bigNumber', bigNumber, typeof bigNumber); // Выведет: bigNumber 9007199254740991n bigint

// Symbol 
const id = Symbol('id');
console.log('id', id, typeof id); // Выведет: id Symbol(id) symbol
