let wannaMeet = document.getElementById("checkbox-meet");
let meetDog = document.getElementById("radio-dog"); 
let meetCat = document.getElementById("radio-cat"); 
let blink = document.getElementById("checkbox-blink");
let kitty = document.querySelector(".kitty");
let puppy = document.querySelector(".puppy");
let timerId;
let houseKeeper;

// checkbox.onchange = function() {
//   alert('tick!');
// }

meetDog.onchange = function() {
  houseKeeper = puppy;
  if (timerId != undefined) {
    clearInterval(timerId);
    timerId = undefined;
  }
  if (wannaMeet.checked == false) return;
  puppy.classList.remove("hidden");
  kitty.classList.add("hidden");
  if (blink.checked == true) {
    jump(houseKeeper);
  }
}

meetCat.onchange = function() {
  houseKeeper = kitty;
  if (timerId != undefined) {
    clearInterval(timerId);
    timerId = undefined;
  }
  if (wannaMeet.checked == false) return;
  puppy.classList.add("hidden");
  kitty.classList.remove("hidden");
  if (blink.checked == true) {
    jump(houseKeeper);
  }
}

wannaMeet.onchange = function() {
  if (wannaMeet.checked == false && timerId != undefined) {
    clearInterval(timerId);
    timerId = undefined;
  }
  if (wannaMeet.checked == true) {
    if (meetCat.checked == true) {
      puppy.classList.add("hidden");
      kitty.classList.remove("hidden");
      if (blink.checked == true) {
        jump(houseKeeper);
      }
      return;
    };
    if (meetDog.checked == true) {
      kitty.classList.add("hidden");
      puppy.classList.remove("hidden");
      if (blink.checked == true) {
        jump(houseKeeper);
      }
      return;
    };
    
  };
  puppy.classList.add("hidden");
  kitty.classList.add("hidden");
}

blink.onchange = function() {
  
  if (wannaMeet.checked == false) return;
  // if (meetDog.checked == false && meetCat.checked == false) return;
  if (houseKeeper == undefined) return;
  if (timerId != undefined) {
    clearInterval(timerId);
    houseKeeper.classList.remove("hidden");
    timerId = undefined;
    return;
  }
  jump(houseKeeper);
  
}

let jump = function(pic) {
  timerId = setInterval(() => {
    pic.classList.toggle("hidden");
  }, 1000);
} 