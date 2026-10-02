import React from "react";

export default function SectionTitle({ eyebrow, title, muted }) {
  return (
    <div className="section-title">
      <span className="section-kicker">{eyebrow}</span>
      <h2>
        {title}
        {muted && <em>{muted}</em>}
      </h2>
    </div>
  );
}