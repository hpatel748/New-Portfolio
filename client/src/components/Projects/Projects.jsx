import React, { useEffect, useState } from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Vita",
    description:
      "Nov 2025 – Present · NYC Metropolitan Area. Solely built and shipped a production SaaS platform onboarding 50+ paid users with React (Vite), Flask, Firebase, and GCP. Designed full-stack architecture, Stripe payments, secure auth, protected routes, and AI-powered scheduling (OpenAI + Cal.com). Owned product, UX, and infrastructure end-to-end.",
    tags: ["React", "Flask", "Firebase", "GCP", "Stripe", "OpenAI", "CI/CD"],
    live: "https://vitaprep.org",
  },
  {
    title: "Axiom Trading Platform",
    description:
      "A full-stack algorithmic trading platform built with React, TypeScript, Python, FastAPI, and C++. It combines an interactive trading dashboard, real-time market data, and a high-performance C++ order execution engine, with AI-powered development workflows and planned browser-based QA testing.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "C++",
      "PostgreSQL",
      "Firebase",
      "GitHub Actions",
      "Docker",
      "Gemini API",
      "Playwright",
      "Vitest",
    ],
    live: "https://axiomtrading-78f1b.web.app",
    code: "https://github.com/axiomtrading",
  },
  {
    title: "Streamify",
    description:
      "A full-stack Spotify-style music platform built with Flask, React, and Firebase. Supports playlists, auth, and real-time playback.",
    tags: ["Python", "Flask", "React", "Firebase", "GCP"],
    live: null,
    code: "https://github.com/hpatel748/Spotify",
  },
  {
    title: "Trading Bot",
    description:
      "An intelligent trading bot using Python, Alpaca API, and LSTM-based models for automated stock and options execution.",
    tags: ["Python", "TensorFlow", "Alpaca API"],
    live: null,
    code: "https://github.com/hpatel748/Day-Trading-Bot",
  },
  {
    title: "PrepAI for SAT",
    description:
      "An AI-powered SAT prep platform that generates unlimited CollegeBoard-style questions for personalized and adaptive test practice.",
    tags: ["Python", "Flask", "React", "GCP", "Firebase", "Selenium"],
    live: null,
    code: "https://github.com/hpatel748/PrepAI",
  },
  {
    title: "Revvo — AI-Powered Car Buying Platform",
    description:
      "AI platform that personalizes car recommendations, analyzes real listings, predicts insurance + depreciation, and provides honest LLM-powered insights for used-car buyers.",
    tags: ["React", "TypeScript", "Flask", "OpenAI", "Firebase", "Auto.dev", "Recharts"],
    live: null,
    code: "https://github.com/hpatel748/HackPrincetonF25",
  },
  {
    title: "AI-Powered Chess Game",
    description: "An interactive chess platform supporting both player-vs-player matches and AI-powered gameplay for dynamic, adaptive challenges.",
    tags: ["Python", "Pytorch", "PyGame"],
    live: null,
    code: "https://github.com/hpatel748/projects/",
  },
  {
    title: "AI Poker Application",
    tags: ["Python", "Flask", "React", "PyTorch"],
    description: "A full-stack poker platform featuring an AI-powered bot trained on OpenAI gameplay data for strategic, human-like decision-making.",
    code: "https://github.com/hpatel748/Projects/tree/main/Poker",
    live: null,
  },
  {
    title: "NJ Transit Lost and Found",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    description: "A web-based lost and found system for NJ Transit with Flask, OpenAI API, and a responsive frontend to help passengers easily report and recover lost items.",
    code: 'https://github.com/hpatel748/Projects/tree/main/NJ-Transit-Lost-and-Found',
    live: null,
  },
  {
    title: "AI-Powered Tic-Tac-Toe",
    tags: ["Python", "Scikit-Learn"],
    description: "An intelligent Tic-Tac-Toe game powered by Scikit-Learn, training a model to predict optimal moves and adapt strategies based on real-time board states.",
    code: 'https://github.com/hpatel748/Projects/blob/main/Tic-Tac-Toe',
    live: null,
  },
  {
    title: "Banking Application",
    tags: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    description: "A full-stack banking platform featuring secure user accounts, seamless fund transfers, and a simulated money market for realistic financial interactions.",
    code: 'https://github.com/hpatel748/Projects/tree/main/Bank',
    live: null,
  },
  {
    title: "RULate",
    tags: ["React-Native", "Firebase", "Google Maps API", "Stripe"],
    description: "A mobile Rutgers ride-sharing app designed to connect students and optimize routes for faster, more efficient campus travel.",
    code: 'https://github.com/hpatel748/HackRU',
    live: null,
  }
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = projectData.filter((project) => project.live);
  const otherProjects = projectData.filter((project) => !project.live);

  return (
    <section id="projects" className="projects">
      {featuredProjects.length > 0 && (
        <div className="projects-category">
          <h3 className="projects-category-title">Featured Work</h3>
          <div className={`projects-grid ${visible ? "visible" : ""}`}>
            {featuredProjects.map((project, idx) => (
              <article
                key={project.title}
                className="project-card project-card--featured"
                style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
              >
                <div className="project-preview">
                  <iframe
                    src={project.live}
                    title={`${project.title} live preview`}
                    loading="lazy"
                  />
                  <a
                    className="project-preview-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo in a new tab`}
                  >
                    <span>Open live project ↗</span>
                  </a>
                </div>

                <div className="project-card-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.code && (
                    <div className="buttons">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn secondary"
                      >
                        GitHub
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {otherProjects.length > 0 && (
        <div className="projects-category projects-category--other">
          <h3 className="projects-category-title">Projects</h3>
          <div className={`projects-grid ${visible ? "visible" : ""}`}>
            {otherProjects.map((project, idx) => (
              <article
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}
              >
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.code && (
                  <div className="buttons">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn secondary"
                    >
                      Code
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
