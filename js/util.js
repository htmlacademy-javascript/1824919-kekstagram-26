const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createUniqueNumberFromArray(numbers) {
  const indexNumber = getRandomPositiveInteger(0, numbers.length - 1);
  const result = numbers[indexNumber];
  numbers = numbers.splice(indexNumber, 1);
  return result;
}

function createUniqueId(numbers) {
  let result = null;
  while(!numbers.includes(result)) {
    result = getRandomPositiveInteger(1, 10);
    numbers.push(result);
  }

  return result;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 500000);
};

export {
  createUniqueNumberFromArray,
  createUniqueId,
  getRandomPositiveInteger,
  showAlert
};
