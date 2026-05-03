# LinkedIn Post Draft for PromptWars Virtual Challenge 2

*Copy and paste the text below for your LinkedIn submission. Feel free to adjust the tone to match your personal voice.*

---

🚀 Excited to share my submission for Challenge 2 of the PromptWars Virtual! 

**🎯 The Problem Statement**
The challenge tasked us with creating an assistant that helps users understand the election process, timelines, and steps in an interactive, easy-to-follow way. Civic education can often be dry or confusing, so my goal was to make learning about democracy approachable, engaging, and entirely nonpartisan.

**🧠 My Thought Process & Design**
I wanted to build more than just a standard chatbot. I designed a 7-stage interactive timeline (from Voter Registration to Transition of Power) so users can visualize the entire journey before asking questions. This breaks down complex civic procedures into digestible steps.

**🛠️ Tools & Technologies Used**
- **Google Gemini API (gemini-1.5-flash):** Chosen for its lightning-fast response times and strong reasoning capabilities to act as a conversational, nonpartisan civic guide.
- **Vanilla HTML/CSS/JS:** Kept the frontend lightweight, fast, and dependency-free to ensure maximum accessibility and efficiency.
- **Google Cloud Run & Docker:** Used for seamless, scalable, and secure deployment of the application.
- **Anti-Gravity Ecosystem:** Guided the deployment and iterative prompt testing.

**💬 How My Prompts Evolved**
Initially, my prompt simply asked the AI to "explain elections." However, I quickly realized the AI sometimes leaned too heavily on US-specific examples or used overly academic language. 
I refined the prompt iteratively to enforce strict guidelines:
*Before:* "Explain how elections work."
*After:* "You are a knowledgeable, friendly, and nonpartisan civic education assistant... Keep responses focused: 80–130 words... If asked about a specific country, tailor your answer; otherwise speak generally. Never express political opinions."
This ensured responses were concise, globally applicable, and strictly neutral.

**🤝 Human vs. GenAI Collaboration**
- **What GenAI Handled:** Generating dynamic, context-aware explanations of complex civic topics on the fly, and structuring the raw educational content.
- **What I Designed:** The interactive UI/UX (timeline, quick-topic pills, chat interface), the system architecture, accessibility implementation (ARIA roles, dark mode), and the strict prompt engineering constraints to guarantee neutrality.

Check out the GitHub repo and live Cloud Run deployment below! 👇
🔗 [Insert GitHub Repo Link Here]
🔗 [Insert Cloud Run Link Here]

#GoogleForDevelopers #Hack2Skill #PromptWars #GenAI #CivicTech #WebDevelopment
