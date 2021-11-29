const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const file = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');

// Função que adiciona o valor do input dentro do elemento p#meme-text
// ref.: https://stackoverflow.com/questions/14411235/while-typing-in-a-text-input-field-printing-the-content-typed-in-a-div
function insertTextOnDiv() {
  textMeme.innerText = textInput.value;
}

// Função que adiciona o Event Listener de realizar o insert do texto enquanto estiver sendo digitado no campo de input.
function showTextWhileTyping() {
  textInput.addEventListener('keyup', insertTextOnDiv);
}

// Função que adiciona a imagem dentro do do div#meme-image-container
// ref.: https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
function addImage() {
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.src = URL.createObjectURL(file.files[0]);
  memeContainer.appendChild(img);
}

// Função que adiciona o Event Listener no input(file) para realizar a adição da imagem ao container
function btnImg() {
  file.addEventListener('change', addImage);
}

function fireStyle() {
  memeContainer.style.border = '3px dashed red';
}

function fireBtn() {
  const btnFire = document.querySelector('#fire');
  btnFire.addEventListener('click', fireStyle);
}

function waterStyle() {
  memeContainer.style.border = '5px double blue';
}

function waterBtn() {
  const btnWater = document.querySelector('#water');
  btnWater.addEventListener('click', waterStyle);
}

function earthStyle() {
  memeContainer.style.border = '6px groove green';
}

function earthBtn() {
  const btnEarth = document.querySelector('#earth');
  btnEarth.addEventListener('click', earthStyle);
}
showTextWhileTyping();
btnImg();
fireBtn();
waterBtn();
earthBtn();
