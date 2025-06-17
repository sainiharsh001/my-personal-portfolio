// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll
document.querySelectorAll('a[href^=""]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';

let charIndex = 0;
function type() {
    if (charIndex < text.length) {
        typewriter.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

// Start typewriter effect
setTimeout(type, 1000);

// Scroll Animation
const fadeElements = document.querySelectorAll('.about-content, .skill-card, .project-card, .contact-container');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

// Add fade-in class to elements
fadeElements.forEach(element => {
    element.classList.add('fade-in');
});

// Initial check for elements in view
fadeInOnScroll();

// Listen for scroll events
window.addEventListener('scroll', fadeInOnScroll);

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});