import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

import {
  experience,
  profile,
  projects,
  skills,
  workflow,
} from "../data/portfolio";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const visibleProjects = useMemo(() => {
    if (filter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <>
      <Navbar />

      <main id="top">

        {/* ================= HERO ================= */}
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">
              DATA ANALYTICS • BUSINESS INTELLIGENCE • AUTOMATION
            </div>

            <h1>
              Turning <span>data</span> into decisions — and repetitive work
              into <span>automation.</span>
            </h1>

            <p className="lead">
              {profile.summary} My core stack is Power BI, SQL, Python and
              Databricks, with Microsoft Fabric, Azure Data Factory and modern
              AI workflows around it.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                Explore my work
              </a>

              <a
                className="btn secondary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>

            <div className="hero-tags">
              {[
                "Power BI",
                "SQL",
                "Python",
                "Databricks",
                "DAX",
                "Microsoft Fabric",
                "Azure Data Factory",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-top">
              <div>
                <small>ANALYTICS PROFILE</small>
                <strong>Data → Insight → Action</strong>
              </div>

              <i />
            </div>

            <div className="profile-grid">
              <div>
                <b>BI</b>
                <span>Dashboards & semantic thinking</span>
              </div>

              <div>
                <b>SQL</b>
                <span>Analysis & transformation</span>
              </div>

              <div>
                <b>PY</b>
                <span>Automation & extraction</span>
              </div>

              <div>
                <b>FAB</b>
                <span>Modern data platform exposure</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SNAPSHOT ================= */}
        <section className="snapshot shell">
          <div>
            <b>1.5+</b>
            <span>Years experience</span>
          </div>

          <div>
            <b>30+</b>
            <span>Web sources automated</span>
          </div>

          <div>
            <b>BI</b>
            <span>Power BI / SQL focus</span>
          </div>

          <div>
            <b>AI</b>
            <span>Modern analytics exploration</span>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section shell">
          <SectionTitle
            eyebrow="ABOUT"
            title="A practical analytics profile."
            muted="Built around real data work."
          />

          <div className="two-col">
            <div className="prose">

              <p className="certification-highlight">
                <strong>Certified Data Engineer:</strong>{" "}
                Associate Databricks Data Engineer  with a focus on
                modern data engineering, ETL, SQL/Python and the Databricks
                Data Intelligence Platform.
              </p>

              <p>
                I work across business intelligence, data analytics,
                automation and data-processing workflows. I enjoy the part
                between a messy source and a useful business decision:
                understanding the requirement, preparing the data, modeling
                it, visualizing it and automating repetitive steps.
              </p>

              <p>
                My core strengths are Power BI, SQL, Python and Databricks,
                with experience building business dashboards, data automation
                workflows and data engineering solutions. I also work with
                Microsoft Fabric, Azure Data Factory and AI/RAG technologies.
              </p>

            </div>

            <div className="focus-card">
              <span>01</span>

              <div>
                <h3>Business Intelligence</h3>
                <p>
                  Power BI, DAX, Power Query, modeling, reporting and
                  stakeholder-facing insights.
                </p>
              </div>

              <span>02</span>

              <div>
                <h3>Data & Automation</h3>
                <p>
                  SQL, Python, browser automation, structured extraction and
                  data processing.
                </p>
              </div>

              <span>03</span>

              <div>
                <h3>Modern Data</h3>
                <p>
                  Fabric, ADF, Databricks, APIs, FastAPI and AI-assisted
                  analytics applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section band shell-wide">
          <div className="shell">
            <SectionTitle
              eyebrow="SKILLS"
              title="Skills mapped to "
              muted="real job requirements."
            />

            <div className="skill-grid">
              {skills.map((skillGroup) => (
                <div className="skill-card" key={skillGroup.group}>
                  <small>{skillGroup.group}</small>

                  <div>
                    {skillGroup.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section shell">
          <SectionTitle
            eyebrow="EXPERIENCE"
            title="Work that connects "
            muted="data and delivery."
          />

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="dot" />

                <div>
                  <small>{item.period}</small>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section band shell-wide">
          <div className="shell">
            <SectionTitle
              eyebrow="SELECTED WORK"
              title="Proof over buzzwords."
              muted="Explore the projects."
            />

            <div className="filters">
              {categories.map((category) => (
                <button
                  className={filter === category ? "active" : ""}
                  key={category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= WORKFLOW ================= */}
        <section className="section shell">
          <SectionTitle
            eyebrow="HOW I WORK"
            title="From raw data to "
            muted="business insight."
          />

          <div className="workflow">
            {workflow.map(([number, title, description], index) => (
              <div className="workflow-step" key={number}>
                <b>{number}</b>

                <h3>{title}</h3>

                <p>{description}</p>

                {index < workflow.length - 1 && <span>→</span>}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section shell">
          <div className="contact">
            <div>
              <span className="section-kicker">LET'S CONNECT</span>

              <h2>
                Have a data problem <em>worth solving?</em>
              </h2>

              <p>
                If you're hiring for Data Analytics, BI, Power BI, SQL/Python
                automation or analytics engineering work, I'd be happy to
                discuss the problem and the role.
              </p>
            </div>

            <div className="contact-actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                Email me
              </a>

              <a
                className="btn secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                className="btn secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="shell">
          <span>© 2026 Vaibhav Mankar</span>

          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}