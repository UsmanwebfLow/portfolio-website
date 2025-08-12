# Portfolio + Blog Website

A modern, responsive portfolio and blog website built with HTML, CSS, and JavaScript. Features a sleek design with dark/light theme support, smooth animations, and a comprehensive blog system.

## ✨ Features

### Core Features
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Theme Toggle** - Switch between themes with persistent storage
- **Smooth Animations** - Intersection Observer for scroll-triggered animations
- **Modern UI/UX** - Clean, professional design with hover effects
- **Mobile-First Navigation** - Hamburger menu for mobile devices

### Pages & Sections
- **Home** - Hero section with call-to-action buttons
- **About** - Personal bio, skills showcase, and career timeline
- **Projects** - Portfolio gallery with project details and links
- **Blog** - Article listing with search, pagination, and modal reading
- **Contact** - Contact form with social media links

### Blog Features
- **Search Functionality** - Real-time search through blog posts
- **Pagination** - Navigate through multiple pages of posts
- **Modal Reading** - Read full articles in a modal overlay
- **Tag System** - Categorize posts with tags
- **Responsive Grid** - Adaptive layout for different screen sizes

### Interactive Elements
- **Contact Form** - Functional form with validation and notifications
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Active Navigation** - Highlights current section in navigation
- **Theme Persistence** - Remembers user's theme preference

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Local Development
For local development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Personal Information
Update the following in `index.html`:

1. **Name and Title**
   ```html
   <title>Your Name - Portfolio & Blog</title>
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   <p class="hero-subtitle">Your Title Here</p>
   ```

2. **About Section**
   - Update the bio text in the about section
   - Modify skills and technologies
   - Update the timeline with your career journey

3. **Contact Information**
   - Update email, phone, and location
   - Add your social media links

### Projects
Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        description: "Project description here...",
        image: "🛒", // Emoji or icon
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://your-project.com",
        githubUrl: "https://github.com/your-username/project"
    }
    // Add more projects...
];
```

### Blog Posts
Edit the `blogPosts` array in `script.js`:

```javascript
const blogPosts = [
    {
        id: 1,
        title: "Your Blog Post Title",
        excerpt: "Brief description of the post...",
        content: `
            <h2>Your Blog Post Title</h2>
            <p class="blog-meta">Published on January 15, 2024 • 8 min read</p>
            
            <p>Your blog content here...</p>
        `,
        date: "2024-01-15",
        tags: ["JavaScript", "Web Development"],
        image: "📚" // Emoji or icon
    }
    // Add more blog posts...
];
```

### Styling
Customize the design by modifying `styles.css`:

1. **Colors** - Update CSS variables in `:root` and `[data-theme="dark"]`
2. **Fonts** - Change the Google Fonts import and font-family properties
3. **Layout** - Modify grid layouts, spacing, and responsive breakpoints

### Contact Form
To make the contact form functional, you can integrate with:

- **Formspree** - Easy form handling service
- **EmailJS** - Send emails directly from JavaScript
- **Netlify Forms** - If deploying on Netlify
- **Custom Backend** - Your own server-side solution

Example with Formspree:
```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <!-- form fields -->
</form>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first navigation with hamburger menu
- Adaptive grid layouts
- Flexible typography scaling
- Touch-friendly interactive elements

## 🌙 Theme System

The website includes a comprehensive theme system:

- **Light Theme** - Clean, professional appearance
- **Dark Theme** - Easy on the eyes for low-light environments
- **Persistent Storage** - Theme preference is saved in localStorage
- **Smooth Transitions** - All color changes are animated

## 🎯 Performance Features

- **Intersection Observer** - Efficient scroll animations
- **CSS Variables** - Fast theme switching
- **Optimized Images** - Using emojis/icons for fast loading
- **Minimal Dependencies** - Only Font Awesome and Google Fonts

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

### Vercel
1. Import your repository to Vercel
2. Automatic deployments with preview URLs
3. Global CDN for fast loading

## 📝 Adding New Features

### Adding a New Section
1. Add HTML structure in `index.html`
2. Add CSS styles in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

### Adding Animations
Use the existing `fade-in-up` class or create new animations:

```css
@keyframes yourAnimation {
    from { /* initial state */ }
    to { /* final state */ }
}

.your-element {
    animation: yourAnimation 0.6s ease-out;
}
```

### Adding Interactive Features
Follow the existing patterns in `script.js`:
- Use event listeners for user interactions
- Implement smooth animations
- Add proper error handling
- Consider accessibility

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the website, feel free to:
- Open an issue on GitHub
- Contact me through the contact form on the website

---

**Happy Coding! 🚀**