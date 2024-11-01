// Function to show surprise (confetti + popup)
function showSurprise() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => balloon.classList.add('popped'));
    setTimeout(() => alert("Happy Birthday to an amazing person!❤️🥳Happy birthday dear sister 😍 you are the best. My undying 😊 love for you and my 🥰 eternally great 🤗 full heart wishes ❤️ you are the best of everything. 😍 Sending happy birthday wishes 🎂 for sister who means the world 😉 to me. The more I grow up 🍫 I realize how important you are to me, ❤️ ONCE AGAIN 😊 HAPPY BIRTHDAY KUTTACHIIIIII 🎂😺😻😻😺"), 1000);
}

// Function to pop balloon
function popBalloon(balloon) {
    balloon.classList.add('popped');
}

// Carousel logic
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
    images[currentImageIndex].classList.add('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.remove('hidden');
}, 3000);
