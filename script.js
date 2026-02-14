function openLetter() {
  const locked = document.getElementById("locked");
  const letter = document.getElementById("letter");

  locked.style.display = "none";
  letter.style.display = "block";


  // Fade in card
  setTimeout(() => {
    letter.classList.add("show");
  }, 100);

  // Munculkan teks satu per satu
  const lines = document.querySelectorAll(".line");
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.transition = "0.8s ease";
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, 800 * (index + 1));
  });

  function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play();
    btn.innerHTML = "⏸ Pause Music";
  } else {
    music.pause();
    btn.innerHTML = "▶ Play Music";
  }

}
// ===============================
// BACKGROUND MUSIC ALL PAGES
// ===============================

const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {

  // Cek apakah musik sudah pernah dinyalakan
  if (localStorage.getItem("musicPlaying") === "true") {
    bgMusic.play().catch(() => {});
  }

  // Aktifkan musik saat pertama kali user klik halaman
  document.addEventListener("click", function startMusic() {
    bgMusic.play().then(() => {
      localStorage.setItem("musicPlaying", "true");
    }).catch(() => {});
    document.removeEventListener("click", startMusic);
  });
function startMusicFlag() {
  localStorage.setItem("playMusic", "true");
}

}

}
