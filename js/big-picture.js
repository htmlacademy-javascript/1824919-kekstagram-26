const descriptionPlace = document.querySelector('.social__caption');
const actualCommentsNumber = document.querySelector('.comments-quantity');
const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

const big = document.querySelector('.big-picture');
const bigImage = document.querySelector('.big-picture__img').querySelector('img');
const likes = document.querySelector('.likes-count');
const allCommentsNumber = document.querySelector('.comments-count');
const allComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const pushComment = function (comment) {
  const commentsItem = makeElement('li', 'social__comment');
  const commentsImage = makeElement('img', 'social__picture');
  commentsImage.src = comment.avatar;
  commentsImage.alt = comment.Name;
  commentsItem.appendChild(commentsImage);
  const commentsText = makeElement('p', 'social__text', comment.message);
  commentsItem.appendChild(commentsText);
  return commentsItem;
};

const openBigPicture = function (picture, commentsOfPicture, description) {
  const picturePhoto = picture.querySelector('img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  picture.addEventListener('click',() => {
    allComments.innerHTML = '';
    bigImage.src = picturePhoto.src;
    likes.textContent = pictureLikes.textContent;
    allCommentsNumber.textContent = pictureComments.textContent;
    descriptionPlace.textContent = description;

    let commentsLength = 0;

    let commentsArray = commentsOfPicture.slice(0, 5);
    commentsLength += commentsArray.length;
    actualCommentsNumber.textContent = commentsLength;

    for (let i = 0; i < commentsArray.length; i++) {
      const cardItem = pushComment(commentsArray[i]);
      allComments.appendChild(cardItem);
    }

    if (commentsArray.length < 5 || pictureComments.textContent <= 5) {
      commentsLoader.classList.add('hidden');
    } else {commentsLoader.classList.remove('hidden');}
    let commentsCopyFrom = 5;
    let commentsCopyTo = 10;

    commentsLoader.addEventListener('click', () => {
      commentsArray = commentsOfPicture.slice(commentsCopyFrom, commentsCopyTo);
      commentsLength += commentsArray.length;
      actualCommentsNumber.textContent = commentsLength;
      commentsCopyFrom += 5;
      commentsCopyTo += 5;
      if (commentsArray.length < 5 || actualCommentsNumber.textContent === allCommentsNumber.textContent) {
        commentsLoader.classList.add('hidden');
      } else {commentsLoader.classList.remove('hidden');}

      for (let i = 0; i < commentsArray.length; i++) {
        const cardItem = pushComment(commentsArray[i]);
        allComments.appendChild(cardItem);
      }
    });

    // console.log(comments)
    openPicture();
  });
};


const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
};

function openPicture () {
  big.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPictureEscKeydown);
}

const bigPictureClose = document.querySelector('.big-picture__cancel');

function closePicture () {
  big.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
}

bigPictureClose.addEventListener('click',() => {
  closePicture();
});

export {isEscapeKey, openBigPicture};
