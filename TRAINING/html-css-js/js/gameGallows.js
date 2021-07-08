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

// Возвращает случайно выбранное слово
const pickWord = function () {
	const words = [
		'ягуар',
		'ципленок',
		'макака',
		'сом',
		'слон'];

	return words[Math.floor(Math.random() * words.length)];
};

// Возвращает answerArray: итоговый массив для заданного слова word
const setupAnswerArray = function (word) {
	let answerArray = [];
	for (let i = 0; i < word.length; i += 1) {
		answerArray[i] = ' _ ';
	}
	return answerArray;
};

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
	return prompt('Угадайте букву, или нажмите Отмена для выхода из игры :');
};
// getGuess(prompt);


const updateGameState = function (guess, word, answerArray) {
	let appearances = 0;
	for (let j = 0; j < word.length; j += 1) {
		if (word[j].toLowerCase() === guess.toLowerCase()) {
			answerArray[j] = guess.toLowerCase();
			appearances += 1;
		}

		if (answerArray[j] === guess[j]) {
			alert('Такая буква уже была, введите другую...');
			break;
		}
	}
	return appearances;
};

const showAnswerAndCongratulatePlayer = function (answerArray) {
	showPlayerProgress(answerArray);

	if (ramainingLetters === 0) {
		alert(
		`Вы угадали все ${word.length} букв, словом было :  -->>> ${answerArray.join(
				' ',)} <<<-- у вас осталось еще ${counterOfAttempts} неиспользованых попыток)`,
		);
	}
};

// word: загаданное слово записываем в переменную
const word = pickWord();
// итоговый массив с прилетевшим элементом с fn(pickWord)
const answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let ramainingLetters = word.length;
// Счетчик ограничивающий количество попыток для отгадывания
let counterOfAttempts = 0;
const limitOfAttempts = 10;

while (ramainingLetters > 0 && counterOfAttempts <= limitOfAttempts) {
	showPlayerProgress(answerArray);

	const guess = getGuess();

	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert('Введите не больше одной буквы!!!');
	} else {
		counterOfAttempts += 1;
		const correctGuesses = updateGameState(guess, word, answerArray);
		ramainingLetters -= correctGuesses;
	}
}

showAnswerAndCongratulatePlayer(answerArray);


