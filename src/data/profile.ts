export const profile = {
  name: "Nour Awad",
  role: "Full-Stack Software Engineer",
  githubUser: "nour-awad",
  location: "Cairo, Egypt",
  email: "nour.awad094@gmail.com",
  resume: "/nour-awad-resume.pdf",
  links: {
    github: "https://github.com/nour-awad",
    linkedin: "https://www.linkedin.com/in/nour-wan/",
    whatsapp: "https://wa.me/971565709141",
  },
  formspree: "https://formspree.io/f/mwpekepn",
};

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    org: "Ramses LLC",
    place: "Al-Maadi, Cairo",
    mode: "On site",
    period: "Jul 2026 – present",
    points: [
      "Building features for the mini apps inside a consumer superapp.",
      "Running responsive-design audits to tighten UX across devices.",
      "Working through architecture problems with the wider engineering team.",
    ],
    stack: ["Elixir", "Next.js", "Figma", "Git"],
  },
  {
    role: "Developer Intern",
    org: "WEBenia",
    place: "Zahraa Al-Maadi, Cairo",
    mode: "On site",
    period: "Jun – Jul 2025",
    points: [
      "Shipped front-end features on live client projects under senior guidance.",
      "Fixed cross-browser bugs and improved responsiveness through design audits.",
    ],
    stack: ["React", "Next.js", "Figma", "Git"],
  },
];

export const education = [
  {
    school: "The British University in Egypt",
    degree: "MSc, Web Science (dual degree)",
    place: "Cairo",
    period: "Sep 2026 – present",
  },
  {
    school: "University of Science and Technology at Zewail City",
    degree: "BSc, Computer Science & Artificial Intelligence",
    place: "Giza",
    period: "Oct 2022 – Jun 2026",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "Go", "C / C++", "C#", "Elixir", "SQL"] },
  { group: "Frontend & mobile", items: ["React", "Next.js", "Flutter", "Vite", "HTML & CSS", "Figma"] },
  { group: "Backend", items: ["Node.js", "Express", "Spring Boot", "FastAPI", "ASP.NET Core", "Socket.IO", "Thymeleaf"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "MSSQL", "Redis", "Supabase", "Qdrant"] },
  { group: "Infra & IoT", items: ["Docker", "Kubernetes", "GitHub Actions", "Azure", "Nginx", "MQTT", "CoAP", "Node-RED"] },
  { group: "AI & embedded", items: ["RAG pipelines", "Whisper ASR", "Knowledge graphs", "TensorFlow Lite Micro", "ESP32 / Arduino", "NumPy"] },
];
