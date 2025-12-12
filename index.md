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
    <a href="#client-work">Client Work</a>
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
        <p class="current-role">🔍 Open to New Opportunities</p>
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
      <p>I'm a <strong>Senior Software Engineer with 10+ years</strong> of experience specializing in <strong>Backend Development</strong>, <strong>Data Engineering</strong>, and <strong>Robotics/AI</strong>. Most recently at Series Entertainment (Gaming AI Startup), I have a proven track record of leading teams and delivering scalable solutions across Gaming, AI, Cybersecurity, and Enterprise environments.</p>
      
      <div class="my-journey">
        <h4>🌍 My Journey</h4>
        <p>Born in New York and raised in Haiti, I returned to the United States at age 16 as an ESL student. Coming from Haiti to California felt like <em>making it to the NBA — but in software engineering</em>. That experience shaped my ambition, discipline, and work ethic that drives me today.</p>
        <p class="languages-badge"><strong>Trilingual:</strong> 🇺🇸 English • 🇫🇷 French • 🇭🇹 Haitian Creole</p>
      </div>
      
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

<!-- CLIENT WORK SECTION - LEADING WITH REAL PRODUCTION APPS -->
<section id="client-work" class="projects-section">
  <div class="section-header">
    <h2>💼 Client Work</h2>
    <p class="section-subtitle">Production Applications Built for Real Businesses</p>
  </div>

<!-- SLIVER Pizzeria - CLIENT PROJECT -->
<div id="sliver-pizzeria" class="client-project-subsection sliver-theme">
  <h3 class="client-project-title">🍕 SLIVER Pizzeria</h3>
  <p class="client-project-subtitle">Full-Stack Restaurant Platform • Bay Area Sourdough Crust Pizzeria</p>
  
  <div class="project-grid">
    <!-- Featured Card - Full Width with 2-column layout -->
    <div class="project-card featured-card">
      <div class="featured-content">
        <div class="client-header">
          <img src="./images/sliver-logo.png" alt="SLIVER Pizzeria Logo" class="client-logo">
          <div class="client-badge">🏢 Client Project</div>
        </div>
        <h3 class="project-title">Web Platform & Operations Dashboard</h3>
        <div class="tech-badges">
          <span class="tech-badge">Next.js 14</span>
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">FastAPI</span>
          <span class="tech-badge">PostgreSQL</span>
          <span class="tech-badge">Tailwind CSS</span>
          <span class="tech-badge">Docker</span>
          <span class="tech-badge">Railway</span>
          <span class="tech-badge">JWT Auth</span>
          <span class="tech-badge">Cloudinary</span>
        </div>
        
        <p class="project-overview">A modern, full-stack restaurant website built for <strong>SLIVER Pizzeria</strong> — a beloved Bay Area vegetarian pizzeria with 6 locations. Features a beautiful customer-facing site and a powerful admin dashboard for managing daily operations.</p>
        
        <div class="project-features">
          <h4>🎯 Key Features:</h4>
          <ul>
            <li><strong>Public Website:</strong> Modern responsive homepage, 6 Bay Area locations, delivery partner integration</li>
            <li><strong>Pizza of the Day:</strong> Dynamic daily specials with image uploads and location-specific pricing</li>
            <li><strong>Admin Dashboard:</strong> JWT authentication, pizza management, location updates</li>
            <li><strong>Infrastructure:</strong> Docker containerization, Railway deployment, CI/CD pipeline</li>
          </ul>
        </div>
        
        <div class="project-links">
          <a href="https://sliverpizzeria-web-production.up.railway.app/" class="btn btn-primary" target="_blank">🚀 Live Demo</a>
          <a href="https://www.sliverpizzeria.com/" class="btn btn-outline" target="_blank">🍕 Current Site</a>
        </div>
      </div>
      
      <div class="featured-media">
        <div class="demo-item">
          <h5>🌐 Web Experience</h5>
          <video autoplay muted loop playsinline class="demo-video">
            <source src="./images/WebDec3.mp4#t=8" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="demo-item">
          <h5>📱 Mobile Responsive</h5>
          <video autoplay muted loop playsinline class="demo-video">
            <source src="./images/MobileDec3.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    
    <!-- Admin Dashboard Card -->
    <div class="project-card">
      <h3 class="project-title">🔐 Admin Dashboard & API</h3>
      <div class="tech-badges">
        <span class="tech-badge">FastAPI</span>
        <span class="tech-badge">SQLAlchemy</span>
        <span class="tech-badge">psycopg3</span>
        <span class="tech-badge">Pydantic</span>
        <span class="tech-badge">JWT</span>
        <span class="tech-badge">REST API</span>
      </div>
      
      <p class="project-overview">Secure admin panel for restaurant staff to manage daily operations including Pizza of the Day updates, location management, and real-time content updates.</p>
      
      <div class="demo-item">
        <video autoplay muted loop playsinline class="demo-video project-image">
          <source src="./images/adminDec3.mp4#t=3" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div class="project-links">
        <a href="https://sliverpizzeria-web-production.up.railway.app/admin" class="btn btn-primary" target="_blank">🔐 Admin Panel</a>
        <a href="https://sliverpizzeria-api-production.up.railway.app/docs" class="btn btn-outline" target="_blank">📚 API Docs</a>
      </div>
    </div>
    
    <!-- DevOps Card -->
    <div class="project-card">
      <h3 class="project-title">🚀 DevOps & Deployment</h3>
      <div class="tech-badges">
        <span class="tech-badge">Docker Compose</span>
        <span class="tech-badge">Railway</span>
        <span class="tech-badge">GitHub Actions</span>
        <span class="tech-badge">PostgreSQL</span>
        <span class="tech-badge">Cloudinary</span>
      </div>
      
      <p class="project-overview">Production-ready infrastructure with containerized development, automated deployments, and cloud-native architecture for scalability and reliability.</p>
      
      <div class="demo-item">
        <img src="./images/railway-deploy.png" alt="Railway Deployment - SLIVER Pizzeria Production" class="demo-video project-image">
      </div>
      
      <div class="project-links">
        <a href="https://sliverpizzeria-api-production.up.railway.app/" class="btn btn-primary" target="_blank">⚡ Backend API</a>
      </div>
    </div>
  </div>
  
  <!-- SLIVER Brand Info -->
  <div class="client-info-card sliver-info">
    <img src="./images/sliver-mini-logo.png" alt="SLIVER Pizzeria Logo" class="client-logo sliver-logo-img">
    <div class="client-details">
      <h4>About SLIVER Pizzeria</h4>
      <p><em>"An experiment in culinary happiness"</em> — SLIVER offers a healthier alternative focusing on fresh produce, 100% vegetarian with sourdough crust pizza. Family owned & operated with 6 Bay Area locations serving Berkeley, Oakland, Lafayette, and Fremont.</p>
      <div class="tech-badges location-badges">
        <span class="tech-badge">📍 Berkeley (2)</span>
        <span class="tech-badge">📍 Oakland (2)</span>
        <span class="tech-badge">📍 Lafayette</span>
        <span class="tech-badge">📍 Fremont</span>
      </div>
    </div>
  </div>
</div>

<!-- Vintage Wine - CLIENT PROJECT -->
<div id="vintage-wine" class="client-project-subsection vintage-theme">
  <h3 class="client-project-title">🍷 Vintage Wine</h3>
  <p class="client-project-subtitle">Mobile Wine Club & E-Commerce Platform • Barnyard Wine Bar</p>
  
  <div class="project-grid">
    <div class="project-card featured-card vintage-featured">
      <div class="featured-content">
        <div class="client-header">
          <img src="./images/TheBarnyardLogo.png" alt="The Barnyard Wine Bar Logo" class="client-logo">
          <div class="client-badge vintage-badge">🏢 Client Project</div>
        </div>
        <h3 class="project-title">Vintage — Wine Recommendation & Club</h3>
        <div class="tech-badges">
          <span class="tech-badge">React Native (Expo)</span>
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">Flask</span>
          <span class="tech-badge">PostgreSQL</span>
          <span class="tech-badge">Stripe</span>
          <span class="tech-badge">AI Recommendations</span>
        </div>
        
        <p class="project-overview">A modern mobile app built for <strong>Barnyard Wine Bar</strong> — featuring wine discovery, user reviews, shopping cart, and an integrated <strong>Epic Society</strong> wine club with Stripe-powered subscriptions and AI-powered recommendations.</p>
        
        <div class="project-features">
          <h4>🎯 Key Features:</h4>
          <ul>
            <li><strong>Wine Discovery:</strong> Detailed profiles, tasting notes, and user reviews</li>
            <li><strong>E-Commerce:</strong> Shopping cart, favorites, and order history</li>
            <li><strong>Epic Society Club:</strong> Membership tiers (Corks Crew, Curator) with preferences</li>
            <li><strong>AI Recommendations:</strong> Personalized wine suggestions based on taste profile</li>
          </ul>
        </div>
        
        <div class="project-links">
          <a href="https://barnyardwinebar.com/" class="btn btn-primary" target="_blank">🍷 Live Website</a>
        </div>
      </div>
      
      <div class="featured-media">
        <div class="demo-item">
          <h5>🍷 Wine Discovery & Cart</h5>
          <video autoplay muted loop playsinline class="demo-video mobile-demo">
            <source src="./images/Vintage.web.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="demo-item">
          <h5>🤖 AI Recommendations</h5>
          <video autoplay muted loop playsinline class="demo-video mobile-demo">
            <source src="./images/VintageAI.web.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    
    <div class="project-card compact-card">
      <div class="card-icon">💳</div>
      <h3 class="project-title">Backend & Payments</h3>
      <div class="tech-badges">
        <span class="tech-badge">Flask</span>
        <span class="tech-badge">SQLAlchemy</span>
        <span class="tech-badge">Stripe API</span>
        <span class="tech-badge">JWT Auth</span>
      </div>
      
      <ul class="compact-features">
        <li>✓ Stripe subscription integration</li>
        <li>✓ JWT-based authentication</li>
        <li>✓ Wine inventory management</li>
        <li>✓ Member preference tracking</li>
      </ul>
      
      <div class="project-links">
        <a href="https://barnyardwinebar.com/" class="btn btn-primary" target="_blank">🌐 Visit Site</a>
      </div>
    </div>
    
    <div class="project-card compact-card">
      <div class="card-icon">🍇</div>
      <h3 class="project-title">Epic Society Wine Club</h3>
      <div class="tech-badges">
        <span class="tech-badge">Subscriptions</span>
        <span class="tech-badge">Member Dashboard</span>
        <span class="tech-badge">Curated Selections</span>
      </div>
      
      <ul class="compact-features">
        <li>✓ Corks Crew & Curator tiers</li>
        <li>✓ Mixed, Red, or White preferences</li>
        <li>✓ Shipment tracking dashboard</li>
        <li>✓ Member discounts & early access</li>
      </ul>
      
      <div class="project-links">
        <a href="https://barnyardwinebar.com/" class="btn btn-primary" target="_blank">🍷 Join Club</a>
      </div>
    </div>
  </div>
  
  <!-- Vintage Brand Info -->
  <div class="client-info-card vintage-info">
    <img src="./images/TheBarnyardLogo.png" alt="The Barnyard Wine Bar Logo" class="client-logo vintage-logo-img">
    <div class="client-details">
      <h4>About Barnyard Wine Bar</h4>
      <p><em>"Where every glass tells a story"</em> — Barnyard Wine Bar brings curated wine experiences to wine enthusiasts through their Epic Society wine club. Members enjoy personalized selections, exclusive tastings, and a community of fellow wine lovers.</p>
      <div class="tech-badges location-badges vintage-badges">
        <span class="tech-badge">🍇 Curated Wines</span>
        <span class="tech-badge">📦 Monthly Shipments</span>
        <span class="tech-badge">🎉 Member Events</span>
        <span class="tech-badge">💳 Stripe Payments</span>
      </div>
    </div>
  </div>
</div>

</section>

<!-- Robotics Projects -->
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

<!-- Full Stack Projects -->
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
