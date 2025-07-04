---
layout: default
title: "George Erol Fouché - Software Engineer Portfolio"
description: "Experienced software engineer specializing in data engineering, robotics, and full-stack development"
keywords: "software engineer, data engineering, robotics, Apache Spark, AWS, machine learning, IoT, big data"
---

<!-- Navigation -->
<div class="nav-container">
  <nav class="nav-menu">
    <a href="#about">About</a>
    <a href="#robotics">Robotics</a>
    <a href="#data-pipeline">Data Pipeline</a>
    <a href="#fullstack">Full Stack</a>
    <a href="#mobile">Mobile</a>
    <a href="#contact">Contact</a>
    
    <!-- Dark Mode Toggle -->
    <div class="theme-toggle" onclick="toggleTheme()">
      <div class="theme-toggle-slider">
        <span class="theme-icon">☀️</span>
        <span class="theme-icon">🌙</span>
      </div>
    </div>
  </nav>
</div>

<!-- Enhanced Hero Section -->
<div class="hero-section">
  <div class="hero-content">
    <div class="hero-left">
      <div class="hero-profile">
        <img src="./images/me.jpeg" alt="George Erol Fouché" class="profile-image">
      </div>
    </div>
    
    <div class="hero-main">
      <h1>George Erol Fouché</h1>
      <p class="hero-subtitle">Senior Software Engineer | 10+ Years Experience</p>
      <div class="hero-specialization-container">
        <p class="hero-specialization">Backend Gaming AI & Data Engineering</p>
        <div class="mini-arcade">
          <canvas id="pongGame" width="100" height="70"></canvas>
          <canvas id="snakeGame" width="100" height="70"></canvas>
          <canvas id="pixelCharacterGame" width="100" height="70"></canvas>
        </div>
      </div>
      
      <!-- Call to Action Buttons -->
      <div class="hero-actions">
        <a href="#robotics" class="btn btn-primary">🚀 View Projects</a>
        <a href="https://github.com/georgeerol" class="btn btn-outline" target="_blank">📂 GitHub</a>
        <a href="#contact" class="btn btn-outline">📧 Contact</a>
      </div>
    </div>
    
    <div class="hero-details">
      <div class="status-badge">
        <p class="current-role">🚀 Currently at Series Entertainment</p>
        <p class="location">📍 San Francisco Bay Area</p>
      </div>
      
      <!-- Quick Stats -->
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">15+</span>
          <span class="stat-label">Projects</span>
        </div>
        <div class="stat">
          <span class="stat-number">5</span>
          <span class="stat-label">Tech Domains</span>
        </div>
        <div class="stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Years Experience</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- About Section -->
<section id="about" class="about-section">
  <h2>👨🏿‍💻 About Me</h2>
  
  <div class="about-content">
    <div class="about-text">
      <p>I'm a <strong>Senior Software Engineer with 10+ years</strong> of experience specializing in <strong>Backend Development</strong>, <strong>Data Engineering</strong>, and <strong>Robotics/AI</strong>. Currently working at Series Entertainment (Gaming AI Startup), I have a proven track record of leading teams and delivering scalable solutions across Gaming, AI, Cybersecurity, and Enterprise environments.</p>
      
      <div class="credentials">
        <h4>🎓 Education & Certifications</h4>
        <ul>
          <li><strong>B.S. Computer Engineering</strong> - Pennsylvania State University</li>
          <li><strong>Minor:</strong> Nanotechnology</li>
          <li><strong>Certificate:</strong> International Engineering</li>
          <li><strong>Udacity Nanodegree:</strong> Robotic Software Engineer</li>
          <li><strong>Udacity Nanodegree:</strong> Full Stack Web Developer</li>
        </ul>
      </div>
    </div>

    <div class="skills-grid">
      <div class="skill-category">
        <h4>🤖 Robotics & AI</h4>
        <div class="tech-badges">
          <span class="tech-badge">ROS</span>
          <span class="tech-badge">Computer Vision</span>
          <span class="tech-badge">Deep Learning</span>
          <span class="tech-badge">TensorFlow</span>
          <span class="tech-badge">OpenCV</span>
          <span class="tech-badge">SLAM</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h4>🔧 Data Engineering</h4>
        <div class="tech-badges">
          <span class="tech-badge">Apache Spark</span>
          <span class="tech-badge">Kafka</span>
          <span class="tech-badge">PySpark</span>
          <span class="tech-badge">AWS</span>
          <span class="tech-badge">Azure</span>
          <span class="tech-badge">ETL Pipelines</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h4>🌐 Backend Development</h4>
        <div class="tech-badges">
          <span class="tech-badge">Java Spring Boot</span>
          <span class="tech-badge">Python Flask</span>
          <span class="tech-badge">Microservices</span>
          <span class="tech-badge">REST APIs</span>
          <span class="tech-badge">Docker</span>
          <span class="tech-badge">Kubernetes</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h4>📱 Mobile & Frontend</h4>
        <div class="tech-badges">
          <span class="tech-badge">Android</span>
          <span class="tech-badge">iOS</span>
          <span class="tech-badge">React</span>
          <span class="tech-badge">Vue.js</span>
          <span class="tech-badge">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Robotics Projects - FIRST TO SHOWCASE IMPRESSIVE VISUALS -->
<section id="robotics" class="projects-section">
  <div class="section-header">
    <h2>🤖 Robotics & AI Projects</h2>
  </div>
  
  <div class="project-grid">
    <div class="project-card">
      <h3 class="project-title">🚁 Deep Learning Drone Simulator</h3>
      <div class="tech-badges">
        <span class="tech-badge">Deep Learning</span>
        <span class="tech-badge">Neural Networks</span>
        <span class="tech-badge">Computer Vision</span>
        <span class="tech-badge">Simulation</span>
        <span class="tech-badge">Python</span>
      </div>
      
      <p class="project-overview">Train a neural network for a "follow me" feature in drones, with applications in autonomous vehicles and industrial robotics.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Real-time object tracking and following</li>
          <li>Custom neural network architecture</li>
          <li>Simulation environment for safe testing</li>
          <li>Applicable to various autonomous systems</li>
        </ul>
      </div>
      
      <img src="./images/FollowMeGif.gif" alt="Deep Learning Drone Simulator" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/fouliex/DeepLearningDroneSimulator" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">🔍 Search And Sample Rover</h3>
      <div class="tech-badges">
        <span class="tech-badge">Computer Vision</span>
        <span class="tech-badge">Autonomous Navigation</span>
        <span class="tech-badge">Image Processing</span>
        <span class="tech-badge">Path Planning</span>
      </div>
      
      <p class="project-overview">Autonomous rover that navigates and maps terrains using real-time camera images for guidance and sample collection.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Real-time terrain mapping and navigation</li>
          <li>Computer vision-based object detection</li>
          <li>Autonomous sample collection</li>
          <li>Path planning and obstacle avoidance</li>
        </ul>
      </div>
      
      <img src="./images/rover_image.gif" alt="Search And Sample Rover" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/fouliex/SearchAndSampleRoverProject" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">🦾 Robotic Perception</h3>
      <div class="tech-badges">
        <span class="tech-badge">ROS</span>
        <span class="tech-badge">3D Vision</span>
        <span class="tech-badge">Object Recognition</span>
        <span class="tech-badge">Manipulation</span>
        <span class="tech-badge">PCL</span>
      </div>
      
      <p class="project-overview">Tackles the challenge of object recognition and manipulation in cluttered environments, inspired by the Amazon Robotics Challenge.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>3D point cloud processing</li>
          <li>Object recognition in cluttered scenes</li>
          <li>Robotic manipulation planning</li>
          <li>Real-world application scenarios</li>
        </ul>
      </div>
      
      <img src="./images/PR2.gif" alt="Robotic Perception" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/fouliex/RoboticPerception" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">🦾 Robotic Arm Pick and Drop</h3>
      <div class="tech-badges">
        <span class="tech-badge">ROS</span>
        <span class="tech-badge">Kinematics</span>
        <span class="tech-badge">6-DOF</span>
        <span class="tech-badge">Motion Planning</span>
      </div>
      
      <p class="project-overview">Control a six-degree-of-freedom robotic arm to perform precise pick and drop actions using forward and inverse kinematics.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>6-DOF robotic arm control</li>
          <li>Forward and inverse kinematics</li>
          <li>Precise manipulation tasks</li>
          <li>ROS-based control system</li>
        </ul>
      </div>
      
      <img src="./images/PickAndDrop.gif" alt="Robotic Arm Pick and Drop" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/fouliex/RoboticArmPickAndDrop" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">🚗 Self-Driving Car Behavioral Cloning</h3>
      <div class="tech-badges">
        <span class="tech-badge">Deep Learning</span>
        <span class="tech-badge">Behavioral Cloning</span>
        <span class="tech-badge">Autonomous Driving</span>
        <span class="tech-badge">CNN</span>
      </div>
      
      <p class="project-overview">Learn driving behavior using deep neural networks to simulate real-world driving conditions in a test environment.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Behavioral cloning with deep CNNs</li>
          <li>Real-time driving simulation</li>
          <li>Data augmentation techniques</li>
          <li>End-to-end learning approach</li>
        </ul>
      </div>
      
      <img src="./images/SelfDrivingCarBehavioralCloning.gif" alt="Self-Driving Car Behavioral Cloning" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/fouliex/SelfDrivingCarBehavioralCloning" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    

  </div>
</section>

<!-- Data Pipeline Projects - SECOND -->
<section id="data-pipeline" class="projects-section">
  <div class="section-header">
    <h2>🚀 Data Pipeline Projects</h2>
  </div>
  
  <div class="project-grid">
    <div class="project-card">
      <h3 class="project-title">🌐 IOT AWS SPARK</h3>
      <div class="tech-badges">
        <span class="tech-badge">Apache Spark</span>
        <span class="tech-badge">AWS</span>
        <span class="tech-badge">Kafka</span>
        <span class="tech-badge">Docker</span>
        <span class="tech-badge">IoT</span>
        <span class="tech-badge">Zookeeper</span>
      </div>
      
      <p class="project-overview">Integrates Big Data, IoT, and cloud computing to enhance urban mobility using a 35-mile drive from San Francisco to Dublin, CA, as a case study.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Real-time data processing for vehicle performance, GPS, weather, and traffic</li>
          <li>Scalable, fault-tolerant architecture</li>
          <li>Docker containerization for easy deployment</li>
          <li>AWS integration for storage and analytics</li>
        </ul>
      </div>
      
      <img src="./images/SystemArchitecture.png" alt="IOT AWS SPARK Architecture" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/IotAwsSpark" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">⚡ E2E Spark Flow</h3>
      <div class="tech-badges">
        <span class="tech-badge">Apache Spark</span>
        <span class="tech-badge">Airflow</span>
        <span class="tech-badge">Kafka</span>
        <span class="tech-badge">Cassandra</span>
        <span class="tech-badge">PostgreSQL</span>
        <span class="tech-badge">Docker</span>
      </div>
      
      <p class="project-overview">Comprehensive data pipeline utilizing Docker, Apache Airflow, Kafka, Spark, Cassandra, and PostgreSQL to manage data throughout its entire lifecycle.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>End-to-end data processing workflow</li>
          <li>Real-time streaming with Kafka</li>
          <li>Automated scheduling with Airflow</li>
          <li>Multi-database support (Cassandra + PostgreSQL)</li>
        </ul>
      </div>
      
      <img src="./images/SparkFlowArchitecture.png" alt="E2E Spark Flow Architecture" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/E2ESparkFlow" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">💰 Commercing With Flink</h3>
      <div class="tech-badges">
        <span class="tech-badge">Apache Flink</span>
        <span class="tech-badge">Real-time Analytics</span>
        <span class="tech-badge">Financial Data</span>
        <span class="tech-badge">Stream Processing</span>
      </div>
      
      <p class="project-overview">Real-time sales analytics application processing financial transactions with Apache Flink, executing complex aggregations and storing results for business analysis.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Real-time financial transaction processing</li>
          <li>Complex event processing and aggregations</li>
          <li>Low-latency analytics for business insights</li>
          <li>Scalable stream processing architecture</li>
        </ul>
      </div>
      
      <img src="./images/CommercingWithFlinkArchitecture.png" alt="Commercing With Flink Architecture" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/CommercingWithFlink" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
  </div>
</section>

<!-- Full Stack Projects - THIRD -->
<section id="fullstack" class="projects-section">
  <div class="section-header">
    <h2>🌐 Full Stack Web Development</h2>
  </div>
  
  <div class="project-grid">
    <div class="project-card">
      <h3 class="project-title">✅ Todo Application</h3>
      <div class="tech-badges">
        <span class="tech-badge">React</span>
        <span class="tech-badge">Spring Boot</span>
        <span class="tech-badge">REST API</span>
        <span class="tech-badge">Full Stack</span>
      </div>
      
      <p class="project-overview">Comprehensive task management application with React frontend and Spring Boot backend, featuring user authentication and task organization.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>User authentication and authorization</li>
          <li>CRUD operations for task management</li>
          <li>Responsive React frontend</li>
          <li>RESTful API with Spring Boot</li>
        </ul>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <img src="./images/LoginPage.png" alt="Todo App Login" class="project-image">
        <img src="./images/ToDoPage.png" alt="Todo App Main" class="project-image">
      </div>
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/ToDoApp" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">💰 Expense Tracker</h3>
      <div class="tech-badges">
        <span class="tech-badge">React</span>
        <span class="tech-badge">Spring Boot</span>
        <span class="tech-badge">Financial Management</span>
        <span class="tech-badge">Data Visualization</span>
      </div>
      
      <p class="project-overview">Track and manage personal expenses with an intuitive web application featuring data visualization and budget management.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Expense tracking and categorization</li>
          <li>Budget management and alerts</li>
          <li>Data visualization with charts</li>
          <li>Export and import functionality</li>
        </ul>
      </div>
      
      <img src="./images/ExpensePage.png" alt="Expense Application" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/ExpenseApp" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">📋 Project Management System</h3>
      <div class="tech-badges">
        <span class="tech-badge">Spring MVC</span>
        <span class="tech-badge">Spring Boot</span>
        <span class="tech-badge">Server-side Rendering</span>
        <span class="tech-badge">Enterprise</span>
      </div>
      
      <p class="project-overview">Comprehensive program management tool with server-side rendering for efficient project and team management in enterprise environments.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Project lifecycle management</li>
          <li>Team member assignment and tracking</li>
          <li>Resource allocation and planning</li>
          <li>Progress reporting and analytics</li>
        </ul>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px;">
        <img src="./images/HomePage.png" alt="PM App Home" class="project-image">
        <img src="./images/EmployeesPage.png" alt="PM App Employees" class="project-image">
        <img src="./images/ProjectsPage.png" alt="PM App Projects" class="project-image">
      </div>
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/ProjectManagementApp" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
  </div>
</section>

<!-- Mobile Projects - LAST -->
<section id="mobile" class="projects-section">
  <div class="section-header">
    <h2>📱 Mobile Development</h2>
  </div>
  
  <div class="project-grid">
    <div class="project-card">
      <h3 class="project-title">🌤️ Weather App</h3>
      <div class="tech-badges">
        <span class="tech-badge">Android</span>
        <span class="tech-badge">iOS</span>
        <span class="tech-badge">Cross-platform</span>
        <span class="tech-badge">API Integration</span>
      </div>
      
      <p class="project-overview">Cross-platform weather application providing real-time weather updates with beautiful UI for both Android and iOS devices.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Real-time weather data integration</li>
          <li>Location-based forecasting</li>
          <li>Beautiful, intuitive UI design</li>
          <li>Cross-platform compatibility</li>
        </ul>
      </div>
      
      <img src="./images/Clima.png" alt="Weather App" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/AndroidAndIOSApps" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
    
    <div class="project-card">
      <h3 class="project-title">₿ Bitcoin Ticker</h3>
      <div class="tech-badges">
        <span class="tech-badge">Android</span>
        <span class="tech-badge">iOS</span>
        <span class="tech-badge">Cryptocurrency</span>
        <span class="tech-badge">Real-time Data</span>
      </div>
      
      <p class="project-overview">Monitor and display live Bitcoin exchange rates with real-time updates on both Android and iOS devices.</p>
      
      <div class="project-features">
        <h4>🎯 Key Features:</h4>
        <ul>
          <li>Live Bitcoin price tracking</li>
          <li>Multiple exchange support</li>
          <li>Real-time market updates</li>
          <li>Clean, modern interface</li>
        </ul>
      </div>
      
      <img src="./images/BitcoinTicker.png" alt="Bitcoin Ticker" class="project-image">
      
      <div class="project-links">
        <a href="https://github.com/georgeerol/AndroidAndIOSApps" class="btn btn-primary" target="_blank">🔗 View GitHub</a>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact-section">
  <h2>📫 Let's Connect</h2>
  <p>I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow tech enthusiasts!</p>
  
  <div class="contact-links">
    <a href="https://www.linkedin.com/in/georgefouche/" target="_blank">💼 LinkedIn</a>
    <a href="https://github.com/georgeerol" target="_blank">💻 GitHub</a>
  </div>
</section>

<!-- Back to Top Button -->
<a href="#" class="back-to-top">↑</a>

<script>
// Theme-aware demo animation system
let themeAwareColors = {
    light: {
        pong: { paddle: '#0366d6', ball: '#28a745', trail: 'rgba(40, 167, 69, 0.3)' },
        snake: { body: '#28a745', food: '#dc3545', trail: 'rgba(40, 167, 69, 0.2)' },
        pixel: { character: ['#ff6b35', '#ffd23f', '#06ffa5', '#b19cd9', '#ffb3ba'] }
    },
    dark: {
        pong: { paddle: '#58a6ff', ball: '#7c3aed', trail: 'rgba(124, 58, 237, 0.4)' },
        snake: { body: '#7c3aed', food: '#f59e0b', trail: 'rgba(124, 58, 237, 0.3)' },
        pixel: { character: ['#f59e0b', '#fbbf24', '#34d399', '#a78bfa', '#fb7185'] }
    }
};

// Get current theme colors
function getThemeColors() {
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    return themeAwareColors[theme];
}

// Demo animation sequence
function startThemeDemo() {
    const miniArcade = document.querySelector('.mini-arcade');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (!miniArcade || !themeToggle) return;
    
    // Step 1: Flash games to show theme awareness
    miniArcade.classList.add('demo-sequence');
    
    setTimeout(() => {
        miniArcade.classList.remove('demo-sequence');
        
        // Step 2: Quick theme toggle demo
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const alternateTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Flash to alternate theme
        document.documentElement.setAttribute('data-theme', alternateTheme);
        
        setTimeout(() => {
            // Flash back to original theme
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            // Step 3: Add pulsing animation to toggle button
            themeToggle.style.animation = 'themeTogglePulse 2s ease-in-out 3';
            
            setTimeout(() => {
                themeToggle.style.animation = 'themeTogglePulse 3s ease-in-out infinite';
            }, 6000);
            
        }, 500);
    }, 2000);
}

// Dark mode functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add a subtle animation effect
    document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
    
    // Flash games to show theme change
    const miniArcade = document.querySelector('.mini-arcade');
    if (miniArcade) {
        miniArcade.classList.add('demo-sequence');
        setTimeout(() => {
            miniArcade.classList.remove('demo-sequence');
        }, 1000);
    }
}

// Load saved theme or set default
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    
    // Start demo after a short delay
    setTimeout(startThemeDemo, 3000);
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

// Show/hide back to top button with enhanced functionality
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    const scrollProgress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
        backToTop.style.opacity = Math.min(scrollProgress / 20, 1);
    } else {
        backToTop.style.display = 'none';
    }
});

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Enhanced project card animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Pong Game Animation
function initPongGame() {
    const canvas = document.getElementById('pongGame');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Game objects
    const ball = {
        x: width / 2,
        y: height / 2,
        radius: 3,
        dx: 1.5,
        dy: 1.2,
        trail: []
    };
    
    const paddle1 = {
        x: 10,
        y: height / 2 - 15,
        width: 3,
        height: 30,
        dy: 0
    };
    
    const paddle2 = {
        x: width - 13,
        y: height / 2 - 15,
        width: 3,
        height: 30,
        dy: 0
    };
    
    // AI for paddles
    function updatePaddles() {
        // Simple AI - follow the ball
        const paddle1Center = paddle1.y + paddle1.height / 2;
        const paddle2Center = paddle2.y + paddle2.height / 2;
        
        // Left paddle
        if (ball.y < paddle1Center - 5) {
            paddle1.dy = -1;
        } else if (ball.y > paddle1Center + 5) {
            paddle1.dy = 1;
        } else {
            paddle1.dy = 0;
        }
        
        // Right paddle
        if (ball.y < paddle2Center - 5) {
            paddle2.dy = -1;
        } else if (ball.y > paddle2Center + 5) {
            paddle2.dy = 1;
        } else {
            paddle2.dy = 0;
        }
        
        // Update positions
        paddle1.y += paddle1.dy;
        paddle2.y += paddle2.dy;
        
        // Keep paddles in bounds
        paddle1.y = Math.max(0, Math.min(height - paddle1.height, paddle1.y));
        paddle2.y = Math.max(0, Math.min(height - paddle2.height, paddle2.y));
    }
    
    function updateBall() {
        // Add current position to trail
        ball.trail.push({ x: ball.x, y: ball.y });
        if (ball.trail.length > 8) {
            ball.trail.shift();
        }
        
        ball.x += ball.dx;
        ball.y += ball.dy;
        
        // Bounce off top and bottom
        if (ball.y <= ball.radius || ball.y >= height - ball.radius) {
            ball.dy = -ball.dy;
        }
        
        // Check paddle collisions
        if (ball.x <= paddle1.x + paddle1.width + ball.radius &&
            ball.y >= paddle1.y && ball.y <= paddle1.y + paddle1.height) {
            ball.dx = Math.abs(ball.dx);
            ball.x = paddle1.x + paddle1.width + ball.radius;
        }
        
        if (ball.x >= paddle2.x - ball.radius &&
            ball.y >= paddle2.y && ball.y <= paddle2.y + paddle2.height) {
            ball.dx = -Math.abs(ball.dx);
            ball.x = paddle2.x - ball.radius;
        }
        
        // Reset if ball goes off screen
        if (ball.x < 0 || ball.x > width) {
            ball.x = width / 2;
            ball.y = height / 2;
            ball.dx = (Math.random() > 0.5 ? 1 : -1) * 1.5;
            ball.dy = (Math.random() - 0.5) * 2;
            ball.trail = [];
        }
    }
    
    function draw() {
        const colors = getThemeColors().pong;
        
        // Clear canvas with slight fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);
        
        // Draw center line
        ctx.strokeStyle = colors.trail;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Draw ball trail
        ball.trail.forEach((pos, index) => {
            const alpha = (index + 1) / ball.trail.length * 0.3;
            const trailColor = colors.trail.replace('0.3)', `${alpha})`).replace('0.4)', `${alpha})`);
            ctx.fillStyle = trailColor;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, ball.radius * 0.8, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw ball
        ctx.fillStyle = colors.ball;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw paddles
        ctx.fillStyle = colors.paddle;
        ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    }
    
    function gameLoop() {
        updatePaddles();
        updateBall();
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    // Start the game
    gameLoop();
}

// Initialize Pong game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initPongGame, 500); // Small delay to ensure canvas is ready
});

// Snake Game Animation
function initSnakeGame() {
    const canvas = document.getElementById('snakeGame');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 6;
    
    let snake = [{x: 45, y: 30}];
    let food = {x: 60, y: 42};
    let dx = gridSize;
    let dy = 0;
    
    function drawSnake() {
        const colors = getThemeColors().snake;
        ctx.fillStyle = colors.body;
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, gridSize-1, gridSize-1);
        });
    }
    
    function drawFood() {
        const colors = getThemeColors().snake;
        ctx.fillStyle = colors.food;
        ctx.fillRect(food.x, food.y, gridSize-1, gridSize-1);
    }
    
    function moveSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        
        // Wrap around edges
        if (head.x >= canvas.width) head.x = 0;
        if (head.x < 0) head.x = canvas.width - gridSize;
        if (head.y >= canvas.height) head.y = 0;
        if (head.y < 0) head.y = canvas.height - gridSize;
        
        snake.unshift(head);
        
        // Check food collision
        if (head.x === food.x && head.y === food.y) {
            food = {
                x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
                y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
            };
        } else {
            snake.pop();
        }
    }
    
    function changeDirection() {
        const directions = [
            {dx: gridSize, dy: 0},
            {dx: -gridSize, dy: 0},
            {dx: 0, dy: gridSize},
            {dx: 0, dy: -gridSize}
        ];
        const newDir = directions[Math.floor(Math.random() * directions.length)];
        dx = newDir.dx;
        dy = newDir.dy;
    }
    
    function gameLoop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        moveSnake();
        drawSnake();
        drawFood();
        
        setTimeout(() => requestAnimationFrame(gameLoop), 200);
    }
    
    // Change direction periodically
    setInterval(changeDirection, 2000);
    gameLoop();
}

// Pixel Character Animation
function initPixelCharacterGame() {
    const canvas = document.getElementById('pixelCharacterGame');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Character properties
    const character = {
        x: 20,
        y: height - 20,
        width: 12,
        height: 16,
        direction: 1,
        animationFrame: 0,
        colors: getThemeColors().pixel.character
    };
    
    // Floating particles
    const particles = [];
    
    // Character sprite patterns (simple pixel art)
    const sprites = {
        idle: [
            [0,1,1,0],
            [1,1,1,1],
            [0,1,1,0],
            [0,1,1,0],
            [1,0,0,1]
        ],
        walk1: [
            [0,1,1,0],
            [1,1,1,1],
            [0,1,1,0],
            [1,1,0,0],
            [0,0,1,1]
        ],
        walk2: [
            [0,1,1,0],
            [1,1,1,1],
            [0,1,1,0],
            [0,0,1,1],
            [1,1,0,0]
        ]
    };
    
    function createParticle() {
        const colors = getThemeColors().pixel.character;
        particles.push({
            x: character.x + Math.random() * character.width,
            y: character.y + Math.random() * character.height,
            dx: (Math.random() - 0.5) * 2,
            dy: -Math.random() * 2,
            life: 30,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
    
    function updateCharacter() {
        // Move character
        character.x += character.direction * 0.5;
        
        // Bounce off edges
        if (character.x <= 0 || character.x >= width - character.width) {
            character.direction *= -1;
        }
        
        // Update animation frame
        character.animationFrame = (character.animationFrame + 1) % 60;
        
        // Create particles occasionally
        if (Math.random() < 0.3) {
            createParticle();
        }
    }
    
    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];
            particle.x += particle.dx;
            particle.y += particle.dy;
            particle.life--;
            
            if (particle.life <= 0) {
                particles.splice(i, 1);
            }
        }
    }
    
    function drawCharacter() {
        const pixelSize = 2;
        let currentSprite;
        const colors = getThemeColors().pixel.character;
        
        // Choose sprite based on animation
        if (character.animationFrame < 20) {
            currentSprite = sprites.idle;
        } else if (character.animationFrame < 40) {
            currentSprite = sprites.walk1;
        } else {
            currentSprite = sprites.walk2;
        }
        
        // Draw character sprite
        ctx.fillStyle = colors[Math.floor(character.animationFrame / 15) % colors.length];
        
        currentSprite.forEach((row, y) => {
            row.forEach((pixel, x) => {
                if (pixel) {
                    ctx.fillRect(
                        character.x + x * pixelSize,
                        character.y + y * pixelSize,
                        pixelSize,
                        pixelSize
                    );
                }
            });
        });
        
        // Draw eyes
        ctx.fillStyle = '#000';
        ctx.fillRect(character.x + 2, character.y + 2, 1, 1);
        ctx.fillRect(character.x + 6, character.y + 2, 1, 1);
    }
    
    function drawParticles() {
        particles.forEach(particle => {
            const alpha = particle.life / 30;
            ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
            ctx.fillRect(particle.x, particle.y, 1, 1);
        });
    }
    
    function drawBackground() {
        // Create a subtle pixel ground
        ctx.fillStyle = '#4a5568';
        for (let x = 0; x < width; x += 4) {
            if (Math.random() < 0.1) {
                ctx.fillRect(x, height - 2, 2, 2);
            }
        }
    }
    
    function gameLoop() {
        // Clear with fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);
        
        drawBackground();
        updateCharacter();
        updateParticles();
        drawCharacter();
        drawParticles();
        
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
}

// Initialize all games when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initPongGame();
        initSnakeGame();
        initPixelCharacterGame();
    }, 500);
});
</script>
