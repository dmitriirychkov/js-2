// 1. Число
let num = 42;
console.log(Number(num), Boolean(num), String(num)); 

// 2. Строка с числом
let strNum = "123";
console.log(Number(strNum), Boolean(strNum), String(strNum)); 

// 3. Строка с текстом
let text = "Hello";
console.log(Number(text), Boolean(text), String(text)); 

// 4. Булево значение true
let boolTrue = true;
console.log(Number(boolTrue), Boolean(boolTrue), String(boolTrue)); 

// 5. Булево значение false
let boolFalse = false;
console.log(Number(boolFalse), Boolean(boolFalse), String(boolFalse)); 

// 6. Null
let nullValue = null;
console.log(Number(nullValue), Boolean(nullValue), String(nullValue)); 

// 7. Undefined
let undef = undefined;
console.log(Number(undef), Boolean(undef), String(undef)); 

// 8. Объект
let obj = {name: "Dmitrii"};
console.log(Number(obj), Boolean(obj), String(obj)); 
