(function () {
  //
  // Constants
  //
  const inputFieldEl = document.querySelector("#inputStr");
  const submitButtonEl = document.querySelector("#submit");
  const resultTextEl = document.querySelector("#result");

  //
  // Methods
  //
  const isPalindrome = (str) => {
    let checkAlphanumeric = str.replace(/[\W_]+/g, "");
    let formattedStr = checkAlphanumeric.toLowerCase();
    let strToArray = [...formattedStr];
    let strBackwardsArr = [];
    for (let index = strToArray.length - 1; index >= 0; index--) {
      strBackwardsArr.push(strToArray[index]);
    }
    let backwardStr = strBackwardsArr.join("");
    if (formattedStr === backwardStr) return true;
    return false;
  };

  //
  // Events
  //
  submitButtonEl.addEventListener("click", () => {
    const inputTxt = inputFieldEl.value;
    resultTextEl.innerText = isPalindrome(inputTxt);
  });
})();
