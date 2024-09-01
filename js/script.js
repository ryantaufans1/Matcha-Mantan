// toggle class activate
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("activate");
};

//Klik diluar sidebar untuk menghilangkan menu
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("activate");
  }
});
