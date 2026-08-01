// ==========================
// BACKGROUND MUSIC
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

let playing = false;

musicBtn.addEventListener("click", () => {

if (!playing) {

music.play();
playing = true;

musicBtn.innerHTML = "⏸ Pause Music";

} else {

music.pause();
playing = false;

musicBtn.innerHTML = "🎵 Play Music";

}

});

}

// ==========================
// FADE EFFECT
// ==========================

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "translateY(-3px) scale(1.03)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "translateY(0) scale(1)";

});

});

// ==========================
// HEART CLICK EFFECT
// ==========================

document.addEventListener("click", function (e) {

const heart = document.createElement("div");

heart.innerHTML = "❤";

heart.style.position = "fixed";
heart.style.left = e.clientX + "px";
heart.style.top = e.clientY + "px";
heart.style.fontSize = "22px";
heart.style.color = "#ff4fa3";
heart.style.pointerEvents = "none";
heart.style.zIndex = "9999";
heart.style.transition = "all 1s ease";

document.body.appendChild(heart);

setTimeout(() => {

heart.style.transform = "translateY(-80px) scale(2)";
heart.style.opacity = "0";

}, 50);

setTimeout(() => {

heart.remove();

}, 1000);

});

// ==========================
// PAGE TITLE EFFECT
// ==========================

const titles = [
"❤️ For You",
"💜 Forever",
"✨ Always",
"🌙 My Favorite Person , my home , my mr,kashyap ❤️  "
];

let i = 0;

setInterval(() => {

document.title = titles[i];

i++;

if (i >= titles.length) {

i = 0;

}

}, 2500);
