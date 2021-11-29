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

function cleanPreviousMeme() {
  if (textMeme.nextSibling != null) {
    memeContainer.removeChild(textMeme.nextSibling);
  }
}

// Função que adiciona a imagem dentro da div#meme-image-container.
// ref.: https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
function addImage() {
  cleanPreviousMeme();
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.src = URL.createObjectURL(file.files[0]);
  memeContainer.appendChild(img);
}

// Função que adiciona o Event Listener no input(file) para realizar a adição da imagem ao container.
function btnImg() {
  file.addEventListener('change', addImage);
}

// Função que adiciona borda estilizada FIRE.
function fireStyle() {
  memeContainer.style.border = '3px dashed red';
}

function fireBtn() {
  const btnFire = document.querySelector('#fire');
  btnFire.addEventListener('click', fireStyle);
}

// Função que adiciona borda estilizada WATER.
function waterStyle() {
  memeContainer.style.border = '5px double blue';
}

function waterBtn() {
  const btnWater = document.querySelector('#water');
  btnWater.addEventListener('click', waterStyle);
}

// Função que adiciona borda estilizada EARTH.
function earthStyle() {
  memeContainer.style.border = '6px groove green';
}

function earthBtn() {
  const btnEarth = document.querySelector('#earth');
  btnEarth.addEventListener('click', earthStyle);
}

// Função que adiciona a imagem do meme pré pronto.
function addPremadeMeme(event) {
  let memeToUse = event.target;
  memeToUse = getComputedStyle(memeToUse);

  // ref.: https://stackoverflow.com/questions/14013131/how-to-get-background-image-url-of-an-element-using-javascript
  // Slice retira 'url(' e o ')'. Replace remove os "".
  memeToUse = memeToUse.backgroundImage.slice(4, -1).replace(/"/g, '');
  cleanPreviousMeme();
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.src = memeToUse;
  memeContainer.appendChild(img);
}

// Função que adiciona o Event Listener aos memes pré prontos.
function premadeMemeToImg() {
  const memes = document.querySelectorAll('.memes');
  for (let index = 0; index < memes.length; index += 1) {
    memes[index].addEventListener('click', addPremadeMeme);
  }
}

showTextWhileTyping();
btnImg();
fireBtn();
waterBtn();
earthBtn();
premadeMemeToImg();
