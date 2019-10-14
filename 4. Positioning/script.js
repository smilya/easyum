let largeImage = document.querySelector(".large-image");
let opaqueLayer = document.querySelector(".opaque-layer");
let closeCross = document.querySelector(".round-block");

largeImage.onclick = closeLarge;
closeCross.onclick = closeLarge;

function closeLarge() {
  opaqueLayer.style.display='none';
  largeImage.style.display='none';
  closeCross.style.display='none';
}

let images = document.querySelectorAll("figure img");

for (let index = 0; index < images.length; index++) {
  images[index].onclick = function() {
    let path = images[index].src;
    largeImage.src = path;
    largeImage.style.display='block';
    opaqueLayer.style.display='block';
    closeCross.style.display='block';
  }
}
