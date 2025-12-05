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

// ============================================
// HAMBURGER MENU - Mobile Navigation
// ============================================

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu || !menuOverlay) return;
    
    // Toggle menu function
    function toggleMenu() {
        const isOpen = hamburger.classList.contains('active');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // Open menu
    function openMenu() {
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    // Close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Hamburger button click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close when clicking overlay
    menuOverlay.addEventListener('click', closeMenu);
    
    // Close when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
            // Small delay for smooth transition before scroll
            setTimeout(() => {
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu on window resize (if switching to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Prevent scroll events from bubbling when menu is open
    navMenu.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: true });
}

// Initialize hamburger menu when DOM is ready
document.addEventListener('DOMContentLoaded', initHamburgerMenu);
