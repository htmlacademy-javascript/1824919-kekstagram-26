// Функция для возвращения случайного целого числа

function random(min, max) {
  if (max < min) {                   //Если значение "до" меньше, значит случайно число не может быть положительным, что не соответствует условиям
    throw new Error('Некорректные диапазон');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

random(0, 100); //Результат: случайное целое число из диапазона от 0 до 100


// https://habr.com/ru/company/ruvds/blog/534108/  - ссылка на функцию

// Функция для проверки максимальной длины строки

const checkLength = (inputText, maxLength) => inputText.length <= maxLength;
checkLength ('Проверка длины строки', 100);

//http://kodesource.top/javascript/form/string-length.php - ссылка на функцию для проверки длины строки
