// Вопросы теста
const question1 = "1. Сколько будет 2 + 2?";
const question2 = "2. Сколько будет 2 * 2?";
const question3 = "3. У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const question4 = "4. У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const question5 = "5. Сколько будет 2 + 2 * 2?";

// Правильные ответы
const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5 = 6;

// Счетчики правильных и неправильных ответов
let correctAnswers = 0;
let incorrectAnswers = 0;

// Задаем вопросы и проверяем ответы
const userAnswer1 = Number(prompt(question1));
if (userAnswer1 === answer1) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

const userAnswer2 = Number(prompt(question2));
if (userAnswer2 === answer2) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

const userAnswer3 = Number(prompt(question3));
if (userAnswer3 === answer3) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

const userAnswer4 = Number(prompt(question4));
if (userAnswer4 === answer4) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

const userAnswer5 = Number(prompt(question5));
if (userAnswer5 === answer5) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

// Выводим итоговые результаты
alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}`);
