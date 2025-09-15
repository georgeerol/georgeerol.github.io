# George Erol Fouché Portfolio

**Live Site**: [https://georgeerol.github.io/](https://georgeerol.github.io/)

A modern, responsive portfolio website showcasing software engineering projects across **Robotics & AI**, **Data Engineering**, **Full-Stack Development**, and **Mobile Development**.

## Features

- **🎨 Modern Design**: Clean, professional layout with dark/light theme toggle
- **📱 Fully Responsive**: Optimized for all device sizes
- **🤖 Interactive Games**: Mini arcade games (Pong, Snake, Pixel Character) with theme-aware colors
- **⚡ Fast Loading**: Optimized for GitHub Pages with compressed assets
- **🔍 SEO Optimized**: Enhanced meta tags, structured data, and social media previews
- **🎯 Accessible**: Semantic HTML with proper navigation

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (SCSS), Vanilla JavaScript
- **Framework**: Jekyll (GitHub Pages compatible)
- **Styling**: Custom CSS with CSS Variables for theming
- **Deployment**: GitHub Pages (automatic deployment)
- **SEO**: Jekyll SEO Tag plugin
- **Analytics**: Google Analytics integration

## 🚀 GitHub Pages Deployment

This site is optimized for **GitHub Pages** deployment:

### **Automatic Deployment**
1. Push changes to the `master` branch
2. GitHub Pages automatically builds and deploys
3. Live at: `https://georgeerol.github.io/`

### **GitHub Pages Configuration**
- Uses `github-pages` gem for compatibility
- Compressed CSS/JS for fast loading
- SEO-optimized with `jekyll-seo-tag`
- Automatic sitemap generation

## 📊 Project Sections

### **🤖 Robotics & AI**
- Deep Learning Drone Simulator
- Search and Sample Rover
- Robotic Perception
- Robotic Arm Pick and Drop
- Self-Driving Car Behavioral Cloning

### **🚀 Data Pipeline**
- IoT AWS Spark Integration
- End-to-End Spark Flow
- Real-time Analytics with Flink

### **🌐 Full-Stack Web**
- Todo Application (React + Spring Boot)
- Expense Tracker
- Project Management System

### **📱 Mobile Development**
- Cross-platform Weather App
- Bitcoin Ticker

## 🎮 Interactive Features

- **Theme Toggle**: Light/dark mode with persistent storage
- **Mini Games**: Theme-aware arcade games in hero section
- **Smooth Scrolling**: Enhanced navigation experience
- **Parallax Effects**: Subtle animations on scroll
- **Progressive Enhancement**: Works with JavaScript disabled

## ⚡ Performance Optimizations

- **Compressed Assets**: Minified CSS/JS
- **Optimized Images**: Efficient formats and sizes
- **Minimal Dependencies**: Only essential Jekyll plugins
- **Fast Jekyll Build**: Optimized for GitHub Pages build times
- **SEO Optimized**: Structured data and meta tags

## 🔧 Local Development (Optional)

While optimized for GitHub Pages, you can run locally:

```bash
# Install dependencies (first time only)
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000
```

## 🐳 Local Development with Docker

Prerequisite: Docker Desktop running.

```bash
# Build the image (first time or after Dockerfile changes)
docker build -t local-jekyll-dev .

# Start the server (detached)
docker run --rm -d -p 4000:4000 -v "$PWD":/site -w /site --name jekyll_site local-jekyll-dev

# View logs
docker logs -f jekyll_site

# Stop the server
docker stop jekyll_site

# Open http://localhost:4000
```

## 📈 Analytics & SEO

- **Google Analytics**: Configured via `_config.yml`
- **Meta Tags**: Automatic generation with jekyll-seo-tag
- **Structured Data**: Rich snippets for search engines
- **Social Media**: Open Graph and Twitter Card support

## 🔒 Security & Best Practices

- **No External Dependencies**: All assets self-hosted
- **Semantic HTML**: Accessible markup
- **Progressive Enhancement**: Core functionality without JS
- **Performance First**: Optimized loading and rendering

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Jekyll and GitHub Pages**

*Portfolio showcasing 10+ years of software engineering expertise across multiple domains.*
