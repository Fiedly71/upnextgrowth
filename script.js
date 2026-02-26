// ========================================
// FAQ ACCORDION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ========================================
    // SMOOTH SCROLL
    // ========================================
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 20;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // FORM SUBMISSION
    // ========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to your backend
            // For now, we'll just show a success message
            
            console.log('Form Data:', data);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
            // In a real implementation, you would send this to your backend:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                showSuccessMessage();
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                showErrorMessage();
            });
            */
        });
    }
    
    // ========================================
    // SUCCESS/ERROR MESSAGE
    // ========================================
    function showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'form-message success';
        message.innerHTML = `
            <div style="
                background: #00C2A8;
                color: white;
                padding: 1.5rem;
                border-radius: 12px;
                margin-top: 1rem;
                text-align: center;
                animation: fadeInUp 0.5s ease;
                font-weight: 600;
            ">
                ✅ Merci ! Votre demande a été envoyée avec succès. Nous vous contactons très bientôt !
            </div>
        `;
        
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(message, form.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
    
    function showErrorMessage() {
        const message = document.createElement('div');
        message.className = 'form-message error';
        message.innerHTML = `
            <div style="
                background: #FF4444;
                color: white;
                padding: 1.5rem;
                border-radius: 12px;
                margin-top: 1rem;
                text-align: center;
                animation: fadeInUp 0.5s ease;
                font-weight: 600;
            ">
                ❌ Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
            </div>
        `;
        
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(message, form.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .benefit-item, .process-step, .trust-item, .problem-item');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ========================================
    // WHATSAPP LINK (Update with real number)
    // ========================================
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add analytics tracking here
            console.log('WhatsApp link clicked');
        });
    });
    
    // ========================================
    // EMAIL LINKS
    // ========================================
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add analytics tracking here
            console.log('Email link clicked');
        });
    });
    
    // ========================================
    // SCROLL TO TOP BUTTON (Optional)
    // ========================================
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.setAttribute('id', 'scrollToTop');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #FF7A18;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// FORM VALIDATION
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Simple phone validation (adjust based on your needs)
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Add real-time validation to form inputs
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[name="email"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.border = '2px solid #FF4444';
            } else {
                this.style.border = 'none';
            }
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.border = '2px solid #FF4444';
            } else {
                this.style.border = 'none';
            }
        });
    }
});

// ========================================
// ANALYTICS (Optional - Add your tracking code)
// ========================================
function trackEvent(category, action, label) {
    // Example for Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
    
    console.log('Event tracked:', category, action, label);
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'Click', this.textContent.trim());
        });
    });
});
