let burgerMenu = document.querySelector(".menu-burger");
let headerMenu = document.getElementById("header-menu");
let closeCross = document.querySelector(".close-cross");
let menuLinks = document.querySelectorAll(".menu-link");

burgerMenu.onclick = function() {
  headerMenu.classList.add("menu-burger-click");
  closeCross.style.display = "block";
  document.body.style.overflow="hidden";
}

closeCross.onclick = function() {
  headerMenu.classList.remove("menu-burger-click");
  closeCross.style.display = 'none';
  document.body.style.overflow="auto";
}

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = function() {
    headerMenu.classList.remove("menu-burger-click");
    closeCross.style.display = 'none';
    document.body.style.overflow="auto";
  };  
}

window.addEventListener('scroll', function() {
  if (pageYOffset > 900 && document.documentElement.clientWidth > 539) {
    document.querySelector(".button-contact-us").style.display = 'inline-block';
  }
  if (pageYOffset <= 900 || document.documentElement.clientWidth <= 539) {
    document.querySelector(".button-contact-us").style.display = 'none';
  }
  
  if (pageYOffset > 1500 && document.documentElement.clientWidth > 539) {
    document.querySelector(".button-up").style.display = 'inline-block';
  }
  if (pageYOffset <= 1500 || document.documentElement.clientWidth <= 539) {
    document.querySelector(".button-up").style.display = 'none';
  }
  
});

let mockSelect = document.querySelector(".container-mock-select");
let mockSelectText = document.querySelector(".mock-select");
let mockMenu = document.querySelector(".mock-select-menu");

mockSelect.onclick = function() {
  let ifInvisible = mockMenu.classList.toggle("invisible");

  if (document.documentElement.clientHeight < mockMenu.getBoundingClientRect().bottom) {
    mockMenu.classList.add("move-up");
  }
  
  if (ifInvisible) {
    mockMenu.classList.remove("move-up");
  }
}

let items = document.querySelectorAll(".mock-select-menu-item");

function selectOption(item) {
  let optionText = item.innerText;
  mockSelectText.innerText = optionText;
} 

for (let item of items) {
  item.onclick = function() {
    selectOption(item);
  };
}