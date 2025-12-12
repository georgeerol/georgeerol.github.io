// AI Assistant Chatbot for George Erol Fouché Portfolio
// Enhanced with conversation memory, synonyms, natural responses, and smart features

class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.conversationHistory = [];
        this.lastTopic = null;
        this.topicDepth = {};
        this.currentSection = null;
        this.idleTimer = null;
        this.hasShownProactivePrompt = false;
        this.isTyping = false;
        this.init();
    }

    init() {
        this.createWidget();
        this.setupEventListeners();
        this.setupSectionObserver();
        this.setupIdleDetection();
        this.addWelcomeMessage();
    }

    // ==========================================
    // ANALYTICS TRACKING (Google Analytics 4)
    // ==========================================
    
    trackEvent(eventName, params = {}) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, {
                'event_category': 'AI Chatbot',
                ...params
            });
        }
    }

    trackQuestion(question, topic) {
        this.trackEvent('chatbot_question', {
            'question': question.substring(0, 100),
            'topic_detected': topic || 'unknown',
            'section_viewing': this.currentSection || 'none'
        });
    }

    trackQuickAction(action) {
        this.trackEvent('chatbot_quick_action', { 'action': action });
    }

    trackSuggestionClick(suggestion) {
        this.trackEvent('chatbot_suggestion_click', { 'suggestion': suggestion.substring(0, 100) });
    }

    // ==========================================
    // CONTENT MODERATION
    // ==========================================
    
    getBlockedPatterns() {
        // Patterns that indicate inappropriate content
        // Using partial matches to catch variations
        return [
            // Profanity (common variations)
            'fuck', 'shit', 'damn', 'ass', 'bitch', 'bastard', 'crap',
            'dick', 'cock', 'pussy', 'cunt', 'whore', 'slut',
            // Slurs and hate speech
            'nigger', 'nigga', 'faggot', 'retard', 'spic', 'chink', 'kike',
            // Threats and harassment
            'kill you', 'kill him', 'die', 'murder', 'attack', 'hurt you',
            'hack', 'ddos', 'exploit', 'inject', 'sql injection', 'xss',
            // Inappropriate requests
            'nude', 'naked', 'porn', 'sex',
            // Spam patterns
            'buy now', 'click here', 'free money', 'bitcoin scam'
        ];
    }

    detectInappropriateContent(message) {
        const lowerMessage = message.toLowerCase();
        const blockedPatterns = this.getBlockedPatterns();
        
        for (const pattern of blockedPatterns) {
            if (lowerMessage.includes(pattern)) {
                return {
                    isInappropriate: true,
                    reason: 'blocked_word'
                };
            }
        }
        
        // Check for excessive caps (yelling)
        const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
        if (message.length > 10 && capsRatio > 0.7) {
            return {
                isInappropriate: true,
                reason: 'excessive_caps'
            };
        }
        
        // Check for spam-like repetition
        const repeatedChars = /(.)\1{4,}/;
        if (repeatedChars.test(message)) {
            return {
                isInappropriate: true,
                reason: 'spam'
            };
        }
        
        return { isInappropriate: false };
    }

    triggerAngryState() {
        const avatar = document.querySelector('.ai-avatar-icon');
        const header = document.querySelector('.ai-chat-header');
        
        if (avatar) avatar.classList.add('angry');
        if (header) header.classList.add('angry');
        
        // Track the incident
        this.trackEvent('chatbot_inappropriate_content');
        
        // Remove angry state after animation
        setTimeout(() => {
            if (avatar) avatar.classList.remove('angry');
            if (header) header.classList.remove('angry');
        }, 2000);
    }

    getInappropriateResponse(reason) {
        const responses = {
            blocked_word: [
                "I appreciate you reaching out, but I'd prefer to keep our conversation professional. How can I help you learn about George's work? 🙂",
                "Let's keep things professional! I'm happy to tell you about George's projects, skills, or experience.",
                "I'm designed to be helpful and professional. What would you like to know about George's background?"
            ],
            excessive_caps: [
                "No need to shout! 😊 I can hear you just fine. What would you like to know about George?",
                "I got your message! Let's chat normally. What can I help you with?"
            ],
            spam: [
                "That looks like an accidental input. What would you like to know about George?",
                "Let me help you with something meaningful! Ask me about George's projects or experience."
            ]
        };
        
        const options = responses[reason] || responses.blocked_word;
        return options[Math.floor(Math.random() * options.length)];
    }

    // ==========================================
    // PHASE 2: TIME-BASED GREETINGS
    // ==========================================
    
    getTimeBasedGreeting() {
        const hour = new Date().getHours();
        
        if (hour >= 5 && hour < 12) {
            return { greeting: "Good morning", emoji: "☀️" };
        } else if (hour >= 12 && hour < 17) {
            return { greeting: "Good afternoon", emoji: "🌤️" };
        } else if (hour >= 17 && hour < 21) {
            return { greeting: "Good evening", emoji: "🌆" };
        } else {
            return { greeting: "Hey there, night owl", emoji: "🌙" };
        }
    }

    // ==========================================
    // PHASE 1: SUGGESTED QUESTIONS
    // ==========================================
    
    getSuggestedQuestions(topic) {
        const suggestions = {
            experience: [
                "What companies has he worked at?",
                "Tell me about his gaming work",
                "What's his most recent role?"
            ],
            skills: [
                "What about data engineering?",
                "Does he know robotics?",
                "What cloud platforms?"
            ],
            projects: [
                "Tell me about SLIVER Pizzeria",
                "What robotics projects?",
                "Any data pipeline work?"
            ],
            education: [
                "What about CMU?",
                "Any certifications?",
                "What did he study?"
            ],
            contact: [
                "Where is he located?",
                "Is he open to opportunities?",
                "Tell me about his experience"
            ],
            location: [
                "How can I contact him?",
                "What's his experience?",
                "Show me his projects"
            ],
            gaming: [
                "What did he build there?",
                "Tell me about the tech stack",
                "Any other companies?"
            ],
            dataEngineering: [
                "What tools does he use?",
                "Show me data projects",
                "What about real-time?"
            ],
            robotics: [
                "Tell me about the drone project",
                "What about the rover?",
                "Does he know ROS?"
            ],
            ai: [
                "What AI startups?",
                "Tell me about computer vision",
                "Any deep learning projects?"
            ],
            recent: [
                "What skills does he have?",
                "Show me his projects",
                "How can I contact him?"
            ],
            companies: [
                "Tell me about Series Entertainment",
                "What about GE?",
                "Any startup experience?"
            ],
            clientWork: [
                "Tell me about the pizza app",
                "What about the wine app?",
                "What tech did he use?"
            ],
            greeting: [
                "What's George's personal story?",
                "What languages does he speak?",
                "Tell me about his experience"
            ],
            thanks: [
                "Tell me more about projects",
                "How can I contact George?",
                "What's his experience?"
            ],
            who: [
                "What's his personal story?",
                "What languages does he speak?",
                "What's his experience?"
            ],
            personalStory: [
                "What languages does he speak?",
                "Where is he now?",
                "Tell me about his experience"
            ],
            languages: [
                "What's his personal story?",
                "Where is he from?",
                "Tell me about his skills"
            ],
            easterEgg: [
                "Tell me about George",
                "What are his skills?",
                "Show me his projects"
            ],
            default: [
                "What's George's experience?",
                "What skills does he have?",
                "What's his personal story?"
            ]
        };
        
        return suggestions[topic] || suggestions.default;
    }

    // ==========================================
    // PHASE 4: CONTEXT AWARENESS
    // ==========================================
    
    setupSectionObserver() {
        const sections = document.querySelectorAll('section[id], .hero-section, #about, #client-work, #robotics, #data-pipeline, #fullstack, #mobile, #contact');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    const sectionId = entry.target.id || entry.target.className;
                    this.currentSection = sectionId;
                }
            });
        }, {
            threshold: [0.3, 0.5, 0.7]
        });
        
        sections.forEach(section => observer.observe(section));
    }

    getContextualSuggestion() {
        const sectionMap = {
            'about': {
                message: "I see you're checking out the About section! Want to know more about George's background?",
                suggestions: ["What's his experience?", "Tell me about his education", "What skills does he have?"]
            },
            'client-work': {
                message: "Interested in George's client work? He's built production apps for real businesses!",
                suggestions: ["Tell me about SLIVER Pizzeria", "What about the wine app?", "What tech did he use?"]
            },
            'robotics': {
                message: "The robotics projects are impressive! George started at CMU Robotics Institute.",
                suggestions: ["Tell me about the drone", "What about the rover?", "Does he know ROS?"]
            },
            'data-pipeline': {
                message: "Data Engineering is one of George's core strengths! He's processed billions of events.",
                suggestions: ["What tools does he use?", "Tell me about IoT Spark", "Any real-time projects?"]
            },
            'fullstack': {
                message: "George builds full-stack applications with modern frameworks!",
                suggestions: ["What frameworks?", "Tell me about the Todo app", "Any React experience?"]
            },
            'mobile': {
                message: "George has mobile development experience across platforms!",
                suggestions: ["iOS or Android?", "Tell me about the weather app", "React Native experience?"]
            },
            'contact': {
                message: "Ready to connect with George? He's open to opportunities!",
                suggestions: ["What's his email?", "Where is he located?", "LinkedIn profile?"]
            }
        };
        
        return sectionMap[this.currentSection] || null;
    }

    // ==========================================
    // PHASE 5: PROACTIVE PROMPTS
    // ==========================================
    
    setupIdleDetection() {
        // Reset idle timer on user activity
        const resetTimer = () => {
            clearTimeout(this.idleTimer);
            
            if (!this.isOpen && !this.hasShownProactivePrompt) {
                this.idleTimer = setTimeout(() => {
                    this.showProactivePrompt();
                }, 30000); // 30 seconds
            }
        };
        
        // Track user activity
        ['scroll', 'mousemove', 'click', 'keypress'].forEach(event => {
            document.addEventListener(event, resetTimer, { passive: true });
        });
        
        // Start the timer
        resetTimer();
        
        // Also show prompt when scrolling to certain sections
        this.setupScrollTriggers();
    }

    setupScrollTriggers() {
        const triggerSections = ['robotics', 'data-pipeline', 'contact'];
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isOpen && !this.hasShownProactivePrompt) {
                    // Small delay to not be too aggressive
                    setTimeout(() => {
                        if (!this.isOpen) {
                            this.showProactivePrompt();
                        }
                    }, 2000);
                }
            });
        }, { threshold: 0.5 });
        
        triggerSections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });
    }

    showProactivePrompt() {
        if (this.hasShownProactivePrompt || this.isOpen) return;
        
        this.hasShownProactivePrompt = true;
        
        const button = document.getElementById('aiAssistantButton');
        if (!button) return;
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'ai-proactive-tooltip';
        
        const contextual = this.getContextualSuggestion();
        const message = contextual 
            ? contextual.message 
            : "👋 Have questions about George? I can help!";
        
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <span class="tooltip-close">×</span>
                <p>${message}</p>
                <button class="tooltip-cta">Chat with me!</button>
            </div>
        `;
        
        button.parentElement.appendChild(tooltip);
        
        // Animate in
        setTimeout(() => tooltip.classList.add('visible'), 100);
        
        // Setup tooltip interactions
        tooltip.querySelector('.tooltip-close').addEventListener('click', (e) => {
            e.stopPropagation();
            tooltip.classList.remove('visible');
            setTimeout(() => tooltip.remove(), 300);
        });
        
        tooltip.querySelector('.tooltip-cta').addEventListener('click', () => {
            tooltip.remove();
            this.toggleChat();
        });
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (tooltip.parentElement) {
                tooltip.classList.remove('visible');
                setTimeout(() => tooltip.remove(), 300);
            }
        }, 10000);
    }

    // ==========================================
    // PHASE 1: EXPANDED KEYWORD SYNONYMS
    // ==========================================
    
    getKeywordMappings() {
        return {
            // Easter eggs FIRST to catch fun queries before other topics
            easterEgg: [
                'tell me a joke', 'a joke', 'make me laugh', 'funny joke', 'joke',
                'who built you', 'who made you', 'who created you',
                'favorite pizza', 'favorite food',
                'secret', 'easter egg', 'surprise me', 'hidden',
                'meaning of life', 'are you real', 'are you a bot',
                'are you ai', 'are you human', 'beep boop'
            ],
            // More specific topics next
            personalStory: [
                'personal story', 'his story', 'your story', 'george\'s story',
                'his journey', 'personal journey', 'life journey',
                'origin', 'born', 'raised', 'grew up', 'where is he from', 
                'where from', 'hometown', 'haiti', 'haitian', 'immigrant', 'esl student'
            ],
            languages: [
                'what language', 'speak french', 'speak creole', 'bilingual',
                'trilingual', 'multilingual', 'parle', 'parlez', 'francais',
                'how many languages', 'does he speak'
            ],
            experience: [
                'experience', 'background', 'work history', 'job', 'career', 'employment',
                'worked', 'role', 'position', 'professional', 'resume',
                'cv', 'career path', 'trajectory', 'employed', 'working',
                'achievements', 'accomplishments', 'leadership', 'team lead', 'lead',
                'senior', 'manager', 'years of experience', 'how long'
            ],
            skills: [
                'skill', 'skills', 'technology', 'technologies', 'tech stack',
                'programming', 'tools', 'frameworks', 'expertise',
                'proficient', 'capable', 'abilities', 'competencies',
                'specialize', 'specialization', 'technical', 'coding', 'tech',
                'cloud', 'cloud platform', 'aws', 'azure', 'gcp', 'docker', 'kubernetes',
                'infrastructure', 'devops', 'database', 'databases', 'java', 'python',
                'javascript', 'react', 'spring boot', 'flask', 'api', 'backend', 'frontend',
                // Additional tech keywords
                'graphql', 'rest', 'grpc', 'websocket', 'microservice',
                'mysql', 'postgres', 'sqlite', 'elasticsearch', 'redis', 'mongodb',
                'jenkins', 'gitlab', 'github actions', 'ci/cd', 'cicd',
                'terraform', 'ansible', 'nginx', 'linux', 'git',
                'tdd', 'bdd', 'clean code', 'solid', 'design pattern', 'architecture',
                'system design', 'scalable', 'distributed'
            ],
            projects: [
                'project', 'projects', 'portfolio', 'built', 'created', 'developed',
                'made', 'build', 'work samples', 'examples', 'showcase', 'demos',
                'applications', 'apps', 'websites', 'systems'
            ],
            education: [
                'education', 'degree', 'university', 'school', 'college', 'study',
                'studied', 'graduated', 'graduation', 'academic', 'certificate',
                'certification', 'training', 'nanodegree',
                'penn state', 'pennsylvania', 'udacity', 'cmu', 'carnegie'
            ],
            contact: [
                'contact', 'reach', 'email', 'hire', 'connect', 'touch',
                'message', 'linkedin', 'github', 'available', 'opportunity',
                'opportunities', 'hiring', 'recruit', 'phone', 'call',
                'can he help', 'how to hire', 'interested in hiring',
                'freelance', 'consulting', 'contractor', 'open to work'
            ],
            location: [
                'location', 'where is he based', 'where does he live', 'located', 'city',
                'area', 'region', 'bay area', 'san francisco', 'california'
            ],
            gaming: [
                'series', 'gaming', 'game', 'games', 'pixelberry', 'choices',
                'entertainment', 'studio', 'gaas', 'game development'
            ],
            dataEngineering: [
                'data engineering', 'data engineer', 'etl', 'pipeline', 'pipelines',
                'spark', 'kafka', 'redshift', 'data processing', 'big data',
                'streaming', 'batch', 'data warehouse', 'analytics'
            ],
            robotics: [
                'robot', 'robotics', 'ros', 'autonomous', 'drone', 'rover',
                'manipulation', 'perception', 'slam', 'navigation', 'sensor',
                'actuator', 'kinematics', 'motion planning'
            ],
            ai: [
                'ai', 'artificial intelligence', 'machine learning', 'ml',
                'deep learning', 'neural', 'tensorflow', 'pytorch', 'opencv',
                'computer vision', 'nlp', 'model', 'training'
            ],
            recent: [
                'recent', 'current', 'latest', 'now', 'today', 'currently',
                'present', 'last', 'newest', '2024', '2025'
            ],
            companies: [
                'company', 'companies', 'employer', 'employers', 'worked at',
                'organization', 'firm', 'startup', 'corporation', 'general electric',
                'ge power', 'sphere', 'calypso', 'calyps', 'series entertainment'
            ],
            clientWork: [
                'client', 'clients', 'sliver', 'vintage', 'pizzeria', 'pizza',
                'wine', 'barnyard', 'freelance', 'consulting', 'contract'
            ],
            followUp: [
                'more', 'detail', 'details', 'elaborate', 'explain', 'tell me more',
                'go on', 'continue', 'expand', 'deeper', 'specifically', 'example',
                'examples', 'like what', 'such as', 'instance'
            ],
            thanks: [
                'thanks', 'thank you', 'appreciate', 'helpful', 'great help',
                'perfect', 'excellent', 'wonderful'
            ],
            greeting: [
                'hello', 'hi', 'hey', 'greetings', 'howdy', 'sup',
                'good morning', 'good afternoon', 'good evening', 'whats up'
            ],
            who: [
                'who is', 'who are', 'who\'s', 'about george', 'about him',
                'tell me about', 'introduce', 'introduction', 'summary', 'bio',
                'strengths', 'unique', 'why hire', 'why should i hire', 'what makes him'
            ]
        };
    }

    detectTopic(message) {
        const msg = message.toLowerCase();
        const mappings = this.getKeywordMappings();
        
        for (const [topic, keywords] of Object.entries(mappings)) {
            for (const keyword of keywords) {
                if (msg.includes(keyword)) {
                    return topic;
                }
            }
        }
        return null;
    }

    // ==========================================
    // RESPONSE VARIATIONS
    // ==========================================
    
    getResponseVariations() {
        return {
            experience: [
                {
                    level: 1,
                    responses: [
                        "George is a **Senior Software Engineer with 10+ years** of experience! He specializes in Backend Development, Data Engineering, and Robotics/AI. Most recently, he was at Series Entertainment (Gaming AI Startup) as the sole Data Engineer for Pixelberry Studio. 🎮",
                        "With over a decade in software engineering, George has built expertise across Gaming AI, Cybersecurity, Enterprise, and Startups. His most recent role was Sr. Software Engineer at Series Entertainment, working on the Choices mobile game. 🚀",
                        "George brings 10+ years of hands-on experience spanning Backend Development, Data Engineering, and AI/Robotics. He's worked at gaming startups, cybersecurity firms, AI companies, and Fortune 500 giants like GE. 💼"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Here's George's career journey in more detail:\n\n🎮 **Series Entertainment** (2024-2025)\nSr. Software Engineer & sole Data Engineer for Pixelberry Studio. Built ETL pipelines for billions of Choices game events.\n\n🔒 **Sphere Technology** (2022-2024)\nLead architect for cybersecurity solutions.\n\n🤖 **CalypsoAI** (2020-2022)\nSole US Engineer at this AI startup, building government AI trust & safety systems.\n\n🏭 **General Electric** (2013-2020)\nProgressed through Data Engineering, Mobile, and IoT roles.",
                        "Let me break down George's professional timeline:\n\n**Recent (2020-2025)**: Startup focus - Gaming AI at Series Entertainment, Cybersecurity at Sphere Technology, AI Trust at CalypsoAI\n\n**Earlier (2013-2020)**: Enterprise experience at General Electric across multiple divisions\n\n**Foundation**: CMU Robotics Institute experience + Penn State Computer Engineering degree"
                    ]
                }
            ],
            skills: [
                {
                    level: 1,
                    responses: [
                        "George's tech toolkit is impressive! 🛠️\n\n**Backend**: Java Spring Boot, Python Flask, Microservices\n**Data**: Apache Spark, Kafka, Redshift, Cassandra\n**Cloud**: AWS, Azure\n**AI/Robotics**: TensorFlow, OpenCV, ROS",
                        "Here's what George works with daily:\n\n🔧 **Languages**: Java, Python, SQL\n📊 **Data Tools**: Spark, PySpark, Kafka, SQS\n☁️ **Cloud**: AWS (DynamoDB, Redshift, S3), Azure\n🤖 **AI/ML**: TensorFlow, OpenCV, Deep Learning",
                        "George is a full-stack polyglot! His expertise spans:\n\n• **Backend Development** - Java Spring Boot, Python Flask, REST APIs\n• **Data Engineering** - Big data pipelines, ETL, streaming\n• **Cloud & DevOps** - AWS, Docker, Kubernetes\n• **AI & Robotics** - Computer vision, deep learning, ROS"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Let's go deeper on George's technical skills:\n\n**Backend & APIs**\n• Java Spring Boot (enterprise-grade)\n• Python Flask/FastAPI\n• REST API design\n• Microservices architecture\n\n**Data Engineering**\n• Apache Spark & PySpark\n• Kafka, SQS for streaming\n• Redshift, Cassandra, PostgreSQL, DynamoDB\n• ETL pipeline design\n\n**Cloud & Infrastructure**\n• AWS (extensive) - Lambda, EC2, S3, etc.\n• Azure experience\n• Docker, Kubernetes\n• CI/CD pipelines\n\n**AI/ML & Robotics**\n• TensorFlow, deep learning\n• OpenCV, computer vision\n• ROS (Robot Operating System)\n• SLAM, path planning"
                    ]
                }
            ],
            projects: [
                {
                    level: 1,
                    responses: [
                        "George has built some amazing projects! 🚀\n\n**💼 Client Work**: SLIVER Pizzeria (Next.js + FastAPI), Vintage Wine app (React Native + AI)\n\n**🤖 Robotics**: Deep Learning Drone, Search & Sample Rover, Robotic Arm control\n\n**📊 Data**: IoT AWS Spark, Real-time Flink analytics\n\n**🌐 Full-Stack**: Todo App, Expense Tracker",
                        "Here's George's project portfolio:\n\n🍕 **SLIVER Pizzeria** - Full restaurant platform with admin dashboard\n🍷 **Vintage Wine** - Mobile wine club with AI recommendations\n🚁 **Deep Learning Drone** - Neural network for follow-me feature\n🔍 **Search Rover** - Autonomous navigation & mapping\n⚡ **IoT AWS Spark** - Real-time vehicle data processing",
                        "George's portfolio spans multiple domains:\n\n• **Production Apps**: Built real apps for SLIVER Pizzeria and Barnyard Wine Bar\n• **Robotics/AI**: Drones, rovers, robotic arms, self-driving car simulations\n• **Data Pipelines**: End-to-end big data systems\n• **Web/Mobile**: Full-stack applications"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Let me give you more project details:\n\n**🍕 SLIVER Pizzeria** (Client Work)\n• Next.js 14 + TypeScript frontend\n• FastAPI + PostgreSQL backend\n• Admin dashboard with JWT auth\n• Deployed on Railway\n• Live: sliverpizzeria-web-production.up.railway.app\n\n**🍷 Vintage Wine** (Client Work)\n• React Native (Expo) mobile app\n• Flask backend with Stripe integration\n• AI-powered wine recommendations\n• Epic Society wine club subscriptions\n\n**🚁 Deep Learning Drone**\n• Custom neural network architecture\n• Real-time object tracking\n• Simulation environment\n• Applications to autonomous vehicles"
                    ]
                }
            ],
            education: [
                {
                    level: 1,
                    responses: [
                        "George has a strong educational foundation! 🎓\n\n**Penn State University**\n• B.S. Computer Engineering\n• Minor in Nanotechnology\n• Certificate in International Engineering\n\n**Udacity Nanodegrees**\n• Robotic Software Engineer\n• Full Stack Web Developer\n\n**CMU Robotics Institute**\n• Summer Scholar Program Team Leader",
                        "Education highlights:\n\n📚 **B.S. Computer Engineering** - Pennsylvania State University\n🔬 **Minor**: Nanotechnology\n🌍 **Certificate**: International Engineering\n🤖 **Udacity**: Robotic Software Engineer Nanodegree\n🌐 **Udacity**: Full Stack Web Developer Nanodegree\n\nPlus team leadership at CMU Robotics Institute!"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "More details on George's education:\n\n**Penn State (Main Campus)**\nComputer Engineering gave him a strong foundation in both hardware and software, with coursework in digital systems, embedded programming, and computer architecture.\n\n**Nanotechnology Minor**\nUnique specialization in materials science at the nanoscale - great for understanding sensors and advanced manufacturing.\n\n**CMU Robotics Institute (2010-2012)**\nAs Team Leader for the Summer Scholar Program, George led projects building autonomous recharging stations for robots. This sparked his passion for robotics!\n\n**Continuous Learning**\nThe Udacity nanodegrees demonstrate his commitment to staying current - ROS, deep learning, TensorFlow, modern web development."
                    ]
                }
            ],
            contact: [
                {
                    level: 1,
                    responses: [
                        "Here's how to reach George! 📬\n\n📧 **Email**: fouliex@gmail.com\n💼 **LinkedIn**: linkedin.com/in/georgefouche\n💻 **GitHub**: github.com/georgeerol\n🌐 **Portfolio**: georgeerol.github.io\n📍 **Location**: San Francisco Bay Area\n\n✨ **Status**: Open to new opportunities!",
                        "Ready to connect with George?\n\n• **Email**: fouliex@gmail.com\n• **LinkedIn**: linkedin.com/in/georgefouche\n• **GitHub**: github.com/georgeerol\n\nHe's based in the SF Bay Area and currently open to new opportunities! 🚀",
                        "Let's get you connected! 🤝\n\n**Best ways to reach George:**\n📧 fouliex@gmail.com\n💼 LinkedIn: georgefouche\n💻 GitHub: georgeerol\n\n📍 San Francisco Bay Area\n✅ Open to opportunities!"
                    ]
                }
            ],
            location: [
                {
                    level: 1,
                    responses: [
                        "George is based in the **San Francisco Bay Area**, California! 📍\n\nHe's open to both local opportunities and remote work. The Bay Area has been home base for his work at gaming, AI, and tech companies.",
                        "📍 **San Francisco Bay Area**, California\n\nGeorge has been in the heart of tech innovation, working with startups and established companies alike. He's open to new opportunities in the area or remote!"
                    ]
                }
            ],
            gaming: [
                {
                    level: 1,
                    responses: [
                        "George's gaming industry experience is exciting! 🎮\n\nAt **Series Entertainment** (Nov 2024 - Oct 2025), he was:\n• Sr. Software Engineer\n• Sole Data Engineer for **Pixelberry Studio**\n• Working on the **Choices** mobile game\n\nHe built real-time and batch ETL pipelines processing **billions of game events**!",
                        "Gaming AI is George's most recent focus! 🕹️\n\n**Series Entertainment** hired him as Sr. Software Engineer to:\n• Architect data pipelines for Choices game analytics\n• Build Game State and CMS systems\n• Develop VIP Subscription features\n• Advise on monetization data strategy\n\nTech stack: Java Spring, Python, SQS, Redshift, DynamoDB"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Deep dive into George's gaming work:\n\n**Pixelberry Studio - Choices Game**\nChoices is a narrative mobile game with millions of players. George handled:\n\n📊 **Data Engineering**\n• Real-time ETL for billions of player events\n• Batch processing pipelines\n• Analytics for player behavior\n\n⚙️ **Backend Development**\n• Game State management system\n• Content Management System (CMS)\n• VIP Subscription service\n\n💰 **Business Impact**\n• Advised GaaS team on data-driven monetization\n• Built systems to understand player engagement\n\n**Tech Stack**\nJava Spring Boot, Python, AWS SQS, Redshift, DynamoDB, Cassandra"
                    ]
                }
            ],
            dataEngineering: [
                {
                    level: 1,
                    responses: [
                        "Data Engineering is one of George's core strengths! 📊\n\nHe's built pipelines at multiple companies:\n• **Series Entertainment**: Billions of game events\n• **Sphere Technology**: Cybersecurity data flows\n• **GE Power**: Industrial IoT analytics\n\nTools: Apache Spark, Kafka, Redshift, Cassandra, DynamoDB",
                        "George is a seasoned Data Engineer! ⚡\n\n**What he builds:**\n• Real-time streaming pipelines\n• Batch ETL processes\n• Data validation & quality systems\n• Analytics infrastructure\n\n**His toolkit:**\n• Apache Spark & PySpark\n• Kafka, AWS SQS\n• Redshift, Cassandra, PostgreSQL\n• AWS Glue, Lambda"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Let's explore George's data engineering work:\n\n**Architecture Patterns**\n• Event-driven microservices\n• Lambda architecture (batch + streaming)\n• Data lake + warehouse hybrids\n\n**Notable Projects**\n\n🎮 **Gaming Analytics** (Series)\n• Real-time player event processing\n• Billions of events daily\n• Player behavior analytics\n\n🚗 **IoT AWS Spark** (Personal)\n• Vehicle performance monitoring\n• GPS, weather, traffic integration\n• 35-mile SF to Dublin use case\n\n⚡ **E2E Spark Flow** (Personal)\n• Docker + Airflow + Kafka + Spark + Cassandra\n• Complete data lifecycle management"
                    ]
                }
            ],
            robotics: [
                {
                    level: 1,
                    responses: [
                        "Robotics is where George's passion started! 🤖\n\n**Background:**\n• CMU Robotics Institute Team Leader\n• Udacity Robotic Software Engineer Nanodegree\n\n**Projects:**\n🚁 Deep Learning Drone Simulator\n🔍 Search & Sample Rover\n🦾 6-DOF Robotic Arm Pick & Drop\n🗺️ SLAM Mapping Robot",
                        "George's robotics journey is impressive! 🦾\n\nIt started at **CMU Robotics Institute** where he led a team building autonomous recharging stations for robots.\n\nHis projects include:\n• Neural network-powered drones\n• Autonomous rovers with computer vision\n• Robotic arm manipulation\n• SLAM-based navigation\n\nAll using ROS, OpenCV, TensorFlow, and more!"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Deep dive into George's robotics work:\n\n**🚁 Deep Learning Drone Simulator**\nTrained a neural network for \"follow me\" feature. The drone tracks and follows a target person using real-time object detection. Applicable to autonomous vehicles and industrial robotics.\n\n**🔍 Search & Sample Rover**\nAutonomous rover that navigates terrains using camera-based perception. Uses computer vision for path planning and sample collection - inspired by Mars rovers!\n\n**🦾 Robotic Arm Pick & Drop**\n6-DOF robotic arm control using forward and inverse kinematics. Built with ROS for precise manipulation tasks.\n\n**🗺️ SLAM Mapping**\nCustom robot that maps environments while localizing itself. Uses sensor fusion and probabilistic algorithms.\n\n**Tech Stack**: ROS, Gazebo, TensorFlow, OpenCV, Python, C++"
                    ]
                }
            ],
            ai: [
                {
                    level: 1,
                    responses: [
                        "George has deep AI/ML experience! 🧠\n\n**Startup Experience:**\n• Series Entertainment - Gaming AI\n• CalypsoAI - Government AI Trust & Safety\n\n**Projects:**\n• Deep learning for drone tracking\n• Behavioral cloning for self-driving\n• Computer vision with OpenCV\n• Neural networks with TensorFlow",
                        "AI & Machine Learning highlights:\n\n🎮 **Gaming AI** at Series Entertainment\n🔒 **AI Safety** at CalypsoAI (government clients)\n🚁 **Computer Vision** for drone following\n🚗 **Behavioral Cloning** for autonomous driving\n🦾 **Object Recognition** for robotic manipulation\n\nTools: TensorFlow, OpenCV, deep learning, CNNs"
                    ]
                }
            ],
            recent: [
                {
                    level: 1,
                    responses: [
                        "George's most recent role was at **Series Entertainment**! 🎮\n\n**Position**: Sr. Software Engineer (Nov 2024 - Oct 2025)\n**Focus**: Backend & Data Engineering for Pixelberry Studio\n**Product**: Choices mobile game\n\n**Key work:**\n• ETL pipelines for billions of events\n• Game State & CMS systems\n• VIP Subscription features\n• Data strategy consulting\n\nHe's now open to new opportunities!",
                        "What George has been up to recently:\n\n**2024-2025**: Series Entertainment (Gaming AI)\n• Sr. Software Engineer\n• Sole Data Engineer for Pixelberry Studio\n• Built systems for Choices game analytics\n\n**2022-2024**: Sphere Technology (Cybersecurity)\n• Lead architect for security solutions\n\n**Now**: Open to exciting new opportunities! 🚀"
                    ]
                }
            ],
            companies: [
                {
                    level: 1,
                    responses: [
                        "George has worked across diverse companies:\n\n🎮 **Series Entertainment** (2024-2025)\nGaming AI Startup - Pixelberry Studio\n\n🔒 **Sphere Technology Solutions** (2022-2024)\nCybersecurity\n\n🤖 **CalypsoAI** (2020-2022)\nAI Startup - Government AI Safety\n\n🏭 **General Electric** (2013-2020)\nFortune 500 - Multiple divisions",
                        "George's employer history:\n\n**Startups**: Series Entertainment, CalypsoAI\n**Cybersecurity**: Sphere Technology Solutions\n**Enterprise**: General Electric (7 years!)\n\nHe's experienced both the fast-paced startup world and structured enterprise environments."
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Detailed company breakdown:\n\n**🎮 Series Entertainment**\nGaming AI startup. George was sole Data Engineer for Pixelberry Studio (makers of Choices). Built data infrastructure processing billions of player events.\n\n**🔒 Sphere Technology Solutions**\nCybersecurity company. George served as lead architect, designing secure systems and data pipelines.\n\n**🤖 CalypsoAI**\nAI startup focused on government clients. As the sole US-based engineer, George built AI trust and safety systems for government applications.\n\n**🏭 General Electric** (2013-2020)\nSpent 7 years progressing through:\n• GE Aviation - Data Engineering\n• GE Digital - Mobile development\n• GE Power - IoT & Industrial analytics\n\nThis breadth gives George unique perspective across industries!"
                    ]
                }
            ],
            clientWork: [
                {
                    level: 1,
                    responses: [
                        "George has built production apps for real businesses! 💼\n\n**🍕 SLIVER Pizzeria**\nFull-stack restaurant platform for Bay Area pizzeria chain (6 locations)\n• Next.js 14 + FastAPI + PostgreSQL\n• Admin dashboard, Pizza of the Day feature\n• Live on Railway\n\n**🍷 Vintage Wine (Barnyard)**\nMobile wine club app\n• React Native + Flask\n• AI-powered recommendations\n• Stripe subscriptions",
                        "Client work showcase:\n\n🍕 **SLIVER Pizzeria** - Bay Area vegetarian pizzeria with 6 locations. George built their complete web platform with admin dashboard.\n\n🍷 **Vintage Wine** - Mobile app for Barnyard Wine Bar's Epic Society wine club. Features AI recommendations and Stripe payments.\n\nBoth are production apps serving real customers!"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "Deep dive into client projects:\n\n**🍕 SLIVER Pizzeria**\n*\"An experiment in culinary happiness\"*\n\n**Tech Stack:**\n• Frontend: Next.js 14, TypeScript, Tailwind CSS\n• Backend: FastAPI, SQLAlchemy, PostgreSQL\n• Auth: JWT-based authentication\n• Media: Cloudinary for images\n• Deployment: Docker + Railway\n\n**Features:**\n• Public website with 6 locations\n• Pizza of the Day management\n• Admin dashboard for staff\n• Delivery partner integration\n\n**Live:** sliverpizzeria-web-production.up.railway.app\n\n---\n\n**🍷 Vintage Wine / Barnyard**\n\n**Tech Stack:**\n• Mobile: React Native (Expo), TypeScript\n• Backend: Flask, SQLAlchemy, PostgreSQL\n• Payments: Stripe API\n• AI: Custom recommendation engine\n\n**Features:**\n• Wine discovery with tasting notes\n• Shopping cart & favorites\n• Epic Society wine club (Corks Crew & Curator tiers)\n• AI-powered wine suggestions\n• Member dashboard with shipment tracking"
                    ]
                }
            ],
            greeting: [
                {
                    level: 1,
                    responses: [
                        "Hey there! 👋 Great to meet you! I'm George's AI assistant. I can tell you all about his experience, skills, projects, or how to get in touch. What would you like to know?",
                        "Hello! 😊 Welcome to George's portfolio! I'm here to help you learn about his background, technical skills, or impressive projects. What interests you?",
                        "Hi! 🤖 Thanks for stopping by! I can share info about George's 10+ years of experience in Backend, Data Engineering, and Robotics. What would you like to explore?"
                    ]
                }
            ],
            thanks: [
                {
                    level: 1,
                    responses: [
                        "You're welcome! 😊 Happy to help! Is there anything else you'd like to know about George?",
                        "Glad I could help! 🙌 Feel free to ask if you have more questions. George is always excited to connect with people!",
                        "My pleasure! 🤗 Let me know if you want to dive deeper into any topic or if you're ready to reach out to George!"
                    ]
                }
            ],
            who: [
                {
                    level: 1,
                    responses: [
                        "George Erol Fouché is a **Senior Software Engineer with 10+ years** of experience! 👨🏿‍💻\n\nHe specializes in:\n• Backend Development (Java, Python)\n• Data Engineering (Spark, Kafka, AWS)\n• Robotics & AI (ROS, TensorFlow, OpenCV)\n\nMost recently, he was at Series Entertainment (Gaming AI) as Sr. Software Engineer and sole Data Engineer for Pixelberry Studio.\n\nFun fact: He's trilingual! 🌍",
                        "Let me introduce George! 🌟\n\n**George Erol Fouché** is a versatile software engineer based in the San Francisco Bay Area. With over a decade of experience, he's worked across:\n\n• Gaming AI startups\n• Cybersecurity companies\n• AI/ML startups\n• Fortune 500 enterprises (GE)\n\nHe holds a B.S. in Computer Engineering from Penn State and has led robotics projects at CMU.\n\nAsk me about his inspiring personal journey! 🇭🇹"
                    ]
                }
            ],
            personalStory: [
                {
                    level: 1,
                    responses: [
                        "George has an inspiring story! 🌟\n\nHe was **born in New York** and **raised in Haiti**. At age 16, he returned to the United States as an ESL student. Coming from Haiti to California felt like *\"making it to the NBA — but in software engineering.\"* 🏀\n\nThat experience shaped his **ambition, discipline, and work ethic** that drives his success today.\n\nOh, and he's **trilingual**: English, French, and Haitian Creole! 🌍",
                        "Here's George's journey! 🇭🇹➡️🇺🇸\n\n**Born**: New York\n**Raised**: Haiti\n**Returned to US**: Age 16 as an ESL student\n\nHe describes coming from Haiti to California as *\"making it to the NBA of software engineering.\"* That drive and determination helped him become a Senior Software Engineer with 10+ years of experience.\n\n**Languages**: English 🇺🇸 | French 🇫🇷 | Haitian Creole 🇭🇹"
                    ]
                },
                {
                    level: 2,
                    responses: [
                        "George's story is truly remarkable! 🌟\n\nImagine: A young man from Haiti arriving in California at 16, learning English as a second language, and going on to:\n\n📚 Earn a Computer Engineering degree from Penn State\n🤖 Lead robotics projects at CMU\n🎮 Work at gaming, AI, and cybersecurity startups\n🏭 Spend 7 years at GE\n💼 Become a Senior Software Engineer with 10+ years experience\n\nHis journey proves that with **ambition, discipline, and hard work**, anything is possible.\n\nAnd yes — he speaks **three languages** fluently: English, French, and Haitian Creole! 🌍"
                    ]
                }
            ],
            languages: [
                {
                    level: 1,
                    responses: [
                        "George is **trilingual**! 🌍\n\n🇺🇸 **English** - Fluent (professional)\n🇫🇷 **French** - Fluent\n🇭🇹 **Haitian Creole** - Native\n\nHe learned English after moving from Haiti to California at age 16. Now he's fully fluent in all three languages!",
                        "Oui, il parle français! 🇫🇷\n\nGeorge speaks **three languages**:\n• English (fluent)\n• French (fluent)\n• Haitian Creole (native)\n\nGrowing up in Haiti and later moving to the US gave him this multilingual advantage. Great for working with international teams!"
                    ]
                }
            ],
            easterEgg: [
                {
                    level: 1,
                    responses: [
                        "🤖 *beep boop* You found an Easter egg!\n\nHere's a software engineering joke:\n\nWhy do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛\n\n...I'll see myself out. 😄",
                        "Ah, curious one! 🔍\n\nI was built by George himself! He coded me to help visitors learn about his work. I'm powered by JavaScript and a lot of keyword matching... and maybe a little ✨ magic ✨.\n\nNo LLMs were harmed in my creation. 🤖",
                        "🍕 George's favorite pizza?\n\nWell, he did build the SLIVER Pizzeria website, so I'd guess he's a fan of their vegetarian sourdough crust pizza!\n\nBut honestly, you'd have to ask him directly. Want his contact info?",
                        "The secret to George's success? 🤫\n\n1. Born in NY, raised in Haiti\n2. Came to California at 16 as an ESL student\n3. Treated it like \"making it to the NBA\"\n4. Never stopped learning\n5. 10+ years of building cool stuff\n\nNow THAT'S a power-up! 🎮",
                        "Am I real? 🤔\n\nI'm as real as the JavaScript that runs me! I'm George's AI assistant, here to tell you about his awesome career.\n\nBut no, I can't pass the Turing test... yet. 😉\n\nWhat would you like to know about George?",
                        "42! 🌌\n\nAh, I see you're a person of culture! But the real answer to life, the universe, and everything is probably... learning to code. 💻\n\nOr maybe it's just 42. Douglas Adams knew what was up.\n\nAnyway, what can I tell you about George?"
                    ]
                }
            ],
            default: [
                {
                    level: 1,
                    responses: [
                        "Great question! I can tell you about George's:\n\n💼 **Experience** - 10+ years across gaming, AI, cybersecurity\n🛠️ **Skills** - Java, Python, Spark, AWS, TensorFlow, ROS\n🚀 **Projects** - Client work, robotics, data pipelines\n🎓 **Education** - Penn State, Udacity, CMU\n📧 **Contact** - How to reach him\n\nWhat interests you most?",
                        "I'm here to help! Here's what I know about George:\n\n• His professional **experience** and career journey\n• Technical **skills** and tools he uses\n• **Projects** he's built (clients, robotics, data)\n• **Education** and certifications\n• **Contact** information\n\nJust ask about any of these!",
                        "Hmm, I'm not sure I understood that. 🤔 Try asking about:\n\n• \"What's George's experience?\"\n• \"What skills does he have?\"\n• \"Tell me about his projects\"\n• \"How can I contact George?\"\n\nOr use the quick action buttons below!"
                    ]
                }
            ]
        };
    }

    getRandomResponse(variations) {
        return variations[Math.floor(Math.random() * variations.length)];
    }

    // ==========================================
    // CONVERSATION MEMORY & FOLLOW-UPS
    // ==========================================

    updateConversationMemory(topic, userMessage) {
        this.conversationHistory.push({
            topic,
            message: userMessage,
            timestamp: Date.now()
        });
        
        if (this.conversationHistory.length > 10) {
            this.conversationHistory.shift();
        }
        
        if (topic && topic !== 'followUp' && topic !== 'greeting' && topic !== 'thanks') {
            this.topicDepth[topic] = (this.topicDepth[topic] || 0) + 1;
            this.lastTopic = topic;
        }
    }

    isFollowUpRequest(message) {
        const followUpPatterns = [
            'more', 'detail', 'details', 'elaborate', 'explain', 'tell me more',
            'go on', 'continue', 'expand', 'deeper', 'specifically', 'example',
            'examples', 'like what', 'such as', 'instance', 'how so', 'what about',
            'and', 'also', 'yes', 'yeah', 'sure', 'okay', 'ok', 'please'
        ];
        
        const msg = message.toLowerCase().trim();
        
        if (msg.length < 20) {
            for (const pattern of followUpPatterns) {
                if (msg.includes(pattern)) {
                    return true;
                }
            }
        }
        
        return false;
    }

    getFollowUpResponse() {
        if (!this.lastTopic) {
            return this.getRandomResponse(this.getResponseVariations().default[0].responses);
        }
        
        const variations = this.getResponseVariations()[this.lastTopic];
        if (!variations) {
            return this.getRandomResponse(this.getResponseVariations().default[0].responses);
        }
        
        const depth = this.topicDepth[this.lastTopic] || 1;
        const levelIndex = Math.min(depth, variations.length) - 1;
        const levelVariations = variations[levelIndex];
        
        if (levelVariations && levelVariations.responses) {
            this.topicDepth[this.lastTopic] = depth + 1;
            return this.getRandomResponse(levelVariations.responses);
        }
        
        return `I've shared the main details about ${this.lastTopic}! Would you like to explore a different topic? I can tell you about George's experience, skills, projects, or how to contact him.`;
    }

    // ==========================================
    // MAIN RESPONSE LOGIC
    // ==========================================

    getResponse(message) {
        const msg = message.toLowerCase().trim();
        
        if (this.isFollowUpRequest(message) && this.lastTopic) {
            this.updateConversationMemory('followUp', message);
            return { text: this.getFollowUpResponse(), topic: this.lastTopic };
        }
        
        const topic = this.detectTopic(message);
        
        if (topic) {
            this.updateConversationMemory(topic, message);
            const variations = this.getResponseVariations()[topic];
            
            if (variations && variations.length > 0) {
                const depth = this.topicDepth[topic] || 0;
                const levelIndex = Math.min(depth, variations.length - 1);
                return { 
                    text: this.getRandomResponse(variations[levelIndex].responses),
                    topic: topic
                };
            }
        }
        
        this.updateConversationMemory(null, message);
        return { 
            text: this.getRandomResponse(this.getResponseVariations().default[0].responses),
            topic: 'default'
        };
    }

    // ==========================================
    // WIDGET CREATION
    // ==========================================

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
                            <span class="status-online">Online</span>
                        </div>
                    </div>
                    <div class="ai-header-actions">
                        <button class="ai-clear-btn" id="aiClearBtn" title="Clear chat">🗑️</button>
                        <button class="ai-close-btn" id="aiCloseBtn">✕</button>
                    </div>
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
                    <input type="text" id="aiChatInput" placeholder="Ask me anything about George..." />
                    <button id="aiSendBtn">➤</button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================

    setupEventListeners() {
        const button = document.getElementById('aiAssistantButton');
        const closeBtn = document.getElementById('aiCloseBtn');
        const clearBtn = document.getElementById('aiClearBtn');
        const sendBtn = document.getElementById('aiSendBtn');
        const input = document.getElementById('aiChatInput');
        const quickActions = document.querySelectorAll('.quick-action-btn');

        button.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        clearBtn.addEventListener('click', () => this.clearChat());
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

    // ==========================================
    // PHASE 6: CLEAR CHAT
    // ==========================================

    clearChat() {
        const messagesContainer = document.getElementById('aiChatMessages');
        messagesContainer.innerHTML = '';
        
        // Reset state
        this.messages = [];
        this.conversationHistory = [];
        this.lastTopic = null;
        this.topicDepth = {};
        
        // Add welcome message again
        this.addWelcomeMessage();
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatWindow = document.getElementById('aiChatWindow');
        const button = document.getElementById('aiAssistantButton');

        if (this.isOpen) {
            chatWindow.classList.add('open');
            button.classList.add('hidden');
            this.trackEvent('chatbot_opened');

            // Remove proactive tooltip if exists
            const tooltip = document.querySelector('.ai-proactive-tooltip');
            if (tooltip) tooltip.remove();
        } else {
            chatWindow.classList.remove('open');
            button.classList.remove('hidden');
            this.trackEvent('chatbot_closed');
        }
    }

    addWelcomeMessage() {
        const timeGreeting = this.getTimeBasedGreeting();
        
        setTimeout(() => {
            const welcomeMessage = `${timeGreeting.greeting}! ${timeGreeting.emoji} I'm George's AI assistant. I can tell you about his experience, skills, projects, or how to get in touch. What would you like to know?`;
            this.addMessage(welcomeMessage, 'bot', 'greeting');
        }, 500);
    }

    // ==========================================
    // PHASE 3: TYPEWRITER EFFECT
    // ==========================================

    addMessage(text, sender = 'bot', topic = null) {
        const messagesContainer = document.getElementById('aiChatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        
        if (sender === 'bot') {
            // Typewriter effect for bot messages
            this.typewriterEffect(messageContent, text, () => {
                // After typing is complete, show suggestions
                if (topic) {
                    this.showSuggestions(topic);
                }
            });
        } else {
            // User messages appear instantly
            messageContent.innerHTML = this.formatMessage(text);
        }
        
        // Scroll to show the new message
        setTimeout(() => {
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        this.messages.push({ text, sender, timestamp: Date.now() });
    }

    formatMessage(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    typewriterEffect(element, text, onComplete) {
        this.isTyping = true;
        const formattedText = this.formatMessage(text);
        
        // For very long messages, use faster typing
        const messageLength = text.length;
        let delay = 15; // Base delay per character
        
        if (messageLength > 500) {
            delay = 5;
        } else if (messageLength > 300) {
            delay = 10;
        }
        
        let index = 0;
        let displayText = '';
        let inTag = false;
        let tagBuffer = '';
        
        const type = () => {
            if (index < formattedText.length) {
                const char = formattedText[index];
                
                // Handle HTML tags
                if (char === '<') {
                    inTag = true;
                    tagBuffer = char;
                } else if (char === '>' && inTag) {
                    inTag = false;
                    tagBuffer += char;
                    displayText += tagBuffer;
                    tagBuffer = '';
                    element.innerHTML = displayText;
                } else if (inTag) {
                    tagBuffer += char;
                } else {
                    displayText += char;
                    element.innerHTML = displayText;
                }
                
                index++;
                
                // Variable speed - pause at punctuation
                let currentDelay = delay;
                if (['.', '!', '?'].includes(char)) {
                    currentDelay = delay * 8;
                } else if ([',', ':'].includes(char)) {
                    currentDelay = delay * 3;
                }
                
                setTimeout(type, currentDelay);
            } else {
                this.isTyping = false;
                if (onComplete) onComplete();
            }
        };
        
        type();
    }

    // ==========================================
    // PHASE 1: SUGGESTED QUESTIONS (Clickable)
    // ==========================================

    showSuggestions(topic) {
        const messagesContainer = document.getElementById('aiChatMessages');
        const suggestions = this.getSuggestedQuestions(topic);
        
        // Remove any existing suggestions
        const existingSuggestions = messagesContainer.querySelector('.ai-suggestions');
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
        
        // Create suggestions container
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'ai-suggestions';
        suggestionsDiv.innerHTML = `
            <p class="suggestions-label">You might also ask:</p>
            <div class="suggestions-buttons">
                ${suggestions.map(s => `<button class="suggestion-btn">${s}</button>`).join('')}
            </div>
        `;
        
        messagesContainer.appendChild(suggestionsDiv);
        
        // Add click handlers
        suggestionsDiv.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.textContent;
                this.trackSuggestionClick(question);
                suggestionsDiv.remove();
                this.addMessage(question, 'user');
                this.showTypingIndicator();

                setTimeout(() => {
                    this.hideTypingIndicator();
                    const response = this.getResponse(question);
                    this.addMessage(response.text, 'bot', response.topic);
                }, 500);
            });
        });
        
        // Scroll to show suggestions
        setTimeout(() => {
            suggestionsDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('aiChatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message bot-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <span class="typing-dot">.</span>
                <span class="typing-dot">.</span>
                <span class="typing-dot">.</span>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        typingDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Animate the header avatar while thinking
        const avatar = document.querySelector('.ai-avatar-icon');
        if (avatar) {
            avatar.classList.add('thinking');
        }
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
        
        // Stop avatar animation
        const avatar = document.querySelector('.ai-avatar-icon');
        if (avatar) {
            avatar.classList.remove('thinking');
        }
    }

    handleUserMessage() {
        if (this.isTyping) return; // Prevent sending while typing
        
        const input = document.getElementById('aiChatInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Remove existing suggestions
        const existingSuggestions = document.querySelector('.ai-suggestions');
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
        
        this.addMessage(message, 'user');
        input.value = '';
        
        // Check for inappropriate content
        const contentCheck = this.detectInappropriateContent(message);
        if (contentCheck.isInappropriate) {
            this.triggerAngryState();
            
            setTimeout(() => {
                const response = this.getInappropriateResponse(contentCheck.reason);
                this.addMessage(response, 'bot');
            }, 500);
            return;
        }
        
        this.showTypingIndicator();
        
        const thinkTime = 400 + Math.random() * 400;
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.getResponse(message);
            this.trackQuestion(message, response.topic);
            this.addMessage(response.text, 'bot', response.topic);
        }, thinkTime);
    }

    handleQuickAction(action) {
        if (this.isTyping) return;
        
        const actionMessages = {
            experience: "Tell me about George's experience",
            skills: "What skills does George have?",
            projects: "Show me George's projects",
            contact: "How can I contact George?"
        };
        
        // Remove existing suggestions
        const existingSuggestions = document.querySelector('.ai-suggestions');
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
        
        const message = actionMessages[action] || action;
        this.addMessage(message, 'user');
        this.trackQuickAction(action);
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.getResponse(message);
            this.addMessage(response.text, 'bot', response.topic);
        }, 500);
    }
}

// Initialize AI Assistant when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIAssistant();
});
