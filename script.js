const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");
const quiz = document.getElementById("quiz");
const letters = document.getElementById("letters");
const heartGame = document.getElementById("heartGame");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const quizStartBtn = document.getElementById("quizStartBtn");
const nextQuestion = document.getElementById("nextQuestion");

const progressBar = document.getElementById("progressBar");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const quizFeedback = document.getElementById("quizFeedback");

const lettersNext = document.getElementById("lettersNext");
const letterMessage = document.getElementById("letterMessage");

const heartScore = document.getElementById("heartScore");
const gameArea = document.getElementById("gameArea");
const gameHint = document.getElementById("gameHint");
const finalSurprise = document.getElementById("finalSurprise");

/* =========================
SCREEN CHANGER
========================= */

function showScreen(screen) {

document.querySelectorAll(".screen").forEach((item) => {
item.classList.remove("active");
});

screen.classList.add("active");

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

/* =========================
WELCOME BUTTONS
========================= */

yesBtn.addEventListener("click", () => {
showScreen(surprise);
});

noBtn.addEventListener("click", () => {
showScreen(surprise);
});

/* =========================
START QUIZ
========================= */

quizStartBtn.addEventListener("click", () => {

showScreen(quiz);

currentQuestion = 0;
quizScore = 0;

loadQuestion();
});

/* =========================
QUIZ QUESTIONS
========================= */

const questions = [

{
question: "Who is more likely to get jealous? 👀",
answers: [
"Twin 😌",
"Me 😭",
"Both of us 😂",
"Neither of us 😇"
],
correct: 2
},

{
question: "Who is more dramatic? 🎭",
answers: [
"Me, obviously 😌",
"Twin 😂",
"Both of us",
"We're both innocent 😇"
],
correct: 2
},

{
question: "Who would miss the other first? 🥺",
answers: [
"Me ❤️",
"Twin ❤️",
"Both at exactly the same time",
"Nobody. We're too cool 😎"
],
correct: 2
},

{
question: "Who is more likely to annoy the other person for fun? 😈",
answers: [
"Me 😇",
"Twin 😈",
"Both of us 😂",
"The universe"
],
correct: 2
},

{
question: "What does Twin need more of? 👀",
answers: [
"Sleep 😴",
"Food 🍕",
"My attention ❤️",
"All three 😂"
],
correct: 3
},

{
question: "Who got lucky enough to have the other? 🥹❤️",
answers: [
"Me",
"Twin",
"Both of us",
"Definitely Twin 😌"
],
correct: 3
}

];

let currentQuestion = 0;
let quizScore = 0;

function loadQuestion() {

const q = questions[currentQuestion];

questionNumber.textContent =
"Question ${currentQuestion + 1} of ${questions.length}";

questionText.textContent = q.question;

progressBar.style.width =
"${((currentQuestion + 1) / questions.length) * 100}%";

answers.innerHTML = "";

quizFeedback.textContent = "";

nextQuestion.classList.add("hidden");

q.answers.forEach((answer, index) => {

const button = document.createElement("button");

button.className = "answer-btn";

button.textContent = answer;

button.addEventListener("click", () => {
  checkAnswer(button, index);
});

answers.appendChild(button);

});

}

function checkAnswer(button, selectedIndex) {

const q = questions[currentQuestion];

const allButtons =
document.querySelectorAll(".answer-btn");

allButtons.forEach((btn) => {
btn.disabled = true;
});

if (selectedIndex === q.correct) {

button.classList.add("correct");

quizScore++;

quizFeedback.textContent =
  "CORRECT! 😌❤️ Okayyy, you actually know us.";

} else {

button.classList.add("wrong");

allButtons[q.correct].classList.add("correct");

quizFeedback.textContent =
  "WRONGGG 😭😂 You need to pay more attention to us!";

}

nextQuestion.classList.remove("hidden");

}

nextQuestion.addEventListener("click", () => {

currentQuestion++;

if (currentQuestion < questions.length) {

loadQuestion();

} else {

showQuizResult();

}

});

function showQuizResult() {

questionNumber.textContent = "Quiz Complete! 🎉";

questionText.textContent =
"You scored ${quizScore} / ${questions.length} ❤️";

answers.innerHTML = "";

progressBar.style.width = "100%";

if (quizScore === questions.length) {

quizFeedback.textContent =
  "PERFECT SCORE! 🥹❤️ Okay Twin, you really do know your girl.";

} else if (quizScore >= 4) {

quizFeedback.textContent =
  "Not bad, birthday boy 😌❤️ You know me pretty well.";

} else {

quizFeedback.textContent =
  "😭 We clearly need to spend more time together.";

}

nextQuestion.textContent =
"Open My Little Letters 💌";

nextQuestion.classList.remove("hidden");

nextQuestion.onclick = () => {

nextQuestion.onclick = null;

showScreen(letters);

};

}

/* =========================
OPEN WHEN LETTERS
========================= */

const messages = {

miss: {
title: "💌 If You Miss Me",
text:
"Come here, birthday boy. 🥺❤️ Imagine me giving you the biggest hug right now. Even when we're not together, you're still somewhere in my thoughts. So smile, okay? And remember that there's a girl somewhere who probably misses you too. 🤭💕"
},

sad: {
title: "🥺 If You're Having a Bad Day",
text:
"Whatever happened today, breathe. You don't have to have everything figured out right now. Take a little break, drink some water, eat something, and remember that one bad day doesn't define your whole life. And yes... you are allowed to come to me for a hug. 🫂❤️"
},

laugh: {
title: "😂 If You Need To Laugh",
text:
"Remember that you voluntarily chose to deal with ME. 😂 Honestly, that's probably the funniest decision you've ever made. Congratulations. No refunds. 😌❤️"
},

love: {
title: "❤️ If You Want To Know Why I Love You",
text:
"Because you're you. ❤️ Because of the way you make me laugh, the little things you do, the conversations, the teasing, the memories, and all those tiny moments that probably don't seem important but somehow mean a lot to me. I don't need one giant reason. I have hundreds of little ones. 🥹💕"
},

hug: {
title: "🫂 If You Need A Hug",
text:
"Close your eyes for five seconds. 🥺 Now imagine me wrapping my arms around you and refusing to let go for a while. Consider this your digital hug until I can give you a real one. ❤️🫂"
}

};

document.querySelectorAll(".envelope").forEach((envelope) => {

envelope.addEventListener("click", () => {

const type = envelope.dataset.message;

const message = messages[type];

letterMessage.innerHTML = `
  <h2>${message.title}</h2>
  <p>${message.text}</p>
`;

letterMessage.classList.remove("hidden");

letterMessage.scrollIntoView({
  behavior: "smooth",
  block: "center"
});

});

});

/* =========================
GO TO HEART GAME
========================= */

lettersNext.addEventListener("click", () => {

showScreen(heartGame);

startHeartGame();

});

/* =========================
HEART GAME
========================= */

let score = 0;
let gameRunning = false;
let heartInterval;

function startHeartGame() {

score = 0;

gameRunning = true;

heartScore.textContent = score;

gameArea.innerHTML = "";

finalSurprise.classList.add("hidden");

gameHint.textContent =
"Tap the hearts! ❤️";

clearInterval(heartInterval);

heartInterval = setInterval(createGameHeart, 700);

}

function createGameHeart() {

if (!gameRunning) return;

const heart = document.createElement("div");

heart.className = "game-heart";

heart.textContent =
Math.random() > 0.3 ? "❤️" : "💗";

const maxLeft =
gameArea.clientWidth - 50;

heart.style.left =
Math.random() * maxLeft + "px";

heart.style.top = "-50px";

heart.addEventListener("click", catchHeart);

gameArea.appendChild(heart);

setTimeout(() => {

if (heart.parentElement) {
  heart.remove();
}

}, 3000);

}

function catchHeart(event) {

event.stopPropagation();

if (!gameRunning) return;

score++;

heartScore.textContent = score;

event.currentTarget.remove();

if (score >= 10) {

finishHeartGame();

}

}

function finishHeartGame() {

gameRunning = false;

clearInterval(heartInterval);

document.querySelectorAll(".game-heart").forEach((heart) => {
heart.remove();
});

gameHint.textContent =
"You caught my heart. ❤️";

finalSurprise.classList.remove("hidden");

finalSurprise.scrollIntoView({
behavior: "smooth",
block: "center"
});

}

/* =========================
FLOATING HEARTS
========================= */

function createFloatingHeart() {

const heart = document.createElement("div");

heart.className = "heart";

const hearts = ["❤️", "💕", "💗", "💖", "💓"];

heart.textContent =
hearts[Math.floor(Math.random() * hearts.length)];

heart.style.left =
Math.random() * 100 + "vw";

heart.style.fontSize =
(18 + Math.random() * 20) + "px";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 6000);

}

setInterval(createFloatingHeart, 800);
