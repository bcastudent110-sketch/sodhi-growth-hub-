/* ===================================
   SODHI GROWTH HUB - DUMMY DATA
   Courses, Testimonials, Teachers, FAQs
   =================================== */

// ===== COURSE CATEGORIES & COURSES DATA =====
const coursesData = {
    'primary': {
        title: 'Classes 1–5',
        description: 'Foundation building for young learners',
        icon: 'fa-child',
        courses: [
            {
                id: 'c1-5-1',
                name: 'Primary Foundation Program',
                desc: 'Comprehensive subject coverage with focus on building strong fundamentals in Math, English, and Science.',
                duration: '12 months',
                fees: 8000,
                badge: 'Popular',
                icon: 'fa-book-open'
            },
            {
                id: 'c1-5-2',
                name: 'Math Basics & Mental Math',
                desc: 'Develop strong arithmetic skills with vedic math techniques and fun puzzles.',
                duration: '6 months',
                fees: 4500,
                badge: 'New',
                icon: 'fa-calculator'
            },
            {
                id: 'c1-5-3',
                name: 'English Speaking & Reading',
                desc: 'Build confidence in reading, writing, and speaking English from an early age.',
                duration: '6 months',
                fees: 4000,
                icon: 'fa-language'
            }
        ]
    },
    'middle': {
        title: 'Classes 6–8',
        description: 'Middle school excellence and concept clarity',
        icon: 'fa-school',
        courses: [
            {
                id: 'c6-8-1',
                name: 'Complete Class 6-8 Tuition',
                desc: 'All subjects covered with NCERT focus, regular tests, and doubt sessions.',
                duration: '12 months',
                fees: 12000,
                badge: 'Best Seller',
                icon: 'fa-graduation-cap'
            },
            {
                id: 'c6-8-2',
                name: 'Science Lab Workshop',
                desc: 'Hands-on experiments and concept-based learning for curious minds.',
                duration: '4 months',
                fees: 5000,
                icon: 'fa-flask'
            },
            {
                id: 'c6-8-3',
                name: 'Olympiad Preparation',
                desc: 'Specialized training for IMO, NSO, IEO competitions with mock tests.',
                duration: '8 months',
                fees: 7500,
                badge: 'Featured',
                icon: 'fa-trophy'
            }
        ]
    },
    'secondary': {
        title: 'Classes 9–10',
        description: 'Board exam preparation with proven strategies',
        icon: 'fa-user-graduate',
        courses: [
            {
                id: 'c9-10-1',
                name: 'Class 10 Board Crash Course',
                desc: 'Complete syllabus revision, sample papers, and previous year question practice.',
                duration: '10 months',
                fees: 18000,
                badge: 'Top Rated',
                icon: 'fa-medal'
            },
            {
                id: 'c9-10-2',
                name: 'Mathematics Excellence',
                desc: 'Score 95+ in Math board exams with our proven methodology and tricks.',
                duration: '8 months',
                fees: 9000,
                icon: 'fa-square-root-alt'
            },
            {
                id: 'c9-10-3',
                name: 'Science Mastery Program',
                desc: 'Physics, Chemistry, Biology — complete board preparation with NCERT focus.',
                duration: '10 months',
                fees: 11000,
                icon: 'fa-atom'
            }
        ]
    },
    'science': {
        title: 'Classes 11–12 Science',
        description: 'PCM/PCB tracks with competitive exam focus',
        icon: 'fa-microscope',
        courses: [
            {
                id: 'sci-1',
                name: 'PCM Complete Program',
                desc: 'Physics, Chemistry, Mathematics with NCERT + JEE foundation. Live classes + study material.',
                duration: '24 months',
                fees: 45000,
                badge: 'Premium',
                icon: 'fa-rocket'
            },
            {
                id: 'sci-2',
                name: 'PCB for NEET Aspirants',
                desc: 'Biology focus along with Physics and Chemistry for medical entrance preparation.',
                duration: '24 months',
                fees: 45000,
                badge: 'Premium',
                icon: 'fa-dna'
            },
            {
                id: 'sci-3',
                name: 'Class 12 Board Booster',
                desc: 'Intensive board exam preparation with mock tests and weekly assessments.',
                duration: '10 months',
                fees: 22000,
                icon: 'fa-chart-line'
            }
        ]
    },
    'commerce': {
        title: 'Classes 11–12 Commerce',
        description: 'Accountancy, Business Studies, Economics',
        icon: 'fa-chart-pie',
        courses: [
            {
                id: 'com-1',
                name: 'Complete Commerce Stream',
                desc: 'All commerce subjects with practical accountancy training and case studies.',
                duration: '24 months',
                fees: 32000,
                badge: 'Popular',
                icon: 'fa-briefcase'
            },
            {
                id: 'com-2',
                name: 'Accountancy Mastery',
                desc: 'Master accounting principles, journal entries, and financial statements.',
                duration: '12 months',
                fees: 15000,
                icon: 'fa-file-invoice-dollar'
            },
            {
                id: 'com-3',
                name: 'CA Foundation Prep',
                desc: 'Foundation course for aspiring Chartered Accountants alongside Class 12.',
                duration: '12 months',
                fees: 20000,
                badge: 'New',
                icon: 'fa-coins'
            }
        ]
    },
    'arts': {
        title: 'Classes 11–12 Arts',
        description: 'Humanities with creative learning approach',
        icon: 'fa-palette',
        courses: [
            {
                id: 'art-1',
                name: 'Humanities Complete Program',
                desc: 'History, Political Science, Geography, Economics with engaging teaching methods.',
                duration: '24 months',
                fees: 28000,
                badge: 'Popular',
                icon: 'fa-landmark'
            },
            {
                id: 'art-2',
                name: 'Civil Services Foundation',
                desc: 'Early UPSC preparation with current affairs and answer writing practice.',
                duration: '12 months',
                fees: 18000,
                icon: 'fa-balance-scale'
            },
            {
                id: 'art-3',
                name: 'Psychology & Sociology',
                desc: 'In-depth understanding of human behavior and society for board excellence.',
                duration: '10 months',
                fees: 12000,
                icon: 'fa-brain'
            }
        ]
    },
    'computer': {
        title: 'Computer Basics',
        description: 'Digital literacy for the modern world',
        icon: 'fa-laptop',
        courses: [
            {
                id: 'comp-1',
                name: 'Computer Fundamentals',
                desc: 'Learn MS Office, Internet, Email, and basic computer operations from scratch.',
                duration: '3 months',
                fees: 5000,
                badge: 'Beginner',
                icon: 'fa-desktop'
            },
            {
                id: 'comp-2',
                name: 'Advanced MS Office',
                desc: 'Master Word, Excel, PowerPoint with advanced features and formulas.',
                duration: '4 months',
                fees: 7000,
                icon: 'fa-file-excel'
            }
        ]
    },
    'web': {
        title: 'HTML & CSS Basics',
        description: 'Build your first website from scratch',
        icon: 'fa-code',
        courses: [
            {
                id: 'web-1',
                name: 'HTML & CSS for Beginners',
                desc: 'Learn web development basics and build 5 real websites with hands-on projects.',
                duration: '3 months',
                fees: 6000,
                badge: 'Hot',
                icon: 'fa-html5'
            },
            {
                id: 'web-2',
                name: 'Responsive Web Design',
                desc: 'Create mobile-friendly modern websites with Flexbox, Grid, and animations.',
                duration: '2 months',
                fees: 4500,
                icon: 'fa-mobile-alt'
            }
        ]
    },
    'english': {
        title: 'Spoken English',
        description: 'Speak fluent English with confidence',
        icon: 'fa-comments',
        courses: [
            {
                id: 'eng-1',
                name: 'Spoken English Mastery',
                desc: 'Daily conversation practice, grammar, pronunciation, and confidence building.',
                duration: '6 months',
                fees: 8000,
                badge: 'Best Seller',
                icon: 'fa-microphone'
            },
            {
                id: 'eng-2',
                name: 'Public Speaking & Debate',
                desc: 'Develop public speaking skills, group discussion, and debate techniques.',
                duration: '3 months',
                fees: 5000,
                icon: 'fa-bullhorn'
            }
        ]
    },
    'personality': {
        title: 'Personality Development',
        description: 'Build confidence and leadership skills',
        icon: 'fa-star',
        courses: [
            {
                id: 'per-1',
                name: 'Complete Personality Development',
                desc: 'Communication, body language, confidence, etiquette, and leadership training.',
                duration: '4 months',
                fees: 7500,
                badge: 'Featured',
                icon: 'fa-user-tie'
            },
            {
                id: 'per-2',
                name: 'Interview Skills Workshop',
                desc: 'Prepare for school, college and job interviews with mock sessions.',
                duration: '2 months',
                fees: 4000,
                icon: 'fa-handshake'
            }
        ]
    }
};

// ===== FUTURE COURSES =====
const futureCoursesData = [
    {
        name: 'JEE Preparation',
        desc: 'Comprehensive JEE Main & Advanced preparation with India\'s top faculty.',
        duration: '24 months',
        fees: 65000,
        icon: 'fa-rocket'
    },
    {
        name: 'NEET Preparation',
        desc: 'Complete NEET preparation with biology focus and medical entrance strategy.',
        duration: '24 months',
        fees: 65000,
        icon: 'fa-stethoscope'
    },
    {
        name: 'Competitive Exam Prep',
        desc: 'SSC, Banking, Railways, and other government exam preparation.',
        duration: '12 months',
        fees: 25000,
        icon: 'fa-clipboard-check'
    },
    {
        name: 'Coding Courses',
        desc: 'Python, Java, C++ programming courses for beginners to advanced level.',
        duration: '6 months',
        fees: 15000,
        icon: 'fa-laptop-code'
    },
    {
        name: 'AI & Web Development',
        desc: 'Full-stack web development with AI integration. React, Node.js, ML basics.',
        duration: '8 months',
        fees: 22000,
        icon: 'fa-robot'
    }
];

// ===== TESTIMONIALS DATA =====
const testimonialsData = [
    {
        text: "Sodhi Growth Hub completely transformed my child's academic journey. The teachers are incredibly dedicated and the teaching methodology is excellent.",
        name: 'Priya Sharma',
        role: 'Parent of Class 10 Student',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=32',
        result: 'Scored 98.2% in Class 10 Boards'
    },
    {
        text: "The science teachers here made physics and chemistry so easy to understand. I was struggling with concepts but now I'm one of the top students in my class. Highly recommended!",
        name: 'Rahul Kumar',
        role: 'Class 12 Science Student',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=68',
        result: '97.6% (PCM Stream Topper)'
    },
    {
        text: "My son joined the spoken English course and within 3 months, his confidence level skyrocketed. The personalized attention and practice sessions are truly amazing.",
        name: 'Anjali Verma',
        role: 'Parent',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=47',
        result: 'Improved Grades from C to A+'
    },
    {
        text: "I joined the HTML & CSS course as a complete beginner. Now I can build my own websites! The teachers explain everything step-by-step. Best decision I made.",
        name: 'Arjun Singh',
        role: 'Class 11 Student',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=53',
        result: 'Built 10+ Web Projects'
    },
    {
        text: "The teachers genuinely care about each student's growth. The doubt sessions and regular tests really helped my daughter improve her grades significantly.",
        name: 'Sunita Patel',
        role: 'Parent of Class 8 Student',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=28',
        result: 'Ranked 2nd in School Exams'
    }
];

// ===== TEACHERS DATA =====
const teachersData = [
    {
        name: 'Mr. Rajesh Sodhi',
        role: 'Founder & Mathematics Expert',
        expertise: 'Senior Algebra & Calculus specialist with a record of mentoring 100+ perfect score students.',
        experience: '15+ Years Experience',
        badge: 'Founder & Head',
        avatar: 'https://i.pravatar.cc/150?img=60',
        social: { fb: '#', tw: '#', li: '#' }
    },
    {
        name: 'Ms. Anita Sharma',
        role: 'Science & Biology Head',
        expertise: 'Anatomy and Genetics expert. Specializes in NEET foundation and conceptual science.',
        experience: '12+ Years Experience',
        badge: 'Academic Head',
        avatar: 'https://i.pravatar.cc/150?img=49',
        social: { fb: '#', tw: '#', li: '#' }
    },
    {
        name: 'Mr. Vikram Singh',
        role: 'Physics & Chemistry Expert',
        expertise: 'IIT alumnus training students for board exams and competitive JEE Mains engineering tracks.',
        experience: '10+ Years Experience',
        badge: 'Senior Mentor',
        avatar: 'https://i.pravatar.cc/150?img=33',
        social: { fb: '#', tw: '#', li: '#' }
    },
    {
        name: 'Ms. Priya Kapoor',
        role: 'English & Personality Dev',
        expertise: 'Certified soft skills trainer guiding students in public speaking, fluency, and group debates.',
        experience: '8+ Years Experience',
        badge: 'Lead Trainer',
        avatar: 'https://i.pravatar.cc/150?img=35',
        social: { fb: '#', tw: '#', li: '#' }
    }
];

// ===== FAQ DATA =====
const faqData = [
    {
        q: 'What age groups and classes do you cater to?',
        a: 'We provide quality education from Class 1 to Class 12 across all streams including Science, Commerce, and Arts. We also offer specialized courses in computer basics, spoken English, and personality development for all age groups.'
    },
    {
        q: 'What is the student-to-teacher ratio in your classes?',
        a: 'We maintain a small batch size with a maximum of 15 students per class to ensure personalized attention. This allows our teachers to focus on each student\'s individual learning needs and progress.'
    },
    {
        q: 'Do you offer online classes or only offline?',
        a: 'We offer both online and offline classes to give students flexibility. Our online classes are conducted live through interactive video platforms with recorded sessions available for revision.'
    },
    {
        q: 'How can I enroll my child in the courses?',
        a: 'You can enroll easily through our online registration form on the "Register" page. Alternatively, you can visit our institute, call us, or send a WhatsApp message. Our team will guide you through the entire process.'
    },
    {
        q: 'What is the fee structure and payment options?',
        a: 'Our fees vary based on the course and class. We accept payments via UPI, Net Banking, Credit/Debit Cards, and Cash. We also offer flexible installment options. Visit our courses page for detailed fee information.'
    },
    {
        q: 'Do you provide study materials and notes?',
        a: 'Yes! All enrolled students receive comprehensive study materials, handwritten notes, practice worksheets, previous year papers, and access to our online portal with additional resources.'
    },
    {
        q: 'What if my child misses a class?',
        a: 'No worries! All our classes are recorded and made available on our student portal. Additionally, we offer free doubt-clearing sessions and one-on-one makeup classes whenever needed.'
    }
];

// ===== STATISTICS DATA =====
const statsData = [
    { number: 5000, suffix: '+', label: 'Students Enrolled', icon: 'fa-users' },
    { number: 10, suffix: '+', label: 'Years of Experience', icon: 'fa-history' },
    { number: 15, suffix: '+', label: 'Expert Teachers', icon: 'fa-chalkboard-teacher' },
    { number: 98, suffix: '%', label: 'Success Rate', icon: 'fa-chart-line' }
];

// ===== WHY CHOOSE US =====
const featuresData = [
    {
        icon: 'fa-chalkboard-teacher',
        title: 'Expert Faculty',
        desc: 'Learn from highly qualified educators with 10+ years of experience and proven teaching track records.'
    },
    {
        icon: 'fa-users',
        title: 'Small Batch Size',
        desc: 'We maintain a maximum of 15 students per batch to ensure personalized attention and interactive learning.'
    },
    {
        icon: 'fa-file-alt',
        title: 'Regular Tests',
        desc: 'Weekly assessments and topic-wise mock tests to evaluate understanding and prepare for exams.'
    },
    {
        icon: 'fa-user-check',
        title: 'Personalized Guidance',
        desc: 'Individual mentoring sessions, customized doubt solving, and tailored study plans for every student.'
    },
    {
        icon: 'fa-laptop-code',
        title: 'Modern Teaching Methods',
        desc: 'Conceptual learning using smart boards, high-quality visual aids, and interactive digital assignments.'
    },
    {
        icon: 'fa-compass',
        title: 'Career Counseling',
        desc: 'One-on-one sessions with experts to guide students through career streams, university choices, and entrance exams.'
    }
];

// ===== TOP RESULTS / TOPPERS DATA =====
const toppersData = [
    {
        name: 'Karan Malhotra',
        score: '99.2%',
        stream: 'Class 12 Science (PCM)',
        achievement: 'School Topper & IIT-JEE Qualifier',
        badge: 'Rank 1',
        avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
        name: 'Neha Singhal',
        score: '98.8%',
        stream: 'Class 12 Commerce',
        achievement: 'Perfect 100 in Accountancy',
        badge: 'Rank 2',
        avatar: 'https://i.pravatar.cc/150?img=22'
    },
    {
        name: 'Aditya Vardhan',
        score: '98.5%',
        stream: 'Class 10 Boards',
        achievement: 'Science & Math District Topper',
        badge: 'Distinction',
        avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
        name: 'Rohan Deshmukh',
        score: '98.0%',
        stream: 'Class 12 Science (PCB)',
        achievement: 'NEET Merit List Qualifier',
        badge: 'Rank 3',
        avatar: 'https://i.pravatar.cc/150?img=13'
    }
];

// ===== LEARNING PROCESS TIMELINE =====
const timelineData = [
    {
        step: '01',
        title: 'Admission & Consultation',
        desc: 'Initial student assessment and career path discussion with our expert counselors to align goals.',
        icon: 'fa-user-plus'
    },
    {
        step: '02',
        title: 'Skill Assessment',
        desc: 'Diagnostic testing to identify baseline knowledge, learning gaps, strengths, and areas of focus.',
        icon: 'fa-search'
    },
    {
        step: '03',
        title: 'Conceptual Learning',
        desc: 'Highly interactive sessions using smart boards, real-world examples, and structured notes.',
        icon: 'fa-book-reader'
    },
    {
        step: '04',
        title: 'Rigorous Testing',
        desc: 'Weekly subject-wise examinations and full-syllabus mock papers designed to simulate final exams.',
        icon: 'fa-file-signature'
    },
    {
        step: '05',
        title: 'Feedback & Improvement',
        desc: 'Personalized doubt classes and test analysis to target weak points and boost conceptual clarity.',
        icon: 'fa-chart-line'
    },
    {
        step: '06',
        title: 'Academic Success',
        desc: 'High scores in board exams and top ranks in competitive assessments, paving a secure career.',
        icon: 'fa-graduation-cap'
    }
];

// ===== UPCOMING BATCHES =====
const batchesData = [
    {
        course: 'Class 10 CBSE Board Super 30',
        date: 'June 15, 2026',
        seatsLeft: 3,
        totalSeats: 15,
        timing: '4:00 PM - 6:00 PM',
        status: 'Hurry, filling fast'
    },
    {
        course: 'Class 12 Science (PCM) Elite batch',
        date: 'June 20, 2026',
        seatsLeft: 5,
        totalSeats: 15,
        timing: '5:30 PM - 7:30 PM',
        status: 'Open for registration'
    },
    {
        course: 'English Communication & Soft Skills',
        date: 'June 18, 2026',
        seatsLeft: 2,
        totalSeats: 15,
        timing: '3:00 PM - 4:30 PM',
        status: 'Only 2 seats left!'
    },
    {
        course: 'Class 12 Commerce Board Prep',
        date: 'June 25, 2026',
        seatsLeft: 6,
        totalSeats: 15,
        timing: '4:30 PM - 6:30 PM',
        status: 'Register today'
    }
];

// ===== GALLERY DATA =====
const galleryData = [
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

// Make data available globally
window.coursesData = coursesData;
window.futureCoursesData = futureCoursesData;
window.testimonialsData = testimonialsData;
window.teachersData = teachersData;
window.faqData = faqData;
window.statsData = statsData;
window.featuresData = featuresData;
window.toppersData = toppersData;
window.timelineData = timelineData;
window.batchesData = batchesData;
window.galleryData = galleryData;
