const answer1 = Number(prompt('Сколько будет 2 + 2?').trim());
const answer2 = Number(prompt('Сколько будет 2 * 2?').trim());
const answer3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim());
const answer4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim());
const answer5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim());

const rightAnswer1 = 4;
const rightAnswer2 = 4;
const rightAnswer3 = 1;
const rightAnswer4 = 12;
const rightAnswer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

if(answer1 === rightAnswer1){
  correctAnswers++;
} else {
  incorrectAnswers++;
}
if(answer2 === rightAnswer2){
  correctAnswers++;
} else {
  incorrectAnswers++;
}
if(answer3 === rightAnswer3){
  correctAnswers++;
} else {
  incorrectAnswers++;
}
if(answer4 === rightAnswer4){
  correctAnswers++;
} else {
  incorrectAnswers++;
}
if(answer5 === rightAnswer5){
  correctAnswers++;
} else {
  incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);
