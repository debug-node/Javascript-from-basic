// 1. Show alerts for buttons
const Bttn = document.querySelectorAll(".bttn");

Bttn.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert(`${btn.textContent} clicked`);
    });
});

// 3. Bookmarks using event listeners

const googleButton = document.querySelector('#google-button');
const facebookButton = document.querySelector('#facebook-button');
const youtubeButton = document.querySelector('#youtube-button');

googleButton.addEventListener("click", function () {
    window.open("https://www.google.com", "_blank");
});

facebookButton.addEventListener("click", function () {
    window.open("https://www.facebook.com", "_blank");
});

youtubeButton.addEventListener("click", function () {
    window.open("https://www.youtube.com", "_blank");
});

// 4. Glowing bulb
const bulb = document.querySelector('.bulb');

setInterval(function () {
    bulb.classList.toggle('on');
}, 1000);