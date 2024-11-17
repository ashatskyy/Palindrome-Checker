"use strict";

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function isPalindrome(str) {
  let paliNew = "";
  let paliNew2 = "";
  let lettNum = /[a-z0-9]/;

  str = str.toLocaleLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(lettNum)) {
      paliNew = paliNew + str[i];
    }
  }

  for (let i = paliNew.length - 1; i >= 0; i--) {
    paliNew2 = paliNew2 + paliNew[i];
  }

  return paliNew === paliNew2;
}

const act = () => {
  if (!textInput.value) {
    return alert("Please input a value!");
  }
  if (isPalindrome(textInput.value)) {
    resultText.innerHTML = `<div class="result" id="result"><b>${textInput.value}</b> is a palindrome.</div>`;
  } else {
    resultText.innerHTML = `<div class="result" id="result"><b>${textInput.value}</b> is not a palindrome.</div>`;
  }
  textInput.value = "";
};

checkButton.addEventListener("click", act);

textInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
		act();
  }
});
