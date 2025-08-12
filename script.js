// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const blogSearch = document.getElementById('blog-search');
const blogGrid = document.getElementById('blog-grid');
const blogPagination = document.getElementById('blog-pagination');
const projectsGrid = document.getElementById('projects-grid');
const modal = document.getElementById('blog-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Sample Data
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "🛒",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "📋",
        tags: ["Vue.js", "Firebase", "Vuex", "CSS3"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard that displays current weather and forecasts using OpenWeatherMap API with interactive charts and maps.",
        image: "🌤️",
        tags: ["JavaScript", "Chart.js", "API", "CSS3"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A responsive portfolio website with modern design, dark/light theme, and smooth animations built with vanilla HTML, CSS, and JavaScript.",
        image: "💼",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
        image: "📝",
        tags: ["Next.js", "MongoDB", "Markdown", "Auth"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "Social Media Dashboard",
        description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms and presents insights through interactive visualizations.",
        image: "📊",
        tags: ["React", "D3.js", "Node.js", "APIs"],
        liveUrl: "#",
        githubUrl: "#"
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Modern JavaScript",
        excerpt: "Learn the fundamentals of modern JavaScript including ES6+ features, async/await, and best practices for writing clean, maintainable code.",
        content: `
            <h2>Getting Started with Modern JavaScript</h2>
            <p class="blog-meta">Published on January 15, 2024 • 8 min read</p>
            
            <p>JavaScript has evolved significantly over the past decade, introducing powerful features that make development more efficient and enjoyable. In this comprehensive guide, we'll explore the essential modern JavaScript concepts that every developer should know.</p>
            
            <h3>ES6+ Features</h3>
            <p>ES6 (ECMAScript 2015) introduced several game-changing features:</p>
            <ul>
                <li><strong>Arrow Functions:</strong> Concise syntax for function expressions</li>
                <li><strong>Destructuring:</strong> Extract values from objects and arrays</li>
                <li><strong>Template Literals:</strong> String interpolation with backticks</li>
                <li><strong>Classes:</strong> Syntactical sugar over prototypes</li>
            </ul>
            
            <h3>Async/Await</h3>
            <p>Async/await provides a cleaner way to handle asynchronous operations compared to callbacks and promises:</p>
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
            <p>Follow these best practices to write maintainable JavaScript code:</p>
            <ul>
                <li>Use meaningful variable and function names</li>
                <li>Keep functions small and focused</li>
                <li>Use const and let instead of var</li>
                <li>Implement proper error handling</li>
                <li>Write unit tests for your code</li>
            </ul>
        `,
        date: "2024-01-15",
        tags: ["JavaScript", "ES6", "Web Development"],
        image: "📚"
    },
    {
        id: 2,
        title: "Building Responsive Web Applications",
        excerpt: "Discover the principles and techniques for creating responsive web applications that work seamlessly across all devices and screen sizes.",
        content: `
            <h2>Building Responsive Web Applications</h2>
            <p class="blog-meta">Published on January 10, 2024 • 12 min read</p>
            
            <p>Responsive web design is no longer optional—it's essential. With the proliferation of devices and screen sizes, creating applications that adapt gracefully to different viewports is crucial for user experience and business success.</p>
            
            <h3>Mobile-First Approach</h3>
            <p>Start with mobile designs and progressively enhance for larger screens. This approach ensures that your application works well on the most constrained devices first.</p>
            
            <h3>CSS Grid and Flexbox</h3>
            <p>Modern CSS layout techniques provide powerful tools for creating flexible, responsive layouts:</p>
            <ul>
                <li><strong>CSS Grid:</strong> Two-dimensional layout system</li>
                <li><strong>Flexbox:</strong> One-dimensional layout system</li>
                <li><strong>Media Queries:</strong> Conditional styling based on device characteristics</li>
            </ul>
            
            <h3>Performance Considerations</h3>
            <p>Responsive design isn't just about layout—it's also about performance:</p>
            <ul>
                <li>Optimize images for different screen sizes</li>
                <li>Use lazy loading for better performance</li>
                <li>Implement progressive enhancement</li>
                <li>Test on real devices, not just browsers</li>
            </ul>
        `,
        date: "2024-01-10",
        tags: ["CSS", "Responsive Design", "Web Development"],
        image: "📱"
    },
    {
        id: 3,
        title: "The Future of Web Development",
        excerpt: "Explore emerging trends and technologies that are shaping the future of web development, from AI integration to WebAssembly.",
        content: `
            <h2>The Future of Web Development</h2>
            <p class="blog-meta">Published on January 5, 2024 • 15 min read</p>
            
            <p>The web development landscape is constantly evolving, driven by new technologies, changing user expectations, and the need for better performance and user experience.</p>
            
            <h3>Artificial Intelligence Integration</h3>
            <p>AI is becoming increasingly integrated into web applications:</p>
            <ul>
                <li>Chatbots and virtual assistants</li>
                <li>Personalized content recommendations</li>
                <li>Automated testing and debugging</li>
                <li>Smart form validation and user assistance</li>
            </ul>
            
            <h3>WebAssembly (WASM)</h3>
            <p>WebAssembly allows running high-performance code in the browser, opening up new possibilities for web applications that were previously only possible with native applications.</p>
            
            <h3>Progressive Web Apps (PWAs)</h3>
            <p>PWAs combine the best of web and mobile applications, offering offline functionality, push notifications, and app-like experiences.</p>
            
            <h3>Voice and Gesture Interfaces</h3>
            <p>As voice assistants and gesture recognition become more prevalent, web applications need to adapt to these new interaction patterns.</p>
        `,
        date: "2024-01-05",
        tags: ["Web Development", "AI", "Future Tech"],
        image: "🚀"
    },
    {
        id: 4,
        title: "Optimizing Website Performance",
        excerpt: "Learn essential techniques for improving website performance, from code optimization to server-side improvements and caching strategies.",
        content: `
            <h2>Optimizing Website Performance</h2>
            <p class="blog-meta">Published on December 28, 2023 • 10 min read</p>
            
            <p>Website performance directly impacts user experience, search engine rankings, and conversion rates. In today's fast-paced digital world, users expect websites to load quickly and respond instantly.</p>
            
            <h3>Frontend Optimization</h3>
            <ul>
                <li>Minify and compress CSS, JavaScript, and HTML</li>
                <li>Optimize images and use modern formats (WebP, AVIF)</li>
                <li>Implement lazy loading for images and components</li>
                <li>Use CDNs for static assets</li>
                <li>Remove unused CSS and JavaScript</li>
            </ul>
            
            <h3>Backend Optimization</h3>
            <ul>
                <li>Implement proper caching strategies</li>
                <li>Optimize database queries</li>
                <li>Use compression (Gzip, Brotli)</li>
                <li>Implement CDN for global content delivery</li>
            </ul>
            
            <h3>Monitoring and Analytics</h3>
            <p>Regular monitoring helps identify performance bottlenecks:</p>
            <ul>
                <li>Use tools like Lighthouse and PageSpeed Insights</li>
                <li>Monitor Core Web Vitals</li>
                <li>Set up performance budgets</li>
                <li>Implement real user monitoring (RUM)</li>
            </ul>
        `,
        date: "2023-12-28",
        tags: ["Performance", "Optimization", "Web Development"],
        image: "⚡"
    },
    {
        id: 5,
        title: "Mastering CSS Grid Layout",
        excerpt: "A comprehensive guide to CSS Grid Layout, covering basic concepts, advanced techniques, and real-world examples for creating complex layouts.",
        content: `
            <h2>Mastering CSS Grid Layout</h2>
            <p class="blog-meta">Published on December 20, 2023 • 14 min read</p>
            
            <p>CSS Grid Layout is a powerful two-dimensional layout system that allows you to create complex web layouts with ease. Unlike Flexbox, which is primarily for one-dimensional layouts, Grid excels at creating both rows and columns simultaneously.</p>
            
            <h3>Basic Grid Concepts</h3>
            <p>Understanding the fundamental concepts is crucial:</p>
            <ul>
                <li><strong>Grid Container:</strong> The element that contains the grid</li>
                <li><strong>Grid Items:</strong> The direct children of the grid container</li>
                <li><strong>Grid Lines:</strong> The dividing lines that make up the grid structure</li>
                <li><strong>Grid Tracks:</strong> The spaces between grid lines</li>
            </ul>
            
            <h3>Grid Properties</h3>
            <p>Key properties for creating grid layouts:</p>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
}</code></pre>
            
            <h3>Advanced Techniques</h3>
            <ul>
                <li>Grid areas for complex layouts</li>
                <li>Responsive grid design</li>
                <li>Auto-placement algorithms</li>
                <li>Grid alignment and justification</li>
            </ul>
        `,
        date: "2023-12-20",
        tags: ["CSS", "Grid Layout", "Web Design"],
        image: "🎨"
    },
    {
        id: 6,
        title: "Building Accessible Web Applications",
        excerpt: "Learn how to create web applications that are accessible to all users, including those with disabilities, following WCAG guidelines and best practices.",
        content: `
            <h2>Building Accessible Web Applications</h2>
            <p class="blog-meta">Published on December 15, 2023 • 11 min read</p>
            
            <p>Web accessibility is not just a legal requirement—it's a moral imperative and good business practice. Creating accessible web applications ensures that everyone, regardless of their abilities, can use your products effectively.</p>
            
            <h3>WCAG Guidelines</h3>
            <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible content:</p>
            <ul>
                <li><strong>Perceivable:</strong> Content must be presentable to users in ways they can perceive</li>
                <li><strong>Operable:</strong> User interface components must be operable</li>
                <li><strong>Understandable:</strong> Information and operation of user interface must be understandable</li>
                <li><strong>Robust:</strong> Content must be robust enough to be interpreted by assistive technologies</li>
            </ul>
            
            <h3>Implementation Best Practices</h3>
            <ul>
                <li>Use semantic HTML elements</li>
                <li>Provide alternative text for images</li>
                <li>Ensure proper color contrast</li>
                <li>Implement keyboard navigation</li>
                <li>Use ARIA labels and roles</li>
                <li>Test with screen readers</li>
            </ul>
            
            <h3>Testing and Validation</h3>
            <p>Regular testing ensures your application remains accessible:</p>
            <ul>
                <li>Automated accessibility testing tools</li>
                <li>Manual testing with assistive technologies</li>
                <li>User testing with people with disabilities</li>
                <li>Regular accessibility audits</li>
            </ul>
        `,
        date: "2023-12-15",
        tags: ["Accessibility", "WCAG", "Web Development"],
        image: "♿"
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

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Navigation
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Smooth Scrolling
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        closeMobileMenu();
    }
}

// Intersection Observer for Animations
function createIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Projects Section
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card fade-in-up">
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank">Live Demo</a>
                    <a href="${project.githubUrl}" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Blog Section
let currentPage = 1;
const postsPerPage = 6;
let filteredPosts = [...blogPosts];

function renderBlogPosts() {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);

    blogGrid.innerHTML = postsToShow.map(post => `
        <div class="blog-card fade-in-up" onclick="openBlogPost(${post.id})">
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
        </div>
    `).join('');

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    if (totalPages <= 1) {
        blogPagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage - 1})">Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="pagination-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="pagination-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
    }
    
    blogPagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    renderBlogPosts();
    window.scrollTo({ top: document.getElementById('blog').offsetTop - 100, behavior: 'smooth' });
}

function filterBlogPosts(searchTerm) {
    filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    currentPage = 1;
    renderBlogPosts();
}

function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        modalBody.innerHTML = post.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeBlogModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact Form
async function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission (replace with actual form handling)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
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

// Active Navigation Highlight
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    setTheme(currentTheme);
    
    // Render content
    renderProjects();
    renderBlogPosts();
    
    // Create intersection observer
    createIntersectionObserver();
    
    // Event listeners
    navToggle.addEventListener('click', toggleMobileMenu);
    themeToggle.addEventListener('click', toggleTheme);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Blog search
    blogSearch.addEventListener('input', (e) => {
        filterBlogPosts(e.target.value);
    });
    
    // Modal
    closeModal.addEventListener('click', closeBlogModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBlogModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeBlogModal();
        }
    });
    
    // Active navigation highlight
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
});

// Add active state styles for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
`;
document.head.appendChild(style);