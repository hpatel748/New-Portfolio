import React, { useEffect, useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    title: "Founding Engineer",
    company: "Vita",
    location: "NYC Metropolitan Area",
    date: "Nov 2025 – Present",
    description:
      "Solely built and shipped a production SaaS platform onboarding 50+ paid users with React (Vite), Flask, Firebase, and GCP. Designed full-stack architecture, Stripe payments, secure auth, protected routes, and AI-powered scheduling (OpenAI + Cal.com). Owned product, UX, and infra end-to-end.",
    tags: ["React", "Flask", "Firebase", "GCP", "Stripe", "OpenAI", "CI/CD"],
    link: "https://vitaprep.org",
  },
  {
    title: "Full Stack Developer",
    company: "NobleMart",
    location: "Keyport, NJ",
    date: "May 2025 – Present",
    description:
      "Developing and scaling a revenue-generating e-commerce platform for 500+ fragrance products using React + Flask + AWS DynamoDB. Engineered responsive frontend with real-time analytics (20% sales increase), cut infra costs 40%, and achieved 99% uptime via CloudWatch + GitHub Actions pipelines.",
    tags: ["React", "Flask", "AWS", "DynamoDB", "CI/CD", "Analytics"],
    link: "http://noblemart.s3-website-us-east-1.amazonaws.com/",
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>

      <div className={`timeline ${visible ? "visible" : ""}`}>
        {experienceData.map((exp, idx) => (
          <div
            key={exp.title + idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
            style={{ animationDelay: `${idx * 0.25 + 0.4}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-dot"></div>

              <span className="date">{exp.date}</span>
              <h3>{exp.title}</h3>

              <h4 className="company">
                {exp.company} • {exp.location}
              </h4>

              <p>{exp.description}</p>

              <div className="tags">
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* Optional link button */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
