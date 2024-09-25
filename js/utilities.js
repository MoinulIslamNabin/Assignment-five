// input value
function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNum = parseFloat(inputValue);
  return inputNum;
}

// text value
function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNum = parseFloat(textValue);
  return textNum;
}

// show/hide
function showSectionById(id) {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// button

function btnColor(id) {
  document.getElementById("show-donate-section").removeAttribute("class");
  document.getElementById("show-history-section").removeAttribute("class");

  document.getElementById(id).setAttribute('class', 'btn bg-btn-color border-[1px] border-btn-color drop-shadow-none hover:bg-amber-300/70 hover:border-amber-300/30 ease-in-out duration-500 delay-100 px-8 py-3 ml-2 mr-2 rounded-lg font-semibold text-xl leading-none text-[#111111]')
}



