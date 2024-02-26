const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");

const toggleMenu = () => {
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
};
hamburgerMenu.addEventListener("click", toggleMenu);
window.addEventListener("resize", () => {
  if (window.innerWidth > 767 && menu.classList.contains("active")) {
    menu.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
});
