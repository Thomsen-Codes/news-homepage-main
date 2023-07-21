const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const sideBar = document.getElementById("sidebar");
const bgColor = document.getElementById("body");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("open");
  sideBar.classList.toggle("show-sidebar");
  menu.classList.toggle("open");
  bgColor.classList.toggle("bg-color");
});
