const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const startBtn = document.getElementById("startBtn");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

startBtn.addEventListener("click", () => {
  alert("Thanks for your interest! Let's get started.");
});
