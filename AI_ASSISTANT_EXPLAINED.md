# 🤖 How the AI Assistant Works

A visual guide to understanding the portfolio chatbot - no fancy jargon, just clear explanations!

---

## 🎯 What Is It?

The AI assistant is a **keyword-matching chatbot** (not a real AI like ChatGPT). It looks for words in your message and picks a pre-written response. Think of it like a smart FAQ that understands different ways of asking the same question.

---

## 🏗️ The Big Picture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         YOUR PORTFOLIO PAGE                          │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                       Page Content                           │    │
│  │   (About, Projects, Skills, Contact sections...)            │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│                                               ┌────────────────┐    │
│                                               │  🤖 Chat       │    │
│                                               │  Button        │    │
│                                               └───────┬────────┘    │
│                                                       │             │
│                                                       ▼             │
│                                               ┌────────────────┐    │
│                                               │  💬 Chat       │    │
│                                               │  Window        │    │
│                                               │  Opens Here!   │    │
│                                               └────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 💬 How a Conversation Flows

```
┌─────────────────────────────────────────────────────────────────────┐
│                     MESSAGE FLOW (Step by Step)                      │
└─────────────────────────────────────────────────────────────────────┘

    User Types Message
           │
           ▼
    ┌──────────────┐
    │ 1. SAFETY    │     "Is this appropriate?"
    │    CHECK     │──────────────────────────────┐
    └──────┬───────┘                              │
           │                                      ▼
           │ ✅ Safe                    ❌ Blocked Word
           │                                      │
           ▼                                      ▼
    ┌──────────────┐                    ┌──────────────┐
    │ 2. DETECT    │                    │ SHOW POLITE  │
    │    TOPIC     │                    │ "LET'S KEEP  │
    └──────┬───────┘                    │ IT NICE" MSG │
           │                            └──────────────┘
           ▼
    ┌──────────────┐
    │ 3. PICK      │     Matches keywords to topics
    │    RESPONSE  │     (experience, skills, etc.)
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ 4. TYPING    │     ⌨️ Shows "..." animation
    │    EFFECT    │     Types out letter by letter
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ 5. SUGGEST   │     "You might also ask..."
    │    FOLLOW-UP │     Shows clickable buttons
    └──────────────┘
```

---

## 🔑 The Keyword Magic

The bot looks for specific words in your message. Here's how it maps what you say to topics:

| If You Say...                     | Bot Thinks...    | Topic       |
|-----------------------------------|------------------|-------------|
| "experience", "background", "job" | "They want work history!" | `experience` |
| "skills", "tech", "programming"   | "They want abilities!" | `skills` |
| "projects", "built", "portfolio"  | "Show them my work!" | `projects` |
| "contact", "email", "hire"        | "They want to connect!" | `contact` |
| "hello", "hi", "hey"              | "A friendly greeting!" | `greeting` |
| "robotics", "drone", "ROS"        | "Robotics projects!" | `robotics` |
| "data", "spark", "pipeline"       | "Data engineering!" | `dataEngineering` |
| "gaming", "series", "pixelberry"  | "Gaming work!" | `gaming` |

### Example Keyword Match:

```
┌─────────────────────────────────────────────────────────────────────┐
│  User: "What's George's work experience?"                           │
│                           │                                         │
│                           ▼                                         │
│          ┌─────────────────────────────────────┐                   │
│          │  Scanning for keywords...           │                   │
│          │  ✓ Found "experience" → experience  │                   │
│          └─────────────────────────────────────┘                   │
│                           │                                         │
│                           ▼                                         │
│          Bot picks a response about EXPERIENCE                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📚 Response Depth System

The bot gets smarter the more you ask! It tracks how deep you've gone into a topic.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DEPTH LEVELS (Like Peeling an Onion)             │
└─────────────────────────────────────────────────────────────────────┘

          First Question             Follow-Up Question
               │                            │
               ▼                            ▼
        ┌─────────────┐              ┌─────────────┐
        │  LEVEL 1    │              │  LEVEL 2    │
        │  Overview   │   ──────▶    │  Details    │
        │  "Quick     │              │  "Deep      │
        │   Summary"  │              │   Dive"     │
        └─────────────┘              └─────────────┘
```

### Real Example:

| Question                         | Level | Response Type                       |
|----------------------------------|-------|-------------------------------------|
| "Tell me about experience"       | 1     | Quick summary: "10+ years in..."    |
| "Tell me more"                   | 2     | Detailed breakdown of each company  |
| "What about GE specifically?"    | 2     | Full GE career progression          |

---

## 🧠 Memory System

The bot remembers what you talked about!

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CONVERSATION MEMORY                           │
└─────────────────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────────┐
  │                   Memory Storage (Last 10 Messages)          │
  │                                                              │
  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
  │   │ Message 1│  │ Message 2│  │ Message 3│  │   ...    │   │
  │   │ Topic:   │  │ Topic:   │  │ Topic:   │  │          │   │
  │   │ skills   │  │ projects │  │ contact  │  │          │   │
  │   └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
  └─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  lastTopic:      │
                    │  "contact"       │
                    │                  │
                    │  topicDepth:     │
                    │  skills = 2      │
                    │  projects = 1    │
                    └──────────────────┘
```

### Why Memory Matters:

When you say "tell me more" or "go on", the bot remembers the **last topic** and gives you deeper info!

---

## ⏰ Time-Based Greetings

The bot knows what time it is!

```
┌─────────────────────────────────────────────────────────────────────┐
│                         GREETING BY TIME                             │
└─────────────────────────────────────────────────────────────────────┘

   5 AM ────────── 12 PM ────────── 5 PM ────────── 9 PM ────────── 5 AM
      │              │               │               │
      ▼              ▼               ▼               ▼
   ☀️ Good       🌤️ Good         🌆 Good         🌙 Hey there,
   Morning!      Afternoon!       Evening!       Night Owl!
```

---

## 👁️ Page Awareness

The bot watches which section you're viewing!

```
┌─────────────────────────────────────────────────────────────────────┐
│                        SECTION OBSERVER                              │
└─────────────────────────────────────────────────────────────────────┘

   When you scroll to...          Bot knows to suggest...
   
   ┌──────────────┐              ┌────────────────────────────┐
   │   About      │  ──────────▶ │ "Want to know his story?"  │
   └──────────────┘              └────────────────────────────┘
   
   ┌──────────────┐              ┌────────────────────────────┐
   │  Robotics    │  ──────────▶ │ "The drone project is      │
   │  Section     │              │  impressive!"              │
   └──────────────┘              └────────────────────────────┘
   
   ┌──────────────┐              ┌────────────────────────────┐
   │   Contact    │  ──────────▶ │ "Ready to connect with     │
   │   Section    │              │  George?"                  │
   └──────────────┘              └────────────────────────────┘
```

---

## 🎁 Proactive Prompts

After 30 seconds of idle time, the bot says hi!

```
┌─────────────────────────────────────────────────────────────────────┐
│                      IDLE DETECTION                                  │
└─────────────────────────────────────────────────────────────────────┘

   ┌─────────────┐     30 seconds     ┌─────────────────────────┐
   │ User Idle   │ ─────────────────▶ │  💬 "Have questions     │
   │ (no clicks) │                    │  about George?"         │
   └─────────────┘                    │                         │
                                      │  [Chat with me!] btn    │
                                      └─────────────────────────┘
```

---

## 🛡️ Safety Features

The bot has a filter for bad behavior!

```
┌─────────────────────────────────────────────────────────────────────┐
│                      CONTENT MODERATION                              │
└─────────────────────────────────────────────────────────────────────┘

   Message comes in
         │
         ▼
   ┌─────────────────────────────────────────────┐
   │              SAFETY CHECKS                   │
   │                                              │
   │  1. Bad words?        ──▶ 🚫 Block          │
   │  2. ALL CAPS YELLING? ──▶ 🚫 Block          │
   │  3. Spammmmmmmm?      ──▶ 🚫 Block          │
   └─────────────────────────────────────────────┘
         │                          │
         │ ✅ Passed                │ ❌ Failed
         ▼                          ▼
   Normal response            Polite redirect
                              + 😤 angry animation
```

---

## 🎨 Visual Effects

| Effect            | What It Does                                    |
|-------------------|-------------------------------------------------|
| **Typewriter**    | Bot "types" messages letter by letter           |
| **Typing Dots**   | Shows "..." while "thinking"                    |
| **Pulse Ring**    | Button pulses to grab attention                 |
| **Message Slide** | Messages slide up when appearing                |
| **Angry Shake**   | Bot avatar shakes if you're inappropriate       |

---

## 🔘 Quick Actions

Four buttons for instant access:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        QUICK ACTION BUTTONS                          │
└─────────────────────────────────────────────────────────────────────┘

   ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
   │ 💼         │  │ 🛠️         │  │ 🚀         │  │ 📧         │
   │ Experience │  │ Skills     │  │ Projects   │  │ Contact    │
   └────────────┘  └────────────┘  └────────────┘  └────────────┘
        │               │               │               │
        ▼               ▼               ▼               ▼
   "Tell me      "What skills   "Show me        "How can I
   about         does George    George's        contact
   experience"   have?"         projects"       George?"
```

---

## 🗂️ File Structure

```
assets/
├── js/
│   └── ai-assistant.js     ← 🧠 The brain (all the logic)
│
└── css/
    └── ai-assistant.css    ← 💅 The looks (styling)
```

---

## 🎯 Quick Reference: Topics & Keywords

| Topic           | Sample Keywords                                           |
|-----------------|----------------------------------------------------------|
| `experience`    | experience, background, job, career, resume, worked       |
| `skills`        | skills, tech, programming, java, python, cloud, aws       |
| `projects`      | projects, portfolio, built, created, apps                 |
| `education`     | education, degree, university, udacity, cmu               |
| `contact`       | contact, email, hire, linkedin, github                    |
| `location`      | location, where, bay area, california                     |
| `gaming`        | series, gaming, pixelberry, choices                       |
| `dataEngineering` | data, etl, spark, kafka, pipeline                       |
| `robotics`      | robot, drone, rover, ros, slam                            |
| `ai`            | ai, machine learning, tensorflow, opencv                  |
| `clientWork`    | sliver, vintage, pizzeria, wine, client                   |
| `personalStory` | story, journey, haiti, origin, born                       |
| `languages`     | language, french, creole, bilingual                       |
| `easterEgg`     | joke, who built you, secret, surprise                     |

---

## 🎪 Easter Eggs!

Try typing these for fun surprises:
- "Tell me a joke"
- "Who built you?"
- "What's the meaning of life?"
- "Are you real?"

---

## 📊 Summary: How It All Connects

```
┌─────────────────────────────────────────────────────────────────────┐
│                          COMPLETE SYSTEM                             │
└─────────────────────────────────────────────────────────────────────┘

     USER                    AI ASSISTANT                 PORTFOLIO
       │                          │                           │
       │   types message          │                           │
       │ ─────────────────────▶   │                           │
       │                          │                           │
       │                     ┌────┴────┐                      │
       │                     │ PROCESS │                      │
       │                     │ ┌─────┐ │                      │
       │                     │ │Safe?│ │                      │
       │                     │ └──┬──┘ │                      │
       │                     │    ▼    │                      │
       │                     │ ┌─────┐ │                      │
       │                     │ │Topic│ │                      │
       │                     │ └──┬──┘ │                      │
       │                     │    ▼    │                      │
       │                     │ ┌─────┐ │   watches section    │
       │                     │ │Pick │ │◀─────────────────────│
       │                     │ │Reply│ │                      │
       │                     │ └─────┘ │                      │
       │                     └────┬────┘                      │
       │                          │                           │
       │   displays response      │                           │
       │ ◀────────────────────────│                           │
       │                          │                           │
       │   suggests follow-ups    │                           │
       │ ◀────────────────────────│                           │
       │                          │                           │
```

---

## 🎓 Key Takeaways

1. **Not a "real" AI** - It's smart pattern matching, not ChatGPT
2. **Keyword-based** - Looks for specific words to understand intent
3. **Multi-level responses** - Asks follow-up? Gets deeper info
4. **Memory** - Remembers what you talked about
5. **Context-aware** - Knows what section you're viewing
6. **Safe & friendly** - Has moderation for inappropriate input

---

*Built with ❤️ by George Fouché*
