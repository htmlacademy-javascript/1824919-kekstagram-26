// Функция для возвращения случайного целого числа

function random(min, max) {
  if (max < min) {                   //Если значение "до" меньше, значит случайно число не может быть положительным, что не соответствует условиям
    return false;
  };
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log('Number ' + random(0, 100)); //Результат: случайное целое число из диапазона от 0 до 100


// https://habr.com/ru/company/ruvds/blog/534108/  - ссылка на функцию

// Функция для проверки максимальной длины строки

function getLength (inputText, maxLength) {
  let field = inputText.length   // Измеряет длину введенной строки и сравнивает

  if (field <= maxLength) {
    return true;
  }
  return false;
};

console.log(getLength ('Проверка длины строки', 1000));


//http://kodesource.top/javascript/form/string-length.php - ссылка на функцию для проверки длины строки
