export type Cover = "lingua" | "whatsapp" | "rag" | "techhub" | "tinyml" | "drone";

export type Project = {
  /** "owner/name" on GitHub; nour-awad repos also get live stars / push dates at build time. */
  repo?: string;
  title: string;
  tagline: string;
  context: string;
  year?: string;
  summary: string;
  highlights?: string[];
  stack: string[];
  links: { label: string; href: string }[];
  cover?: Cover;
};

const gh = (repo: string) => `https://github.com/${repo}`;

export const featured: Project[] = [
  {
    title: "LinguaAI",
    tagline: "A language tutor that listens to how you speak",
    context: "AI language-learning app",
    summary:
      "A mobile language-learning app that grades your pronunciation and builds lessons around your mistakes — combining speech recognition, OCR, vector search and LLM feedback to generate explanations and exercises in context.",
    highlights: [
      "Spoken conversations with an AI tutor across real-life scenarios",
      "Pronunciation assessment powered by Whisper ASR",
      "LLM-generated explanations and exercises, grounded with vector search",
      "Personal vocabulary, spaced-repetition flashcards and gamification",
      "Covered by integration and regression test suites",
    ],
    stack: ["Flutter", "FastAPI", "Supabase", "Whisper", "LLMs", "Vector search"],
    links: [],
    cover: "lingua",
  },
  {
    repo: "Karim-Ashraf1/WhatsApp-Clone",
    title: "WhatsApp Clone",
    tagline: "Real-time messaging on a microservice backend",
    context: "Team project",
    year: "2025",
    summary:
      "A messaging platform split into an API gateway plus user, message and video-compression services behind a React client — with group chat, delivery and read status, and end-to-end encryption.",
    highlights: [
      "Built the Socket.IO real-time layer and Redis-backed rate limiting",
      "Sub-300 ms message delivery, checked with Go-based concurrency tests",
      "Set up Jest for the backend services and refactored message sending",
      "Contributed to the React frontend",
    ],
    stack: ["Node.js", "React", "TypeScript", "Socket.IO", "Redis", "MongoDB", "Go", "Docker"],
    links: [{ label: "Team repository", href: gh("Karim-Ashraf1/WhatsApp-Clone") }],
    cover: "whatsapp",
  },
  {
    repo: "MohanedAtef238/SW403-RAG-System",
    title: "GraphRAG vs. RAG for Code QA",
    tagline: "Does understanding code structure make retrieval smarter?",
    context: "Research · SW403",
    year: "2025",
    summary:
      "A head-to-head study of retrieval strategies for answering questions about codebases: plain text chunking against AST-aware, graph-structured retrieval — each running as its own service over an isolated Qdrant collection.",
    highlights: [
      "AST-based entity extraction feeding a code knowledge graph",
      "Baseline regex chunking vs. semantic AST chunking, served side by side",
      "Compared reasoning, dependency resolution and comprehension of complex code",
    ],
    stack: ["Python", "AST analysis", "Knowledge graphs", "LLMs", "Qdrant", "Docker"],
    links: [{ label: "Team repository", href: gh("MohanedAtef238/SW403-RAG-System") }],
    cover: "rag",
  },
  {
    repo: "nour-awad/tech-hub",
    title: "TechHub",
    tagline: "Full-stack storefront for an online electronics shop",
    context: "Team project",
    year: "2023 – 24",
    summary:
      "An e-commerce web app where customers browse laptops, phones, cameras and accessories, check out and track orders — with admin tooling for inventory and orders behind it.",
    highlights: [
      "ASP.NET Core Razor Pages over Microsoft SQL Server",
      "Cut page load time by 45% with optimised queries and asset minification",
      "Dockerised, with GitHub Actions deploying to Azure Web Apps",
      "Shipped with SRS, SDS and static-analysis documentation",
    ],
    stack: ["C#", "ASP.NET Core", "MSSQL", "Docker", "GitHub Actions", "Azure"],
    links: [{ label: "Repository", href: gh("nour-awad/tech-hub") }],
    cover: "techhub",
  },
  {
    repo: "nour-awad/TinyML-Cosine-Wave-Predictor",
    title: "TinyML on an ESP32",
    tagline: "A neural network small enough to live on a microcontroller",
    context: "IoT Applications · SWAPD 453",
    year: "2026",
    summary:
      "An end-to-end TinyML pipeline: train a small network to approximate cos(x), quantise it to 8-bit integers, compile it into a C array and run inference on an ESP32 — streaming predicted vs. actual values to the serial plotter.",
    highlights: [
      "Full-integer int8 model in 2,736 bytes",
      "Quantised MAE of 0.0874 vs. 0.0862 for the float model",
      "Runs in a ~1–3 KB tensor arena with TensorFlow Lite Micro",
    ],
    stack: ["Python", "TensorFlow", "TFLite Micro", "C++", "ESP32"],
    links: [{ label: "Repository", href: gh("nour-awad/TinyML-Cosine-Wave-Predictor") }],
    cover: "tinyml",
  },
  {
    repo: "nour-awad/Delivery-Drone-Navigation",
    title: "Delivery Drone Navigation",
    tagline: "Nine search algorithms racing across the same grid",
    context: "Search & optimisation",
    year: "2024",
    summary:
      "A drone has to reach a random goal on a 40 × 40 grid with obstacles and weighted terrain. I implemented nine strategies against the same problem and benchmarked path quality, time and peak memory.",
    highlights: [
      "BFS, DFS, iterative deepening and uniform-cost search",
      "Greedy best-first and A* with a custom heuristic",
      "Hill climbing, simulated annealing and a genetic algorithm",
    ],
    stack: ["Python", "NumPy", "Matplotlib", "Jupyter"],
    links: [{ label: "Repository", href: gh("nour-awad/Delivery-Drone-Navigation") }],
    cover: "drone",
  },
];

export const more: Project[] = [
  {
    repo: "mariamsamaha/campus-pulse",
    title: "CampusPulse",
    tagline: "A smart-campus IoT simulation engine",
    context: "Team project",
    year: "2026",
    summary:
      "High-concurrency simulation of a smart campus driven by real-time telemetry. I built the MQTT QoS-2 and CoAP reliability layer, floor-level telemetry aggregation, multi-floor Node-RED infrastructure and ThingsBoard automation.",
    stack: ["MQTT", "CoAP", "Node-RED", "ThingsBoard"],
    links: [{ label: "Repository", href: gh("mariamsamaha/campus-pulse") }],
  },
  {
    repo: "nour-awad/Library-Management-System",
    title: "Libra",
    tagline: "Library management, from UML to Spring Boot",
    context: "OOAD · with Leila Gamal",
    year: "2024",
    summary:
      "Book tracking, user roles and transactions behind a central admin dashboard — designed through use cases, sequence diagrams, UML and OCL constraints, then built as a full-stack Spring Boot app.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "H2"],
    links: [{ label: "Repository", href: gh("nour-awad/Library-Management-System") }],
  },
  {
    repo: "ZeyadWaleed7/Spotify-Clone",
    title: "Spotify Clone",
    tagline: "Music streaming with an admin console",
    context: "Team project",
    year: "2025",
    summary:
      "A full-stack streaming app with album browsing and playback. I built the admin pages for managing songs and albums, plus comments and likes.",
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    links: [{ label: "Repository", href: gh("ZeyadWaleed7/Spotify-Clone") }],
  },
  {
    repo: "nour-awad/Trivolio",
    title: "Trivolio",
    tagline: "Trivia with leaderboards and quiz playlists",
    context: "Personal project",
    year: "2024",
    summary:
      "Randomised multiple-choice rounds with instant feedback, a live score tracker, a re-ranking leaderboard and personalised quiz playlists.",
    stack: ["React", "Vite", "Recharts"],
    links: [{ label: "Repository", href: gh("nour-awad/Trivolio") }],
  },
  {
    repo: "nour-awad/SWAPD-352",
    title: "E-Library REST API",
    tagline: "CRUD API that runs in-memory or on MongoDB",
    context: "SWAPD 352",
    year: "2025",
    summary: "A RESTful book service whose endpoints run against an in-memory store or MongoDB, so it can be tried with zero setup.",
    stack: ["Node.js", "Express", "MongoDB"],
    links: [{ label: "Repository", href: gh("nour-awad/SWAPD-352") }],
  },
  {
    repo: "nour-awad/MATH-307",
    title: "Numerical Methods",
    tagline: "Linear systems, root finding and curve fitting",
    context: "MATH 307",
    year: "2025",
    summary: "Notebooks implementing tridiagonal solvers, LU decomposition, root-finding and curve fitting, with convergence and error analysis.",
    stack: ["Python", "NumPy", "SciPy"],
    links: [{ label: "Repository", href: gh("nour-awad/MATH-307") }],
  },
];

export type Contribution = { repo: string; href: string; work: string; stack: string; badge?: string };

export const openSource: Contribution[] = [
  {
    repo: "iluwatar/30-seconds-of-java",
    href: "https://github.com/iluwatar/30-seconds-of-java/pull/240",
    work: "Added the Damm check-digit algorithm to the algorithms package.",
    stack: "Java 17",
    badge: "Merged PR #240",
  },
];

export const teamWork: Contribution[] = [
  {
    repo: "mariamsamaha/maintenance-project",
    href: "https://github.com/mariamsamaha/maintenance-project/pulls?q=author%3Anour-awad",
    work: "FlaskBB maintenance: fixed 404s when SERVER_NAME is set, upgraded greenlet for Python 3.11, added failed-login logging.",
    stack: "Python · Flask",
  },
  {
    repo: "sharara6/FFT-Compression",
    href: "https://github.com/sharara6/FFT-Compression",
    work: "Wrote the FFT compression engine and the PSNR / SSIM / compression-ratio metrics.",
    stack: "Python · NumPy · OpenCV",
  },
  {
    repo: "MME517/Axiom",
    href: "https://github.com/MME517/Axiom",
    work: "Contributed to WorkHub, a multi-tenant project-management API.",
    stack: "Spring Boot 3 · PostgreSQL · RabbitMQ",
  },
  {
    repo: "mariamsamaha/nexus",
    href: "https://github.com/mariamsamaha/nexus/pull/1",
    work: "Image conversion tooling for a parallel and distributed edge-detection system.",
    stack: "Python · C",
  },
  {
    repo: "nour-awad/web-scaling-demo",
    href: "https://github.com/nour-awad/web-scaling-demo",
    work: "Dynamic port assignment for replicated app containers behind the Nginx load balancer.",
    stack: "Docker · Nginx · Redis",
  },
  {
    repo: "nour-awad/node-auth-asgmt",
    href: "https://github.com/nour-awad/node-auth-asgmt",
    work: "JWT and password-hashing utilities wired into the server's auth flow.",
    stack: "Node.js · JWT · bcrypt",
  },
];

/** Own repos that never appear in the auto-generated "also on GitHub" list. */
export const hiddenRepos = new Set(["CODXO", "portfolio", "nour-awad"]);
