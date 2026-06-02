/* ===================================
   SODHI GROWTH HUB - MAIN JAVASCRIPT
   Common functionality across all pages
   =================================== */

// ===== LOADER =====
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
});

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
            const icon = mobileToggle?.querySelector('i');
            if (icon) icon.classList.replace('fa-times', 'fa-bars');
        }
    });
});

// ===== DARK MODE TOGGLE =====
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on theme
function updateThemeIcon() {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }
}
updateThemeIcon();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon();
    });
}

// ===== BACK TO TOP BUTTON =====
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const revealOnScroll = () => {
    const revealElements = document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active)');
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== ANIMATED COUNTERS =====
const counters = document.querySelectorAll('.stat-number[data-count]');
let countersAnimated = false;

const animateCounters = () => {
    if (countersAnimated) return;
    
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        countersAnimated = true;
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString() + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + suffix;
                }
            };
            updateCounter();
        });
    }
};

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

// ===== TYPING TEXT EFFECT =====
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const words = ['Better Future', 'Brighter Tomorrow', 'Bigger Dreams', 'Bold Success'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 120;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    };
    
    type();
}

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));
            // Open current if it wasn't already
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// ===== TESTIMONIALS SLIDER =====
const testimonialTrack = document.querySelector('.testimonials-track');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

if (testimonialTrack) {
    const slides = testimonialTrack.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;
    
    const goToSlide = (index) => {
        currentSlide = index;
        testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto play
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }, 6000);
}

// ===== COURSE FILTERS (Home Page) =====
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.courses-grid .course-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        courseCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// ===== CONTACT FORM (Frontend Only) =====
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple frontend validation
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            showNotification('Message sent successfully! We will get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showNotification('Please fill in all required fields.', 'error');
        }
    });
}

// ===== NOTIFICATION HELPER =====
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        z-index: 10001;
        font-weight: 500;
        max-width: 320px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" style="margin-right: 8px;"></i>
        ${message}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 10);
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3500);
}

// ===== CURRENT YEAR IN FOOTER =====
const yearElement = document.getElementById('currentYear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        if (emailInput && emailInput.value.trim()) {
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            newsletterForm.reset();
        }
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const loginEmail = loginForm.querySelector('#loginEmail');
    const loginPassword = loginForm.querySelector('#loginPassword');
    const loginMessage = document.getElementById('loginFormMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValue = loginEmail.value.trim();
        const passwordValue = loginPassword.value.trim();
        let isValid = true;
        let message = '';

        if (!emailValue) {
            message = 'Please enter your email address.';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
            message = 'Please enter a valid email address.';
            isValid = false;
        } else if (!passwordValue) {
            message = 'Please enter your password.';
            isValid = false;
        } else if (passwordValue.length < 6) {
            message = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        if (!isValid) {
            loginMessage.textContent = message;
            loginMessage.classList.remove('success');
            loginMessage.classList.add('error');
            loginPassword.style.borderColor = '#ef4444';
            loginEmail.style.borderColor = !emailValue || !/^\S+@\S+\.\S+$/.test(emailValue) ? '#ef4444' : '';
            return;
        }

        loginMessage.textContent = 'Login successful. This is a frontend demo only.';
        loginMessage.classList.remove('error');
        loginMessage.classList.add('success');
        loginEmail.style.borderColor = '';
        loginPassword.style.borderColor = '';
        loginForm.reset();
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    const fullNameInput = signupForm.querySelector('#signupFullName');
    const emailInput = signupForm.querySelector('#signupEmail');
    const passwordInput = signupForm.querySelector('#signupPassword');
    const confirmPasswordInput = signupForm.querySelector('#signupConfirmPassword');
    const signupMessage = document.getElementById('signupFormMessage');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        let isValid = true;
        let message = '';

        if (!fullName) {
            message = 'Please enter your full name.';
            isValid = false;
        } else if (!email) {
            message = 'Please enter your email address.';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            message = 'Please enter a valid email address.';
            isValid = false;
        } else if (!password) {
            message = 'Please create a password.';
            isValid = false;
        } else if (password.length < 6) {
            message = 'Password must be at least 6 characters long.';
            isValid = false;
        } else if (password !== confirmPassword) {
            message = 'Passwords do not match.';
            isValid = false;
        }

        if (!isValid) {
            signupMessage.textContent = message;
            signupMessage.classList.remove('success');
            signupMessage.classList.add('error');
            return;
        }

        signupMessage.textContent = 'Account created successfully. This is a frontend demo only.';
        signupMessage.classList.remove('error');
        signupMessage.classList.add('success');
        signupForm.reset();
    });
}

console.log('%c🎓 Sodhi Growth Hub', 'font-size: 20px; font-weight: bold; color: #4361ee;');
console.log('%cEmpowering Students for a Better Future', 'font-size: 14px; color: #7209b7;');
