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
  document
    .getElementById("show-donate-section")
    .classList.remove("bg-btn-color");
  document
    .getElementById("show-donate-section")
    .classList.remove("border-btn-color");
  document.getElementById("show-donate-section").classList.remove("bg-white");
  document
    .getElementById("show-donate-section")
    .classList.remove("border-[#111111]/30");
  document
    .getElementById("show-donate-section")
    .classList.remove("hover:bg-white");
  document
    .getElementById("show-donate-section")
    .classList.remove("hover:border-[#111111]/30");
  document
    .getElementById("show-donate-section")
    .classList.remove("hover:bg-btn-color");
  document
    .getElementById("show-donate-section")
    .classList.remove("hover:border-btn-color");

  document.getElementById(id).classList.add("bg-btn-color");
  document.getElementById(id).classList.add("border-btn-color");
  document.getElementById(id).classList.add("hover:bg-white");
  document.getElementById(id).classList.add("hover:border-[#111111]/30");
}

// modal


