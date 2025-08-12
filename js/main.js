/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ACCORDION SKILLS ===============*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*=============== QUALIFICATION TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*=============== PORTFOLIO SWIPER ===============*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: false,
    keyboard: true,
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-toggle')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.querySelector('i').classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.querySelector('i').classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SMOOTH SCROLLING ===============*/
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*=============== INTERSECTION OBSERVER ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
});

// Special animations for specific elements
document.querySelectorAll('.about__img, .skills__content, .portfolio__content').forEach(el => {
    el.classList.add('animate-on-scroll', 'from-left');
    observer.observe(el);
});

document.querySelectorAll('.about__data, .contact__form').forEach(el => {
    el.classList.add('animate-on-scroll', 'from-right');
    observer.observe(el);
});

/*=============== TYPING ANIMATION ===============*/
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.home__subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 150);
    }
});

/*=============== BLOG SEARCH FUNCTIONALITY ===============*/
const blogSearch = document.getElementById('blog-search');
const blogPosts = document.querySelectorAll('.blog__post');

if (blogSearch) {
    blogSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        blogPosts.forEach(post => {
            const title = post.querySelector('.blog__title a').textContent.toLowerCase();
            const description = post.querySelector('.blog__description').textContent.toLowerCase();
            const tags = Array.from(post.querySelectorAll('.blog__tag')).map(tag => tag.textContent.toLowerCase());
            
            const isMatch = title.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          tags.some(tag => tag.includes(searchTerm));
            
            post.style.display = isMatch ? 'block' : 'none';
        });
    });
}

/*=============== BLOG PAGINATION ===============*/
class BlogPagination {
    constructor(postsPerPage = 6) {
        this.postsPerPage = postsPerPage;
        this.currentPage = 1;
        this.posts = Array.from(document.querySelectorAll('.blog__post'));
        this.totalPages = Math.ceil(this.posts.length / this.postsPerPage);
        
        this.prevBtn = document.querySelector('.blog__pagination-prev');
        this.nextBtn = document.querySelector('.blog__pagination-next');
        this.pageInfo = document.querySelector('.blog__pagination-info');
        
        this.init();
    }
    
    init() {
        this.showPage(1);
        this.updatePagination();
        this.bindEvents();
    }
    
    showPage(page) {
        const start = (page - 1) * this.postsPerPage;
        const end = start + this.postsPerPage;
        
        this.posts.forEach((post, index) => {
            post.style.display = (index >= start && index < end) ? 'block' : 'none';
        });
        
        this.currentPage = page;
        this.updatePagination();
    }
    
    updatePagination() {
        if (this.pageInfo) {
            this.pageInfo.textContent = `Page ${this.currentPage} of ${this.totalPages}`;
        }
        
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentPage === 1;
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentPage === this.totalPages;
        }
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.showPage(this.currentPage - 1);
                }
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                if (this.currentPage < this.totalPages) {
                    this.showPage(this.currentPage + 1);
                }
            });
        }
    }
}

// Initialize blog pagination
if (document.querySelector('.blog__posts')) {
    new BlogPagination(3); // Show 3 posts per page
}

/*=============== CONTACT FORM HANDLING ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showNotification('Message sent successfully!', 'success');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

/*=============== NOTIFICATION SYSTEM ===============*/
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification__close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--container-color);
        border: 2px solid var(--first-color);
        border-radius: 8px;
        padding: 1rem;
        box-shadow: var(--shadow-medium);
        z-index: var(--z-modal);
        display: flex;
        align-items: center;
        gap: 1rem;
        min-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = 'hsl(142, 69%, 61%)';
        notification.querySelector('i').style.color = 'hsl(142, 69%, 61%)';
    } else if (type === 'error') {
        notification.style.borderColor = 'hsl(0, 69%, 61%)';
        notification.querySelector('i').style.color = 'hsl(0, 69%, 61%)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification__close').addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto close
    setTimeout(() => {
        closeNotification(notification);
    }, duration);
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

/*=============== LAZY LOADING IMAGES ===============*/
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

/*=============== SKILLS PROGRESS ANIMATION ===============*/
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateSkillsBars();
            skillsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

function animateSkillsBars() {
    const skillBars = document.querySelectorAll('.skills__percentage');
    skillBars.forEach(bar => {
        const width = bar.style.width || bar.getAttribute('style')?.match(/width:\s*(\d+%)/)?.[1];
        if (width) {
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

/*=============== PORTFOLIO FILTER (if needed for future enhancement) ===============*/
class PortfolioFilter {
    constructor() {
        this.filters = document.querySelectorAll('.portfolio__filter-btn');
        this.items = document.querySelectorAll('.portfolio__item');
        this.init();
    }
    
    init() {
        if (this.filters.length === 0) return;
        
        this.filters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterItems(filter.dataset.filter);
                this.setActiveFilter(filter);
            });
        });
    }
    
    filterItems(category) {
        this.items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                item.classList.add('show');
            } else {
                item.style.display = 'none';
                item.classList.remove('show');
            }
        });
    }
    
    setActiveFilter(activeFilter) {
        this.filters.forEach(filter => {
            filter.classList.remove('active');
        });
        activeFilter.classList.add('active');
    }
}

// Initialize portfolio filter
new PortfolioFilter();

/*=============== SCROLL REVEAL ANIMATION ===============*/
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

/*=============== COUNTER ANIMATION ===============*/
function animateCounters() {
    const counters = document.querySelectorAll('.about__info-title');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Animate counters when about section is visible
const aboutSection = document.querySelector('.about');
let countersAnimated = false;

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            animateCounters();
            countersAnimated = true;
        }
    });
}, { threshold: 0.7 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

/*=============== MOUSE CURSOR EFFECT ===============*/
const cursor = document.createElement('div');
cursor.className = 'cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: var(--first-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: all 0.1s ease;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '0.5';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Cursor hover effects
document.querySelectorAll('a, button, .nav__link, .button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'var(--first-color-alt)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'var(--first-color)';
    });
});

/*=============== PRELOADER ===============*/
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 1000);
    }
});

/*=============== EASTER EGG - KONAMI CODE ===============*/
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        showNotification('🎉 Konami Code activated! You found the easter egg!', 'success', 5000);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
        
        konamiCode = [];
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

/*=============== PERFORMANCE OPTIMIZATIONS ===============*/
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply debouncing to scroll events
window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollHeader);
window.removeEventListener('scroll', scrollUp);

window.addEventListener('scroll', debounce(scrollActive, 10));
window.addEventListener('scroll', debounce(scrollHeader, 10));
window.addEventListener('scroll', debounce(scrollUp, 10));

/*=============== ACCESSIBILITY IMPROVEMENTS ===============*/
// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--first-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
    border-radius: 4px;
    transition: top 0.3s;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// Add proper focus management for mobile menu
navToggle?.addEventListener('click', () => {
    setTimeout(() => {
        const firstNavLink = document.querySelector('.nav__link');
        firstNavLink?.focus();
    }, 100);
});

// Escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
        navToggle?.focus();
    }
});

/*=============== INITIALIZE ALL FEATURES ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Add any additional initialization code here
    console.log('Portfolio website loaded successfully! 🚀');
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});