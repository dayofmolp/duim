// Particles.js Initialization
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function() {
    console.log('Particles.js loaded.');
});

// Typed.js Initialization for Dynamic Text
new Typed('#typed', {
    strings: ["Innovate. Create. Duis."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Alert
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We’ll get back to you soon.');
});
