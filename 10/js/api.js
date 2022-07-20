// const pictures = document.querySelector('.pictures');
import {makePictures} from './pictures.js';
import {openBigPicture} from './big-picture.js';
import {pictures} from './pictures.js';
import {showAlert} from './util.js';

const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((allPhotos) => {
      onSuccess(allPhotos);
    })
    .catch(() => {
      onFail('Не удалось загрузить кексы. Попробуйте ещё раз');
    });

};
getData(makePictures, showAlert);


async function fetchPictures() {
  const response = await fetch('https://26.javascript.pages.academy/kekstagram/data');
  const picturesArray = await response.json();
  return picturesArray;
}
fetchPictures().then((picturesArray) => {
  const allArray = pictures.querySelectorAll('.picture');
  for (let i = 0; i < picturesArray.length; i++) {
    openBigPicture(allArray[i], picturesArray[i].comments, picturesArray[i].description);
  }
});

export {getData};
