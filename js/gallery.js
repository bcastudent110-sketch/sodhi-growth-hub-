/* ===================================
   GALLERY PAGE - Lightbox & Filtering
   =================================== */

// Gallery items data (using global data array or fallback)
const galleryItems = window.galleryData || [
    { cat: 'classroom', title: 'Smart Classroom', desc: 'Modern equipped classroom', icon: 'fa-chalkboard', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { cat: 'activities', title: 'Annual Day 2025', desc: 'Cultural performances', icon: 'fa-music', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { cat: 'lab', title: 'Computer Lab', desc: 'Latest PCs and software', icon: 'fa-laptop', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { cat: 'achievement', title: 'Toppers 2024', desc: 'Our shining stars', icon: 'fa-trophy', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { cat: 'events', title: 'Science Exhibition', desc: 'Innovation showcase', icon: 'fa-flask', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
    { cat: 'classroom', title: 'Library Corner', desc: 'Reading and research', icon: 'fa-book', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { cat: 'activities', title: 'Sports Day', desc: 'Annual sports event', icon: 'fa-futbol', gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' },
    { cat: 'lab', title: 'Science Lab', desc: 'Hands-on experiments', icon: 'fa-microscope', gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)' },
    { cat: 'achievement', title: 'Award Ceremony', desc: 'Best institute award', icon: 'fa-medal', gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)' },
    { cat: 'events', title: 'Workshop Day', desc: 'Career guidance', icon: 'fa-briefcase', gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)' },
    { cat: 'classroom', title: 'Online Class', desc: 'Live virtual learning', icon: 'fa-video', gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)' },
    { cat: 'achievement', title: '100% Results', desc: 'Class 10 board success', icon: 'fa-star', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)' }
];

// ===== POPULATE GALLERY =====
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
    galleryGrid.innerHTML = galleryItems.map((item, index) => `
        <div class="gallery-item reveal" data-cat="${item.cat}" data-index="${index}" style="transition-delay: ${(index % 6) * 0.05}s">
            <div class="gallery-img" style="background: ${item.gradient};">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="gallery-zoom-icon">
                <i class="fas fa-search-plus"></i>
            </div>
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
    
    // Attach click handlers for lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            openLightbox(index);
        });
    });
}

// ===== FILTER GALLERY =====
const galleryFilters = document.querySelectorAll('.gallery-filters .filter-btn');
galleryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        galleryFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-gallery');
        document.querySelectorAll('.gallery-item').forEach(item => {
            const cat = item.getAttribute('data-cat');
            if (filter === 'all' || cat === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(index) {
    const item = galleryItems[index];
    if (!item) return;
    lightboxContent.style.background = item.gradient;
    lightboxContent.innerHTML = `<i class="fas ${item.icon}"></i>`;
    lightboxCaption.textContent = `${item.title} — ${item.desc}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on backdrop click
lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Close on Esc key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
        closeLightbox();
    }
});

window.closeLightbox = closeLightbox;

// Trigger reveal animation
setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) el.classList.add('active');
    });
}, 100);
