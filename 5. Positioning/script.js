let recruitButtons = document.querySelectorAll(".recruit");
let rejectButtons = document.querySelectorAll(".reject");
let stamps = document.querySelectorAll(".stamp");
let recruitedUnits = document.getElementById("recruited-units");
let totalPrice = document.getElementById("total-price");

for (let index = 0; index < recruitButtons.length; index++) {
  
  recruitButtons[index].onclick = function() {
    recruitedUnits.innerText = String(+recruitedUnits.innerText + 1); 
    totalPrice.innerText = String(+totalPrice.innerText + +recruitButtons[index].parentElement.firstElementChild.innerText);
    
    recruitButtons[index].classList.add("invisible");
    rejectButtons[index].classList.remove("invisible");
    stamps[index].classList.remove("invisible");

  };
};

for (let index = 0; index < rejectButtons.length; index++) {
  
  rejectButtons[index].onclick = function() {
    recruitedUnits.innerText = String(+recruitedUnits.innerText - 1); 
    totalPrice.innerText = String(+totalPrice.innerText - +recruitButtons[index].parentElement.firstElementChild.innerText);
    
    recruitButtons[index].classList.remove("invisible");
    rejectButtons[index].classList.add("invisible");
    stamps[index].classList.add("invisible");
  };
};