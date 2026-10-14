// Theme-aware hero animation colors (Voice AI, Data Pipeline, AI Agents)
let themeAwareColors = {
    light: {
        voice: { caller: '#79b8ff', agent: '#0366d6', label: 'rgba(121, 184, 255, 0.85)' },
        pipeline: { stage: '#28a745', raw: '#85e89d', processed: '#ffd33d', line: 'rgba(40, 167, 69, 0.45)', label: 'rgba(133, 232, 157, 0.85)' },
        agents: { hub: '#ff6b35', node: '#ffb38a', pulse: '#ffd23f', edge: 'rgba(255, 107, 53, 0.35)', label: 'rgba(255, 179, 138, 0.9)' }
    },
    dark: {
        voice: { caller: '#a5d6ff', agent: '#58a6ff', label: 'rgba(165, 214, 255, 0.85)' },
        pipeline: { stage: '#7c3aed', raw: '#c4b5fd', processed: '#34d399', line: 'rgba(124, 58, 237, 0.5)', label: 'rgba(196, 181, 253, 0.85)' },
        agents: { hub: '#f59e0b', node: '#fcd34d', pulse: '#fde68a', edge: 'rgba(245, 158, 11, 0.35)', label: 'rgba(252, 211, 77, 0.9)' }
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
    
    // Step 1: Flash animations to show theme awareness
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
    
    // Flash animations to show theme change
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

// ==========================================
// Hero animations: Voice AI, Data Pipeline, AI Agents
// ==========================================

const HERO_ANIM_BG = '#0b0f14';
const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scale the canvas for high-DPI screens while drawing in the logical
// size given by the HTML width/height attributes.
function setupHeroCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const width = canvas.width;
    const height = canvas.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, width, height };
}

function drawHeroLabel(ctx, text, color) {
    ctx.font = '500 7px "JetBrains Mono", monospace';
    ctx.fillStyle = color;
    ctx.textBaseline = 'top';
    ctx.fillText(text, 5, 4);
}

// Runs step() every frame. With reduced motion, renders one settled
// frame and only redraws when the theme changes.
function runHeroAnimation(step) {
    if (prefersReducedMotion) {
        for (let i = 0; i < 150; i++) step();
        new MutationObserver(step).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
        return;
    }
    (function frame() {
        step();
        requestAnimationFrame(frame);
    })();
}

// Voice AI: waveform that alternates between a caller turn and an agent reply
function initVoiceAnimation() {
    const setup = setupHeroCanvas('voiceAiAnim');
    if (!setup) return;
    const { ctx, width, height } = setup;

    const bars = 15;
    const gap = 2;
    const barWidth = (width - 20 - gap * (bars - 1)) / bars;
    const turnLength = 170; // frames per conversational turn
    let t = 0;

    function step() {
        const colors = getThemeColors().voice;
        ctx.fillStyle = HERO_ANIM_BG;
        ctx.fillRect(0, 0, width, height);
        drawHeroLabel(ctx, 'voice ai', colors.label);

        const turn = Math.floor(t / turnLength) % 2; // 0 = caller, 1 = agent
        const local = (t % turnLength) / turnLength;
        const envelope = local < 0.78 ? Math.sin((local / 0.78) * Math.PI) : 0;
        const mid = height / 2 + 5;
        const maxHeight = height - 28;

        ctx.fillStyle = turn === 0 ? colors.caller : colors.agent;
        for (let i = 0; i < bars; i++) {
            const syllables = 0.55 + 0.45 * Math.sin(t * 0.22 + i * 0.9) * Math.sin(t * 0.07 + i * 0.4);
            const shape = Math.sin(((i + 0.5) / bars) * Math.PI);
            const barHeight = Math.max(2, envelope * syllables * shape * maxHeight);
            ctx.fillRect(10 + i * (barWidth + gap), mid - barHeight / 2, barWidth, barHeight);
        }

        // Speaker indicator
        ctx.beginPath();
        ctx.arc(width - 8, 7, 2, 0, Math.PI * 2);
        ctx.fill();

        t++;
    }

    runHeroAnimation(step);
}

// Data pipeline: packets flow source -> transform -> sink and change once processed
function initPipelineAnimation() {
    const setup = setupHeroCanvas('dataPipelineAnim');
    if (!setup) return;
    const { ctx, width, height } = setup;

    const y = height / 2 + 5;
    const stages = [16, width / 2, width - 16];
    const stageSize = 12;
    const packets = [];
    const glow = [0, 0, 0];
    let t = 0;

    function step() {
        const colors = getThemeColors().pipeline;

        if (t % 22 === 0) {
            packets.push({ x: 2, speed: 0.55 + Math.random() * 0.35 });
        }

        ctx.fillStyle = HERO_ANIM_BG;
        ctx.fillRect(0, 0, width, height);
        drawHeroLabel(ctx, 'pipeline', colors.label);

        // Connecting line
        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(stages[0], y);
        ctx.lineTo(stages[2], y);
        ctx.stroke();

        // Packets
        for (let i = packets.length - 1; i >= 0; i--) {
            const packet = packets[i];
            packet.x += packet.speed;
            stages.forEach((sx, s) => {
                if (Math.abs(packet.x - sx) < 1) glow[s] = 1;
            });
            if (packet.x > width) {
                packets.splice(i, 1);
                continue;
            }
            ctx.fillStyle = packet.x > stages[1] ? colors.processed : colors.raw;
            ctx.beginPath();
            ctx.arc(packet.x, y, 1.6, 0, Math.PI * 2);
            ctx.fill();
        }

        // Stages
        stages.forEach((sx, s) => {
            const half = stageSize / 2;
            ctx.fillStyle = HERO_ANIM_BG;
            ctx.fillRect(sx - half, y - half, stageSize, stageSize);
            ctx.strokeStyle = colors.stage;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(sx - half, y - half, stageSize, stageSize);
            if (glow[s] > 0) {
                ctx.globalAlpha = glow[s] * 0.6;
                ctx.fillStyle = colors.stage;
                ctx.fillRect(sx - half, y - half, stageSize, stageSize);
                ctx.globalAlpha = 1;
                glow[s] = Math.max(0, glow[s] - 0.06);
            }
        });

        t++;
    }

    runHeroAnimation(step);
}

// AI agents: an orchestrator dispatches work to agents, which light up and reply
function initAgentsAnimation() {
    const setup = setupHeroCanvas('aiAgentsAnim');
    if (!setup) return;
    const { ctx, width, height } = setup;

    const hub = { x: width / 2, y: height / 2 + 5, glow: 0 };
    const agents = [];
    const count = 5;
    for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (i / count) * Math.PI * 2;
        agents.push({
            x: hub.x + Math.cos(angle) * 34,
            y: hub.y + Math.sin(angle) * 21,
            glow: 0
        });
    }
    const pulses = [];
    let t = 0;

    function step() {
        const colors = getThemeColors().agents;

        if (t % 38 === 0) {
            pulses.push({ agent: Math.floor(Math.random() * count), progress: 0, outbound: true });
        }

        ctx.fillStyle = HERO_ANIM_BG;
        ctx.fillRect(0, 0, width, height);
        drawHeroLabel(ctx, 'agents', colors.label);

        // Edges
        ctx.strokeStyle = colors.edge;
        ctx.lineWidth = 1;
        agents.forEach(agent => {
            ctx.beginPath();
            ctx.moveTo(hub.x, hub.y);
            ctx.lineTo(agent.x, agent.y);
            ctx.stroke();
        });

        // Pulses travel hub -> agent, then the agent replies
        for (let i = pulses.length - 1; i >= 0; i--) {
            const pulse = pulses[i];
            pulse.progress += 0.035;
            const agent = agents[pulse.agent];
            if (pulse.progress >= 1) {
                pulses.splice(i, 1);
                if (pulse.outbound) {
                    agent.glow = 1;
                    pulses.push({ agent: pulse.agent, progress: 0, outbound: false });
                } else {
                    hub.glow = 1;
                }
                continue;
            }
            const p = pulse.outbound ? pulse.progress : 1 - pulse.progress;
            ctx.fillStyle = colors.pulse;
            ctx.beginPath();
            ctx.arc(hub.x + (agent.x - hub.x) * p, hub.y + (agent.y - hub.y) * p, 1.6, 0, Math.PI * 2);
            ctx.fill();
        }

        // Nodes
        function drawNode(node, radius, color) {
            if (node.glow > 0) {
                ctx.globalAlpha = node.glow * 0.5;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius + node.glow * 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
                node.glow = Math.max(0, node.glow - 0.04);
            }
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        agents.forEach(agent => drawNode(agent, 3, colors.node));
        drawNode(hub, 5, colors.hub);

        t++;
    }

    runHeroAnimation(step);
}

// Initialize hero animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initVoiceAnimation();
    initPipelineAnimation();
    initAgentsAnimation();
});
