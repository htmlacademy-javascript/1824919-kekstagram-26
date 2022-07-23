const randomButton = document.querySelector('#filter-random');
const defaultButton = document.querySelector('#filter-default');
const discussedButton = document.querySelector('#filter-discussed');
import {createUniqueNumberFromArray} from './util.js';
import {openBigPicture} from './big-picture.js';
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const objectFragment = document.createDocumentFragment();

const makePictures = (array) => {
  array.forEach((object) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = object.url;
    newPicture.querySelector('.picture__likes').textContent = object.likes;
    newPicture.querySelector('.picture__comments').textContent = object.comments.length;
    // console.log(object.comment);
    objectFragment.appendChild(newPicture);
  });
  pictures.appendChild(objectFragment);
  const allArray = pictures.querySelectorAll('.picture');
  for (let i = 0; i < array.length; i++) {
    openBigPicture(allArray[i], array[i].comments, array[i].description);
  }
};

const makeRandom = function(array) {
  defaultButton.classList.remove('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
  randomButton.classList.add('img-filters__button--active');
  const pictureList = pictures.querySelectorAll('.picture');
  for (let i = 0; i < pictureList.length; i++) {
    const picture = pictures.querySelector('.picture');
    picture.remove();
  }

  const numbersArray = [];
  for (let i = 0; i < array.length; i++) {
    numbersArray.push(i);
  }
  for (let i = 0; i < array.length - 10; i++) {
    createUniqueNumberFromArray(numbersArray);
  }
  const newArray = [];
  for (let i = 0; i < numbersArray.length; i++) {
    const index = numbersArray[i];
    const result = array[index];
    newArray.push(result);
  }
  makePictures(newArray);
};

const makeDefault = function(array) {
  defaultButton.classList.add('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  const pictureList = pictures.querySelectorAll('.picture');
  for (let i = 0; i < pictureList.length; i++) {
    const picture = pictures.querySelector('.picture');
    picture.remove();
  }

  const newArray = array.slice();
  makePictures(newArray);
};

const setRandomClick = (cb) => {
  randomButton.addEventListener('click', () => {
    cb();
  });
};

const setDefaultClick = (cb) => {
  defaultButton.addEventListener('click', () => {
    cb();
  });
};

const comparePictures = (pictureA, pictureB) => {
  const commentsNumberA = pictureA.comments.length;
  const commentsNumberB = pictureB.comments.length;

  return commentsNumberB - commentsNumberA;
};

const makeDiscussed = function(array) {
  defaultButton.classList.remove('img-filters__button--active');
  discussedButton.classList.add('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');

  const pictureList = pictures.querySelectorAll('.picture');
  for (let i = 0; i < pictureList.length; i++) {
    const picture = pictures.querySelector('.picture');
    picture.remove();
  }
  const newArray = array.slice().sort(comparePictures);
  makePictures(newArray);
};

const setDiscussedClick = (cb) => {
  discussedButton.addEventListener('click', () => {
    cb();
  });
};

export {pictures};
export {makePictures};
export {makeRandom, makeDiscussed, makeDefault};
export {setRandomClick, setDefaultClick, setDiscussedClick};
