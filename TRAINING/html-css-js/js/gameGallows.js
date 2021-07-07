'use strict';

// Пишем игру "ВИСИЛИЦА"(game 'GALLOWS')

/**
Прежде всего необходимо написать структуру игры,
или другими словами алгоритм:

1.Выбирать слово случайным образом.
2.Запрашивать у игрока вариант ответа(букву).
3.Завершить игру по желанию.
4.Проверять является ли введеный ответ буквой.
5.Вести учет за буквами, что уже угаданы.
6.Показывать игроку его прогресс, сколько угадано и сколько предстоит угадать.
7.Завершить игру, если слово отгадано.
*/

/**
Записываем псевдокод для описания нашей игры,
который поможет спроектировать модель и ее поведение
в процессе создания инструкций к ней:

"Выбрать" случайное слово
"До тех пор,пока" слово не угадано {
		"Показать" игроку текущее состояние игры
		"Запросить" у игрока вариант ответа
		"Если" игрок хочет выйти из игры {
				"Выйти" из игры
				"Иначе, если" такая буква есть в слове {
						"Обновить" состояние игры, подставив новую букву
				}
		}
} 
"Поздравить" игрока с победой - слово угадано.
*/

const words = ['ягуар', 'ципленок', 'макака', 'сом', 'слон'];
// Возвращает случайно выбранное слово
const pickWord = function () {
	return words[Math.floor(Math.random() * words.length)];
};

const word = pickWord(); // word: загаданное слово записываем в переменную
console.log(word);
// answerArray: итоговый массив
let answerArray = [];
// Возвращает итоговый массив для заданного слова word
const setupAnswerArray = function (word) {
	for (let i = 0; i < word.length; i += 1) {
		answerArray[i] = ' _ ';
	}
	return answerArray;
};

answerArray = setupAnswerArray(word); // итоговый массив с прилетевшим элементом с fn(pickWord)
console.log(answerArray);

/*
* Переменная(ramainingLetters) в которую записывается(операция присвоение) 
* длина случайного слова(words -->> word),после чего мы тем самым приравневаем
* ее к длине загаданного слова, таким образим задаем к-во букв которые надо угадать.

* В последствии нам эта переменная понадобится для условия в цикле,а также чтобы
* отслеживать оставшиеся к-во букв для отгадывания и уменшать(декриментировать -=1)
* значение этой переменной на 1 если такая буква входит в слово.
*/

//  showPlayerProgress: с помощью alert отображает текущее состояние игры
const showPlayerProgress = function (answerArray) {
	alert(answerArray.join(' '));
};
// showPlayerProgress(answerArray);

// Запрашивает ответ игрока с помощью prompt
const getGuess = function () {
	prompt('Угадайте букву, или нажмите Отмена для выхода из игры :');
};
// getGuess(prompt);


// remainingLetters: сколько букв осталось угадать
let ramainingLetters = word.length;
// Счетчик ограничивающий количество попыток для отгадывания
let counterOfAttempts = 0;
const limitOfAttempts = 10;

// while (ramainingLetters > 0 && counterOfAttempts <= limitOfAttempts) {
// 	alert(totalArr.join(' '));

// 	const guess = prompt(
// 		'Угадайте букву, или нажмите Отмена для выхода из игры :',
// 	);
// 	if (guess === null) {
// 		break;
// 	} else if (guess.length !== 1) {
// 		alert('Введите не больше одной буквы!!!');
// 	} else {
// 		counterOfAttempts += 1;
// 		for (let j = 0; j < word.length; j += 1) {
// 			if (totalArr[j] === guess) {
// 				alert('Такая буква уже была, введите другую...');
// 				break;
// 			}

// 			if (word[j].toLowerCase() === guess.toLowerCase()) {
// 				totalArr[j] = guess.toLowerCase();
// 				ramainingLetters -= 1;
// 			}
// 		}
// 	}
// }

// if (ramainingLetters === 0) {
// 		alert(
// 		`Вы угадали все ${word.length} буквы словом было :  -->>> ${totalArr.join(
// 				' ',)} <<<-- и у вас осталось еще ${counterOfAttempts} попыток)`,
// 		);
// }
