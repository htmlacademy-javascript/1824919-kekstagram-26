// import {
//   createUniqueNumberFromArray,
//   createUniqueId,
//   getRandomPositiveInteger
// } from './util.js';
//
// //В массив записываются числа, которые будем вешать на идентификаторы

// const url = [];

// for (let i = 1; i <= amountOfNumbers; i++) {
//   url.push(i);
// }

// const commentsId = [];

// const description = ['Закат', 'восход', 'пальмы', 'пляж'];
// const message = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
// ];

// const Name = [
//   'Ivan', 'Marina', 'Vladimir',
// ];


// const makeComment = function() {
//   const comments = [];
//   for (let i = 0; i < getRandomPositiveInteger(3, 20); i++) {
//     comments.push({
//       id: createUniqueId(commentsId),
//       avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
//       message: message[getRandomPositiveInteger(0, message.length - 1)],
//       Name: Name[getRandomPositiveInteger(0, Name.length - 1)],
//     });
//   }
//   return comments;
// };


// // функция делает объект?
// const createObject = function() {
//   return {
//     idObject: createUniqueNumberFromArray(idObject),
//     url: `photos/${createUniqueNumberFromArray(url)}.jpg`,
//     description: description[getRandomPositiveInteger(0, description.length - 1)],
//     likes: getRandomPositiveInteger(15, 200),
//     comment: makeComment(),  //здесь вызываем функцию мейккоммент
//   };
// };

// const allObjects = Array.from({length: 25}, createObject);

// export {allObjects};
// // создаем массив из разных объектов, внутри которых будет объект коммент
