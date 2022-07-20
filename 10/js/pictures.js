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
};

export {pictures};
export {makePictures};
