// const pictures = document.querySelector('.pictures');
import {makePictures} from './pictures.js';
import {showAlert} from './util.js';
import {setRandomClick, setDefaultClick, setDiscussedClick} from './pictures.js';
import {makeRandom, makeDiscussed, makeDefault} from './pictures.js';


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

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

getData((allPhotos) => {
  makePictures(allPhotos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  setRandomClick(debounce(() => makeRandom(allPhotos), 500));
  setDefaultClick(debounce(() => makeDefault(allPhotos), 500));
  setDiscussedClick(debounce(() => makeDiscussed(allPhotos), 500));
}, showAlert);

// async function fetchPictures() {
//   const response = await fetch('https://26.javascript.pages.academy/kekstagram/data');
//   const picturesArray = await response.json();
//   return picturesArray;
// }
// fetchPictures().then((picturesArray) => {
//   const allArray = pictures.querySelectorAll('.picture');
//   for (let i = 0; i < picturesArray.length; i++) {
//     openBigPicture(allArray[i], picturesArray[i].comments, picturesArray[i].description);
//   }
// });

export {getData};
