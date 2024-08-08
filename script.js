document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Skill rings animation
    const skillRings = document.querySelectorAll('.skill-ring-progress');
    skillRings.forEach(ring => {
        const skillValue = ring.getAttribute('data-skill');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (skillValue / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    });

    // Lightbox functionality
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeLightbox = document.querySelector('.lightbox .close');

    document.querySelectorAll('.project-card img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || message === '') {
            feedback.textContent = 'Please fill out all fields.';
        } else if (!validateEmail(email)) {
            feedback.textContent = 'Please enter a valid email address.';
        } else {
            feedback.textContent = 'Message sent successfully!';
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

