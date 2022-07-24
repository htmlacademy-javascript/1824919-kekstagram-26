const fileChooser = document.querySelector('#upload-file');
const image = document.querySelector('.img-upload__preview').querySelector('img');
const FileTypes = ['gif', 'jpg', 'jpeg', 'png'];

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FileTypes.some((it) => fileName.endsWith(it)
  );

  if (matches) {
    image.src = URL.createObjectURL(file);
  }
});
