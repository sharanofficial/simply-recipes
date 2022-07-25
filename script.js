const navBtn = document.querySelector(".nav-btn");
const links = document.querySelector(".links-container");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = document.getElementById("date");

const currentYear = new Date().getFullYear();

date.textContent = currentYear;
