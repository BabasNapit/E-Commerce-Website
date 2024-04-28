// Toggle mobile menu
const mobileIcon = document.querySelector(".mobile-icons");
const links = document.querySelector(".links");

mobileIcon.addEventListener("click", () => {
  links.classList.toggle("show");
});
