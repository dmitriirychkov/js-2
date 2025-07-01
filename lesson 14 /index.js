// JavaScript имеет динамическую типазацию

// 1. К строке
const age = 37;
console.log('number age:', typeof age);
console.log('string age', typeof String(age)); // явное преобразование 

const updateAge = '1' + 37; // неявное преобразование
console.log('updatedAge', typeof updateAge);

// 2. К числу
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript:' typeof experienceInJavaScript);
console.log('number experienceInJavaScript:' typeof Number(experienceInJavaScript)); // явное преобразование 

console.log('experienceInJavaScript', typeof +experienceInJavaScript); // неявное преобразование

console.log('Hello World', Number('Hello World'));

// 3. К boolean

console.log('hello', Boolean('hello'));
console.log('5', Boolean(5));

console.log('null', Boolean('null'));
console.log('undefined', Boolean(undefined));

console.log('0', Boolean('0'));
console.log('', Boolean(''));

//null, undefined, NaN, 0, ''

