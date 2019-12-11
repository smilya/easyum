function moveBest() {
  if (document.querySelector(".ball").classList.contains("busy")) return;

  let ball = document.querySelector(".ball");
  let buttons = document.querySelectorAll(".form-button");

  ball.classList.add('busy');
  ball.classList.add("rotate-best")
  for (let i=0; i < buttons.length; i++) {
    buttons[i].classList.add("disabled-button");
  }

  ball.classList.add("step-1");
  setTimeout(() => { 

    ball.classList.remove("step-1"); 
    ball.classList.add("step-2");
    setTimeout(() => {

      ball.classList.remove("step-2");
      ball.classList.add("step-3");
      setTimeout(() => {

        ball.classList.remove("step-3");
        ball.classList.add("step-4");
        setTimeout(() => {
          
          ball.classList.remove("step-4");
          ball.classList.add("step-5");
          setTimeout(() => {

            ball.classList.remove("step-5");
            ball.classList.add("step-6");
            setTimeout(() => {
              
              ball.classList.remove("step-6");
            }, 2000);
          }, 1000);
        }, 500);
      }, 500);
    }, 500);

  }, 1000);


  setTimeout(() => { 
    ball.classList.remove('busy'); 
    ball.classList.remove('rotate-best'); 
    for (let i=0; i < buttons.length; i++) {
      buttons[i].classList.remove("disabled-button");
    }
  }, 5500);


}

// ----------------------

function move3() {
  
  function move() {
    document.querySelector(".ball").classList.add("move-3");
    document.querySelector(".ball").classList.add("busy");
    document.querySelector(".smash").classList.add("smash-visible");
    let buttons = document.querySelectorAll(".form-button");
    for (let i=0; i < buttons.length; i++) {
      buttons[i].classList.add("disabled-button");
    }
  }

  function remove() {
    document.querySelector(".ball").classList.remove("move-3");
    document.querySelector(".ball").classList.remove("busy");
    document.querySelector(".smash").classList.remove("smash-visible");
    let buttons = document.querySelectorAll(".form-button");
    for (let i=0; i < buttons.length; i++) {
      buttons[i].classList.remove("disabled-button");
    }
  }

  if (document.querySelector(".ball").classList.contains("busy")) return;  
  move();
  setTimeout(remove, 5000);
}

// -------------------------

function move2() {
  function move() {
    document.querySelector(".ball").classList.add("move-2");
    document.querySelector(".ball").classList.add("busy");
    let buttons = document.querySelectorAll(".form-button");
    for (let i=0; i < buttons.length; i++) {
      buttons[i].classList.add("disabled-button");
    }
  }

  function remove() {
    document.querySelector(".ball").classList.remove("move-2");
    document.querySelector(".ball").classList.remove("busy");
    let buttons = document.querySelectorAll(".form-button");
    for (let i=0; i < buttons.length; i++) {
      buttons[i].classList.remove("disabled-button");
    }
  }

  if (document.querySelector(".ball").classList.contains("busy")) return;  
  move();
  setTimeout(remove, 8000);  
}

// ===========================

document.querySelector(".move-best-button").onclick = function() {
  moveBest();
};

document.querySelector(".move-2-button").onclick = function() {
  move2();
};

document.querySelector(".move-3-button").onclick = function() {
  move3();
};
