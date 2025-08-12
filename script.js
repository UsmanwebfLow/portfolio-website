// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const blogSearch = document.getElementById('blog-search');
const blogModal = document.getElementById('blog-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Sample data for projects
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "🛒",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "📋",
        technologies: ["Vue.js", "Firebase", "Vuex", "CSS3"],
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard that displays current weather and forecasts using OpenWeatherMap API with interactive charts and maps.",
        image: "🌤️",
        technologies: ["JavaScript", "Chart.js", "OpenWeatherMap API", "CSS3"],
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A responsive portfolio website with modern design, dark/light theme, and smooth animations built with vanilla HTML, CSS, and JavaScript.",
        image: "💼",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        id: 5,
        title: "Social Media Dashboard",
        description: "A comprehensive social media analytics dashboard with data visualization, real-time metrics, and customizable reports.",
        image: "📊",
        technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        id: 6,
        title: "Recipe Finder App",
        description: "A recipe discovery app that helps users find recipes based on available ingredients, dietary restrictions, and cooking preferences.",
        image: "🍳",
        technologies: ["React Native", "Spoonacular API", "Redux", "Firebase"],
        liveUrl: "#",
        codeUrl: "#"
    }
];

// Sample data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Modern JavaScript",
        excerpt: "Learn the fundamentals of modern JavaScript including ES6+ features, async/await, and best practices for writing clean, maintainable code.",
        content: `
            <h2>Getting Started with Modern JavaScript</h2>
            <p class="blog-meta">Published on January 15, 2024 • 8 min read</p>
            
            <p>JavaScript has evolved significantly over the past decade, introducing powerful features that make development more efficient and enjoyable. In this post, we'll explore the essential modern JavaScript concepts that every developer should know.</p>
            
            <h3>ES6+ Features</h3>
            <p>ES6 (ECMAScript 2015) introduced several game-changing features:</p>
            <ul>
                <li><strong>Arrow Functions:</strong> Concise syntax for function expressions</li>
                <li><strong>Destructuring:</strong> Extract values from objects and arrays</li>
                <li><strong>Template Literals:</strong> String interpolation and multiline strings</li>
                <li><strong>Classes:</strong> Syntactical sugar over prototype-based inheritance</li>
            </ul>
            
            <h3>Async/Await</h3>
            <p>Async/await makes asynchronous code more readable and easier to debug:</p>
            <pre><code>async function fetchUserData() {
    try {
        const response = await fetch('/api/user');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}</code></pre>
            
            <h3>Best Practices</h3>
            <p>Follow these best practices to write clean, maintainable JavaScript:</p>
            <ul>
                <li>Use meaningful variable and function names</li>
                <li>Keep functions small and focused</li>
                <li>Use const and let instead of var</li>
                <li>Handle errors properly</li>
                <li>Write tests for your code</li>
            </ul>
        `,
        date: "2024-01-15",
        tags: ["JavaScript", "ES6", "Web Development"],
        image: "📝"
    },
    {
        id: 2,
        title: "Building Responsive Web Design",
        excerpt: "Master the art of creating websites that look great on all devices. Learn CSS Grid, Flexbox, and responsive design principles.",
        content: `
            <h2>Building Responsive Web Design</h2>
            <p class="blog-meta">Published on January 10, 2024 • 12 min read</p>
            
            <p>Responsive web design is no longer optional—it's essential. With the proliferation of devices and screen sizes, your website must adapt seamlessly to provide the best user experience.</p>
            
            <h3>CSS Grid vs Flexbox</h3>
            <p>Understanding when to use CSS Grid vs Flexbox is crucial:</p>
            <ul>
                <li><strong>CSS Grid:</strong> Perfect for two-dimensional layouts</li>
                <li><strong>Flexbox:</strong> Ideal for one-dimensional layouts</li>
            </ul>
            
            <h3>Mobile-First Approach</h3>
            <p>Start with mobile design and progressively enhance for larger screens:</p>
            <pre><code>/* Mobile styles (default) */
.container {
    padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .container {
        padding: 3rem;
    }
}</code></pre>
            
            <h3>Performance Considerations</h3>
            <p>Optimize your responsive design for performance:</p>
            <ul>
                <li>Use appropriate image sizes</li>
                <li>Minimize CSS and JavaScript</li>
                <li>Test on real devices</li>
                <li>Consider loading times</li>
            </ul>
        `,
        date: "2024-01-10",
        tags: ["CSS", "Responsive Design", "Web Design"],
        image: "📱"
    },
    {
        id: 3,
        title: "Introduction to React Hooks",
        excerpt: "Discover how React Hooks revolutionized functional components and learn how to use useState, useEffect, and custom hooks effectively.",
        content: `
            <h2>Introduction to React Hooks</h2>
            <p class="blog-meta">Published on January 5, 2024 • 10 min read</p>
            
            <p>React Hooks introduced a new way to use state and other React features in functional components. They make your code more readable and reusable.</p>
            
            <h3>useState Hook</h3>
            <p>The useState hook allows functional components to manage state:</p>
            <pre><code>import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}</code></pre>
            
            <h3>useEffect Hook</h3>
            <p>useEffect handles side effects in functional components:</p>
            <pre><code>import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, [userId]);
    
    return user ? <div>{user.name}</div> : <div>Loading...</div>;
}</code></pre>
            
            <h3>Custom Hooks</h3>
            <p>Create reusable logic with custom hooks:</p>
            <pre><code>function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });
    
    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };
    
    return [storedValue, setValue];
}</code></pre>
        `,
        date: "2024-01-05",
        tags: ["React", "Hooks", "JavaScript"],
        image: "⚛️"
    },
    {
        id: 4,
        title: "CSS Grid Layout Mastery",
        excerpt: "Deep dive into CSS Grid Layout. Learn grid areas, auto-fit, and advanced techniques for creating complex layouts.",
        content: `
            <h2>CSS Grid Layout Mastery</h2>
            <p class="blog-meta">Published on December 28, 2023 • 15 min read</p>
            
            <p>CSS Grid Layout is a powerful tool for creating two-dimensional layouts. It provides precise control over both rows and columns, making it perfect for complex web layouts.</p>
            
            <h3>Basic Grid Setup</h3>
            <p>Start with a simple grid container:</p>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
}</code></pre>
            
            <h3>Grid Areas</h3>
            <p>Use grid areas for semantic layouts:</p>
            <pre><code>.layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
            
            <h3>Auto-fit and Auto-fill</h3>
            <p>Create responsive grids automatically:</p>
            <pre><code>.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}</code></pre>
        `,
        date: "2023-12-28",
        tags: ["CSS", "Grid", "Layout"],
        image: "🎯"
    },
    {
        id: 5,
        title: "JavaScript Performance Optimization",
        excerpt: "Learn techniques to optimize your JavaScript code for better performance, including debouncing, throttling, and memory management.",
        content: `
            <h2>JavaScript Performance Optimization</h2>
            <p class="blog-meta">Published on December 20, 2023 • 18 min read</p>
            
            <p>Performance optimization is crucial for creating smooth, responsive web applications. Here are key techniques to improve your JavaScript performance.</p>
            
            <h3>Debouncing and Throttling</h3>
            <p>Control how often functions execute:</p>
            <pre><code>// Debouncing
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

// Throttling
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
}</code></pre>
            
            <h3>Memory Management</h3>
            <p>Avoid memory leaks:</p>
            <ul>
                <li>Remove event listeners when components unmount</li>
                <li>Clear intervals and timeouts</li>
                <li>Use WeakMap and WeakSet for object references</li>
                <li>Profile memory usage regularly</li>
            </ul>
            
            <h3>Code Splitting</h3>
            <p>Split your code into smaller chunks:</p>
            <pre><code>// Dynamic imports
const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
        </Suspense>
    );
}</code></pre>
        `,
        date: "2023-12-20",
        tags: ["JavaScript", "Performance", "Optimization"],
        image: "⚡"
    }
];

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize theme
setTheme(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Mobile Navigation
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Add fade-in class to elements
function addFadeInClass() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
}

// Projects functionality
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        projectCard.innerHTML = `
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" class="live">Live Demo</a>
                    <a href="${project.codeUrl}" class="code">View Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Blog functionality
let currentPage = 1;
const postsPerPage = 6;
let filteredPosts = [...blogPosts];

function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    blogGrid.innerHTML = '';
    
    postsToShow.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card fade-in';
        
        blogCard.innerHTML = `
            <div class="blog-image">
                ${post.image}
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(post.date)}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        blogCard.addEventListener('click', () => openBlogModal(post));
        blogGrid.appendChild(blogCard);
    });
    
    updatePagination();
}

function updatePagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Previous button
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '← Previous';
        prevBtn.addEventListener('click', () => {
            currentPage--;
            loadBlogPosts();
        });
        pagination.appendChild(prevBtn);
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            loadBlogPosts();
        });
        pagination.appendChild(pageBtn);
    }
    
    // Next button
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next →';
        nextBtn.addEventListener('click', () => {
            currentPage++;
            loadBlogPosts();
        });
        pagination.appendChild(nextBtn);
    }
}

function openBlogModal(post) {
    modalContent.innerHTML = post.content;
    blogModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    blogModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Blog search functionality
blogSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    currentPage = 1;
    loadBlogPosts();
});

// Modal functionality
closeModal.addEventListener('click', closeBlogModal);
blogModal.addEventListener('click', (e) => {
    if (e.target === blogModal) {
        closeBlogModal();
    }
});

// Contact form functionality
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission (replace with actual form service)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
    } else {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = 'none';
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addFadeInClass();
    loadProjects();
    loadBlogPosts();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleNavbarScroll();
    });
    
    // Initial call for elements already in view
    handleScrollAnimations();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape' && blogModal.style.display === 'block') {
        closeBlogModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        blogSearch.focus();
    }
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}