
const words = [
  "Web Developer",
  "Programmer",
  "Creative Builder",
  "Technology Enthusiast"
];

const typing = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];
  typing.textContent = word.substring(0, charIndex);

  if (!deleting) {
    charIndex++;
    if (charIndex > word.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  }
  setTimeout(typeEffect, deleting ? 45 : 90);
}
typeEffect();

// Dark/light theme
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Matrix background
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
const letters = "01AMANDEV<>{}[]";
let drops = [];

function resizeMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drops = Array(Math.ceil(canvas.width / 18)).fill(1);
}

function drawMatrix() {
  ctx.fillStyle = "rgba(8,13,24,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00e5ff";
  ctx.font = "14px monospace";

  drops.forEach((y, i) => {
    const char = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(char, i * 18, y * 18);
    if (y * 18 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

resizeMatrix();
window.addEventListener("resize", resizeMatrix);
setInterval(drawMatrix, 65);
