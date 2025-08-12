# 🚀 Portfolio + Blog Website

A modern, responsive personal portfolio and blog website built with vanilla HTML, CSS, and JavaScript. This project showcases web development skills with a sleek design, smooth animations, and comprehensive functionality.

![Portfolio Preview](assets/portfolio-preview.jpg)

## ✨ Features

### Core Features
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Theme** - Toggle between themes with persistent preference storage
- **Smooth Scrolling** - Seamless navigation with animated scroll effects
- **Interactive Animations** - Engaging scroll-triggered animations and transitions
- **Modern Design** - Clean, professional layout with contemporary UI elements

### Sections
- **Home** - Hero section with name, title, and call-to-action
- **About** - Personal bio, skills showcase, and professional timeline
- **Projects** - Interactive project gallery with detailed descriptions
- **Blog** - Article listing with search and pagination functionality
- **Contact** - Working contact form with form validation

### Advanced Features
- **Blog Search** - Search articles by title, content, or tags
- **Skills Animation** - Animated progress bars for technical skills
- **Project Carousel** - Swiper.js integration for project showcase
- **Contact Form** - Form handling with success/error notifications
- **Performance Optimized** - Lazy loading, debounced scroll events
- **Accessibility** - WCAG compliant with keyboard navigation support
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **HTML5** - Semantic markup and modern structure
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+** - Modern features and best practices
- **Swiper.js** - Touch slider for project carousel
- **Font Awesome** - Professional icon library
- **Google Fonts** - Inter font family for modern typography

## 📁 Project Structure

```
portfolio-website/
├── assets/
│   ├── profile.jpg          # Profile image
│   ├── about.jpg            # About section image
│   ├── portfolio1-3.jpg     # Project images
│   ├── blog1-3.jpg          # Blog post images
│   └── favicon.ico          # Site favicon
├── blog/
│   ├── getting-started-with-react-hooks.html
│   ├── css-grid-vs-flexbox.html
│   └── javascript-es6-features.html
├── css/
│   └── styles.css           # Main stylesheet
├── js/
│   └── main.js              # JavaScript functionality
├── index.html               # Main page
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Optional: Live server extension for development

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   - Open `index.html` in your browser
   - Or use a live server for development

3. **Customize the content**
   - Update personal information in `index.html`
   - Replace placeholder images in `assets/`
   - Modify colors in CSS custom properties
   - Add your own projects and blog posts

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `css/styles.css`:

```css
:root {
  --hue-color: 230; /* Change this value: Purple 250 - Green 142 - Blue 230 - Pink 340 */
  --first-color: hsl(var(--hue-color), 69%, 61%);
  /* Other color variables will automatically adapt */
}
```

### Adding Projects
Update the portfolio section in `index.html`:

```html
<div class="portfolio__content grid swiper-slide">
    <img src="assets/your-project.jpg" alt="Project Name" class="portfolio__img">
    <div class="portfolio__data">
        <h3 class="portfolio__title">Your Project Name</h3>
        <p class="portfolio__description">Project description...</p>
        <div class="portfolio__tags">
            <span class="portfolio__tag">Technology</span>
        </div>
        <div class="portfolio__buttons">
            <a href="#" class="button button--primary button--small">Demo</a>
            <a href="#" class="button button--secondary button--small">Code</a>
        </div>
    </div>
</div>
```

### Adding Blog Posts
1. Create a new HTML file in the `blog/` directory
2. Add the post preview to the blog section in `index.html`
3. Follow the existing blog post structure for consistency

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Contact Form Setup

To make the contact form functional:

1. **Using Formspree** (Recommended)
   - Sign up at [formspree.io](https://formspree.io)
   - Replace `your-form-id` in the form action with your Formspree ID
   - The form will automatically work with email notifications

2. **Using EmailJS**
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Follow their integration guide
   - Update the JavaScript form handling code

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments
3. Configure custom domain if needed

### Vercel
1. Import your GitHub repository to [vercel.com](https://vercel.com)
2. Automatic deployments on every push
3. Built-in performance optimizations

## 🎯 Performance Features

- **Lazy Loading** - Images load as they come into view
- **Debounced Scroll Events** - Optimized scroll performance
- **Minified Assets** - Compressed CSS and JavaScript
- **Modern CSS** - Efficient layouts with Grid and Flexbox
- **Optimized Images** - Properly sized and compressed images

## ♿ Accessibility Features

- **Keyboard Navigation** - Full keyboard support
- **ARIA Labels** - Screen reader compatible
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper heading hierarchy and landmarks
- **Skip Links** - Quick navigation for screen readers

## 🌟 Advanced Features

### Theme Persistence
The theme preference is saved to localStorage and restored on page load.

### Intersection Observer
Smooth animations triggered when elements enter the viewport.

### Search Functionality
Real-time blog post filtering by title, content, and tags.

### Easter Egg
Try the Konami Code: ↑↑↓↓←→←→BA

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Unsplash** - High-quality stock photos
- **Font Awesome** - Professional icon library
- **Swiper.js** - Touch slider functionality
- **Google Fonts** - Web font hosting

## 📞 Support

If you have any questions or need help customizing the website, feel free to:
- Open an issue on GitHub
- Contact me through the website's contact form
- Email: your.email@example.com

---

**Made with ❤️ by Your Name**

*Star ⭐ this repository if you found it helpful!*