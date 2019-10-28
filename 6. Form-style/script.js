let wannaMeet = document.getElementById("checkbox-meet");
let meetDog = document.getElementById("radio-dog"); 
let meetCat = document.getElementById("radio-cat"); 
let blink = document.getElementById("checkbox-blink");
let kitty = document.querySelector(".kitty");
let puppy = document.querySelector(".puppy");

// checkbox.onchange = function() {
//   alert('tick!');
// }

meetDog.onchange = function() {
  if (wannaMeet.checked == false) return;
  puppy.classList.remove("hidden");
  kitty.classList.add("hidden");
}

meetCat.onchange = function() {
  if (wannaMeet.checked == false) return;
  puppy.classList.add("hidden");
  kitty.classList.remove("hidden");
}

wannaMeet.onchange = function() {
  if (wannaMeet.checked == true) {
    if (meetCat.checked == true) {
      puppy.classList.add("hidden");
      kitty.classList.remove("hidden");
      return;
    };
    if (meetDog.checked == true) {
      kitty.classList.add("hidden");
      puppy.classList.remove("hidden");
      return;
    };
  };
  puppy.classList.add("hidden");
  kitty.classList.add("hidden");
}

blink.onchange = function() {
  
  if (wannaMeet.checked == false) return;
  if (meetDog.checked == false && meetCat.checked == false) return;
  
}

// let jump = function() {

// } 