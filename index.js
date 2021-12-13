// var arrowBtn = document.querySelectorAll(".arrow");
//
// for (var i = 0; i < arrowBtn.length; i++) {
//   arrowBtn[i].addEventListener("click", function() {
//     this.classList.toggle("rotate");
//   });
//
// }
//
var arrow0 = document.querySelector('.arrow0');
var arrow1 = document.querySelector('.arrow1');
var arrow2 = document.querySelector('.arrow2');
var arrow3 = document.querySelector('.arrow3');
var arrow4 = document.querySelector('.arrow4');

function rotateArrow(ob) {
  document.querySelector(ob).classList.toggle("rotate");
}

function show(obj) {
  document.getElementById(obj).classList.toggle("show");
}

function removeCss(a, b, c, d) {
  document.getElementById("q" + a).classList.remove("show");
  document.getElementById("q" + b).classList.remove("show");
  document.getElementById("q" + c).classList.remove("show");
  document.getElementById("q" + d).classList.remove("show");

  document.querySelector('.arrow' + a + ' img').classList.remove("rotate");
  document.querySelector('.arrow' + b + ' img').classList.remove("rotate");
  document.querySelector('.arrow' + c + ' img').classList.remove("rotate");
  document.querySelector('.arrow' + d + ' img').classList.remove("rotate");

  document.querySelector('.arrow' + a + ' h3').classList.remove("weight");
  document.querySelector('.arrow' + b + ' h3').classList.remove("weight");
  document.querySelector('.arrow' + c + ' h3').classList.remove("weight");
  document.querySelector('.arrow' + d + ' h3').classList.remove("weight");

}

function remove(num) {

  switch (num) {
    case 0:
      removeCss(1, 2, 3, 4);

      break;
    case 1:
      removeCss(0, 2, 3, 4);

      break;
    case 2:
      removeCss(1, 0, 3, 4);

      break;
    case 3:
      removeCss(1, 2, 0, 4);

      break;
    case 4:
      removeCss(1, 2, 3, 0);

      break;
    default:
      console.log("done");
  }

}

function fontWeight(obj){
  document.querySelector(obj).classList.toggle("weight");
}

arrow0.addEventListener("click", function() {
  remove(0);
  rotateArrow('.arrow0 img');
  fontWeight('.arrow0 h3');
  show("q0");
})
arrow1.addEventListener("click", function() {
  remove(1);
  rotateArrow('.arrow1 img');
  fontWeight('.arrow1 h3');
  show("q1");
})
arrow2.addEventListener("click", function() {
  remove(2);
  rotateArrow('.arrow2 img');
  fontWeight('.arrow2 h3');
  show("q2");
})
arrow3.addEventListener("click", function() {
  remove(3);
  rotateArrow('.arrow3 img');
  fontWeight('.arrow3 h3');
  show("q3");
})
arrow4.addEventListener("click", function() {
  remove(4);
  rotateArrow('.arrow4 img');
  fontWeight('.arrow4 h3');
  show("q4");
})
