const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const file = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');

// ref.: https://stackoverflow.com/questions/14411235/while-typing-in-a-text-input-field-printing-the-content-typed-in-a-div
function insertTextOnDiv() {
  textMeme.innerText = textInput.value;
}

function showTextWhileTyping() {
  textInput.addEventListener('keyup', insertTextOnDiv);
}

// ref.: https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
function addImage() {
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.src = URL.createObjectURL(file.files[0]);
  memeContainer.appendChild(img);
}

function btnImg() {
  file.addEventListener('change', addImage);
}

showTextWhileTyping();
btnImg();
