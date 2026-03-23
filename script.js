// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Header Scroll Effect
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.padding = "15px 0";
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Remove active class from all links
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                
                // Add active class to clicked link
                if(this.closest('nav')) {
                    this.classList.add('active');
                }
                
                window.scrollTo({
                    top: target.offsetTop - 80, // offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial state for elements to animate
    const animateElements = document.querySelectorAll('.benefit-card, .highlight-card, .attr-card, .infra-col');
    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
});
