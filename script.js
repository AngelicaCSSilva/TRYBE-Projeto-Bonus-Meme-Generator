const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');

// ref.: https://stackoverflow.com/questions/14411235/while-typing-in-a-text-input-field-printing-the-content-typed-in-a-div
function insertTextOnDiv() {
  textMeme.innerText = textInput.value;
}

function showTextWhileTyping() {
  textInput.addEventListener('keyup', insertTextOnDiv);
}

showTextWhileTyping();
