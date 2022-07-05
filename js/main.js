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

const commentsId = [];

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
  const comments = [];
  for (let i = 0; i < 10; i++) {
    comments.push({
      id: createUniqueId(commentsId),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: message[getRandomPositiveInteger(0, message.length - 1)],
      Name: Name[getRandomPositiveInteger(0, Name.length - 1)],
    });
  }
  return comments;
};

function createUniqueNumberFromArray(numbers) {
  const indexNumber = getRandomPositiveInteger(0, numbers.length - 1);
  const result = numbers[indexNumber];
  numbers = numbers.splice(indexNumber, 1);
  return result;
}

function createUniqueId(numbers) {
  let result = null;
  while(!numbers.includes(result)) {
    result = getRandomPositiveInteger(1, 1000);
    numbers.push(result);
  }

  return result;
}

// функция делает объект?
const createObject = function() {
  return {
    idObject: createUniqueNumberFromArray(idObject),
    url: `photos/${createUniqueNumberFromArray(url)}.jpg`,
    description: description[getRandomPositiveInteger(0, description.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comment: makeComment(),  //здесь вызываем функцию мейккоммент
  };
};

const allObjects = Array.from({length: 25}, createObject);

allObjects();
// создаем массив из разных объектов, внутри которых будет объект коммент
