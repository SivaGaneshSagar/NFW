const burgerbtn = document.querySelectorAll(".burger");
console.log(burgerbtn[0]);
let burgerOpen = false;
burgerbtn[0].addEventListener("click", function () {
  if (!burgerOpen) {
    burgerbtn[0].classList.add("open");
    burgerOpen = true;
  } else {
    burgerbtn[0].classList.remove("open");
    burgerOpen = false;
  }
});

//for scroll animation
const headerScroll = document.querySelector("header");
console.log(headerScroll);
window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top > 600) {
    headerScroll.classList.add("active");
  } else {
    headerScroll.classList.remove("active");
  }
};
