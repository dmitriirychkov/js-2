const myName = 'Ваше Имя';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Дмитрий';
const reasonText = 'мне нравится создавать интерактивные веб-приложения';
const numberOfMonth = 1;

const result = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

// 1. Сохраняем текст в переменную с let
let myInfoText = result;

// 2. Заменяем все "JavaScript" на "javascript"
myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');

// 3. Заменяем все "курс" на "КУРС"
myInfoText = myInfoText.replaceAll('курс', 'КУРС');

// 4. Выводим итоговую строку в консоль
console.log(myInfoText);

// 5. Выводим длину строки
console.log(`Длина строки: ${myInfoText.length}`);

// 6. Выводим первый и последний символы
console.log(`Первый символ: ${myInfoText[0]}`);
console.log(`Последний символ: ${myInfoText[myInfoText.length - 1]}`);
