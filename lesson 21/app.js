const myName = 'Ваше Имя';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Дмитрий';
const reasonText = 'мне нравится создавать интерактивные веб-приложения';
const numberOfMonth = 1;

const result = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

let myInfoText = result;

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');

myInfoText = myInfoText.replaceAll('курс', 'КУРС');

console.log(myInfoText);

console.log(`Длина строки: ${myInfoText.length}`);

console.log(`Первый символ: ${myInfoText[0]}`);
console.log(`Последний символ: ${myInfoText[myInfoText.length - 1]}`);

// prompt()
const userName = prompt('Как вас зовут?');
const formattedName = userName.trim().toLowerCase();
alert(`Вас зовут ${formattedName}`);
