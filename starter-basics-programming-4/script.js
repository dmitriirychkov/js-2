let circle = document.querySelector(".circle");

circle.addEventListener("click", function () {
  circle.remove();
});

circle.addEventListener("mouseover", function () {
  circle.style.backgroundColor = "red";
});
