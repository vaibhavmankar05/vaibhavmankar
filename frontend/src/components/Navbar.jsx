import React, { useState } from "react";

import { profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header className="nav">
      <div className="shell nav-inner">
        <a className="brand" href="#top">
          Vaibhav <span>Mankar </span>
        </a>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}

          <a
            className="resume-link"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}