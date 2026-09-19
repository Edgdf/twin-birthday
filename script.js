const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  welcome.classList.remove("active");
  surprise.classList.add("active");
  window.scrollTo(0, 0);
});

noBtn.addEventListener("click", () => {
  welcome.classList.remove("active");
  surprise.classList.add("active");
  window.scrollTo(0, 0);
});
