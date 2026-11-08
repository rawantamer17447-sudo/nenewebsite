
const button = document.getElementById("surpriseButton");
const message = document.getElementById("surpriseMessage");

const messages = [
    "You are loved more than you know, Nene! ♡",
    "You make the world a little prettier just by being in it 🌷",
    "It's okay to take your time. I'm always here for you.",
    "You deserve all the beautiful things in life ✨",
    "One bad day doesn't make a bad life. Sending you a hug! ♡",
    "I'm so lucky to have you in my life 💗"
];

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
});

