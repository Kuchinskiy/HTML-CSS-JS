"use strict";

/*-----setInterval--*/

// СЧЕТЧИК

// let count = 0;

// setInterval (() => {
//     console.log(count++);
// }, 1000);

/*-----setTimeout--*/

// let a = 10;

// setTimeout(() => {
//     a = 121;
//     console.log(a);
// }, 2000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/*================================BOOTCAMP#12-14=================================*/

// module-01-task01

/*
 * Объяви две переменные хранящие информацию о товаре: name и price
 * Присвой переменным следующие характеристики товара (сразу при объявлении)
 * название: Генератор защитного поля
 * цена: 1000
 * Присвой товару новую цену - 2000
 * Используя шаблонную строку выведи в консоли информацию о товаре,
 * получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

// const name = 'Генератор защитного поля';
// let price = 1000;

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// --------------------------------------------------------------------------------

// module-01-task02

/*
 * Есть три переменные содержащие составляющие даты: день, месяц, и год.
 *
 * Создай переменную date, в которую запиши полную дату в формате день\месяц\год
 * Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048,
 * за бортом отличная погода!"
 *
 * PS: используя шаблонные строки.
 */

// const day = 17;
// const month = 10;
// const year = 2048;

// const date = `${day}\\${month}\\${year}`;
// console.log(date);

// const message = `"Доброе утро, сегодня ${date}, за бортом отличная погода!"`
// console.log(message);

// -------------------------------------------------------------------------------------

// module-01-task03

/*
 * Есть три переменные name, date и roomType, содержащие имя гостя,
 * дату его прибытия на отдых и тип комнаты отеля.
 *
 * Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
 * "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
 */

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';

// const message = `" ${name} прибывает на отдых ${date} в ${roomType} "`;

// console.log(message);

// ---------------------------------------------------------------------------------------

// module-01-task04

/*
 * Напиши скрипт который:
 *
 * При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
 * Если введенное значение совпадает со значением переменной correctPassword,
 * показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
 * Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
 * Если что-то другое — показывать alert с сообщением
 * 'Неверный пароль, активирована система защиты!'
 */

// const correctPassword = 'jqueryismyjam';

// const passLogin = prompt('Введите пароль доступа');

// if (passLogin === null || passLogin === ' ') {
//     alert('Была нажата отмена!');
// } else if (passLogin === correctPassword) {
//     alert('Доступ в секретный бункер разрешен!');
// } else {
//     alert('Неверный пароль, активирована система защиты!');
// }

// -----------------------------------------------------------------------------------------------------

// module-01-task05

/*
 * Необходимо написать скрипт проверки количества товаров на складе.
 * Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
 *
 * Сравни эти значения и по результатам выведи:
 *
 *-    Если в заказе указано число, превышающее количество товаров на складе,
 * то выведи сообщение "На складе недостаточно твоаров!"
 *-    Если в заказе указано число товаров, равное количеству товара на складе,
 * то выведи сообщение "Вы забираете весь товар cо склада!"
 *-    В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
 *
 * Проверь работоспособность кода с разными значениями переменной ordered.
 */

// const total = 100;     // количество товаров на складе
// const ordered = 50;   // единиц товара в заказе

// if (total < ordered) {
//     console.log('На складе недостаточно твоваров!');
// } else if (total === ordered) {
//     console.log('Вы забираете весь товар cо склада!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

/*
 * Второй вариант "упрощенный" за счет того,что клиент имеет только два варианта
 * оформления заказа:
 *  - 1).Если,количество равное до количества на складе,и если
 *  - 2).не превышает максимального кол-ва.
 * В ином случае он информирован,что товара на складе недостаточно.
 */

// if (total >= ordered) {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// } else {
//     console.log('На складе недостаточно твоваров!');
// }

/*
 * -- В простых операциях присваивания конструкцию
 * -- if...else можем заменить на тернарный оператор.
 */

// const total = 100;

// const ordered = total >= 50 ? 'Заказ оформлен, с вами свяжется менеджер'
// : 'На складе недостаточно твоваров!';

// console.log(ordered);

// -------------------------------------------------------------------------------------------------------

// module-01-task06

/*
 *-- Напиши скрипт который:

 *-- Через prompt cпрашивает 'Введите произвольное целое число'
 *-- Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
 *-- Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
 *-- Если(иначе) посетитель вводит что либо другое — показывать через
 *-- alert 'Необходимо было ввести целое число!'
*/

// const randomNumber = Number(prompt('Введите произвольное целое число'));
// console.log(randomNumber);  // Number --> возвращает ( 0 )

// if (randomNumber === 0) {
//     alert('Ну и ладно, пока!');
// } else if (randomNumber) {
//     alert('Спасибо!');
// } else {
//     alert('Необходимо было ввести целое число!');
// }

// !!! Number - <<<-- это ОБЪЕКТ, который представляет число любого вида !!! //
// ?!? Все числа JavaScript являются 64-битными числами с плавающей точкой ?!? //

// ------------------------------------------------------------------------------------------------------------

// module-01-task07

/*
 * В переменную value записывается случайное число.
 * 
 * Объяви переменную type, в которую, используя ветвления запиши строку:
 *   - "even" если value -->> четное
 *   - "odd" если value -->> нечетное(непарный)

 * PS: используй тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// const type = value % 2 === 0 ? 'even' : 'odd';  // 'even'(true)  'odd'(false)

// console.log(`${value} is ${type}`);

// Соответственно если остаток от деления на 2 равно 0 то число чётное.

// Четные(парные) числа делятся на два без остатка - это означает,
// что остаток от деления на 2 любого четного числа будет равен нулю.
// 10 % 2 === 0  <<-||->>  100 % 2 === 0

// ---------------------------------------------------------------------------------------------------------

// module-01-task$$ -->> bonus task -->> with function

/*
* Создайте генератор случайных фраз(дразнилок) с помощью функции(используйте функциональные выражения).
* В качестве переменной используйте название -- pickRandomWord(название функции).

* С помощью набора слов в массивах(любые), напишите новую функцию которая будет генирировать
* слова в одну строку,тем самым создавая единое предложение.Создайте еще одну переменную 
* которая будет генерировать слова в строку,присвоив название --randomString.
* Дайте название второй функции -- generateRandomInsult.

* При вызове функции на экране должна быть фраза изменяющееся при каждом обновлении страницы.

* P.S Используйте шаблонные строки.
*/

// const pickRandomWord = function (words) {
//   return words[Math.floor(Math.random() * words.length)];
// };

// const generateRandomInsult = function () {
//   const randomBodyParts = ["глаз", "нос", "череп", "ухо", "зуб"];
//   const randomAdjectives = ["вонючая", "унылая", "дурацкая", "идиотская"];
//   const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

//   const randomString = `У тебя ${pickRandomWord(randomBodyParts)}
//   словно ${pickRandomWord(randomAdjectives)} ${pickRandomWord(randomWords)}!!!`;

//   return randomString;
// };

// console.log(generateRandomInsult());

// ----------------------------------------------------------------------------------------------------

// module-01-task08

/*
 * Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
 * Проверять что пользователь может ввести что-то кроме 1-5 не нужно!

 * Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
 * В противном случае, используя switch, вывести alert с одной из строк:

 * 1 - "Каталог хостелов" 
 * 2 - "Каталог бюджетных отелей"
 * 3 - "Каталог отелей ***"
 * 4 - "Каталог отелей ****"
 * 5 - "Каталог лучших отелей"
*/

// const searchHotel = Number(
//   prompt("Введите число от 1 до 5 сделайте ваш выбор :")
// );

// const hostelCatalogue = 1;
// const cheapHotelCatalogu = 2;
// const threeStarHotelCatalogue = 3;
// const fourStarHotelCatalogue = 4;
// const bestHotelCatalogue = 5;

// switch (searchHotel) {

//   case hostelCatalogue:
//     alert("Каталог хостелов");
//     break;

//   case cheapHotelCatalogu:
//     alert("Каталог бюджетных отелей");
//     break;

//   case threeStarHotelCatalogue:
//     alert("Каталог отелей ***");
//     break;

//   case fourStarHotelCatalogue:
//     alert("Каталог отелей ****");
//     break;

//   case bestHotelCatalogue:
//     alert("Каталог лучших отелей");

//   default:
//     alert("Очень жаль, приходите еще!");
//     break;
// };

// ---------------------------------------------------------------------------------------------------

// module/task-01/total-01

/*
* Напиши скрипт имитирующий авторизацию администратора в панели управления.

* Есть переменная message в которую будет записано сообщение о результате. 
* При загрузке страницы у посетителя запрашивается пароль через prompt:

* Если нажали Cancel, записать в message строку 'Отменено пользователем!'
* В противном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, 
* записать в message строку 'Добро пожаловать!'
* В противном случае, то есть если ни одно из предыдущих условий не выполнилось, 
* записать в message строку 'Доступ запрещен, неверный пароль!'

* После всех проверок вывести в alert значение переменной message.
*/

// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;

// const userPassword = prompt('Введите ваш пароль :');

// if (userPassword === null || userPassword === '') {
//   message = 'Отменено пользователем!';
// } else if (userPassword === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// };

// alert(message);

// ----------------------------------------------------------------------------------------------------

// module/task-01/total-02

/*
*На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
* Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. 
* Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

* При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь 
* хочет купить и сохранить в переменную.
* Напиши скрипт который:

* Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
* В противном случае, рассчитать общую цену(сумму) заказа и сохраняет в переменной totalPrice.

* Проверяет сможет ли пользователь оплатить заказ:

* если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 
* 'Недостаточно средств на счету!'.
* в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 
* 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'
*/

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;

// const userChoiceNumber = prompt("Какое количество дроидов покупаете?");

// if (userChoiceNumber === null) {
//   console.log("Отменено пользователем!");
// } else if ((totalPrice = Number(userChoiceNumber) * pricePerDroid)) {
//   if (totalPrice > credits) {
//     console.log("Недостаточно средств на счету!");
//   } else {
//     console.log(
//       `Вы купили ${userChoiceNumber} дроидов, на счету осталось ${credits -
//         totalPrice} кредитов`
//     );
//   }
// };

// ------------------------------------------------------------------------------------------------------

// module/task-01/total-03

/*
* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
* Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
* Название страны должно начинатся с заглавной буквы, а остальные символы записаныe строчными.

* Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
* Формат сообщения:  'Доставка в [страна] будет стоить [цена] кредитов';

* Но доставка есть не везде, если указанной страны нет в списке, то выводи в сообщение:
* 'В вашу страну доставка не доступна';

* Ниже приведен список стран и стоимость доставки:

*  -->>  китай - 100 кредитов
*  -->>  южная америка - 250 кредитов
*  -->>  австралия - 170 кредитов
*  -->>  индия - 80 кредитов
*  -->>  ямайка - 120 кредитов

* PS: используй switch
*/

// const deliveryInChina = "китай";
// const deliveryInUsa = "америка";
// const deliveryInAustralia = "австралия";
// const deliveryInIndia = "индия";
// const deliveryInJamaica = "ямайка";

// const costInChina = 100;
// const costInUsa = 250;
// const costInAustralia = 170;
// const costInIndia = 80;
// const costInJamaica = 120;

// const deliveryCountry = prompt("Укажите вашу страну для доставки :");

// if (deliveryCountry === null) {
//     alert("Надеемся следующий раз,Вы сделаете выбор!");
//   };
// switch (deliveryCountry) {
//   case deliveryInChina:
//     alert(
//       `Доставка в ${deliveryInChina[0].toUpperCase() +
//         deliveryInChina.slice(1)} будет стоить ${costInChina} кредитов`
//     );
//     break;
//   case deliveryInUsa:
//     alert(
//       `Доставка в ${deliveryInUsa[0].toUpperCase() +
//         deliveryInUsa.slice(1)} будет стоить ${costInUsa} кредитов`
//     );
//     break;
//   case deliveryInAustralia:
//     alert(
//       `Доставка в ${deliveryInAustralia[0].toUpperCase() +
//         deliveryInAustralia.slice(1)} будет стоить ${costInAustralia} кредитов`
//     );
//     break;
//   case deliveryInIndia:
//     alert(
//       `Доставка в ${deliveryInIndia[0].toUpperCase() +
//         deliveryInIndia.slice(1)} будет стоить ${costInIndia} кредитов`
//     );
//     break;
//   case deliveryInJamaica:
//     alert(
//       `Доставка в ${deliveryInJamaica[0].toUpperCase() +
//         deliveryInJamaica.slice(1)} будет стоить ${costInJamaica} кредитов`
//     );
//     break;

//   default:
//     alert("В вашу страну доставка не доступна");
//     break;
//   };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Проверка регистра на правильность ввода в поле для текста (не по заданию) :

// const text = "кИтАй";
// const checkLetters = text.slice(1);
// const checkFor = text.slice(1).toLowerCase();

// if (checkLetters !== checkFor) {
//    console.log('Введите правильное название страны!');
// }

// -------------------------------------------------------------------------------------------------------

// module-02-task01

/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполни указанные операции;
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// console.log(users);

// Удалить первый элемент массива:

// users.shift(0);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива:

// users.pop(3);
// console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux":

// users.unshift("Lux");
// console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию:

// users.push("Jay", "Kiwi");
// console.log(users); // ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete:

// const userToDelete = "Ajax";
// users.splice(2, 1);
// console.log(users); //["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем
// хранящейся в переменной userToInsertBefore:

// const userToInsertBefore = "Jay";
// users.splice(2, 0, "Kong");
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// -------------------------------------------------------------------------------------------

// module-02-task02

/*
* Есть массив имен пользователей users

* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента].

* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'

* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let num = 1; //  старт, для нумерации при каждой итерации +1
// let counter = 0; //  старт, отсчета с какого элемента в массиве
//  и это еще как счетчик, вынесенные во внешнюю переменную;

// ВАРИАНТ - 1(-----* for--) -->> создает ссылку на элемент в памяти благодаря индексу[i,j,k],
// идеально подходить для изменения массива;
// for (let j = 0; j < users.length; j++) {
//     console.log(`${num} - ${users[j]}`);
//     num += 1; // num = 1 + (1, 2, 3, 4, 5)
// };

// ВАРИАНТ - 2(-----* for...of--) -->> делает копию элемента массива,не изменяя сам массив,
// этот цикл больше для перебора массива;
// for (const user of users) {
//     console.log(`${num} - ${user}`);
//     num += 1;
// };

// ВАРИАНТ - 3(-----* while--)
// while (counter < users.length) {
//     console.log(`${num} - ${users[counter]}`);
//     counter += 1;
//     num +=1;
// };

// -------------------------------------------------------------------------------------------------

// module-02-task03

/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка:

// let price = 0;
// let costWord = 10;
// const message = "Proin sociis natoque et magnis parturient montes mus";

// Разбить строку в массив, разделитель - пробел, и записать в переменную words:

// const words = message.split(' ');
// console.log(words); // [ "Proin", "sociis", "natoque", "et", "magnis", "parturient", "montes", "mus" ]

// Выведи в консоли длину массива words:
// console.log(words.length); // 8

// Вычисли сколько будет стоить гравировка и запиши результат в переменную price:

// price = costWord * words.length;
// console.log(price); // 80

// --------------------------------------------------------------------------------------------------------

// module-02-task04

/*
 * Напиши цикл, который просит, через prompt, ввести число больше 100.

 * Если посетитель нажал Cancel - завершить цикл.

 * Если посетитель ввёл другое число – попросить ввести ещё раз, 
 * и так далее, пока не введет число больше 100.

 * Предполагается, что посетитель вводит только числа, 
 * обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
 * 
 * P.S: использовать лучше бесконечный цикл с прерыванием(while)
*/

// while (true) {
//     const userInput = Number(prompt('Введите число больше 100!'));

//     if (userInput > 100 || userInput === 0) {
//         break;
//     }
//     alert('Введите еще раз число!');
// }

// ------------------------------------------------------------------------------------------------------------

// module-02-task05

/*
 * Напиши скрипт, который выбирает из массива numbers
 * все числа, которые больше чем значение переменной num(10),
 * записывая(сохранить/добавить) эти числа в массив (переменой)matched.

 * В результате в массиве matched будут все подходяшие числа.

 * PS: используй цикл for или for...of и оператор ветвления if
*/

// const num = 10;
// const matched = [];
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];

// for (const number of numbers) {
//     if (num < number) {
//         matched.push(number);
//     }
// }

// console.log(matched); // [17, 14, 14, 34, 18, 26]

// Выбрать числа из массива, меньше 9 и 9 включительно:
// const num = 9;
// const matched = [];
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];

// for (let j = 0; j < numbers.length; j++) {
//     if (num >= numbers[j]) {
//         matched.push(numbers[j]);
//     }
// };

// console.log(matched); // [ 1, 3, 5, 9, 8 ]

// Перебора массива с помощью цикла for...of для закрепления понимания:
// const number = 15
// const numbersUp = [];
// const numbers = [ 56, 3, 90, 1, 7, 5, 15, 3, 17, 67, 77, 2];

// for (const num of numbers) {
//     if (number <= num) {
//         numbersUp.push(num);
//     }
// }
// console.log(numbersUp); // [ 56, 90, 15, 17, 67, 77 ] -->> больше или равно;

// ------------------------------------------------------------------------------------------------------

// module-02-task06

/*
 * Напиши скрипт, который проверяет произвольную строку
 * в переменной message и находит в ней самое длинное слово,
 * записывая его в переменную longestWord.
 */

// Hайти самое длиное слово в строке message
// const message = "May the force be with you";

// Преобразовываем строку в массив с помощью метода
// const words = message.split(' ');

// Делаем предположение, что самое длиное слово является первое,
// чтобы было с чем сравнивать в цикле;
// let longestWord = words[0];

// Создаем цикл для перебора массива(его текущих элементов [i, j, k]),
// чтобы на каждой итерации сделать сравнение текущего и нового
// если новое длинее текущего то перезаписать;

// for (let j = 0; j < words.length; j++) {
//     if (words[j].length > longestWord.length) {
// записываем(сохраняем)в переменную longestWord
//         longestWord = words[j];
//     }
// }
// console.log(words);
// console.log(longestWord); // 'force'

// Тоже самое можно сделать через цикл for...of:

// for (const word of words) {
//     if (word.length > longestWord.length) {
//             longestWord = word;
//     }
// }
// console.log(longestWord); // 'force'

// -----------------------------------------------------------------------------------------------------

// module-02-task07 -->> бонус

/*
 * Напишите скрипт имитирующий авторизацию администратора в панели управления.
 * При загрузке страницы у посетителя запрашивается логин через prompt:

 *   - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
 *   - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
 *     показывать alert с текстом 'Доступ запрещен, неверный логин!'
 *   - Если был введен логин совпадающий со значением константы adminLogin, 
 *     спрашивать пароль через prompt.

 * При вводе пароля:
 *     - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
 *     - Если введен пароль который не совпадает со значением константы adminPassword,
 *       показывать alert с текстом 'Доступ запрещен, неверный пароль!'
 *     - Если введён пароль который совпадает со значением константы adminPassword, 
 *       показывать alert с текстом 'Добро пожаловать!'
 
🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

/*
 * const adminLogin = 'admin';
 * const adminPassword = 'm4ngo1zh4ackz0r';
 */

/*=============================================================================================*/

// const adminLogin = "admin";
// const adminPassword = "m4ngo1zh4ackz0r";

// const userRefused = "Отменено пользователем !";
// const invalidLogin = "Доступ запрещен, неверный логин !";
// const invalidPassword = "Доступ запрещен, неверный пароль !";
// const validPassword = "Добро пожаловать !";

// const login = prompt("Введите пожалуйста логин :");

// if (login === null || login === "") {
//   alert(userRefused);
// } else if (login !== adminLogin) {
//   alert(invalidLogin);
// } else {
//   const password = prompt("Введите пароль");
//   if (password === null || password === "") {
//     alert(userRefused);
//   } else if (password !== adminPassword) {
//     alert(invalidPassword);
//   } else {
//     alert(validPassword);
//   }
// };

// --------------------------------------------------------------------------------------------------

// Как на самом деле работает движок JavaScript:

// let a = 3
// function addTwo(x) {
//    let ret = x + 2
//    return ret
//  }
//  let b = addTwo(a);
//  console.log(b);

// ---------------------------------------------------------------------------------------------------

// module-02-task01 -->> campOffline#23

/*
* Напиши функцию logItems(array), которая получает массив и использует цикл for,
* который для каждого элемента массива будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента].

* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* ['Mango', 'Poly', 'Ajax'] с индексом
* 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

* Вызовы функции для проверки работоспособности твоей реализации:

* -->>-- logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
* -->>-- logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
*/

// -->> function expression

// const logItems = function(array) {
//   let num = 1;
//   const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
//   for (let j = 0; j < users.length; j++) {
//     console.log(`${num} - ${users[j]}`);
//     num += 1;
//   }
//   return array;
// };
// logItems();


// -->> function declaration

// function logItems(array) {
//     for (let j = 0; j < array.length; j++) {
//         console.log(`${j + 1} - ${array[j]}`);
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ---------------------------------------------------------------------------------------------------