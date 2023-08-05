// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Hero Section seperti orang mengetik
const textElement = document.getElementById("typing-text");
const words = ["Web Developer", "Mobile Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1) + "|";
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex) + "|";
        charIndex++;
    }

    if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 500); // Waktu jeda sebelum menghapus kata
    } else if (charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        setTimeout(type, 100); // Waktu jeda sebelum mengetik kata berikutnya
    } else {
        const typingDelay = isDeleting ? 100 : 200; // Kecepatan pengetikan dan penghapusan (dalam milidetik)
        setTimeout(type, typingDelay);
    }
}

type();