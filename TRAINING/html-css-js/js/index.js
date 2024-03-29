// DEFAULTS
'use strict';

// PRACTICE

// var name = 'Nick';
// console.log('Hello ' + name);
// if (name.length > 7) {
//     console.log('Wow, you have a REALLY long name!');
// } else {
//     console.log('Your name isn`t very long')
// }

// var lemonChicken = true;
// var beefWithBlackBean = false;
// var sweetAndSourPork = true;

// if (lemonChicken) {
//     console.log('Great! I`m having lemon chicken!');
// } else if (beefWithBlackBean) {
//     console.log('I`m having the beef.');
// } else if (sweetAndSourPork) {
//     console.log('OK, I`ll have the pork.');
// } else {
//     console.log('Well, I guess I`ll have rice then.');
// }

// PRACTICE (page 120, part A )

// const name = 'Harry';

// if (name === 'Harry') {
//     console.log('Hello me!');
// } else {
//     console.log('Hello stranger');
// }

// let type;
// const age = 21;

// if (age <= 11) {
//     type = 'adult';
//     console.log('age :', type);

//   } else {
//     type = 'child';
//     console.log('age :', type);
//   }

// !!!--Тернарная запись,конструкция, похожая на if...else, с упрощенным синтаксисом
// Тернарный оператор должен использоваться в простых операциях присваивания или возврата.

// const type = age >= 21 ? 'adult' : 'child';

// ========================================================================================

// (-----* SWITCH -- operator)

// let cost;
// const toys = 'premium';

// switch (toys) {
//   case "free":
//     cost = 0;
//     break;

//   case "middle":
//     cost = 250;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     break;
// }

// console.log("Toys :", cost);

/*=====================================================================*/

/*+++++++++++++++++++++++ ARRAY && METHOD +++++++++++++++++++++++++++++*/

// Перебор массивов с их вариантами:

// const arr = [5, 7, 9, 12];

// через цикл "for...of"_ это первый вариант:

// for (let elem of arr) {
//     console.log(elem);
// }

// метод и цикл (method()) --some()-- && (cycle)--for...of-- :

// const numbers = [34, 45, 56, 78, 89, 78];

// numbers.some(number => {
//     if (number === 78) {
//         console.log('double number');
//         return true;
//     }
// });

//  Итог цикла, анологичен и идентичн методу  (some) :

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 78) {
//         console.log('double number');
//         break;
//     }
// }
/*============================================================*/

// Проверяем в массиве числа больше 10 и если такие имеются
// возвращаем буль(логическая переменная) "true" :

// const array = [56, 78, 34, 89, 69, 23];

// const result = array.some(element => element > 10);
// console.log('result :', result);

/*=============================================================*/

/*---------map() method*/

/*перебор массива и создания нового на основание изначального*/

// const array = [56, 0, 34, 8, 9, 2];
// const newArray = array.map(element => element +5);

// console.log('array :', array);
// console.log('newArray :', newArray);

/*выбрать из массива числа меньше 10, позволяет метод --filter*/

/*---------filter() method*/

// const filterArray = array.filter( element => element < 10);
// console.log('filterArray :', filterArray);

/*=============================================================*/

/*---------reduce() method*/

// позволяет объединить все элементы массива в одно значение;

/*узнать сумму всех чисел в массиве*/

// Схема работы метода и его алгоритм :

// 1. Цель - найти сумму в массиве 'numbers' ;
// 2. Начальное значение - устанавливаем сами -> 0 ;
// 3. Промежуточное значение - вычисляется на каждой итерации
//    по "правилу" ;
// 4. "Правило" - устанавливаем сами -> пром.знач. + элем.массива ;

// const numbers = [8, 0, 99, 123, 7];

// const total = numbers.reduce((prevValue, currentElem) => {

// Выводит в таблицу с подробным описанием по каждой  итерации :
//     const table = { prevValue, currentElem, 'sum': prevValue + currentElem };
//     console.table(table);

//     return prevValue + currentElem;
// }, 0 );

// console.log('total :', total);

/*=====================================================*/

//(-----*REPETA ALEXANDR--*)

// const products = ['apples', 'grapes','bananas'];

// const indexOfApples = products.indexOf('bananas');
// console.log(indexOfApples);// 2

// (-----* INCLUDES ---) можно использовать для авторизации!!!
// Работает только с массивами НЕ с ОБЪЕКТАМИ
// Только с ПРИМИТИВАМИ(числа, строки и.т.п)

// const users = ['Odry', 'Demfer', 'Chikka'];
// const login = prompt('Введите логин !');

// const isRegistered = users.includes(login);

// if (login === null || login === '') {
//     alert('Отменено пользователем !');
// } else if (isRegistered) {
//     alert('Добро пожаловать !');
// } else {
//     alert('Неверный логин !');
// }

/*========================================================*/

//(-----*REPETA ALEXANDR--*)

// (-----* SPLIT() ---) - это метод не массива,а строки!!!
// Его можно использовать когда нужно будет найти,
// самое длинное слово в строке.

// const message = 'Lorem, ipsum dolor sit amet consectetur adipisicing';
// console.log(message);

// const words = message.split(' ');
// console.log(words);

// const snakeCaseMessage = words.join('__');
// console.log(snakeCaseMessage);

/*=============================================================*/

// (-----* PUSH ---) - добавляет элемент в конец массива.

// const numbers = [1, 2, 3];

// numbers.push(4, 5, 6 ,7);

// console.log(numbers);

/*==============================================================*/

//Сложные типы сравниваются по АДРЕСУ В ПАМЯТИ
// НЕ ПО ЗНАЧЕНИЮ!!!

// const a = [1,2,3];

// const b = [1,2,3];

// console.log(a === b);// false
// console.log(3 === 3);// true

//Создания КОПИИ и отдельного места в памяти
// с ТИПАМИ ПРИМИТИВОВ!!!

// let a = 7;
// let b = a;

// console.log('a :', a);
// console.log('b :', b);

// a = 17;

// console.log('a :', a);
// console.log('b :', b);

// Со сложными ТИПАМИ все наоборот и они передаются
// по ССЫЛКЕ!!!

// let d = [1,2,3];
// let c = d;

// console.log(c === d);

// console.log('d :', d);
// console.log('c :', c);

// d[3] = 4;// один и тот же массив и значения передаются
// ПО ССЫЛКЕ!!!

// console.log('d :', d);
// console.log('c :', c);

// ====================================================================================

// Задачка с применением методов (indexOf && splice)

/*
!-- Найти пятую карточку и перенести ее на место второй в массиве;
*-- Принцып перетягивания карточек в Trello;
*/

/*
АЛГОРИТМ СЛЕДУЮЩИЙ :

1. Найти индекс пятой карточки;
2. Вырезать элемент с таким индексом и сохранить;
3. Вставить ее перед второй;
*/

// const cards = ['card-1', 'card-2', 'card-3', 'card-5', 'card-4'];

// const index = cards.indexOf('card-5');// 3
// const card = cards.splice(index, 1)[0];// [0] - чтобы взять сам элемент и вставить в массив,
// !!!-- а не массив из одного элемента вставить в массив)))

// cards.splice(1, 0, card);

// console.log(cards);

// ===================================================================================

/*ДЕСТРУКТУРИЗАЦИЯ / DESTRUCTURING ASSIGNMENT / и операторы REST & SPREAD */

// !!!--Деструктуризация - это ОСОБЫЙ СИНТАКСИС ПРИСВАИВАНИЯ--!!!
// При котором можно присвоить МАССИВ или ОБЪЕКТ сразу же нескольким переменным,
// разбив его на части;

// let [age, height, grade] = [12,78,45];

// console.log(age); // 12
// console.log(height); // 78
// console.log(grade); // 45

/*Поменять местами значения НЕ ПРИБЕГАЯ к использованию третьей переменной*/

// let a = 13;
// let d = 17;
// [a, d] = [d, a];

// console.log(a, d); // 17 13

// Поместим в переменную !!!{объект}!!! для деструктуризации
// const destructObj = { name: "Player1", x: 50, y: 44 };

// Поставив фигурные скобки {} ,сразу после переменной  МЫ СИГНАЛИЗИРУЕМ что
// РАЗБИРАЕМ ОБЪЕКТ который указываем в правой части выражения
// const {} = destructObj;

// Но, можно и сразу поместить ОБЪЕКТ за " = " и все будет тоже само и более
// упростит работу разроботчику
// const {name, x, y} = { name: 'Player1', x: 50, y: 44 };

// console.log(name, x, y); // Player1 50 44

/*----- REST && SPREAD OPERATOR  (...) --*/

// В зависимости от контекста использования оператор (...) называют по разному,
// ...rest || ...spread
// !!!--REST - объединяет набор значений в один массив
// !!!--SPREAD - разбивает(распыляет, распаковывает) на индивидуальные элементы

// const numbers = [1, 4, 8, 90];
// const letters = ['a', 'h', 'k', 'y', 'p'];

// const concat = [...numbers, ...letters];

// console.log(concat);
/*=================================================================================*/

// Practice - " if/else & switch "

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const promptLabel = `Выберите способ доставки: ${TAKEOUT} - самовывоз, ${COURIER} - курьер, ${POST} - почта.`
// let userChoice = prompt(promptLabel);
// let message;

// if (userChoice === null || userChoice === '') {
//     message = 'Будем рады Вас видеть следующий раз!';
// } else {
//     userChoice = Number(userChoice);

//     switch (userChoice) {
//         case TAKEOUT:
//             message = 'Приходите забирайте товар в отделении!';
//             break;

//         case COURIER:
//             message = 'Вам сегодня будет доставка курьером!';
//             break;

//         case POST:
//             message = 'Доставка будет завтра!';
//             break;

//         default:
//             message = 'Ничего не выбрали,сделайте свой выбор)))';
//             break;
//     }
// }

// alert(message);

// Метод indexOf & includes:

const test = [55, 67, 78, 90, 43];

// indexOf -  позволяет не только узнать имеется ли такой элемент в массиве, но и получить его ИНДЕКС;

if (test.indexOf(78) !== -1) {
  // console.log('yes');
} else {
  // console.log('no');
}

// console.log(test.indexOf(78)); // 2 inx number in array
// console.log(test.indexOf(43)); // 4 inx number in array
// console.log(test.indexOf(4)); // -1 absent

// includes - сообщает имеется ли такой элемент в массиве;

if (test.includes(90, 6)) {
  // второе число '6...3,4,2 итд' - это возможность узнать ЗАНИМАЕМУЮ ПОЗИЦИЮ;
  // console.log('Of course');
} else {
  // console.log('No!!!');
}

// console.log(test.includes(90)); // true
// console.log(test.includes(20)); // false

// Приведение к числу(Number(val)) и проверка на число(Number.isNaN(val)) ->>> (NaN || not NaN)
const isNotNaN = '999';
const validNumber = Number('999'); // приведение типа строки(string) в число(number), краткая запись;
// console.log('До приведения к числу все еще строка:', isNotNaN); // "999"
// console.log(typeof isNotNaN); // string

// console.log('После приведения к числу:', Number(isNotNaN)); // 999
// console.log(typeof Number(isNotNaN)); // number
// console.log('Число,а не NaN:', Number.isNaN(isNotNaN)); // false - это число,а не NaN;

const thisNaN = Number('qwerty');
// console.log('Строка не являеется числом:', thisNaN); // NaN
// console.log('Это NaN, а не число:', Number.isNaN(thisNaN)); // true - это NaN,а не число;

// Шаблонные строки с вложенной ИНТЕРПОЛЯЦИЕЙ с использованием валидного выражения,например,вызов функции:
const up = str => str.toUpperCase();
let upStr = 'string';

let str = `this is ${up(`${upStr}s`)} in uppercase`;
// console.log(str);

// Veriable scope, practice with verification

const global = 'global';

if (true) {
  const blockA = 'block A';

  // Видим глобальную + локальную A
  // console.log('Global scope:', global); // 'global'
  // console.log('Local scope:', blockA); // block A

  /*
   * Переменные blockB и blockC не найдены в доступных областях видимости.
   * Будет ошибка обращения к переменной.
   */
  // console.log(blockB); // ReferenceError: blockB is not defined
  // console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = 'block B';

    // Видим глобальную + внешнюю A + локальную B
    // console.log('Global scope:', global); // global
    // console.log('Outer scope:', blockA); // block A
    // console.log('Local scope:', blockB); // block B

    /*
     * Переменная blockC не найдена в доступных областях видимости.
     * Будет ошибка обращения к переменной.
     */
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = 'block C';

  // Видим глобальную + локальную C
  // console.log('Global scope:', global); // global
  // console.log('Local scope:', blockC); // block C

  /*
   * Переменные blockA и blockB не найдены в доступных областях видимости.
   * Будет ошибка обращения к переменной.
   */
  // console.log(blockA); // ReferenceError: blockA is not defined
  // console.log(blockB); // ReferenceError: blockB is not defined
}

// Видим только глобальную
// console.log('Global scope:', global); // global

/*
 * Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
 * Будет ошибка обращения к переменной.
 */
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined


// Work of the cycle ('for') analysis of what is happening inside;
// Работа цикла 'for' разбор происходящего внутри
const target = 3;
let sum = 0;

for (let i = 1; i <= target; i += 1) {
  console.log('sum:', sum);

  sum += i; // statement expression // тело цикла (код);

  console.log(' i :', i);
}

console.log('total sum:', sum);

// let i = 0 -- переменная-счетчика, проверяется во время выполнения цикла;
// i <= target -- условие(условное выражение) пока оно "true" выполняется тело цикла;
/*
 пост-выражение i += 1 (i = i + 1) -- используется для обновления переменной-счетчика let i = 0,
 операция инкремента(приращения счетчика) и увеличивает значение в переменной let i на 1;
*/
// После выполнения тела цикла в переменной let i = 0 СОХРАНЯЕТСЯ ЗНАЧЕНИЕ -->>> 1;
// На следующей ИТЕРАЦИИ цикла, переменная-счетчик инициализируется новым значением,
// увеличивая его еще на единицу и.т.д


