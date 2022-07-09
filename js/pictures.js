import {allObjects} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
.content
.querySelector('.picture');



const objectFragment = document.createDocumentFragment();

allObjects.forEach((object) => {
  const newPicture = pictureTemplate.cloneNode(true);
  console.log(newPicture);
  newPicture.querySelector('.picture__img').src = object.url;
  newPicture.querySelector('.picture__likes').textContent = object.likes;
  newPicture.querySelector('.picture__comments').textContent = object.comment.length;
  objectFragment.appendChild(newPicture);
})

pictures.appendChild(objectFragment);
