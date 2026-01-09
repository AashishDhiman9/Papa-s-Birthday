const card = document.getElementById("card");
const openBtn = document.getElementById("open");
const music = document.getElementById("birthdayMusic");
const balloons = document.querySelector(".balloons");

// Ensure closed state
card.classList.remove("open");

openBtn.addEventListener("click", () => {
  balloons.classList.add("show");
  music.play().catch(() => {});

  setTimeout(() => {
    card.classList.add("open");
  }, 500);

  openBtn.style.display = "none";
});
