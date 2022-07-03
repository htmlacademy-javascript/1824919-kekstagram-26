const idObject = [];

const amountOfNumbers = 25;
for (let i = 1; i <= amountOfNumbers; i++) {
  idObject.push(i);
}

//В массив записываются числа, которые будем вешать на идентификаторы

const url = [];

for (let i = 1; i <= amountOfNumbers; i++) {
  url.push(i);
}

const description = ['Закат', 'восход', 'пальмы', 'пляж'];
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const Name = [
  'Ivan', 'Marina', 'Vladimir',
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// делает комментарий как объект с разными айди, аватаркой, сообщением и именем

const makeComment = function() {
  return {
    id: getRandomPositiveInteger(0, 1000000000),
    avatar: 'img/avatar-' + getRandomPositiveInteger(1, 6) + '.svg',
    message: message[getRandomPositiveInteger(0, message.length - 1)],
    Name: Name[getRandomPositiveInteger(0, Name.length - 1)],
  };
};

// функция делает объект?
const createObject = () => {
  return {
    idObject: idObject[getRandomPositiveInteger(0, amountOfNumbers)],
    url: 'photos/' + url[getRandomPositiveInteger(0, amountOfNumbers)] + '.jpg',
    description: description[getRandomPositiveInteger(0, description.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comment: makeComment(),  //здесь вызываем функцию мейккоммент
  };
};

const allObjects = Array.from({length: 25}, createObject);

// создаем массив из разных объектов, внутри которых будет объект коммент

// Функция для проверки максимальной длины строки

const checkLength = (inputText, maxLength) => inputText.length <= maxLength;
checkLength ('Проверка длины строки', 100);

//http://kodesource.top/javascript/form/string-length.php - ссылка на функцию для проверки длины строки

