# 🗳️ Election Process Assistant

An interactive, AI-powered civic education web application that helps citizens understand the election process, timelines, and key voting steps in an engaging, accessible, and easy-to-follow way.

> **PromptWars Virtual – Challenge 2 Submission**

**🌐 Live Application:** [https://election-process-assistant-758659113111.europe-west1.run.app/](https://election-process-assistant-758659113111.europe-west1.run.app/)

---

## 🎯 Problem Statement Alignment

**Challenge 2** asks for an assistant that helps users understand the election process, timelines, and steps in an interactive and easy-to-follow way.

This application directly addresses that by:

- Providing a **7-stage interactive election timeline** (Registration → Candidate Filing → Primaries → Campaigning → Election Day → Vote Counting → Results & Transition)
- Delivering a **conversational AI chatbot** powered by Google Gemini (gemini-1.5-flash) that answers civic questions in plain, accessible language
- Presenting **contextual stage summaries** when users navigate the timeline
- Maintaining a completely **nonpartisan, educational tone** throughout

---

## ✨ Features

| Feature | Description |
|---|---|
| 🗺️ Interactive Timeline | 7-stage election process navigator with live contextual summaries |
| 🤖 AI Chatbot | Gemini-powered Q&A with persistent conversation history |
| 💊 Quick Topics | One-tap suggested questions covering key electoral concepts |
| ♿ Accessible | ARIA roles, keyboard navigation, screen-reader labels, semantic HTML |
| 🌙 Dark Mode | Full automatic dark/light mode support via CSS variables |
| 📱 Responsive | Mobile-first layout, works on all screen sizes |
| 🔒 Nonpartisan | System prompt enforces balanced, nonpartisan civic education |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| Backend | Node.js, Express (API Proxy) |
| AI Model | Google Gemini (gemini-1.5-flash) via REST API |
| Testing | Jest, Supertest (Test Coverage) |
| Fonts | Google Fonts – Playfair Display + DM Sans |
| Deployment | Google Cloud Run (containerized via Docker) |
| CI/CD | GitHub → Cloud Run (via Continuous Deployment) |

---

## 🚀 Getting Started

### Local Development

```bash
# Clone the repo
git clone https://github.com/sharathstash21-design/Election-Process-Assistant.git
cd election-process-assistant

# Install dependencies
npm install

# Run tests
npm test

# Serve locally
npm start

# Open in browser
open http://localhost:8080
```

> **Note:** The app features a secure Node.js backend. You can provide your Gemini API key in a `.env` file (`GEMINI_API_KEY=...`) or directly via the UI prompt.

### Docker / Cloud Run

```bash
# Build the container
docker build -t election-assistant .

# Run locally
docker run -p 8080:8080 election-assistant

# Deploy to Cloud Run
gcloud run deploy election-assistant \
  --image gcr.io/YOUR_PROJECT/election-assistant \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## 📁 Project Structure

```
election-process-assistant/
├── public/
│   └── index.html      # Main application (single-file SPA)
├── tests/
│   └── server.test.js  # Jest testing suite
├── server.js           # Node.js/Express backend
├── package.json        # Dependencies & test scripts
├── Dockerfile          # Container config for Cloud Run
└── README.md           # This file
```

---

## 🏗️ Architecture

```
User Browser
     │
     ▼
Node.js Express Server
     │
     ├── Serves public/index.html
     │    ├── Timeline UI ──► Stage selector → contextual summaries
     │    ├── Quick Topics ──► Pre-built civic questions
     │    └── Chat Interface ──► Manages conversation history
     │
     └── /api/chat Proxy (Secure Key Management)
              │
              └── Google Gemini API (gemini-1.5-flash)
                       │
                       └── Nonpartisan civic education responses
```

---

## 🗳️ Election Stages Covered

1. **Voter Registration** – Eligibility, deadlines, how to register
2. **Candidate Filing** – Ballot access, filing fees, petition signatures
3. **Primary Election** – Primaries vs caucuses, party selection process
4. **Campaigning** – Fundraising, debates, campaign finance regulations
5. **Election Day** – Polling stations, absentee/mail voting, security
6. **Vote Counting** – Tallying, auditing, recounts, certification
7. **Results & Transition** – Certification, peaceful transfer of power, inauguration

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA `role`, `aria-label`, `aria-live`, `aria-hidden` throughout
- Keyboard navigation on all interactive elements
- Screen-reader-only `<h2>` describing the application
- Minimum 44×44px touch targets on interactive elements
- Color contrast ratios meet WCAG 2.1 AA standards
- Automatic dark mode via `prefers-color-scheme` media query

---

## 🔐 Security

- Environment Variables: API keys can be securely stored via `.env` and processed on the server-side.
- Secure Header Management: Prevents exposure of API keys in network parameters.
- All user inputs are HTML-escaped before DOM insertion.
- Backend routing hides origin API configurations from client inspection.
- No third-party tracking scripts
- HTTPS enforced via Cloud Run

---

## 📊 Evaluation Parameter Coverage

| Parameter | Implementation |
|---|---|
| **Code Quality** | Semantic HTML, modular JS, CSS custom properties, Node.js backend integration |
| **Security** | Express server proxy, `dotenv` configuration, secure header forwarding |
| **Efficiency** | Single-file SPA, backend optimizations, Google Analytics integration |
| **Testing** | Automated Jest testing suite for API endpoints and static delivery (`npm test`) |
| **Accessibility** | ARIA, keyboard nav, dark mode, semantic landmarks |
| **Problem Alignment** | Directly addresses interactive election civic education |
| **Google Services** | Gemini API (AI), Google Analytics (Tracking), Google Cloud Run (Hosting) |

---

## 🧠 AI Prompt Design

The system prompt enforces:
- Nonpartisan, factual civic education
- Plain language accessible to all literacy levels
- HTML-formatted responses (bold key terms, bullet lists)
- Appropriate response length (80–200 words)
- Encouragement of democratic participation

```
"You are a knowledgeable, friendly, and nonpartisan civic education assistant 
specializing in election processes worldwide..."
```

---

## 📝 License

MIT License — free to use and adapt for civic education purposes.

---

## 🙏 Acknowledgements

- Built for **PromptWars Virtual – Challenge 2**
- Powered by **Google Gemini**
- Deployed on **Google Cloud Run**
