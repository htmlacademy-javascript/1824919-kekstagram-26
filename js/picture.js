import {allObjects} from './data.js';

const big = document.querySelector('.big-picture');
const bigImage = document.querySelector('.big-picture__img').querySelector('img');
const likes = document.querySelector('.likes-count');
const bigComments = document.querySelector('.comments-count');
const allComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');

const bigPictureClose = document.querySelector('.big-picture__cancel');

bigPictureClose.addEventListener('click', function () {
    big.classList.add('hidden');
});

const pictures = document.querySelectorAll('.picture')

console.log(pictures);

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const descriptionPlace = document.querySelector('.social__caption');
const commentsBlocks = document.querySelector('.social__comment-count');

const pushComment = function (comment) {
  const commentsItem = makeElement('li', 'social__comment');
  const commentsImage = makeElement('img', 'social__picture')
  commentsImage.src = comment.avatar;
  commentsImage.alt = comment.Name;
  commentsItem.appendChild(commentsImage);
  const commentsText = makeElement('p', 'social__text', comment.message);
  commentsItem.appendChild(commentsText);
  return commentsItem;
}

const openBigPicture = function (picture, comments, description) {
  const picturePhoto = picture.querySelector('img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments')
  picture.addEventListener('click', function () {
    allComments.innerHTML = '';
    bigImage.src = picturePhoto.src;
    likes.textContent = pictureLikes.textContent;
    bigComments.textContent = pictureComments.textContent;
    console.log(comments);
    descriptionPlace.textContent = description;

    for (let i = 0; i < comments.length; i++) {
  const cardItem = pushComment(comments[i]);
  allComments.appendChild(cardItem);
}
    commentsLoader.classList.add('hidden');
    commentsBlocks.classList.add('hidden');
    big.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
}

for (let i = 0; i < pictures.length; i++) {
  openBigPicture(pictures[i], allObjects[i].comment, allObjects[i].description);
}
