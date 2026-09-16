// ================================
// Mobile Navigation
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================================
// Close Mobile Menu
// ================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================================
// Contact Form
// ================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Thank you for your message! I will get back to you soon.");

    contactForm.reset();
});


// ================================
// Scroll Reveal Animation
// ================================

const sections = document.querySelectorAll(".section");

const revealSections = () => {
    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });
};

window.addEventListener("scroll", revealSections);

revealSections();