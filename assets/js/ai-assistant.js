// AI Assistant Chatbot for George Erol Fouché Portfolio
// Interactive 3D avatar-powered assistant

class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createWidget();
        this.setupEventListeners();
        this.addWelcomeMessage();
    }

    createWidget() {
        const widget = document.createElement('div');
        widget.id = 'ai-assistant';
        widget.className = 'ai-assistant';
        widget.innerHTML = `
            <!-- Floating Button -->
            <div class="ai-assistant-button" id="aiAssistantButton">
                <svg class="ai-arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11L12 6L17 11M12 18V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="pulse-ring"></div>
            </div>

            <!-- Chat Window -->
            <div class="ai-chat-window" id="aiChatWindow">
                <div class="ai-chat-header">
                    <div class="ai-chat-header-content">
                        <div class="ai-avatar-icon">🤖</div>
                        <div class="ai-header-text">
                            <h4>AI Assistant</h4>
                            <span class="status-online">● Online</span>
                        </div>
                    </div>
                    <button class="ai-close-btn" id="aiCloseBtn">✕</button>
                </div>

                <div class="ai-chat-messages" id="aiChatMessages">
                    <!-- Messages will be added here -->
                </div>

                <div class="ai-quick-actions" id="aiQuickActions">
                    <button class="quick-action-btn" data-action="experience">💼 Experience</button>
                    <button class="quick-action-btn" data-action="skills">🛠️ Skills</button>
                    <button class="quick-action-btn" data-action="projects">🚀 Projects</button>
                    <button class="quick-action-btn" data-action="contact">📧 Contact</button>
                </div>

                <div class="ai-chat-input">
                    <input type="text" id="aiChatInput" placeholder="Ask me anything..." />
                    <button id="aiSendBtn">➤</button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
    }

    setupEventListeners() {
        const button = document.getElementById('aiAssistantButton');
        const closeBtn = document.getElementById('aiCloseBtn');
        const sendBtn = document.getElementById('aiSendBtn');
        const input = document.getElementById('aiChatInput');
        const quickActions = document.querySelectorAll('.quick-action-btn');

        button.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.handleUserMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserMessage();
        });

        quickActions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                this.handleQuickAction(action);
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('aiChatWindow');
        const button = document.getElementById('aiAssistantButton');
        
        if (this.isOpen) {
            window.classList.add('open');
            button.classList.add('hidden');
        } else {
            window.classList.remove('open');
            button.classList.remove('hidden');
        }
    }

    addWelcomeMessage() {
        setTimeout(() => {
            this.addMessage("Hi! I'm George's AI assistant. How can I help you today?", 'bot');
        }, 500);
    }

    addMessage(text, sender = 'bot') {
        const messagesContainer = document.getElementById('aiChatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = text;
        
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        this.messages.push({ text, sender, timestamp: Date.now() });
    }

    handleUserMessage() {
        const input = document.getElementById('aiChatInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        setTimeout(() => {
            const response = this.getResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    handleQuickAction(action) {
        const actions = {
            experience: "George is a Senior Software Engineer with 10+ years of experience. He most recently worked at Series Entertainment (Gaming AI Startup) and has expertise in Backend Development, Data Engineering, and Robotics/AI.",
            skills: "George specializes in: \n🤖 ROS, Computer Vision, Deep Learning\n🔧 Apache Spark, Kafka, AWS\n🌐 Java Spring Boot, Python Flask\n📱 Android, iOS, React",
            projects: "George has worked on amazing projects including:\n💼 SLIVER Pizzeria - Full-stack restaurant platform\n🍷 Vintage Wine - Mobile wine club app\n🤖 Multiple robotics & AI projects\n🚀 Data pipeline systems",
            contact: "You can reach George at:\n📧 LinkedIn: linkedin.com/in/georgefouche\n💻 GitHub: github.com/georgeerol"
        };

        this.addMessage(actions[action], 'bot');
    }

    getResponse(message) {
        const msg = message.toLowerCase();

        // Experience related
        if (msg.includes('experience') || msg.includes('background') || msg.includes('work')) {
            return "George has 10+ years of experience as a Senior Software Engineer. He specializes in Backend Development, Data Engineering, and Robotics/AI. Most recently, he worked at Series Entertainment, a Gaming AI startup!";
        }

        // Skills related
        if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack')) {
            return "George's tech stack includes: ROS, Apache Spark, Kafka, Java Spring Boot, Python Flask, Docker, Kubernetes, TensorFlow, and much more! Check out the skills section below for the full list.";
        }

        // Projects related
        if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work')) {
            return "George has built some impressive projects! Check out SLIVER Pizzeria (full-stack restaurant platform), Vintage Wine (mobile wine app), and multiple robotics projects. Want to see a specific type of project?";
        }

        // Education related
        if (msg.includes('education') || msg.includes('degree') || msg.includes('university')) {
            return "George holds a B.S. in Computer Engineering from Pennsylvania State University with a Minor in Nanotechnology. He also has Udacity Nanodegrees in Robotic Software Engineering and Full Stack Web Development!";
        }

        // Contact related
        if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('hire')) {
            return "You can connect with George on LinkedIn (linkedin.com/in/georgefouche) or check out his GitHub (github.com/georgeerol). He's currently open to new opportunities!";
        }

        // Location related
        if (msg.includes('location') || msg.includes('where')) {
            return "George is based in the San Francisco Bay Area and is open to new opportunities!";
        }

        // Gaming AI related
        if (msg.includes('game') || msg.includes('gaming') || msg.includes('ai')) {
            return "George recently worked at Series Entertainment, a Gaming AI startup! He specializes in Backend Gaming AI and has built interactive game demos. Check out the mini arcade games in the hero section!";
        }

        // Client work
        if (msg.includes('client') || msg.includes('sliver') || msg.includes('vintage')) {
            return "George has built production applications for real businesses! Check out SLIVER Pizzeria (Next.js + FastAPI restaurant platform) and Vintage Wine (React Native mobile app with AI recommendations).";
        }

        // Default response
        return "That's a great question! You can ask me about George's experience, skills, projects, education, or how to contact him. What would you like to know?";
    }
}

// Initialize AI Assistant when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIAssistant();
});

