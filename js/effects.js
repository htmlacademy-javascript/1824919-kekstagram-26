const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

scaleSmaller.addEventListener('click', () => {
  const percent = parseFloat(scaleValue.value);
  if (percent >= 30) {
    scaleValue.value = `${percent - 25}%`;
    const resultNumber = parseFloat(scaleValue.value) / '100';
    image.style.transform = `scale(${resultNumber})`;
  }
});

scaleBigger.addEventListener('click', () => {
  const percent = parseFloat(scaleValue.value);
  if (percent <= 75) {
    scaleValue.value = `${percent + 25}%`;
    const resultNumber = parseFloat(scaleValue.value) / '100';
    image.style.transform = `scale(${resultNumber})`;
  }
});

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
sliderElement.classList.add('hidden');
valueElement.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const effectsStyle = {
  'chrome': 'grayscale',
  'sepia': 'sepia',
  'marvin': 'invert',
  'phobos': 'blur',
  'heat': 'brightness'
};

const effectsSteps = {
  'none': 0.1,
  'chrome': 0.1,
  'sepia': 0.1,
  'marvin': 1,
  'phobos': 0.1,
  'heat': 0.1
};

const effectsMin = {
  'none': 0,
  'chrome': 0,
  'sepia': 0,
  'marvin': 0,
  'phobos': 0,
  'heat': 1
};

const effectsMax = {
  'none': 1,
  'chrome': 1,
  'sepia': 1,
  'marvin': 100,
  'phobos': 3,
  'heat': 3
};

const effectsStart = {
  'none': 1,
  'chrome': 1,
  'sepia': 1,
  'marvin': 100,
  'phobos': 3,
  'heat': 3
};

const effectsSign = {
  'none': '',
  'chrome': '',
  'sepia': '',
  'marvin': '%',
  'phobos': 'px',
  'heat': ''
};

let newEffect;

document.querySelector('.effects__list').addEventListener('change', (evt) => {
  scaleValue.value = '100%';
  if (evt.target.value === 'none') {
    sliderElement.classList.add('hidden');
    image.classList.remove(`effects__preview--${newEffect}`);
    image.style.filter = '';
  } else {sliderElement.classList.remove('hidden');}

  image.classList.remove(`effects__preview--${newEffect}`);
  image.classList.add(`effects__preview--${evt.target.value}`);
  newEffect = evt.target.value;

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effectsMin[newEffect],
      max: effectsMax[newEffect]
    },
    start: effectsStart[newEffect],
    step: effectsSteps[newEffect],
    connect: 'lower',
  });

  sliderElement.noUiSlider.set(effectsMax[newEffect]);
  valueElement.value = sliderElement.noUiSlider.get();
  image.style.filter = `${effectsStyle[newEffect]}(${valueElement.value}${effectsSign[newEffect]})`;
  return newEffect;
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  image.style.filter = `${effectsStyle[newEffect]}(${valueElement.value}${effectsSign[newEffect]})`;
});

export {newEffect};
