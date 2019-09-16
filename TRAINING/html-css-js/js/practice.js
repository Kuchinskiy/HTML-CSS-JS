'use strict';

/*
#2. Генератор случайных строк

Напишите генератор случайных строк.Чтобы выбирать из этой строки случайную букву, можно
использовать метод  "Math.floor(Math.random() *alphabet.length)", как генератор случайных
букв из строки(цифр/букв). 
Затем, воспользовавшись квадратными скобками, можно получить символ по этому индексу.
Начните создавать случайную строку с пустой строки
(var randomString = "").
После добавьте цикл while и при
каждом его повторе добавляйте в строку новый случайный
символ — до тех пор, пока длина строки randomString не пре-
высит шесть символов (или любой другой длины на ваш выбор).
Добавлять символ в конец строки можно с помощью оператора  " += ".
*/


// Вариань - 1 :

// let randomString = '';
// const alphabet = 'abcdfefghijklmnopqrstuvwxyz';


// while (randomString.length < 3) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);



// Вариант - 2 :

// function makeId(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//  }
 
//  console.log(makeId(3));

/*============================================================================*/

// EXCHANGE CURRENCY

// const dollarsInEuro = 1.25;
// const roublesInDollar = 60;

// const euros = 1000;
// const dollars = euros * dollarsInEuro; // => 1250
// const rubles = dollars * roublesInDollar; // => 75000

// console.log(rubles);

/*======================================================================================*/

// PATTERN STRINGS and INTERPOLATION

// let greeting = 'Hello';
// let firstName = 'Jeffrey';

// let intro = 'Here is important information about your account security.';
// let info = "We couldn't verify you mother's maiden name.";

// console.log(`${greeting}, ${firstName}!`);
// console.log(`${intro}\n${info}`);

/*==========================================================================================*/

// (--cycle : while  &&  for *---) -->  practice

// Вывести числа от 4 до 400  на экран или в консоль используя цикл;

// let out = document.getElementById('out');
// let tmp = '';

// for (let j = 4; j <= 400; j = j + 1) {
//     tmp = tmp + j + '<br>'; // для ввывода на экран
//     console.log(j);
// }

// out.innerHTML = tmp; // для экрана

// ==========================================================

//  Вывести числа в последовательности : 4, 7, 10, 13 с помощью цикла;

// for (let j = 4; j <= 13; j = j + 3) {
//     console.log(j);
// }

// ===========================================================

// Ввысти числа от 654 до нуля через цикл;

// for (let j = 654; j >= 0; j = j - 1) {
//     console.log(j);
// }

// ===========================================================

// Вывести числа -4, -3, -2, ...  0, 2, 4, 6 ... до 100;

// for (let i = -4; i <= 100; i = i + 1) {
//     console.log(i);
// }

// ===========================================================

// С помощью цикла выведите на экран таблицу умножения на 7  от 1  до  9;


// let out = document.getElementById('out');
// let tmp = '';

// for (let j = 1; j <= 9; j = j + 1) {
//     tmp = tmp +7 +' * '+j+' = '+7*j + '<br>'; // для ввывода на экран
// }

// out.innerHTML = tmp; // для экрана

// ==============================================================

/*-----* function -- fn-*/

// ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ :

// const add = function (a, b) {    // <-- в () это локальнные переменные,которые 'fn' принимает как ПАРАМЕТРЫ 
    // console.log(a);
    // console.log(b);

    // const sum = a + b;
    // console.log('sum :', sum);
    // code
    // console.log('Вызов функции add!');

    // return sum;
// }

// add(2, 3); // вызов функции
// осуществляется за счет правильного синтаксиса ()

// во время вызова все что записанно в () - это АРГУМЕНТЫ ,
// т.е значения переменных объявленных ранее в параметрах;

// console.log('Результат 7 + 7 :', add(7, 7));
// console.log('Результат 3 + 4 :', add(3, 4));

// const result = add(7, 8); // результат функции с вызовом 
// ? -- 'return' имеет необходимость быть записанной в ПЕРЕМЕННУЮ!!!

// console.log('Результат 7 + 8 :', result);


// Объявление функции как она есть  --> (fn) FUNCTION

// function resA(x, y) {
//    const num = x + y;

//    console.log('result :', num);
//    return num;
// }
// resA(9, 9);

// console.log('fn :', resA);  --> // функция без вызова  --> ()
// отобразится в ОРИГИНАЛЕ как под капотом она записана!!!

// =========================================================================================

/*
 * Функция сложения произвольного к-ва чисел
 */

// const addNumber = function () {
//     let total = 0;

//     for (let j = 0; j < arguments.length; j++) {
//         total += arguments[j];
//     }

//     return total;
// }

// console.log(addNumber(1, 2, 2)); // 5
// console.log(addNumber(1, 2, 3, 4, 5)); // 15
// console.log(addNumber(1, 2, 3, 7, 8, 9)); // 30

// ==============================================================

/*
! - Преобразование 'arguments'(псевдомассив) в массив c извлечением
 * первого числа как множителя, но без выполнения вычеслений(умножения)
*/

const addNumber = function () {
    // const args =Array.from(arguments);
    // или
    let args =Array.from(arguments);

   console.log(args);
   const mult = args[0];
//    args.shift();
   // или 
    args = args.slice(1);

   console.log(args);
}

console.log(addNumber(7, 1, 2, 2)); // 5
console.log(addNumber(10, 1, 2, 3, 4, 5)); // 15
console.log(addNumber(15, 1, 2, 3, 7, 8, 9));