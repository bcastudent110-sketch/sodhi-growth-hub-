# 🎓 Sodhi Growth Hub - Educational Institute Website

A modern, professional, fully responsive educational institute website built with pure HTML, CSS, and JavaScript. No backend required — perfect for showcasing educational services with a premium UI/UX.

![Theme](https://img.shields.io/badge/Theme-Light%20%2B%20Dark-blueviolet)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-success)
![No Backend](https://img.shields.io/badge/Backend-Not%20Required-orange)

---

## 🌟 Features

### Design & UI
- ✨ **Modern Glassmorphism** design with soft shadows
- 🎨 **Gradient highlights** with blue + purple color palette
- 🌓 **Dark mode toggle** with localStorage persistence
- 📱 **Fully responsive** — mobile, tablet, and desktop
- ⚡ **Smooth scrolling** and animations everywhere
- 🎯 **Sticky navbar** with blur effect on scroll

### Interactive Components
- 📊 **Animated counters** for statistics
- 💬 **Typing text effect** in hero section
- 🎠 **Auto-playing testimonials slider** with manual controls
- 📂 **FAQ accordion** with smooth animations
- 🖼️ **Image gallery with lightbox** and category filters
- 📝 **Multi-step registration form** with validation
- 🎊 **Confetti success animation** on form submit
- 💳 **Frontend-only payment UI** (UPI, Card, Net Banking)

### User Experience
- 🚀 **Loader animation** on page load
- 📈 **Scroll progress indicator** at the top
- ⬆️ **Back-to-top button** appears on scroll
- 💚 **Floating WhatsApp button** with pulse animation
- 📜 **Scroll reveal animations** for all sections
- 🎯 **Smooth anchor scrolling** for navigation links

---

## 📁 Folder Structure

```
sodhi-growth-hub/
│
├── index.html              # Home page (main entry point)
│
├── pages/                  # Inner pages
│   ├── about.html         # About Us page with timeline
│   ├── courses.html       # All courses categorized
│   ├── register.html      # Multi-step registration form
│   ├── gallery.html       # Photo gallery with lightbox
│   └── contact.html       # Contact form + Google Maps
│
├── css/                    # Stylesheets
│   ├── style.css          # Main shared styles (navbar, footer, components)
│   └── pages.css          # Page-specific styles
│
├── js/                     # JavaScript files
│   ├── main.js            # Shared functionality (navbar, dark mode, etc.)
│   ├── data.js            # Dummy data (courses, testimonials, FAQ)
│   ├── home.js            # Home page dynamic content
│   ├── courses.js         # Courses page logic
│   ├── register.js        # Multi-step form & validation
│   └── gallery.js         # Gallery filtering & lightbox
│
├── images/                 # Image assets (placeholder folder)
│
└── README.md              # This file
```

---

## 🚀 Getting Started

### Quick Start
1. **Download** or clone this folder
2. **Open** `index.html` in any modern browser
3. **Enjoy** the website! No installation, no dependencies, no server needed.

### Recommended (Live Server)
For the best experience during development:
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
3. Right-click on `index.html` → **Open with Live Server**

### Deployment
This is a pure static website — host it anywhere:
- ✅ **GitHub Pages** (free)
- ✅ **Netlify** (free, drag-and-drop)
- ✅ **Vercel** (free)
- ✅ **Firebase Hosting**
- ✅ Any traditional web host

---

## 📄 Pages Overview

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero with typing effect, stats, features, courses, testimonials, teachers, FAQ, contact |
| **About** (`pages/about.html`) | Mission, vision, why choose us, timeline of institute journey |
| **Courses** (`pages/courses.html`) | All categories: Classes 1-12, Science, Commerce, Arts, Skills + Future courses |
| **Register** (`pages/register.html`) | 3-step form with photo upload, course selection, payment UI |
| **Gallery** (`pages/gallery.html`) | Filterable photo grid with lightbox preview |
| **Contact** (`pages/contact.html`) | Contact cards, form, social media, Google Maps |

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#4361ee` | Main brand color |
| Primary Purple | `#7209b7` | Gradient partner |
| Accent Pink | `#f72585` | Highlights |
| Accent Cyan | `#4cc9f0` | Secondary accents |
| Dark Text | `#1a1a2e` | Headings (light mode) |
| Light BG | `#f8f9ff` | Section backgrounds |

---

## 🔧 Customization Guide

### Change Brand Colors
Edit `css/style.css` at the top:
```css
:root {
    --primary-blue: #YOUR_COLOR;
    --primary-purple: #YOUR_COLOR;
    /* ... */
}
```

### Update Content
- **Courses**: Edit `js/data.js` → `coursesData` object
- **Testimonials**: Edit `js/data.js` → `testimonialsData` array
- **Teachers**: Edit `js/data.js` → `teachersData` array
- **FAQ**: Edit `js/data.js` → `faqData` array
- **Statistics**: Edit `js/data.js` → `statsData` array

### Change Logo/Brand Name
Search and replace `Sodhi Growth Hub` in all HTML files, or update the navbar/footer markup directly.

### Update Contact Info
Update phone, email, address in all HTML files (footer, contact sections) and the WhatsApp link `wa.me/919876543210`.

---

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript (ES6+)** — No frameworks, no dependencies
- **Font Awesome 6.4** — Icons via CDN
- **Google Fonts (Poppins)** — Typography
- **Google Maps Embed API** — Location display

---

## 📱 Browser Support

✅ Chrome / Edge / Brave (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers (iOS Safari, Chrome Android)

---

## ⚠️ Important Notes

- **Frontend only** — Registration and payment forms are UI demos. No data is actually submitted or stored.
- **Placeholder images** — Gallery uses gradient + icon placeholders. Replace with real images in production.
- **Demo content** — All testimonials, teacher info, and addresses are sample data.
- **Google Maps** — The embedded map shows a generic location. Update the iframe src in `contact.html` with your actual location.

---

## 📋 Customization Checklist for Going Live

- [ ] Replace logo/icon
- [ ] Update all contact info (phone, email, address)
- [ ] Replace WhatsApp number in all `wa.me/...` links
- [ ] Update Google Maps embed with your location
- [ ] Replace placeholder images in gallery with real photos
- [ ] Update social media links in footer/contact
- [ ] Update meta tags (SEO) in each page's `<head>`
- [ ] Update courses, fees, and durations in `js/data.js`
- [ ] Add real testimonials and teacher info
- [ ] Connect form submissions to a backend service (Formspree, EmailJS, etc.) if needed

---

## 💡 Future Enhancements

You can easily extend this project with:
- 🔌 **Form backend** via [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
- 💳 **Real payment gateway** integration (Razorpay, Stripe)
- 🔐 **Student login portal** with authentication
- 📊 **Admin dashboard** for managing courses
- 🎥 **Video integration** for course previews
- 🌐 **Multi-language support** (i18n)
- ♿ **Enhanced accessibility** (ARIA labels, screen reader support)

---

## 📞 Support

For questions, suggestions, or feedback:
- 📧 Email: info@sodhigrowthhub.com
- 📱 WhatsApp: +91 98765 43210

---

## 📝 License

This project is provided as a template for educational/commercial use. Feel free to modify and use it for your own educational institute.

---

**Made with ❤️ for empowering students** 🎓
