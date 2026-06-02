/* ===================================
   REGISTER PAGE - Multi-step Form Logic
   =================================== */

// ===== POPULATE COURSE DROPDOWN =====
const courseSelect = document.getElementById('courseSelect');
if (courseSelect && window.coursesData) {
    let html = '<option value="">Select a Course</option>';
    Object.keys(coursesData).forEach(catKey => {
        const cat = coursesData[catKey];
        html += `<optgroup label="${cat.title}">`;
        cat.courses.forEach(course => {
            html += `<option value="${course.id}" data-fee="${course.fees}" data-duration="${course.duration}" data-name="${course.name}">${course.name}</option>`;
        });
        html += `</optgroup>`;
    });
    courseSelect.innerHTML = html;
    
    // Pre-select from URL parameter (e.g., ?course=c10-1)
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedCourse = urlParams.get('course');
    if (preselectedCourse) {
        courseSelect.value = preselectedCourse;
        updateSummary();
    }
}

// ===== UPDATE COURSE SUMMARY =====
function updateSummary() {
    const selected = courseSelect.options[courseSelect.selectedIndex];
    if (!selected || !selected.value) return;
    
    const name = selected.getAttribute('data-name') || 'Selected Course';
    const fee = parseInt(selected.getAttribute('data-fee')) || 0;
    const duration = selected.getAttribute('data-duration') || '--';
    const registrationFee = 500;
    const tax = Math.round(fee * 0.18);
    const total = fee + tax + registrationFee;
    
    document.getElementById('summaryCourse').textContent = name;
    document.getElementById('summaryDuration').textContent = duration;
    document.getElementById('summaryFee').textContent = '₹' + fee.toLocaleString();
    document.getElementById('summaryTax').textContent = '₹' + tax.toLocaleString();
    document.getElementById('summaryTotal').textContent = '₹' + total.toLocaleString();
}

if (courseSelect) {
    courseSelect.addEventListener('change', updateSummary);
}

// Class summary update
const classSelect = document.getElementById('studentClass');
if (classSelect) {
    classSelect.addEventListener('change', () => {
        const value = classSelect.value;
        document.getElementById('summaryClass').textContent = value ? `Class ${value}` : '--';
    });
}

// ===== PHOTO UPLOAD =====
const photoUpload = document.getElementById('photoUpload');
const photoInput = document.getElementById('photoInput');

if (photoUpload && photoInput) {
    photoUpload.addEventListener('click', () => photoInput.click());
    
    photoUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        photoUpload.style.borderColor = 'var(--primary-blue)';
        photoUpload.style.background = 'rgba(67, 97, 238, 0.05)';
    });
    
    photoUpload.addEventListener('dragleave', () => {
        photoUpload.style.borderColor = '';
        photoUpload.style.background = '';
    });
    
    photoUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        photoUpload.style.borderColor = '';
        photoUpload.style.background = '';
        const file = e.dataTransfer.files[0];
        if (file) handlePhoto(file);
    });
    
    photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handlePhoto(file);
    });
    
    function handlePhoto(file) {
        if (!file.type.startsWith('image/')) {
            showNotification('Please upload an image file', 'error');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            showNotification('Image size should be less than 5MB', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            photoUpload.classList.add('has-image');
            photoUpload.innerHTML = `
                <img src="${e.target.result}" alt="Profile" class="photo-preview">
                <p style="margin-top: 12px;">${file.name}</p>
                <small style="color: var(--primary-blue); cursor: pointer;">Click to change</small>
            `;
            photoUpload.addEventListener('click', () => photoInput.click());
        };
        reader.readAsDataURL(file);
    }
}

// ===== MULTI-STEP FORM NAVIGATION =====
const formSteps = document.querySelectorAll('.form-step');
const stepIndicators = document.querySelectorAll('.step-indicator');
const stepIndicatorContainer = document.getElementById('stepIndicators');
let currentStep = 1;

function showStep(step) {
    formSteps.forEach(s => s.classList.remove('active'));
    document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');
    
    stepIndicators.forEach(ind => {
        const indStep = parseInt(ind.getAttribute('data-step'));
        ind.classList.remove('active', 'completed');
        if (indStep === step) ind.classList.add('active');
        else if (indStep < step) ind.classList.add('completed');
    });
    
    stepIndicatorContainer.setAttribute('data-step', step);
    currentStep = step;
    
    // Scroll to top of form
    document.querySelector('.register-form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== VALIDATION =====
function validateStep(step) {
    const stepDiv = document.querySelector(`.form-step[data-step="${step}"]`);
    const requiredInputs = stepDiv.querySelectorAll('[required]');
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            input.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
            isValid = false;
        } else {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#ef4444';
                input.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
                isValid = false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[+]?[\d\s-]{10,}$/;
            if (!phoneRegex.test(input.value)) {
                input.style.borderColor = '#ef4444';
                input.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
                isValid = false;
            }
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields correctly', 'error');
    }
    return isValid;
}

// Navigation buttons
document.getElementById('next1')?.addEventListener('click', () => {
    if (validateStep(1)) showStep(2);
});

document.getElementById('next2')?.addEventListener('click', () => {
    if (validateStep(2)) showStep(3);
});

document.getElementById('back2')?.addEventListener('click', () => showStep(1));
document.getElementById('back3')?.addEventListener('click', () => showStep(2));

// Clear error border on input
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', () => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    });
});

// ===== PAYMENT METHOD SELECTION =====
const paymentOptions = document.querySelectorAll('.payment-option');
const paymentForms = {
    upi: document.getElementById('upiForm'),
    card: document.getElementById('cardForm'),
    netbank: document.getElementById('netbankForm')
};

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        paymentOptions.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        
        const method = option.getAttribute('data-method');
        Object.values(paymentForms).forEach(f => f?.classList.remove('active'));
        paymentForms[method]?.classList.add('active');
    });
});

// ===== FORM SUBMISSION =====
const registerForm = document.getElementById('registerForm');
const successPopup = document.getElementById('successPopup');

registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!validateStep(2)) {
        showStep(2);
        return;
    }
    
    // Show success popup with confetti
    successPopup.classList.add('active');
    createConfetti();
    
    // Optionally reset after a moment (not required for demo)
    setTimeout(() => {
        registerForm.reset();
        photoUpload.classList.remove('has-image');
        photoUpload.innerHTML = `
            <input type="file" id="photoInput" accept="image/*" style="display: none;">
            <i class="fas fa-cloud-upload-alt"></i>
            <p><strong>Click to upload</strong> or drag and drop</p>
            <small>PNG, JPG up to 5MB</small>
        `;
        showStep(1);
    }, 1000);
});

// ===== CONFETTI EFFECT =====
function createConfetti() {
    const colors = ['#4361ee', '#7209b7', '#f72585', '#4cc9f0', '#fbbf24', '#10b981'];
    const popup = document.querySelector('.popup-content');
    if (!popup) return;
    
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '0';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 6 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.position = 'fixed';
            confetti.style.zIndex = '10002';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// Initialize summary on load
setTimeout(updateSummary, 200);
