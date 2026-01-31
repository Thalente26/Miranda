// 1. Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}


// 2. High-End Video Slider Logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 6000; // 6 seconds per video
function nextSlide() {

    // Fade out current
    slides[currentSlide].classList.remove('active');

    // Move to next
    currentSlide = (currentSlide + 1) % slides.length;

    // Fade in next
    slides[currentSlide].classList.add('active');
}

// Initialize the timer
setInterval(nextSlide, slideInterval);

// 3. Smooth Navbar Scroll Effect (Optional Perk)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.6)"; // Darkens on scroll
        navbar.style.top = "10px"; // Moves up slightly
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.1)";
        navbar.style.top = "30px";
    }
});

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Optional: Close menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});