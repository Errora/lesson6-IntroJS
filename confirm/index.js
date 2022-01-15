const rightAnswer1 = true;
const rightAnswer2 = true;
const rightAnswer3 = false;

const answer1 = confirm("JavaScript появился в 1995 году?");
if (answer1 === rightAnswer1) {
  alert('Верно');
} else alert('JavaScript появился в 1995 году');

const answer2 = confirm("Спецификация JavaScript называется ECMAScript?");
if (answer2 === rightAnswer2) {
  alert('Верно');
} else alert('Спецификация JavaScript называется ECMAScript');

const answer3 = confirm("JavaScript был создан за 1 месяц?");
if (answer3 !== rightAnswer3) {
  alert('Верно');
} else alert('JavaScript был создан за 10 дней');
