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
                <div class="ai-robot-icon">🤖</div>
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
        
        // Scroll to show the START of the new message (top of the message)
        setTimeout(() => {
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

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
            experience: "🎮 Series Entertainment (2024-2025)\nGaming AI - Sr. Software Engineer\nData Engineer for Pixelberry Studio\n\n🔒 Sphere Technology (2022-2024)\nCybersecurity - Lead architect\n\n🤖 CalypsoAI (2020-2022)\nAI Startup - Sole US Engineer\n\n🏭 GE (2013-2020)\nData & AI, Mobile, IoT",
            
            skills: "🔧 Backend:\nJava Spring Boot, Python Flask\n\n📊 Data:\nSpark, Kafka, Redshift\n\n☁️ Cloud:\nAWS, Azure\n\n🤖 AI/Robotics:\nROS, TensorFlow, OpenCV\n\n📱 Mobile:\nAndroid, iOS, React Native",
            
            projects: "💼 Client Work:\n🍕 SLIVER Pizzeria\n🍷 Vintage Wine\n\n🤖 Robotics:\n🚁 Deep Learning Drone\n🔍 Search & Sample Rover\n🦾 Robotic Arm\n\n📊 Data:\n☁️ IoT AWS Spark\n⚡ Real-time Analytics",
            
            contact: "📧 fouliex@gmail.com\n💼 linkedin.com/in/georgefouche\n💻 github.com/georgeerol\n🌐 georgeerol.github.io\n📱 (845) 659-4124\n📍 San Francisco Bay Area\n\n✨ Open to opportunities!"
        };

        this.addMessage(actions[action], 'bot');
    }

    getResponse(message) {
        const msg = message.toLowerCase();

        // Experience related
        if (msg.includes('experience') || msg.includes('background') || msg.includes('work')) {
            return "George is a Product-focused Software Engineer with 10+ years of experience in Backend, Data Engineering, and Robotics/AI. Most recently, he was a Sr. Software Engineer at Series Entertainment (Gaming AI Startup) from Nov 2024 - Oct 2025, where he was the Backend and sole Data Engineer for Pixelberry Studio.";
        }

        // Skills related
        if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack')) {
            return "George's tech stack includes:\n🔧 Backend: Java Spring Boot, Python Flask\n📊 Data: Apache Spark, PySpark, Kafka, SQS\n💾 Databases: Cassandra, DynamoDB, Redshift, PostgreSQL\n☁️ Cloud: AWS, Azure\n🤖 AI/ML: TensorFlow, OpenCV, ROS\nCheck out the skills section for the full list!";
        }

        // Projects related
        if (msg.includes('project') || msg.includes('portfolio')) {
            return "George has built impressive projects including:\n💼 Client Work: SLIVER Pizzeria (Next.js + FastAPI), Vintage Wine (React Native + AI)\n🤖 Robotics: Deep Learning Drone, Search & Sample Rover, Robotic Arm\n📊 Data: IoT AWS Spark Integration, Real-time Analytics\n🌐 Full-Stack: Expense Tracker, Todo App, Bitcoin Ticker\nWant to see a specific type?";
        }

        // Education related
        if (msg.includes('education') || msg.includes('degree') || msg.includes('university') || msg.includes('school')) {
            return "George holds a B.S. in Computer Engineering from Pennsylvania State University with a Minor in Nanotechnology and a Certificate in International Engineering. He also completed Udacity Nanodegrees in Robotic Software Engineering and Full Stack Web Development. Plus, he was Team Leader for CMU Robotics Institute Summer Scholar Program!";
        }

        // Contact related
        if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('hire')) {
            return "You can connect with George:\n📧 Email: fouliex@gmail.com\n💼 LinkedIn: linkedin.com/in/georgefouche\n💻 GitHub: github.com/georgeerol\n🌐 Portfolio: georgeerol.github.io\nHe's currently open to new opportunities!";
        }

        // Location related
        if (msg.includes('location') || msg.includes('where') || msg.includes('based')) {
            return "George is based in the San Francisco Bay Area and is open to new opportunities!";
        }

        // Series Entertainment / Gaming AI
        if (msg.includes('series') || msg.includes('gaming') || msg.includes('game') || msg.includes('pixelberry') || msg.includes('choices')) {
            return "At Series Entertainment (Nov 2024 - Oct 2025), George was Sr. Software Engineer and sole Data Engineer for Pixelberry Studio. He:\n🎮 Architected real-time & batch ETL pipelines for billions of Choices Game events\n⚙️ Developed Game State, CMS, and VIP Subscription systems\n📊 Advised GaaS team on data strategy for monetization\nTech: Java Spring, Python, SQS, Redshift, DynamoDB, AWS";
        }

        // Data Engineering specific
        if (msg.includes('data engineering') || msg.includes('etl') || msg.includes('pipeline') || msg.includes('spark')) {
            return "George has deep Data Engineering experience:\n✅ Built real-time & batch ETL pipelines for billions of events\n✅ Architected event-driven systems for big data\n✅ Created PySpark pipelines integrating multiple databases\n✅ Managed data validation pipelines and workflows\nCompanies: Series Entertainment, Sphere Technology, GE Power\nTech: Apache Spark, PySpark, Kafka, Redshift, Cassandra";
        }

        // Robotics specific
        if (msg.includes('robot') || msg.includes('ros') || msg.includes('cmu') || msg.includes('carnegie')) {
            return "George has strong Robotics background:\n🤖 CMU Robotics Institute Team Leader (2010-2012)\n🤖 Built autonomous recharging stations for robots\n🤖 Udacity Robotic Software Engineer Nanodegree\n🤖 Projects: Deep Learning Drone, Search & Sample Rover, 6-DOF Robotic Arm\nTech: ROS, TensorFlow, OpenCV, Python";
        }

        // AI/ML specific
        if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml') || msg.includes('deep learning')) {
            return "George has extensive AI/ML experience:\n✅ Worked at 2 AI Startups (Series Entertainment, CalypsoAI)\n✅ Built systems for government AI trust & safety\n✅ Trained neural networks for drones & self-driving cars\n✅ Computer vision projects with OpenCV & TensorFlow\n✅ Currently specializes in Backend Gaming AI\nCheck out his Robotics & AI projects section!";
        }

        // Recent work
        if (msg.includes('recent') || msg.includes('current') || msg.includes('latest')) {
            return "George's most recent role was Sr. Software Engineer at Series Entertainment (Gaming AI Startup) from Nov 2024 - Oct 2025. He was the Backend lead and sole Data Engineer for Pixelberry Studio, working on the Choices game with billions of events. Before that: Sphere Technology Solutions (Cybersecurity) and CalypsoAI (AI Startup).";
        }

        // Companies
        if (msg.includes('company') || msg.includes('companies') || msg.includes('employer')) {
            return "George has worked at:\n🎮 Series Entertainment - Gaming AI Startup (2024-2025)\n🔒 Sphere Technology Solutions - Cybersecurity (2022-2024)\n🤖 CalypsoAI - AI Startup (2020-2022)\n🏭 General Electric - Multiple divisions (2013-2020)\nAcross Gaming, Cybersecurity, AI, and Enterprise environments!";
        }

        // Client work
        if (msg.includes('client') || msg.includes('sliver') || msg.includes('vintage') || msg.includes('pizzeria') || msg.includes('wine')) {
            return "George has built production applications for real businesses:\n🍕 SLIVER Pizzeria - Full-stack restaurant platform (Next.js 14, FastAPI, PostgreSQL) with admin dashboard\n🍷 Vintage Wine - Mobile wine club app (React Native, Flask) with AI-powered recommendations and Stripe integration\nBoth are live in production serving real customers!";
        }

        // Default response
        return "That's a great question! I can tell you about George's:\n💼 Experience (10+ years in Backend, Data Engineering, Robotics/AI)\n🛠️ Skills (Java, Python, Spark, AWS, TensorFlow, ROS)\n🚀 Projects (Client work, Robotics, Data pipelines)\n🎓 Education (Penn State, Udacity, CMU)\n📧 Contact info\nWhat would you like to know?";
    }
}

// Initialize AI Assistant when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIAssistant();
});

