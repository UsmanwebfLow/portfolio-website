# Portfolio + Blog Website

A modern, responsive portfolio and blog website built with HTML, CSS, and JavaScript. Features a sleek design with dark/light theme support, smooth animations, and a fully functional blog system.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Portfolio+Website)

## ✨ Features

### Core Features
- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Theme Toggle** - Switch between themes with persistent storage
- **Smooth Animations** - Fade-in animations and smooth scrolling
- **Modern UI/UX** - Clean, professional design with gradient accents
- **Mobile-First Navigation** - Hamburger menu for mobile devices

### Portfolio Features
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Section** - Personal bio, skills showcase, and career timeline
- **Projects Gallery** - Showcase your work with technology tags and links
- **Contact Form** - Functional contact form with validation

### Blog Features
- **Blog Post Gallery** - Display blog posts with search functionality
- **Search & Filter** - Search through blog posts by title, content, or tags
- **Pagination** - Navigate through multiple pages of blog posts
- **Modal Blog Reader** - Read full blog posts in a modal overlay
- **Rich Content Support** - Support for formatted content with code blocks

### Technical Features
- **CSS Custom Properties** - Theme-aware styling with CSS variables
- **Intersection Observer** - Efficient scroll animations
- **Local Storage** - Theme preference persistence
- **Keyboard Shortcuts** - Ctrl/Cmd+K for search, Escape for modals
- **Service Worker Ready** - PWA capabilities (optional)

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/portfolio-blog.git
   cd portfolio-blog
   ```

2. **Open in Browser**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. **Customize Content**
   - Edit `index.html` to update personal information
   - Modify `script.js` to add your projects and blog posts
   - Update `styles.css` to customize colors and styling

## 📁 Project Structure

```
portfolio-blog/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and theme definitions
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- Your name and title in the hero section
- About section content
- Contact information
- Social media links

### Projects
Add your projects in `script.js`:
```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",
        description: "Project description...",
        image: "🛒", // Emoji or image URL
        technologies: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://your-project.com",
        codeUrl: "https://github.com/yourusername/project"
    }
    // Add more projects...
];
```

### Blog Posts
Add your blog posts in `script.js`:
```javascript
const blogPosts = [
    {
        id: 1,
        title: "Your Blog Post Title",
        excerpt: "Brief description...",
        content: "<h2>Full HTML content...</h2>",
        date: "2024-01-15",
        tags: ["JavaScript", "Web Development"],
        image: "📝"
    }
    // Add more posts...
];
```

### Styling
Customize colors and themes in `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --background-color: #ffffff; /* Light theme background */
    /* ... more variables */
}
```

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Custom Domain
- Purchase a domain from providers like Namecheap, GoDaddy, etc.
- Configure DNS settings to point to your hosting provider
- Update your site with the custom domain

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional, you can integrate with:

### Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Update the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### EmailJS
1. Sign up at [EmailJS](https://emailjs.com)
2. Configure email templates
3. Update the JavaScript to use EmailJS API

### Netlify Forms
If deploying on Netlify, add `netlify` attribute:
```html
<form netlify>
```

## 🔧 Advanced Features

### Adding Real Images
Replace emoji placeholders with actual images:
```javascript
// In projects array
image: "path/to/project-image.jpg"

// In blog posts array
image: "path/to/blog-image.jpg"
```

### SEO Optimization
Add meta tags to `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="web developer, portfolio, blog">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
```

### Analytics
Add Google Analytics or other tracking:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Learning Outcomes

This project demonstrates:

### Frontend Development
- **HTML5 Semantic Structure** - Proper use of semantic elements
- **CSS3 Modern Features** - Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+** - Modern JavaScript patterns and practices
- **Responsive Design** - Mobile-first approach with media queries

### Web Development Concepts
- **Component-Based Architecture** - Reusable UI components
- **State Management** - Theme persistence and form handling
- **Event Handling** - User interactions and animations
- **DOM Manipulation** - Dynamic content creation and updates

### Best Practices
- **Performance Optimization** - Efficient animations and lazy loading
- **Accessibility** - Semantic HTML and keyboard navigation
- **Code Organization** - Clean, maintainable code structure
- **Cross-Browser Compatibility** - Modern CSS with fallbacks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Inter font family](https://rsms.me/inter/) for the beautiful font
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) for layout inspiration

## 📞 Support

If you have any questions or need help customizing your portfolio:

- Create an issue on GitHub
- Check the documentation above
- Review the code comments for guidance

---

**Happy coding! 🚀**

*Built with ❤️ using HTML, CSS, and JavaScript*