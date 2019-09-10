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


