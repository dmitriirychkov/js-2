// Вопрос 1: JavaScript появился в 1995 году?
const answer1 = confirm('JavaScript появился в 1995 году?');
if (answer1) {
    alert('Верно');
} else {
    alert('Правильный ответ: Да, JavaScript появился в 1995 году. Название было выбрано для ассоциации с популярным в то время языком Java, хотя сами языки сильно отличаются.');
}

// Вопрос 2: Спецификация JavaScript называется ECMAScript?
const answer2 = confirm('Спецификация JavaScript называется ECMAScript?');
if (answer2) {
    alert('Верно');
} else {
    alert('Правильный ответ: Да, спецификация JavaScript называется ECMAScript, но даже сам Брендан Эйх признавал, что название "ECMAScript" звучит не очень хорошо.');
}

// Вопрос 3: JavaScript был создан за 1 месяц?
const answer3 = confirm('JavaScript был создан за 1 месяц?');
if (answer3) {
    alert('Правильный ответ: Нет, JS был создан за 10 дней (в мае 1995 года Брендан Эйх разработал его за 10 дней)');
} else {
    alert('Верно');
}
