/**
 * content.js
 * ----------
 * All text content for the app lives here as exported constants.
 * Keeping content separate from components makes it easy to update
 * the words without touching any UI code.
 *
 * ACCURACY NOTE: No statistics, percentages, quotes, or specific product
 * names are stated as facts. Everything is written in general terms.
 */

// ─── Hero ────────────────────────────────────────────────────────────────────

export const hero = {
  title: "Software Engineering in the Era of AI",
  summary:
    "A plain-language guide for students and developers learning how artificial intelligence is reshaping the craft of building software.",
};

// ─── What is AI? ─────────────────────────────────────────────────────────────

export const aiConcepts = [
  {
    id: "ai",
    term: "Artificial Intelligence (AI)",
    emoji: "🤖",
    definition:
      "AI refers to computer systems that perform tasks we normally associate with human thinking — recognising patterns, making decisions, understanding language, and generating new content. AI is not magic; it is mathematics and data working together at scale.",
  },
  {
    id: "ml",
    term: "Machine Learning (ML)",
    emoji: "📊",
    definition:
      "Machine learning is a branch of AI where a system learns from examples rather than being programmed with explicit rules. By processing large collections of data, an ML model learns to make useful predictions or classifications on new data it has never seen before.",
  },
  {
    id: "llm",
    term: "Large Language Models (LLMs)",
    emoji: "💬",
    definition:
      "A large language model is a type of ML model trained on vast amounts of text. It learns patterns in language well enough to generate coherent sentences, answer questions, translate, and summarise. LLMs are the technology behind AI chat assistants and AI coding tools.",
  },
  {
    id: "agent",
    term: "AI Coding Agents",
    emoji: "⚙️",
    definition:
      "An AI coding agent is a tool that uses an LLM to help write, explain, debug, or modify code. Some agents work inside your code editor as autocomplete tools; others can read your project files, propose changes across multiple files, and run commands — acting more like an automated colleague than a simple suggestion engine.",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const timeline = [
  {
    id: "punch-cards",
    era: "Early Computing",
    icon: "🗂️",
    description:
      "Programmers wrote instructions on physical punch cards. Errors meant reprinting cards. Feedback was slow and machine time was expensive.",
  },
  {
    id: "high-level-languages",
    era: "High-Level Languages",
    icon: "📝",
    description:
      "Languages like FORTRAN, COBOL, C, and later Java let developers write code closer to human language. Compilers translated it to machine instructions, making programming accessible to far more people.",
  },
  {
    id: "open-source-web",
    era: "Open Source & the Web",
    icon: "🌐",
    description:
      "The internet allowed developers everywhere to share code freely. Package managers and open-source libraries meant you no longer had to build everything from scratch — you built on what others had already created.",
  },
  {
    id: "cloud",
    era: "Cloud Computing",
    icon: "☁️",
    description:
      "Cloud platforms let teams deploy applications without buying physical servers. Infrastructure became software you could configure with code, and teams could scale services up or down on demand.",
  },
  {
    id: "ai-assistants",
    era: "AI Assistants",
    icon: "✨",
    description:
      "AI-powered tools now assist at every stage of development — suggesting code as you type, explaining unfamiliar code, spotting bugs, writing tests, and even restructuring entire files. The developer remains in charge, but the pace of work has changed.",
  },
];

// ─── How developers use AI today ─────────────────────────────────────────────

export const aiUses = [
  {
    id: "completion",
    title: "Code Completion",
    icon: "⌨️",
    description:
      "AI tools integrated into code editors predict the next line or block of code as you type, speeding up routine writing.",
  },
  {
    id: "explain",
    title: "Explaining Code",
    icon: "🔍",
    description:
      "Paste unfamiliar code and ask the AI to explain what it does in plain language — useful when reading a large codebase or learning a new language.",
  },
  {
    id: "debug",
    title: "Debugging",
    icon: "🐛",
    description:
      "Describe an error or paste a stack trace and AI can suggest likely causes and fixes, often narrowing down the problem quickly.",
  },
  {
    id: "tests",
    title: "Writing Tests",
    icon: "✅",
    description:
      "AI can generate unit test cases from a function description, covering common edge cases you might not have thought of.",
  },
  {
    id: "docs",
    title: "Documentation",
    icon: "📄",
    description:
      "AI drafts docstrings, README files, and inline comments, reducing the documentation burden developers often skip.",
  },
  {
    id: "agents",
    title: "Multi-file Agents",
    icon: "🗂️",
    description:
      "More advanced AI agents can read your whole project, propose changes across multiple files, and run commands — handling tasks that used to require hours of manual work.",
  },
];

// ─── What changes / What does not ────────────────────────────────────────────

export const shifts = {
  changes: [
    "More time spent reviewing and verifying AI-generated code rather than writing every line from scratch.",
    "Faster prototyping — a rough working version of a feature can appear in minutes, shifting focus to refinement and correctness.",
    "Developers increasingly act as designers and decision-makers, guiding the AI with clear requirements rather than just typing syntax.",
    "Writing clear, precise prompts is now a practical skill alongside writing clear, precise code.",
  ],
  staysTheSame: [
    "Understanding how computers work — data structures, algorithms, memory, and performance — still underpins everything.",
    "Reading and understanding code remains essential; you cannot review output you do not understand.",
    "Debugging, testing, and verifying that software actually does what it should are non-negotiable.",
    "Collaboration, communication, and understanding what users actually need have always mattered and always will.",
  ],
};

// ─── Skills that matter more now ─────────────────────────────────────────────

export const keySkills = [
  { id: "decompose", icon: "🧩", title: "Problem Decomposition", description: "Breaking a large problem into small, well-defined pieces makes it easier to guide AI tools and to verify their output." },
  { id: "reading", icon: "👁️", title: "Reading Code", description: "AI produces a lot of code quickly. The ability to read and understand unfamiliar code is more important than ever." },
  { id: "testing", icon: "🔬", title: "Testing", description: "Automated tests are your safety net when accepting AI-generated changes. If you cannot test it, you cannot trust it." },
  { id: "security", icon: "🔒", title: "Security Awareness", description: "AI-generated code can introduce vulnerabilities. Knowing common security pitfalls helps you spot and reject unsafe suggestions." },
  { id: "communication", icon: "🗣️", title: "Clear Communication", description: "Explaining requirements clearly — to teammates and to AI tools — determines the quality of the result." },
  { id: "prompts", icon: "✍️", title: "Prompt Writing", description: "A well-structured prompt gives AI the context it needs. Learning to write good prompts is a learnable, practical skill." },
];

// ─── Risks and limits ─────────────────────────────────────────────────────────

export const risks = [
  { id: "hallucination", icon: "⚠️", title: "Hallucinated Code and Packages", description: "AI can confidently generate function names, library names, or entire code blocks that do not exist or do not work. Always verify that a package or API actually exists before using it." },
  { id: "security", icon: "🛡️", title: "Security Vulnerabilities", description: "AI-generated code may contain common security flaws — such as SQL injection, exposed secrets, or unsafe input handling — especially if the prompt did not mention security requirements." },
  { id: "over-reliance", icon: "🪤", title: "Over-Reliance", description: "Accepting AI output without understanding it is risky. If something goes wrong in production, you need to be able to reason about the code, not just the prompt that generated it." },
  { id: "licensing", icon: "📜", title: "Licensing Uncertainty", description: "It is not always clear what training data AI models have learned from. Be cautious about using AI-generated code in commercial projects without understanding the licensing implications." },
  { id: "privacy", icon: "🔐", title: "Privacy of Pasted Code", description: "When you paste code into an AI tool, that code may be processed on remote servers. Avoid pasting passwords, API keys, or sensitive business logic into public AI tools." },
];

export const reviewReminder =
  "Always review and test AI-generated output before using it in any real project. AI is a tool — you are the engineer responsible for the result.";

// ─── Opportunities for African developers ────────────────────────────────────

export const opportunities = [
  { id: "learning", icon: "📚", title: "Lower Barriers to Learning", description: "AI tools can explain concepts, answer questions, and provide code examples on demand, making self-directed learning more accessible regardless of location." },
  { id: "local", icon: "🌍", title: "Building for Local Problems", description: "Developers who understand local contexts — mobile money systems, low-bandwidth environments, local languages — are well-placed to build solutions that outside teams often overlook." },
  { id: "speed", icon: "🚀", title: "Faster Prototyping", description: "With AI assistance, a small team or solo developer can build and test a working prototype much faster, lowering the cost of trying new ideas." },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

export const quizQuestions = [
  {
    id: "q1",
    statement: "AI can write perfect, bug-free code that you can ship without reviewing.",
    verdict: "myth",
    explanation:
      "AI-generated code can contain bugs, security issues, and logic errors. It should always be reviewed and tested just like code written by a human.",
  },
  {
    id: "q2",
    statement: "Understanding algorithms and data structures still matters even when you use AI tools.",
    verdict: "reality",
    explanation:
      "Fundamentals help you evaluate whether AI suggestions are correct, efficient, and appropriate. Without them, you cannot reliably judge the output.",
  },
  {
    id: "q3",
    statement: "AI tools make software engineers unnecessary.",
    verdict: "myth",
    explanation:
      "AI tools amplify what developers can do — they do not replace the judgment, creativity, and responsibility that engineers bring. Someone still has to define the problem, verify the solution, and own the outcome.",
  },
  {
    id: "q4",
    statement: "Pasting sensitive passwords or API keys into a public AI chat tool is a security risk.",
    verdict: "reality",
    explanation:
      "Code and text sent to cloud-based AI tools may be stored or processed remotely. Never paste credentials, secrets, or sensitive personal data into a public AI service.",
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footer = {
  built: "Built with Vite + React",
  note: "This content is for educational purposes. No statistics or product claims are made — always verify information from primary sources.",
};
