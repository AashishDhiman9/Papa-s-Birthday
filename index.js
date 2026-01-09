const card = document.getElementById("card");
const openBtn = document.getElementById("open");
const music = document.getElementById("birthdayMusic");
const balloons = document.querySelector(".balloons");

// Ensure CLOSED on load
card.classList.remove("open");

openBtn.addEventListener("click", () => {
  balloons.classList.add("show");   // 🎈 balloons
  music.play().catch(() => {});     // 🎵 music

  setTimeout(() => {
    card.classList.add("open");     // 📖 open card
  }, 500);

  openBtn.style.display = "none";
});

