import {makePictures} from './pictures.js';
import {showAlert} from './util.js';
import {setRandomClick, setDefaultClick, setDiscussedClick} from './pictures.js';
import {makeRandom, makeDiscussed, makeDefault} from './pictures.js';

const pressButtonDelay = 500;

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
  setRandomClick(debounce(() => makeRandom(allPhotos), pressButtonDelay));
  setDefaultClick(debounce(() => makeDefault(allPhotos), pressButtonDelay));
  setDiscussedClick(debounce(() => makeDiscussed(allPhotos), pressButtonDelay));
}, showAlert);

export {getData};
