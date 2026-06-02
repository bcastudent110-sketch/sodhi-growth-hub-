/* ===================================
   COURSES PAGE - Dynamic Content
   =================================== */

const coursesContent = document.getElementById('coursesContent');
const futureCoursesGrid = document.getElementById('futureCoursesGrid');

// Skill course categories
const skillCategories = ['computer', 'web', 'english', 'personality'];

// Helper function to render a category section
function renderCategory(catKey, catData) {
    return `
        <section class="category-section" data-category="${catKey}">
            <div class="category-header reveal">
                <div class="category-icon"><i class="fas ${catData.icon}"></i></div>
                <div class="category-info">
                    <h2>${catData.title}</h2>
                    <p>${catData.description}</p>
                </div>
            </div>
            <div class="courses-grid">
                ${catData.courses.map(course => `
                    <div class="course-card reveal">
                        <div class="course-image">
                            <i class="fas ${course.icon}"></i>
                            ${course.badge ? `<span class="course-badge">${course.badge}</span>` : ''}
                        </div>
                        <div class="course-content">
                            <span class="course-category">${catData.title}</span>
                            <h3 class="course-title">${course.name}</h3>
                            <p class="course-desc">${course.desc}</p>
                            <div class="course-meta">
                                <div class="course-meta-item">
                                    <i class="fas fa-clock"></i> ${course.duration}
                                </div>
                                <div class="course-meta-item">
                                    <i class="fas fa-certificate"></i> Certified
                                </div>
                            </div>
                            <div class="course-footer">
                                <div class="course-price">
                                    ₹${course.fees.toLocaleString()} <small>/ course</small>
                                </div>
                                <a href="register.html?course=${course.id}" class="enroll-btn">
                                    Enroll Now <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// Populate all categories
if (coursesContent && window.coursesData) {
    let html = '';
    Object.keys(coursesData).forEach(key => {
        html += renderCategory(key, coursesData[key]);
    });
    coursesContent.innerHTML = html;
}

// Populate future courses
if (futureCoursesGrid && window.futureCoursesData) {
    futureCoursesGrid.innerHTML = futureCoursesData.map(course => `
        <div class="course-card reveal">
            <div class="course-image">
                <i class="fas ${course.icon}"></i>
                <span class="coming-soon-badge">Coming Soon</span>
            </div>
            <div class="course-content">
                <span class="course-category">Future Launch</span>
                <h3 class="course-title">${course.name}</h3>
                <p class="course-desc">${course.desc}</p>
                <div class="course-meta">
                    <div class="course-meta-item">
                        <i class="fas fa-clock"></i> ${course.duration}
                    </div>
                    <div class="course-meta-item">
                        <i class="fas fa-bell"></i> Notify me
                    </div>
                </div>
                <div class="course-footer">
                    <div class="course-price">
                        ₹${course.fees.toLocaleString()} <small>/ course</small>
                    </div>
                    <a href="contact.html" class="enroll-btn">
                        Pre-register <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Category filter functionality
const filterBtns = document.querySelectorAll('.course-filters .filter-btn[data-cat]');
const categorySections = () => document.querySelectorAll('.category-section');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-cat');
        categorySections().forEach(section => {
            const cat = section.getAttribute('data-category');
            if (filter === 'all') {
                section.style.display = 'block';
            } else if (filter === 'skill' && skillCategories.includes(cat)) {
                section.style.display = 'block';
            } else if (cat === filter) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
        
        // Smooth scroll to first visible section
        const firstVisible = Array.from(categorySections()).find(s => s.style.display !== 'none');
        if (firstVisible && filter !== 'all') {
            setTimeout(() => {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    });
});

// Trigger reveal animation
setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) el.classList.add('active');
    });
}, 100);
