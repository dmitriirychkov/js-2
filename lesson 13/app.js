// Группа 1: let переменные (возраст)
let ageOfPerson1 = 18;
let ageOfPerson2 = '28';
ageOfPerson2 = ageOfPerson1;
console.log('ageOfPerson2:', ageOfPerson2, typeof ageOfPerson2);

// Группа 2: let переменные (имя животного)
let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log('nameOfAnimal2:', nameOfAnimal2, typeof nameOfAnimal2);

// Группа 3: const переменные (язык программирования)
const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log("Переменную с const переопределить нельзя");
console.log('bestProgrammingLanguage1:', bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log('bestProgrammingLanguage2:', bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

// Группа 4: let переменные (начальное значение)
let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log('initialValue2:', initialValue2, typeof initialValue2);

// Группа 5: var переменные (программист на JS)
console.log("var является устаревшим");
let isJavascriptProgrammer1 = true;
let isJavascriptProgrammer2 = false;
isJavascriptProgrammer2 = isJavascriptProgrammer1;
console.log('isJavascriptProgrammer2:', isJavascriptProgrammer2, typeof isJavascriptProgrammer2);

// Группа 6: let переменные (приветствие)
let hellotext1 = 'Hello!';
let hellotext2 = 'Привет!';
hellotext2 = hellotext1;
console.log('hellotext2:', hellotext2, typeof hellotext2);
