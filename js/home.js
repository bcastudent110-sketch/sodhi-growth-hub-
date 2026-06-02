/* ===================================
   HOME PAGE - DYNAMIC CONTENT POPULATION
   =================================== */

// ===== POPULATE STATISTICS =====
const statsGrid = document.getElementById('statsGrid');
if (statsGrid && window.statsData) {
    statsGrid.innerHTML = statsData.map(stat => `
        <div class="stat-card reveal">
            <div class="stat-icon"><i class="fas ${stat.icon}"></i></div>
            <div class="stat-number" data-count="${stat.number}" data-suffix="${stat.suffix}">0</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
}

// ===== POPULATE FEATURES =====
const featuresGrid = document.getElementById('featuresGrid');
if (featuresGrid && window.featuresData) {
    featuresGrid.innerHTML = featuresData.map((feature, index) => `
        <div class="feature-card reveal" style="transition-delay: ${index * 0.1}s">
            <div class="feature-icon"><i class="fas ${feature.icon}"></i></div>
            <h3>${feature.title}</h3>
            <p>${feature.desc}</p>
        </div>
    `).join('');
}

// ===== POPULATE FEATURED COURSES =====
const featuredCoursesGrid = document.getElementById('featuredCoursesGrid');
if (featuredCoursesGrid && window.coursesData) {
    // Get a selection of courses from different categories
    const featured = [
        { ...coursesData.primary.courses[0], category: 'primary', catName: 'Primary' },
        { ...coursesData.secondary.courses[0], category: 'secondary', catName: 'Secondary' },
        { ...coursesData.science.courses[0], category: 'science', catName: 'Science' },
        { ...coursesData.commerce.courses[0], category: 'commerce', catName: 'Commerce' },
        { ...coursesData.middle.courses[2], category: 'primary', catName: 'Olympiad' },
        { ...coursesData.english.courses[0], category: 'secondary', catName: 'English' }
    ];

    featuredCoursesGrid.innerHTML = featured.map(course => `
        <div class="course-card reveal" data-category="${course.category}">
            <div class="course-image">
                <i class="fas ${course.icon}"></i>
                ${course.badge ? `<span class="course-badge">${course.badge}</span>` : ''}
            </div>
            <div class="course-content">
                <span class="course-category">${course.catName}</span>
                <h3 class="course-title">${course.name}</h3>
                <p class="course-desc">${course.desc}</p>
                <div class="course-meta">
                    <div class="course-meta-item">
                        <i class="fas fa-clock"></i> ${course.duration}
                    </div>
                    <div class="course-meta-item">
                        <i class="fas fa-user-graduate"></i> All levels
                    </div>
                </div>
                <div class="course-footer">
                    <div class="course-price">
                        ₹${course.fees.toLocaleString()} <small>/ course</small>
                    </div>
                    <a href="pages/register.html?course=${course.id}" class="enroll-btn">
                        Enroll <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== POPULATE TESTIMONIALS =====
const testimonialsTrack = document.getElementById('testimonialsTrack');
const sliderDots = document.getElementById('sliderDots');

if (testimonialsTrack && window.testimonialsData) {
    testimonialsTrack.innerHTML = testimonialsData.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>
                ${t.result ? `<div class="testimonial-result">${t.result}</div>` : ''}
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-author">
                    <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 3px solid var(--primary-blue);">
                    <div class="testimonial-info">
                        <h4>${t.name}</h4>
                        <p>${t.role}</p>
                        <div class="testimonial-rating">
                            ${Array(t.rating).fill('<i class="fas fa-star"></i>').join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    if (sliderDots) {
        sliderDots.innerHTML = testimonialsData.map((_, i) =>
            `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`
        ).join('');
    }
}

// ===== POPULATE TEACHERS =====
const teachersGrid = document.getElementById('teachersGrid');
if (teachersGrid && window.teachersData) {
    teachersGrid.innerHTML = teachersData.map((teacher, index) => `
        <div class="teacher-card reveal" style="transition-delay: ${index * 0.1}s">
            <div class="teacher-image">
                ${teacher.badge ? `<span class="teacher-badge-top">${teacher.badge}</span>` : ''}
                <img src="${teacher.avatar}" alt="${teacher.name}">
                <div class="teacher-social">
                    <a href="${teacher.social.fb}" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="${teacher.social.tw}" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="${teacher.social.li}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <p class="teacher-role">${teacher.role}</p>
                <span class="teacher-exp-badge">${teacher.experience}</span>
                <p class="teacher-expertise">${teacher.expertise}</p>
            </div>
        </div>
    `).join('');
}

// ===== POPULATE TOPPERS =====
const toppersGrid = document.getElementById('toppersGrid');
if (toppersGrid && window.toppersData) {
    toppersGrid.innerHTML = toppersData.map(t => `
        <div class="topper-card glass-card reveal">
            <div class="topper-badge">${t.badge}</div>
            <img class="topper-avatar" src="${t.avatar}" alt="${t.name}">
            <div class="topper-info">
                <h3>${t.name}</h3>
                <div class="topper-score">${t.score}</div>
                <p class="topper-stream">${t.stream}</p>
                <p class="topper-achievement">${t.achievement}</p>
            </div>
        </div>
    `).join('');
}

// ===== POPULATE LEARNING PROCESS TIMELINE =====
const timelineContainer = document.getElementById('timelineContainer');
if (timelineContainer && window.timelineData) {
    timelineContainer.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-step-card glass-card reveal" style="transition-delay: ${index * 0.1}s">
            <div class="timeline-number-bg">${item.step}</div>
            <div class="timeline-icon-wrapper">
                <i class="fas ${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

// ===== POPULATE UPCOMING BATCHES =====
const batchesGrid = document.getElementById('batchesGrid');
if (batchesGrid && window.batchesData) {
    batchesGrid.innerHTML = batchesData.map(b => {
        const progressPercentage = Math.round(((b.totalSeats - b.seatsLeft) / b.totalSeats) * 100);
        return `
            <div class="batch-card glass-card reveal">
                <div>
                    <h3 class="batch-title">${b.course}</h3>
                    <div class="batch-info-row">
                        <i class="far fa-calendar-alt"></i>
                        <span>Starts: <strong>${b.date}</strong></span>
                    </div>
                    <div class="batch-info-row">
                        <i class="far fa-clock"></i>
                        <span>Timing: <strong>${b.timing}</strong></span>
                    </div>
                    <div class="batch-info-row">
                        <i class="fas fa-users"></i>
                        <span>Batch Size: <strong>${b.totalSeats} students max</strong></span>
                    </div>
                    
                    <div class="batch-progress-wrapper">
                        <div class="batch-progress-bar">
                            <div class="batch-progress-fill" style="width: ${progressPercentage}%"></div>
                        </div>
                        <div class="batch-progress-text">
                            <span>${b.seatsLeft} seats left</span>
                            <span>${progressPercentage}% full</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="batch-status">${b.status}</div>
                    <a href="pages/register.html" class="batch-cta">Enroll Now <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    }).join('');
}

// ===== POPULATE GALLERY PREVIEW =====
const galleryPreviewGrid = document.getElementById('galleryPreviewGrid');
if (galleryPreviewGrid && window.galleryData) {
    const previewItems = galleryData.slice(0, 6);
    galleryPreviewGrid.innerHTML = previewItems.map((item, index) => `
        <div class="gallery-preview-item reveal" style="transition-delay: ${index * 0.1}s">
            <div class="gallery-preview-img" style="background: ${item.gradient}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white;">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="gallery-preview-overlay">
                <div class="gallery-preview-text">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== POPULATE FAQ =====
const faqWrapper = document.getElementById('faqWrapper');
if (faqWrapper && window.faqData) {
    faqWrapper.innerHTML = faqData.map((item, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}">
            <div class="faq-question">
                <span>${item.q}</span>
                <span class="faq-icon"><i class="fas fa-plus"></i></span>
            </div>
            <div class="faq-answer">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');

    // Re-bind FAQ click events after dynamic insertion
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

// Re-initialize testimonial slider after data load
setTimeout(() => {
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    const goToSlide = (index) => {
        currentSlide = index;
        if (testimonialsTrack) {
            testimonialsTrack.style.transform = `translateX(-${index * 100}%)`;
        }
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    if (prevBtn) {
        prevBtn.onclick = () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        };
    }
    if (nextBtn) {
        nextBtn.onclick = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        };
    }

    // Auto play
    setInterval(() => {
        if (totalSlides > 0) {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }
    }, 6000);

    // Trigger reveal animation
    setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) el.classList.add('active');
        });
    }, 100);
}, 100);
