// 1. Найти наибольшее из трёх чисел
const number1 = Number(prompt(" Введите первое число:"));
const number2 = Number(prompt("Введите второе число:"));
const number3 = Number(prompt("Введите третье число:"));
console.log("Самое большое число:", Math.max(number1, number2, number3));

// 2. Проверить возраст (границы включены)
const age = Number(prompt(" Введите возраст:"));
console.log("Возраст от 18 до 60 включительно:", age >= 18 && age <= 60);

// 3. Проверить username и пароль
const username = "student";
const password = "javascript123";
const enteredUsername = prompt(" Введите username:");
const enteredPassword = prompt("Введите пароль:");
if (enteredUsername === username && enteredPassword === password) {
  console.log("Вы успешно вошли в систему");
} else {
  console.log("Некорректный username или пароль");
}

// 4. Тест из пяти вопросов
const answer1 = "Париж";
const answer2 = "4";
const answer3 = "2026";
const answer4 = "Иссык-Куль";
const answer5 = "Тихий океан";
let correctAnswers = 0;
if (prompt("Столица Франции?").trim().toLowerCase() === answer1.toLowerCase()) correctAnswers++;
if (prompt("Сколько будет 2 + 2?").trim() === answer2) correctAnswers++;
if (prompt("Сейчас какой год?").trim().toLowerCase() === answer3.toLowerCase()) correctAnswers++;
if (prompt("Какое самое большое озеро в Кыргызстане?").trim().toLowerCase() === answer4.toLowerCase()) correctAnswers++;
if (prompt("Какой океан самый большой?").trim().toLowerCase() === answer5.toLowerCase()) correctAnswers++;
console.log("Количество правильных ответов:", correctAnswers);

// 5. Проверить, делится ли число на 2 или на 7
const divisibleNumber = Number(prompt(" Введите число которое делятся на 2 или на 7:"));
console.log(divisibleNumber % 2 === 0 || divisibleNumber % 7 === 0 ? "Подходит" : "Не подходит");

// 6. Скидка 10%, если сумма покупки больше 5000
const purchase = Number(prompt("Введите сумму покупки:"));
console.log("Сумма к оплате:", purchase > 5000 ? purchase * 0.9 : purchase);

// 7. Проверить, является ли символ английской гласной
const letter = prompt(" Введите один символ:").trim().toLowerCase();
console.log(["a", "e", "i", "o", "u"].includes(letter));

// 8. Вычислить процент от числа
const baseNumber = Number(prompt(" Введите число:"));
const percent = Number(prompt("Введите процент:"));
console.log("Результат:", baseNumber * percent / 100);