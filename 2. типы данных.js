// String строки
let string = 'test';
let string2 = "test"; // разницы нет
let string3 = new String('test'); // создается обсъект строки

// у строки бывают методы(помощники
string.charAt(0) // выведет первую букву t
// ссылка на все методы https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String#Methods



// Number числа
let number = 25;
let number2 = new Number(25);

// у чисел есть методы
number.toFixed(2) // 25.00
// ссылка на все методы https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods


// Boolean логический 
const isLoading = true;
let isWoman = false;

const gender = 'woman'; // получили ответ от серверу, к примеру
if (gender === 'woman') {
    isWoman = true;
}


// Undefined
// не объявленое значение


// Null
// пустое значение


// Object
const userData = {
    name: 'Mohammed',
    lastName: 'Salah',
    age: 28,
    isSmoke: false
}
// методы объекта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods




// Symbol
// специальный тип для создания уникальных значений, используется редко
