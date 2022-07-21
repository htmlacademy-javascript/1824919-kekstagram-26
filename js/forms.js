const uploadInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const description = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');
const form = document.querySelector('#upload-select-image');
const objectFragment = document.createDocumentFragment();
const submitButton = document.querySelector('.img-upload__submit');
const scaleValue = document.querySelector('.scale__control--value');
import {newEffect} from './effects.js';
const closeOverlay = function () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  hashtag.value = '';
  uploadInput.value = '';
  description.value = '';
  scaleValue.value = '100%';
};

const onOverlayEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeOverlay();
  }
};

const openOverlay = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
  description.value = '';
  scaleValue.value = '100%';
  uploadOverlay.querySelector('img').style = '';
  document.querySelector('.effect-level__slider').noUiSlider.set(1);
  document.querySelector('#effect-none').checked = true;
  document.querySelector('.img-upload__preview').style.transform = 'scale(1)';
  document.querySelector('.img-upload__preview').style.filter = '';
  document.querySelector('.effect-level__slider').classList.add('hidden');
  document.querySelector('.img-upload__preview').classList.remove(`effects__preview--${newEffect}`);
};

uploadInput.addEventListener('change', openOverlay);

uploadCancel.addEventListener('click', () => {
  closeOverlay();
  document.removeEventListener('keydown', onOverlayEscKeydown);
});

const errorModal = function() {
  const error = document.querySelector('.error');
  if (error) {
    document.body.removeChild(error);
  }
  document.addEventListener('keydown', onOverlayEscKeydown);
};
const successModal = function() {
  const success = document.querySelector('.success');
  if (success) {
    document.body.removeChild(success);
  }
  document.addEventListener('keydown', onOverlayEscKeydown);
};

const onErrorModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    errorModal();
  }
};

const onSuccessModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    successModal();
  }
};

const showSuccess = function() {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successClone = successTemplate.cloneNode(true);
  objectFragment.appendChild(successClone);
  document.body.appendChild(objectFragment);
  document.removeEventListener('keydown', onOverlayEscKeydown);
  document.addEventListener('keydown', onSuccessModalEscKeydown);
  document.querySelector('.success').addEventListener('click', () => {successModal();
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
  });
  document.querySelector('.success__inner').addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
  document.querySelector('.success__button').addEventListener('click', (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      successModal();
      document.removeEventListener('keydown', onSuccessModalEscKeydown);
    }
  });
};

const showError = function() {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorClone = errorTemplate.cloneNode(true);
  objectFragment.appendChild(errorClone);
  document.body.appendChild(objectFragment);
  document.removeEventListener('keydown', onOverlayEscKeydown);
  document.addEventListener('keydown', onErrorModalEscKeydown);
  document.querySelector('.error').addEventListener('click', () => {errorModal();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
  });
  document.querySelector('.error__inner').addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
  document.querySelector('.error__button').addEventListener('click', (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      errorModal();
      document.removeEventListener('keydown', onErrorModalEscKeydown);
    }
  });
};
hashtag.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

description.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'text__item--invalid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'text__error'
});

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const checkHashtags = function (value) {
  if (value === '') {
    return true;
  }
  const array = value.split(' ');
  const newArray = [];
  if (array.length > 5) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    newArray.push(re.test(array[i]));
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    array.splice(i, 1);
    if (array.includes(element)) {
      return false;
    }
  }
  if (newArray.includes(false)) {
    return false;
  } else {return true;}
};

const checkDescription = function (value) {
  if (value.length > 140) {
    return false;
  }
  return true;
};

pristine.addValidator(
  form.querySelector('#hashtags'),
  checkHashtags,
  'Ошибка при вводе значений'
);

pristine.addValidator(
  description,
  checkDescription,
  'Максимальная длина 140 символов'
);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(form);
      // for(let [name, value] of formData) {
      //   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
      // }
      submitButton.disabled = true;
      fetch(
        'https://26.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            submitButton.disabled = false;
            closeOverlay();
            document.removeEventListener('keydown', onOverlayEscKeydown);
          } else {
            showError();
            submitButton.disabled = false;
          }
        })
        .catch(() => {
          showError();
          submitButton.disabled = false;
        });
    }
  });
};

setUserFormSubmit(showSuccess);

export {form};
