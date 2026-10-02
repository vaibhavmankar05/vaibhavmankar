import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p className="project-summary">
          {project.summary}
        </p>
      </div>

      {project.proof?.length > 0 && (
        <div className="project-proof">
          <div className="project-label">Key Highlights</div>

          <ul>
            {project.proof.map((item, index) => (
              <li key={index}>
                <span className="proof-dot">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.stack?.length > 0 && (
        <div className="project-stack">
          <div className="project-label">Technology</div>

          <div className="stack-list">
            {project.stack.map((tech) => (
              <span className="stack-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.link && (
        <div className="project-action">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View Project ↗
          </a>
        </div>
      )}
    </article>
  );
}