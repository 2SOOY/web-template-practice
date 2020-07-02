const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-container");
const icons = document.querySelector(".icon-container");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
