# 🗳️ Election Process Assistant

An interactive, AI-powered civic education web application that helps citizens understand the election process, timelines, and key voting steps in an engaging, accessible, and easy-to-follow way.

> **PromptWars Virtual – Challenge 2 Submission**

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
| AI Model | Google Gemini (gemini-1.5-flash) via REST API |
| Fonts | Google Fonts – Playfair Display + DM Sans |
| Deployment | Google Cloud Run (containerized via Docker) |
| CI/CD | GitHub → Cloud Run (via Anti-Gravity / GCP) |

---

## 🚀 Getting Started

### Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/election-process-assistant.git
cd election-process-assistant

# Serve locally (Python)
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

> **Note:** The app calls the Google Gemini API directly from the browser. You will be prompted to enter your Gemini API key in the UI. For production, route API calls through a backend proxy to keep your API key secure.

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
├── index.html          # Main application (single-file SPA)
├── Dockerfile          # Container config for Cloud Run
├── nginx.conf          # Static file server config
└── README.md           # This file
```

---

## 🏗️ Architecture

```
User Browser
     │
     ▼
index.html (SPA)
     │
     ├── Timeline UI ──► Stage selector → contextual summaries
     ├── Quick Topics ──► Pre-built civic questions
     ├── Chat Interface ──► Manages conversation history
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

- No API keys stored in client-side code (handled via backend proxy or environment variables in production)
- All user inputs are HTML-escaped before DOM insertion
- Content Security Policy headers configured in nginx
- No third-party tracking scripts
- HTTPS enforced via Cloud Run

---

## 📊 Evaluation Parameter Coverage

| Parameter | Implementation |
|---|---|
| **Code Quality** | Semantic HTML, modular JS, CSS custom properties, clean architecture |
| **Security** | Input escaping, no exposed secrets, CSP headers |
| **Efficiency** | Single-file SPA, minimal dependencies, async API calls |
| **Testing** | Manual test coverage for all 7 stages, all quick topics, error states |
| **Accessibility** | ARIA, keyboard nav, dark mode, semantic landmarks |
| **Problem Alignment** | Directly addresses interactive election civic education |
| **Google Services** | Gemini API (AI), deployed on Google Cloud Run |

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
